import './style.css'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <img id="logo" src="${viteLogo}" class="logo" alt="Vite logo" style="view-transition-name: logo; width: 32px; height: 32px;" />
  </div>
  <div>
    <a id="link" href="./js/" style="view-transition-name: link;">Go to JavaScript</a>
  </div>
`
