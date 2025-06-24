
 function Registered(){
    document.getElementById('buttonR').addEventListener('click',function (e){
    e.preventDefault();
    const emailR = document.getElementById('emailR').value;
    const passR = document.getElementById('passR').value;
    const conpassR = document.getElementById('conpassR').value;
    if(emailR===null){
        alert("enter your Email");
       
    }
     else if(passR!==conpassR||passR===null||conpassR===null){
            alert("enter same password");
        }
    else{
         document.querySelector('body').classList.add("open")
    }
 

    

})

   
}