import './App.scss'
import { useState } from 'react'
import { CodeEditor } from './components/CodeEditor'
import { CodeExecutor } from './components/CodeExecutor'
import {ThemeSelector} from "./components/ThemeSelector";

const initialHTML = '<h1>hi</h1>'
const initialCSS = `
h1 {
  color: green;
}
`
const initialJavaScript = `
document.querySelector("h1").addEventListener('click', function () {
  this.textContent = "bye"
  this.style.color = "red"
}, { once: true })
`

export default function App() {
  const [html, setHtml] = useState(initialHTML)
  const [css, setCss] = useState(initialCSS.trim())
  const [js, setJs] = useState(initialJavaScript.trim())
  const [srcDoc, setSrcDoc] = useState('')
  const [theme, setTheme] = useState('dracula')

  const runCode = () => {
    setSrcDoc(
      `<html lang="ru">
        <style>${css}</style>
        <body>${html}</body>
        <script>${js}</script>
      </html>`
    )
  }

  const propsByMode = {
    html: {
      mode: 'xml',
      value: html,
      setValue: setHtml,
      theme: theme
    },
    css: {
      mode: 'css',
      value: css,
      setValue: setCss,
      theme: theme
    },
    js: {
      mode: 'javascript',
      value: js,
      setValue: setJs,
      theme: theme
    }
  }

  return (
    <div className='app'>
      <h1>Редактор кода</h1>
      <ThemeSelector setTheme={setTheme} />
      <div className='codeWrapper'>
        <CodeEditor {...propsByMode['html']} />
        <CodeEditor {...propsByMode['css']} />
        <CodeEditor {...propsByMode['js']} />
      </div>
      <CodeExecutor srcDoc={srcDoc} runCode={runCode} />
    </div>
  )
}
