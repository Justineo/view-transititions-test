import './style.css'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${viteLogo}" class="logo" alt="Vite logo" style="view-transition-name: logo;" />
    <br>
    <a href="./js/">Go to JavaScript</a>
  </div>
`
