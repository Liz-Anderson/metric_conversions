const app = Vue.createApp({
    data() {
        return {
            category: 'temperature',
            inputAmount: 0,
            outputAmount: 0,
            inputUnit: '',
            outputUnit: '',
            length: {
                'feet': 0.3048,
                'mi': 1609.34,
                'm': 1,
                'km': 1000,
                'yd': 0.9144,
                'in': 0.0254
            },
            weight: {
                'grams': 0,
                'ounce': 0,
                'pounds': 0,
                'kilograms': 0
            },
            // figure out units for volume
            volume: {

            }

        }},
        methods: {
            // create temperature function
            tempConversion() {

            },
            lwvConversion() {
                let startingAmount = this.inputAmount * this.category[this.inputUnit]
                this.outputAmount = startingAmount/this.category[this.outputUnit]
            }
        },

        // add functions to computed section?

})

app.mount('#app')