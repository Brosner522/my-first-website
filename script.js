const h2 = document.createElement('h2');
h2.textContent = "Thank you for visiting!";



document.querySelector('body').appendChild(h2);

const hidden = document.querySelector('.hidden');
hidden.addEventListener('click', function() {
    alert('You win!')
})


const proPic = document.querySelector('.image-center');
proPic.addEventListener('mouseover', function() {
    alert('You found me!')
})