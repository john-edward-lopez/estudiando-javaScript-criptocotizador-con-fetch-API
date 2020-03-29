const cotizador = new API('0f76a250ddb6130a03d89a2528b6dc96102211ab8ff37a5e5e498e90c99f1dcf');

const ui = new Interfaz();

cotizador.obtenerMonedasAPI();
//leer el formulario
const  formulario  = document.querySelector('#formulario');

//eventListener
formulario.addEventListener('submit' , (e) =>{
e.preventDefault();
//leer la moneda seleccionada
const monedaSelect = document.querySelector('#moneda');
const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

   //leer la cryptomoneda seleccionada
   const criptoMonedaSelect = document.querySelector('#criptomoneda');
   const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
     
       
     //comprobar  que ambos campos tengan algo Seleccionado
     console.log(monedaSeleccionada);
        console.log(criptoMonedaSeleccionada);  

     if( monedaSeleccionada === "" || criptoMonedaSeleccionada === ''){
        ui.mostraMensaje('Ambos Campos son Obligatorios', 'alert bg-danger text-center');
        
     
     }else{
        //todo bien consultar api
         cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
             .then(data =>{
                  ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptoMonedaSeleccionada   );
             })
     }
        
     
})