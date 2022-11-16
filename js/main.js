"use strict";
const { createApp } = Vue

  createApp({
    data() {
        return {
            newList:'',
            todoList:[
                {
                    "list":{
                        "text":"pane",
                        "done":true,
                    }
                },
                {
                    "list":{
                        "text":"pasta",
                        "done":true,
                    }
                },
                {
                    "list":{
                        "text":"detersivo piatti",
                        "done":true,
                    }
                },
            ],
        }
            
    },
        methods:{
            addList(){
                this.todoList.push(this.newList);
                console.log(this.todoList)
            },
        }
  }).mount('#app')





