const app = Vue.createApp({
    data() {
        return {
            category: 'temperature',
            clickedCategory: {
                tempActive: true,
                weightActive: false,
                volActive: false,
                lengthActive: false,
            },

            categoryColor: 'rgb(162, 43, 127)',
            inputAmount: 0,
            outputAmount: 0,
            inputUnit: 'degrees c',
            outputUnit: 'degrees f',
            // equal temp in c and f
            temperature: {
                'degrees c': 0,
                'degrees f': 32
            },
            // amount in meters(1 foot is 0.3048 meters)
            length: {
                'feet': 0.3048,
                'miles': 1609.34,
                'meters': 1,
                'kilometers': 1000,
                'yards': 0.9144,
                'inches': 0.0254,
                'centimeters': 0.01,
            },
            // amount in pounds
            weight: {
                'grams': 0.00220462,
                'ounces': 0.0625,
                'pounds': 1,
                'kilograms': 2.20462,
            },
            // amount in cups
            volume: {
                'teaspoons': 0.0208333,
                'tablespoons': 0.0625,
                'cups': 1,
                'pints': 2,
                'quarts': 4,
                'gallons': 16,
                'milliliters': 0.00422675,
                'liters': 4.22675,
                'US fluid ounces': 0.125,
                'Imperial fluid ounces': 0.120095,
            },

        }},
        methods: {
            clickedValues() {
                this.clickedCategory.tempActive = !this.clickedCategory.tempActive
                this.clickedCategory.weightActive = !this.clickedCategory.weightActive
                this.clickedCategory.volActive = !this.clickedCategory.volActive
                this.clickedCategory.lengthActive = !this.clickedCategory.lengthActive

                if (this.category === 'weight') {
                    this.clickedCategory.tempActive = false
                    this.clickedCategory.weightActive = true
                    this.clickedCategory.volActive = false
                    this.clickedCategory.lengthActive = false

                    this.inputUnit = 'pounds'
                    this.outputUnit = 'grams'
                } else if (this.category === 'length') {

                    this.clickedCategory.tempActive = false
                    this.clickedCategory.weightActive = false
                    this.clickedCategory.volActive = false
                    this.clickedCategory.lengthActive = true

                    this.inputUnit = 'feet'
                    this.outputUnit = 'centimeters'

                } else if (this.category === 'volume') {

                    this.clickedCategory.tempActive = false
                    this.clickedCategory.weightActive = false
                    this.clickedCategory.volActive = true
                    this.clickedCategory.lengthActive = false

                    this.inputUnit = 'cups'
                    this.outputUnit = 'Imperial fluid ounces'
                } else {

                    this.clickedCategory.tempActive = true
                    this.clickedCategory.weightActive = false
                    this.clickedCategory.volActive = false
                    this.clickedCategory.lengthActive = false

                    this.inputUnit = 'degrees c'
                    this.outputUnit = 'degrees f'
                }
            },
            // tempConversion() {
            //     // convert to F
            //     if (this.inputUnit === 'degrees c') {
            //         this.outputAmount = (this.inputAmount * (9/5) + 32)
            //     } else {
            //         // convert to C
            //         this.outputAmount = (this.inputAmount - 32) * (5/9)
            //     }
            //     console.log('output', this.outputAmount)
            // },
            // lwvConversion() {
            //     console.log("clicked!")
            //     if (this.category === 'weight') {
            //         let startingAmount = this.inputAmount * this.weight[this.inputUnit]
            //         this.outputAmount = startingAmount/this.weight[this.outputUnit]
            //     } else if (this.category === 'length') {
            //         let startingAmount = this.inputAmount * this.length[this.inputUnit]
            //         this.outputAmount = startingAmount/this.length[this.outputUnit]
            //     } else if (this.category === 'volume') {
            //         let startingAmount = this.inputAmount * this.volume[this.inputUnit]
            //         this.outputAmount = startingAmount/this.volume[this.outputUnit] 
            //     } else {
            //         if (this.inputUnit === 'degrees c') {
            //             // convert to F
            //             this.outputAmount = (this.inputAmount * (9/5) + 32)
            //         } else {
            //             // convert to C
            //             this.outputAmount = (this.inputAmount - 32) * (5/9)
            //         }
            //     }
            //     // this is the streamline way to do this, i need to figure it out
            //     // let startingAmount = this.inputAmount * this.category[this.inputUnit]
            //     // this.outputAmount = startingAmount/this.category[this.outputUnit]
            // },

        },
        created: function() {
            // this.test()
        },
        computed: {
            // automatic conversion
            converted: function(){
                if (this.inputUnit === this.outputUnit) {
                    return this.inputAmount
                } else if (this.category === 'weight') {
                    let startingAmount = this.inputAmount * this.weight[this.inputUnit]
                    return Math.round((startingAmount/this.weight[this.outputUnit])* 100)/100
                } else if (this.category === 'length') {

                    let startingAmount = this.inputAmount * this.length[this.inputUnit]
                    return Math.round((startingAmount/this.length[this.outputUnit]) * 100)/100
                } else if (this.category === 'volume') {
                    let startingAmount = this.inputAmount * this.volume[this.inputUnit]
                    return Math.round((startingAmount/this.volume[this.outputUnit])*100)/100 
                } else {
                    if (this.inputUnit === 'degrees c') {
                        // convert to F
                        return Math.round((this.inputAmount * (9/5) + 32)*100)/100
                    } else {
                        // convert to C
                        return Math.round(((this.inputAmount - 32) * (5/9))*100)/100
                    }
                }

            }
        }
        // add functions to computed section?

})

app.mount('#app')