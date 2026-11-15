const title = document.getElementById('title');
title.textContent = 'Моя перша робота з DOM';

const content = document.getElementById('content');
const p = document.createElement('p');
p.textContent = 'Сьогодні я спробував змінити сторінку за допомогою JavaScript';
content.appendChild(p);

content.style.backgroundColor = '#e74d4d';
content.style.borderColor = '#146032';
content.style.borderRadius = '20px';