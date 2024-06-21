document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.reg form');

    form.addEventListener('focusin', function(event) {
        if (event.target.tagName === 'INPUT') {
            event.target.style.backgroundColor = 'yellow';
        }
    });

    form.addEventListener('focusout', function(event) {
        if (event.target.tagName === 'INPUT') {
            event.target.style.backgroundColor = '';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
document.querySelectorAll('.button').forEach(function(button) {
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'lightblue';
    });
    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    });
}); 
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.sell form');

    form.addEventListener('focusin', function(event) {
        if (event.target.tagName === 'INPUT') {
            event.target.style.backgroundColor = 'yellow';
        }
    });

    form.addEventListener('focusout', function(event) {
        if (event.target.tagName === 'INPUT') {
            event.target.style.backgroundColor = '';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.add form');

    form.addEventListener('focusin', function(event) {
        if (event.target.tagName === 'INPUT') {
            event.target.style.backgroundColor = 'yellow';
        }
    });

    form.addEventListener('focusout', function(event) {
        if (event.target.tagName === 'INPUT') {
            event.target.style.backgroundColor = '';
        }
    });
});

