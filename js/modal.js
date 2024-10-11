
const openModal = document.querySelector('.cta_r');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close__modal');


openModal.addEventListener('click', (e)=>{
    modal.classList.add('modal--show');
    
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
    
});





