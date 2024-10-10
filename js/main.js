import '../style.css'
import javascriptLogo from '/javascript.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" style="view-transition-name: logo;" />
    <br>
    <a href="/">Go to JavaScript</a>
  </div>
`
