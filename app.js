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

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.3) {
        reject();
      } else {
        resolve();
      }
    }, 3000);
  });
};

fakeRequest().then(() => {
  console.log(`Worked`);
}).catch(() => {
  console.log(`Didn't work`);
});