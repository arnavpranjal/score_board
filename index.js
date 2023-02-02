let count_home =0 
let count_guest=0
let homey= document.getElementById("score-home")
let guesti=document.getElementById("guest-score")


function add1(){
count_home+=1
homey.textContent=count_home
}
function add2(){
    count_home+=2
    homey.textContent=count_home
    }


   function add3(){
    count_home+=3
        homey.textContent=count_home
        }

        function add_1(){
            count_guest+=1
            guesti.textContent=count_guest
            }
            function add_2(){
                count_guest+=2
                guesti.textContent=count_guest
                }
            
            
               function add_3(){
                count_guest+=3
                    guesti.textContent=count_guest
                    }