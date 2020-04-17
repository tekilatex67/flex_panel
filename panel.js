let panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
<<<<<<< HEAD

=======
>>>>>>> ebfec823993e663680c9b5f5afdc3df0f7941d86
};

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('active');
    }
}


panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
panels.forEach(panel => panel.addEventListener('click', toggleOpen));