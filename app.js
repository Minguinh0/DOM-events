const randomNumber = () => Math.round(Math.random() * 255);

const randomColor = () => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`

const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick() {
    btn.style.backgroundColor = randomColor();
})

