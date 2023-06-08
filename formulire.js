function message(sms){
    var messenger = document.querySelector('.message');
    
    var span = document.createElement('p');
    span.textContent = sms;
    messenger.appendChild(span);    
}

function success(message_succes){
    var message = document.querySelector('.succes');
    var contenu = document.createElement('p');
    contenu.textContent = message_succes;
    message.appendChild(contenu); 
}

function supprimer(){
    var spans = document.querySelectorAll('.message p');
    console.log(spans);
    spans.forEach((e) => {
        e.remove();
    });
}

// message('veillez reessayer');
// message('le nom doit contenir au moins 5 caracteres');



var envoie = document.getElementById('send');
envoie.addEventListener('click', (e)=>{
    e.preventDefault();
    supprimer();
    var error = false;
    var name = document.getElementById('username');
    var mail = document.getElementById('email');
    var mdp = document.getElementById('password');
    var mdpconfirme = document.getElementById('passwordconfirm');

    if((name.value == "") || (mail.value == "") || (mdp.value == "") || (mdpconfirme.value == "")){
        error = true;
        message('les champs ne peuvent pas etre vides ');
    } else {
        if(mdp.value != mdpconfirme.value){
            error = true;
            message('les mots de passes sont differents');
        } 
        if(name.value.length < 5){
            error = true;
            message('le username doit comporter au moins 5 carateres');
       }
    } 
    if (error == false){
        success('formulaire envoyé avec succès');
    }
})