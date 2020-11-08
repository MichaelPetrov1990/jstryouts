const cello = document.getElementById(`cello`)
const h1 = document.querySelector(`h1`)

const lis = document.querySelectorAll(`li`)
const colors = [`red`, `orange`, `purple`]
lis.forEach((li, i) => {
  const color = colors[i];
  li.style.color = color;
})
const newh2 = document.createElement(`h2`);
newh2.innerText = `The coolness adentifyer`;

h1.appendChild(newh2);



// const btn2 = document.querySelector('.btn2');

// btn2.addEventListener('mouseover', function () {
//   const height = Math.floor(Math.random() * window.innerHeight);
//   const width = Math.floor(Math.random() * window.innerWidth);
//   btn2.style.left = `${width}px`;
//   btn2.style.top = `${height}px`;
// });