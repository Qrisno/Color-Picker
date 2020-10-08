const colors = ['Red', 'Green', 'Blue', 'Purple',
    '#f15025'
];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', function() {
    //Get random num between 0-4
    const randomNumber = getRandomNum();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNum() {
    return Math.floor(Math.random() * colors.length);
}