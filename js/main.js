"use strict";
createApp({
    data() {
      return {
        todoList:[
            {
                list:{
                    title: `pane`,
                    text: `bisogna assolutamente fare la spesa`,
                    done:true,
                },
                list:{
                    title: `pasta`,
                    text: `bisogna assolutamente fare la spesa`,
                    done:true,
                },
                list:{
                    title: `detersivo piatti`,
                    text: `bisogna assolutamente fare la spesa`,
                    done:true,
                },
            }
        ]
      }
    }
  }).mount('#app')