import '../style.css'
import javascriptLogo from '/javascript.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <img id="logo" src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" style="view-transition-name: logo; width: 64px; height: 64px;" />
    <br>
    <a id="link" href="/" style="view-transition-name: link;">Go to JavaScript</a>
  </div>
`
