const loginBtn = document.querySelector('.login-btn');
const modalBox = document.querySelector('#pop');
const closeModalBtn = document.querySelector('.close'); 
const body = document.querySelector('body');
const form = document.querySelector('.form');

loginBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', closeModal);


function closeModal() {
    modalBox.style.display = 'none';
}

function showModal() {
    modalBox.style.display = 'block';
}

body.addEventListener('click', (e) => {
    if (e.target === form || e.target === body) {
        modalBox.style.display = 'none';
    }

    console.log(e.target)
})