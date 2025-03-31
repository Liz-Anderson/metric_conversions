const app = Vue.createApp({
    data() {
        return {
            category: 'length',
            inputAmount: 0,
            outputAmount: 0,
            inputUnit: '',
            outputUnit: '',
            temperature: {
                C: 0,
                F: 32
            },
            length: {
                ft: 0.3048,
                mi: 1609.34,
                'm': 1,
                'km': 1000,
                'yd': 0.9144,
                'in': 0.0254,
                'cm': 0.01,
            },
            weight: {
                gram: 0.00220462,
                'ounce': 0.0625,
                'pound': 1,
                'kilogram': 2.20462,
            },
            volume: {
                'tsp': 0.0208333,
                'Tbsp': 0.0625,
                'cup': 1,
                'pint': 2,
                'quart': 4,
                'gallon': 16,
                'ml': 0.00422675,
                'liter': 4.22675,
                'US fluid ounce': 0.125,
                'Imperial fluid ounce': 0.120095,
            },

        }},
        methods: {
            // create temperature function
            tempConversion() {
                // convert to F
                if (this.inputUnit === 'C') {
                    this.outputAmount = (this.inputAmount * (9/5) + 32)
                } else {
                    // convert to C
                    this.outputAmount = (this.inputAmount - 32) * (5/9)
                }
                console.log('output', this.outputAmount)
            },
            lwvConversion() {
                if (this.category === 'weight') {
                    this.inputUnit = 'pound'
                    this.outputUnit = 'gram'
                    let startingAmount = this.inputAmount * this.weight[this.inputUnit]
                    this.outputAmount = startingAmount/this.weight[this.outputUnit]
                } else if (this.category === 'length') {
                    this.inputUnit = 'ft'
                    this.outputUnit = 'cm'
                    let startingAmount = this.inputAmount * this.length[this.inputUnit]
                    this.outputAmount = startingAmount/this.length[this.outputUnit]
                } else if (this.category === 'volume') {
                    this.inputUnit = 'cup'
                    this.outputUnit = 'Imperial fluid ounce'
                    let startingAmount = this.inputAmount * this.volume[this.inputUnit]
                    this.outputAmount = startingAmount/this.volume[this.outputUnit] 
                } else {
                    this.inputUnit = 'C'
                    this.outputUnit = 'F'
                    if (this.inputUnit === 'C') {
                        this.outputAmount = (this.inputAmount * (9/5) + 32)
                    } else {
                        // convert to C
                        this.outputAmount = (this.inputAmount - 32) * (5/9)
                    }
                }
                // this is the streamline way to do this, i need to figure it out
                // let startingAmount = this.inputAmount * this.category[this.inputUnit]
                // this.outputAmount = startingAmount/this.category[this.outputUnit]
            },
            test() {
                let startingAmount = `4 * ${this.category}['cup']`
                console.log(startingAmount)
                this.outputAmount = `${startingAmount}/${this.category}['gallon']`
                alert(this.outputAmount)
                console.log('output', this.outputAmount)



                console.log('1', this.category)
       
                console.log('4', Object.keys(`${this.category}`))
            }
        },
        created: function() {
            this.test()
        }
        // add functions to computed section?

})

app.mount('#app')