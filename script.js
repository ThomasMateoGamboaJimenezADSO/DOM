let win = window
let dom = document
let head = dom.head
let body = dom.body

const $header = dom.querySelector('header');
const $header_class = dom.querySelector('.header');
const $header_id = dom.querySelector('#header');
const id = document.getElementById('header');
const clase = document.getElementsByClassName('header');
const $header_class_all = document.querySelectorAll('#header')
const $main = dom.querySelector('main')
const $buscar = dom.querySelectorAll('div.card > ul.list > li.item > a')


console.log(win);
console.log(dom);
console.log(head);
console.log(body);
console.log(dom.title);
console.log(dom.styleSheets);
console.log($header);
console.log($header_class);
console.log($header_id);
console.log(id);
console.log(clase[0]);
console.log($header_class_all)
console.clear();
console.log(body.childNodes);
console.log($main);

$main.childNodes.forEach((nodo) => console.log(nodo));

// const arreglo_nodo = Array.from($main.childNodes)
const arreglonodo = [...$main.childNodes]

const nuevo2 = arreglonodo.filter((nodo) => (nodo.nodeType === nodo.TEXT_NODE) ? true : false);

console.log(arreglonodo)
console.clear();





console.log($main.children); //el hijo
console.log($main.parentElement); //el padre
console.log($main.previousElementSibling); // hermano anterior
console.log($main.nextElementSibling); //hermano siguiente


console.clear();

console.log($buscar);

const $formulario = dom.querySelector('#search');

console.log($formulario);

$formulario.setAttribute('method', 'GET');
$formulario.firstElementChild.removeAttribute('placeholder');
$formulario.firstElementChild.setAttribute('autocomplete', 'ON');
$formulario.classList.remove('otra_clase')
$formulario.classList.toggle('otra_clase')
console.log($formulario.classList);
