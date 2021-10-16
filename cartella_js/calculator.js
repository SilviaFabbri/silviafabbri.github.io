  //js per la calcolatrice
  function n(dato){ document.getElementById("risultato").value+=dato;}
     
  function operazione() { document.getElementById("risultato").value=eval(document.getElementById("risultato").value)}

  function cancella() { document.getElementById("risultato").value=" ";}