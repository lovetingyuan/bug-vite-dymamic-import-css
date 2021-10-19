// import './style.css'
import('./style.css?inline').then(css => {
  const style = document.createElement('style')
  style.dataset.import = true
  style.textContent = css.default
  document.head.appendChild(style)
})

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
