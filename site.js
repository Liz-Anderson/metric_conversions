const app = Vue.createApp({
    data() {
        return {
            category: 'poop',
            inputAmount: 0,
            outputAmount: 0,
            inputUnit: '',
            outputUnit: '',
            length: {
                ft: 0.3048,
                mi: 1609.34,
                'm': 1,
                'km': 1000,
                'yd': 0.9144,
                'in': 0.0254,
                'cm': 0.01,
                keys: ['ft', 'mi', 'm', 'km', 'yd', 'in', 'cm']
            },
                
            
            weight: {
                gram: 0.00220462,
                'ounce': 0.0625,
                'pound': 1,
                'kilogram': 2.20462,
                keys: ['gram', 'ounce', 'pound', 'kilogram']
            },

            volume: {
                'tsp': 0,
                'Tbsp': 0,
                'cup': 0,
                'pint': 0,
                'quart': 0,
                'gallon': 0,
                'ml': 0,
                'fluid ounce': 0,
                keys: ['tsp', 'Tbsp', 'cup', 'pint', 'quart', 'gallon', 'ml', 'fluid ounce']
            },
                
                    
            // change the way this data is organized
            // measurementChoice: [
            //         {length: {
            //             ft: 0.3048,
            //             mi: 1609.34,
            //             'm': 1,
            //             'km': 1000,
            //             'yd': 0.9144,
            //             'in': 0.0254,
            //             'cm': 0.01
            //             },
            //             keys: ['ft', 'mi', 'm', 'km', 'yd', 'in', 'cm']
            //         },
            //         {weight: {
            //             gram: 0.00220462,
            //             'ounce': 0.0625,
            //             'pound': 1,
            //             'kilogram': 2.20462
            //             },
            //             keys: ['gram', 'ounce', 'pound', 'kilogram']
            //         },
            //         // figure out units for volume
            //         {volume: {
            //             'tsp': 0,
            //             'Tbsp': 0,
            //             'cup': 0,
            //             'pint': 0,
            //             'quart': 0,
            //             'gallon': 0,
            //             'ml': 0,
            //             'fluid ounce': 0
            //             },
            //             keys: ['tsp', 'Tbsp', 'cup', 'pint', 'quart', 'gallon', 'ml', 'fluid ounce']
            //         }
            // ]

        }},
        methods: {
            // create temperature function
            tempConversion() {

            },
            lwvConversion() {
                let startingAmount = this.inputAmount * this.category[this.inputUnit]
                this.outputAmount = startingAmount/this.category[this.outputUnit]
            },
            test() {
                console.log('1', this.category)
                // for (item of this.measurementChoice) {
                    
                //     if (Object.keys(item) === 'weight') {
                //         console.log('poop')
                //         console.log('2', Object.keys(item))
                //     }
                //     console.log('2.5', item)
                    
                // }
                // console.log('3', JSON.parse(JSON.stringify(this.measurementChoice)))
                console.log('4', Object.keys(`${this.category}`))
            }
        },
        created: function() {
            this.test()
        }
        // add functions to computed section?

})

app.mount('#app')