let btnChien = document.querySelector('#btnChien');
let imgAleatoire = document.querySelector('#imgAleatoire');
addEventListener('click', afficherChien);
function afficherChien(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        imgAleatoire.innerHTML=`<img src="${data.message}"/>`;

    })

}