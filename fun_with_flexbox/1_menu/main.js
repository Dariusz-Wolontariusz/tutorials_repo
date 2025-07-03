document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.toggle-nav');
    if (button) {
        console.log('znalazlem butttona');
        button.addEventListener('click', function () {
            var navUl = document.querySelector('.nav__list');
            if (navUl) {
                navUl.classList.toggle('open');
            }
        });
    }
});
