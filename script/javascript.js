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
                if (this.inputVar != '') {
                    this.listaTodo.push({text:this.inputVar,done:false});
                }
            },

            deleteElement: function(index) {
                this.listaTodo.splice(index,1);
            },

            cambiaStat: function(element) {
                if (this.listaTodo[element].done == false) {
                    this.listaTodo[element].done = true;
                }
                else {
                    this.listaTodo[element].done = false;

                }
            }

        },
    }


)