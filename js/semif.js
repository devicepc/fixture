let sem1 = document.querySelectorAll('.semWin1');
let sem2 = document.querySelectorAll('.semWin2');
let sem3 = document.querySelectorAll('.semWin3');
let sem4 = document.querySelectorAll('.semWin4');


for(a of  sem1){
    a.addEventListener('click', function(){
      let semwinA = this.innerHTML; 
        function s(){
            const semiQatarwin2 = document.getElementById("semiQatar2").innerText;
                document.getElementById("semiQatar2").innerHTML= semwinA;
              }
        s();
    })}
    for(a of  sem2){
        a.addEventListener('click', function(){
          let semwinB = this.innerHTML; 
            function s(){
                const semiQatarwin1 = document.getElementById("semiQatar1").innerText;
                    document.getElementById("semiQatar1").innerHTML= semwinB;
                  }
            s();
        })}

        for(a of  sem3){
            a.addEventListener('click', function(){
              let semwinC = this.innerHTML; 
                function s(){
                    const semiQatarwin4 = document.getElementById("semiQatar4").innerText;
                        document.getElementById("semiQatar4").innerHTML= semwinC;
                      }
                s();
            })}
            for(a of  sem4){
                a.addEventListener('click', function(){
                  let semwinD = this.innerHTML; 
                    function s(){
                        const semiQatarwin3 = document.getElementById("semiQatar3").innerText;
                            document.getElementById("semiQatar3").innerHTML= semwinD;
                          }
                    s();
                })}
        


    // finales 
    let finalClas1 = document.querySelectorAll('.semiQatarwin1');
let finalClas2 = document.querySelectorAll('.semiQatarwin2');
  

for(a of  finalClas1){
  a.addEventListener('click', function(){
    let finalClasA = this.innerHTML; 
      function s(){
          const finalClasa = document.getElementById("FinalGame1").innerText;
              document.getElementById("FinalGame1").innerHTML= finalClasA;
            }
      s();
  })}

  for(a of  finalClas2){
    a.addEventListener('click', function(){
      let finalClasB = this.innerHTML; 
        function s(){
            const finalClasb = document.getElementById("FinalGame2").innerText;
                document.getElementById("FinalGame2").innerHTML= finalClasB;
              }
        s();
    })}

    // final 
    let finalwin =document.querySelectorAll('.FinalGame1');

    for(a of  finalwin){
      a.addEventListener('click', function(){
        let finalWin = this.innerHTML; 
          function s(){
              const finalClasb = document.getElementById("FinalWin").innerText;
                  document.getElementById("FinalWin").innerHTML= " is : "+finalWin;
                  /* let x = ;
                  let second = x != finalwin;
                  document.getElementById("FinalSecond").innerHTML= " is : "+second; */
                }
          s();
      })}
  