   class Interfaz {
        constructor(){
            this.init();

        }  

     init(){
           this.construirSelect();
              



     }   
      
     construirSelect(){
         cotizador.obtenerMonedasAPI()
         .then(monedas => {
            //crear selec de opciones
            const select = document.querySelector('#criptomoneda');
             //iterar por resultados de la api
            for(const [Key, value] of Object.entries(monedas.monedas.Data)  ){
                //añadir el Simbol y Nombre como opciones 
                const opcion = document.createElement('option');
                opcion.value = value.Symbol;
                opcion.appendChild(document.createTextNode(value.CoinName));
                select.appendChild(opcion);
            }   
         })

     } 




     mostraMensaje(mensaje , clases){
         
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        console.log(div.textContent);
        
        //seleccionar mensaje 
             const divMensaje = document.querySelector('.mensajes');
             
             divMensaje.appendChild(div);
             
             setTimeout(() => {
                
             document.querySelector('.mensajes div').remove();

            },3000)   
        //mostrar contenido
     }


     //imprime el resultado de lacotizacion

     mostrarResultado(resultado , moneda , crypto){
        //console.log(resultado[crypto][moneda]);
        const datoMoneda = resultado[crypto][moneda];
       
       
        let precio = datoMoneda.PRICE.toFixed(2),
        porcentaje = datoMoneda.CHANGEPCTDAY.toFixed(2),
        actualizando = new Date(datoMoneda.LASTUPDATE * 1000).toLocaleDateString('es-CO');
        //construir template

        let templateHTML =`
                 <div class ='card bg-warning'>
                            <div class= 'card-title'>
                               <h2 class="card-title">Resultado:</h2>
                                <p>El precio ${datoMoneda.FROMSYMBOL} a moneda ${datoMoneda.TOSYMBOL} es de<br>
                                :${precio}</p><br>
                                <p>Variacion ultimo dia :% ${porcentaje}</p>
                                <p> Ultima actualizacion dia :${actualizando}</p>
                            </div>
                 </div>
            `;

        //insertar resultado
        this.mostrarOcultarSpinner('block');

        setTimeout( () =>{document.querySelector('#resultado').innerHTML =`${templateHTML}`;
    
        this.mostrarOcultarSpinner('none');
    
    },3000);

        
     }


    mostrarOcultarSpinner(vista){


        const spinner = document.querySelector('.contenido-spinner');
         
        spinner.style.display = vista ;

    }

    

   }