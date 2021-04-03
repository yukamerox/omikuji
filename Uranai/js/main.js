'use strict';

const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', () =>{
    const num = Math.random();
    if (num < 0.2) {
        result.textContent = '大吉';
    } else if (num < 0.5) {
        result.textContent = '中吉';
    } else if (num < 0.8) {
        result.textContent = '小吉';
    } else {
        result.textContent = '凶';
    }
});











