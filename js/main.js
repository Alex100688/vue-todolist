"use strict";
const { createApp } = Vue

  createApp({
        data() {
            return {
                newList:"",
                todoList:[
                    {
                        text:"Pane",
                        done:true,
                    },
                    {
                        text:"Latte",
                        done:false,
                    },
                    {
                        text:"Biscotti",
                        done:true,
                    },
                ],
            }
            
        },
        methods:{
            addList(){
                 const writeList={
                    text: this.newList,
                    done:true
                 }
                 this.todoList.push(writeList),
                 this.newList="";  
            },
            removeList(i){
                this.todoList.splice(i, 1);
            }
        }
    }).mount('#app')





