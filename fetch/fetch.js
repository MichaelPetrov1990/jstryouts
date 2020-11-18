// const h2 = document.createElement(`h2`)
// h2.innerText = `script`
// document.body.append(h2)

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
// axios:

axios.get(`https://swapi.dev/api/planets/`)
  .then((res) => {
    console.log(res.data.results)
  })
  .catch((err) => {
    console.log(`in error: ${err}`)
  })