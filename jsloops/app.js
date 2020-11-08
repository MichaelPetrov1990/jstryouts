const colors = [
  `red`,
  `orange`,
  `yellow`,
  `green`,
  `blue`,
  `purple`,
  `indigo`,
  `violet`
];

const printColor = function (box) {
  const h2 = document.querySelector(`h2`);
  h2.style.color = this.style.backgroundColor

}
const container = document.querySelector(`#boxes`)
for (let color of colors) {
  const box = document.createElement(`div`);
  box.style.backgroundColor = color;
  box.classList.add(`box`)
  container.append(box);
  box.addEventListener(`click`, printColor)
}

const addItemInput = document.querySelector(`#addItem`)
const itemsUL = document.querySelector(`#items`)

addItemInput.addEventListener(`keypress`, function (e) {
  if (e.key === `Enter`) {
    const newItemText = e.value
    const newItem = document.createElement(`li`)
    newItem.innerText = newItemText
    itemsUL.append(newItem)
    this.value = ``
  }
})

const form = document.querySelector(`#signup`)
form.addEventListener(`submit`, function (e) {
  alert(`SUBMITTED`)
})