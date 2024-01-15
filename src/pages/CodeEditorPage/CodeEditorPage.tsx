import { useState } from 'react';
import { initialCSS, initialHTML, initialJavaScript } from './const';
import styles from './styles.module.scss';
import { Button, Drawer } from 'antd';
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

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  return (
    <div className={styles.app}>
      <Button
        type="default"
        onClick={showDrawer}
        className={styles.btnDrawer}
      >
        Open
      </Button>
      <Drawer
        title="Меню"
        placement={'left'}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <h1>Главная</h1>
        <h1>Теория</h1>
        <h1>Видео</h1>
        <h1>Редактор кода</h1>
      </Drawer>
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