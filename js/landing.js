const dialog = document.getElementById('dialog-subscribe');
const showDialogBtn = document.getElementById('btn-show-dialog');
const closeBtn = document.getElementById('btn-close');

const menuAside = document.getElementById('aside-menu');
const showMenuBtn = document.getElementById('btn-show-menu');
const closeMenuBtn = document.getElementById('btn-close-menu');

showDialogBtn.addEventListener('click', () => {
    dialog.showModal();
    document.body.style.overflow = "hidden";
});

closeBtn.addEventListener('click', () => {
    dialog.close();
    document.body.style.overflow = "";
});

showMenuBtn.addEventListener('click', () => {
    menuAside.style.setProperty('display', 'block');
    document.body.style.overflow = "hidden";
});

closeMenuBtn.addEventListener('click', () => {
    menuAside.style.setProperty('display', 'none');
    document.body.style.overflow = "";
});