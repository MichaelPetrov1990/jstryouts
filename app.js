const cello = document.getElementById(`cello`)
const h1 = document.querySelector(`h1`)

const lis = document.querySelectorAll(`li`)
const colors = [`red`, `orange`, `purple`]
lis.forEach((li, i) => {
  const color = colors[i];
  li.style.color = color;
})