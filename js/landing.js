const dialog = document.getElementById('dialog-subscribe');
const showDialogBtn = document.getElementById('btn-show-dialog');
const closeBtn = document.getElementById('btn-close');

const menuAside = document.getElementById('aside-menu');
const showMenuBtn = document.getElementById('btn-show-menu');
const closeMenuBtn = document.getElementById('btn-close-menu');

showDialogBtn.addEventListener('click', () => {
    dialog.showModal();
});

closeBtn.addEventListener('click', () => {
    dialog.close();
});

showMenuBtn.addEventListener('click', () => {
    menuAside.style.setProperty('display', 'block');
});

closeMenuBtn.addEventListener('click', () => {
    menuAside.style.setProperty('display', 'none');
});