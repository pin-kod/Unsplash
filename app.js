

async function randomPhoto(){
    try {
        const response = await fetch (`https://api.unsplash.com/photos/random?client_id=LRwrh_Jg4wjFW_buN7kFN0kT-Bonzj4cW-SZpR72L6g`);
        const data = await response.json();
        document.querySelector('.photo').src = data.urls.regular;
        document.querySelector('.photographer').textContent=`Фото сделано ${data.user.name}`;
    } catch (error) {
        console.error ('Ошибка', error);
    }
}

let likes = 0;
let countLikes= false;

document.querySelector('.btn-like').addEventListener('click', function(){
    if(!countLikes) {
        likes++;
        document.querySelector('.likes').textContent=likes;
        countLikes=true;
    }
});

randomPhoto();

