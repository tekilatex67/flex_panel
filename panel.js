let panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
};

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('active');
    }
    if (!this.classList.contains('open') && this.classList.contains('active')) {
        this.classList.remove('active');
    };
}


panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
panels.forEach(panel => panel.addEventListener('click', toggleOpen));