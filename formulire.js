function message(sms){
    var messenger = document.querySelector('.message');
    
    var span = document.createElement('p');
    span.textContent = sms;
    messenger.appendChild(span);    
}

// message('veillez reessayer');
// message('le nom doit contenir au moins 5 caracteres');



var envoie = document.getElementById('send');

envoie.addEventListener('click', (e)=>{
    e.preventDefault();
    var name = document.getElementById('username');
    var mail = document.getElementById('email');
    var mdp = document.getElementById('password');
    var mdpconfirme = document.getElementById('passwordconfirm');

    if(name.value.length < 5){
        message('le username doit comporter au moins 5 carateres');
    }

    if(mdp != mdpconfirme){
        message('les mots de passes sont differents');
    }

    if((name.value == "") || (mail.value == "") || (mdp.value == "") || (mdpconfirme.value == "")){
        message('les champs ne peuvent pas etre vides ');
    }  
    
})