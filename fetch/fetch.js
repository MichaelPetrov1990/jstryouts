// const h2 = document.createElement(`h2`)
// h2.innerText = `script`
// document.body.append(h2)

//FETCH:

// const promi = fetch(`https://swapi.dev/api/planets/`, { mode: 'cors' })
//   .then((response) => {
//     if (!response.ok)
//       throw new Error(`Status code error: ${response.status}`)
//     response.json().then((data) => {
//       for (const planet of data.results) {
//         console.log(planet.name);
//       }
//     })
//   })
//   .catch((err) => {
//     console.log(`SOMETHNG WENT WRONG`)
//     console.log(err)
//   })

// AXIOS:

// axios.get(`https://swapi.dev/api/planets/`)
//   .then((res) => {
//     console.log(res.data.results)
//   })
//   .catch((err) => {
//     console.log(`in error: ${err}`)
//   })

//ASYNC AND AWAIT:

async function getPlanets() {
  const results = await axios.get(`https://swapi.dev/api/planets/`);
  console.log(results.data.results)
}
getPlanets()