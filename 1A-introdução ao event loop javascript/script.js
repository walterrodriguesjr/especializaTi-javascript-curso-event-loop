//1-teoria
    //CONCEITOS DA AULA 
        //promisses = certeza que teria um tipo de resposta, sendo um erro ou não 

//1A-introdução ao event loop javascript 
    //CONCEITOS DA AULA 
        //simulando chamada de funções de forma assíncrona (usando setTimeout)
        

//2A-exemplo assíncrono no javascript
            //CONCEITOS DA AULA 
                //

                
        const start = () => {
        console.log("start");

        second();

        console.log("end");
    };

    const second = () => {
        setTimeout(() => {
           console.log("second"); 
        }, 2000)
    }

   