document.getElementById('buttonR').addEventListener('click',function (e){
    e.preventDefault();
    const emailR = document.getElementById('emailR').value;
    const passR = document.getElementById('passR').value;
    const conpassR = document.getElementById('conpassR').value;
    if(passR===conpassR){
        alert('please enter the details correctly');
    }
    else{
        window.location.href = "login.html"
    }
})