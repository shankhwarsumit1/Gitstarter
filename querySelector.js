const heading = document.querySelector('#main-heading');
heading.style.textAlign='right';

const basket = document.querySelector('#basket-heading');
basket.style.color = 'brown';
basket.style.marginLeft = '30px';
const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = ('gray');
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const fruitItems = document.querySelectorAll('.fruit:nth-child(odd)');
for (let i = 0; i < fruitItems.length; i++) {
    fruitItems[i].style.backgroundColor = 'white';
    fruitItems[i].style.boderRaduis = '5px';
}
const fruiteven = document.querySelectorAll('.fruit:nth-child(even)');
for (let i = 0; i < fruiteven.length; i++) {
    fruiteven[i].style.backgroundColor = ('brown');
    fruiteven[i].style.boderRaduis = '5px';
    fruiteven[i].style.color = 'white';
}