 /*script per il countdown   */
     
 const btn = document.getElementById('btn')

 btn.addEventListener('click', function(){
      document.getElementById("temposcaduto").innerHTML = "";
      let secleft = 59;
      let minleft =  parseInt(prompt("Insierisci i minuti che vuoi nel conto alla rovescia."));
      /*parseInt mi permette 
      di eliminare il problema delle 
      lettere prima dei numeri, mentre 
      nelle lettere dopo i numeri vale il
      numero vengono calcolate normali*/
          let lettere = /^[a-zA-Z]+$/.test(minleft)/*se solo lettere*/
          

        if (lettere == true || minleft=="" ){
          alert("Errore. Per favore inserisci un valore numerico.");//impedisce di far entrare lettere o spazi vuoti
        }
        else
        {
          document.getElementById("min").innerHTML =  minleft ;
          minleft = minleft - 1;//fa iniziare il conto un minuto meno dell'inserito con 59 sec.
          minleft = minleft < 10 ? "0" + minleft : minleft; //mette lo zero davanti ai minuti se sono meno di 10
          document.getElementById("min").innerHTML =  minleft ;//minuti iniziali
          
          const gameTimer = setInterval(function(){
          
            if (secleft == -1){
              if(minleft == 0){
                clearInterval(gameTimer);
                    document.getElementById("temposcaduto").innerHTML = "Tempo scaduto!";
                    return;
              }else{
                minleft --;
                secleft = 60
              }
            }
            secleft = secleft < 10 ? "0" + secleft : secleft; //mette lo zero davanti ai secondi che sono meno di 10
            document.getElementById("min").innerHTML = minleft ;
            document.getElementById("sec").innerHTML = secleft ;
            secleft --;
            
          }, 1000 ); 
          
          }
  })