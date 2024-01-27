import { useState } from 'react';
import { initialCSS, initialHTML, initialJavaScript } from './const';
import styles from './styles.module.scss';
import { Selector } from '../../shared';
import CodeEditor from '../../entities/CodeEditor/ui/CodeEditor';
import { CodeExecutor } from '../../entities/CodeExecutor';

const CodeEditorPage = () => {

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
    <div className={styles.app}>
      <h1>Редактор кода</h1>
      <Selector setTheme={setTheme} />
      <div className={styles.codeWrapper}>
        <CodeEditor {...propsByMode['html']} />
        <CodeEditor {...propsByMode['css']} />
        <CodeEditor {...propsByMode['js']} />
      </div>
      <CodeExecutor srcDoc={srcDoc} runCode={runCode} />
    </div>
  )
}

export default CodeEditorPage