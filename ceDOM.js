const h3 = document.createElement('h3');
const htext = document.createTextNode('Buy high quality organic fruits online');
h3.appendChild(htext);

const divs = document.getElementsByTagName('div');
const firstDiv = divs[0];
firstDiv.appendChild(h3);
h3.style.fontStyle='italic';

const para = document.createElement('p');
const paratext = document.createTextNode('Total fruit 4');
const secondDiv = divs[1];
secondDiv.appendChild(para);
para.id = 'fruits-total';