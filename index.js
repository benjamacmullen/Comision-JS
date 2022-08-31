
let nombre = prompt ("ingrese su nombre")
Bienvenido ();

function Bienvenido() { alert( "Bienvenido" + " " + nombre + " " + "No sabes a donde puedes viajar con tus millas? pues dejanos ayudarte!") 
}

let bandera = true;

while(bandera){
    
    let millas = prompt("ingrese sus millas");
    
        
    
    if (millas >= 60000) {
        alert("Europa");
        bandera = false;
    } else if (millas >= 30000) {
        alert("America del Norte");
        bandera = false;
    } else if (millas >= 15000) {
        alert("America del Sur");
        bandera = false;
    } else {
        alert("No dispone de suficientes millas");
    } 
    
      }
    



