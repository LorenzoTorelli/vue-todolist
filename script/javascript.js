const app = new Vue (
    {
        el: "#root",
        data: {
            listaTodo: [ 
                {
                text:  "Fare la spesa",
                done: false,
                },
                {
                text:  "Andare dal meccanico",
                done: false,
                },
                {
                text:  "Comprare il pane",
                done: false,
                },
            ],
            inputVar: '',
        },
        methods: 
        {
            addElement: function() {
                console.log(this.inputVar)
            }

        },
    }


)