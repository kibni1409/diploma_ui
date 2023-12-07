import styles from './styles.module.scss'
import {CodeExecutor, MainPanel, Tabs} from "shared/ui";
import CodeEditor, {TCodeEditor} from "entities/codeEditor/ui/CodeEditor";
import {useState} from "react";

const Home = () => {
    const initialHTML = '<h1>hi</h1>'
    const initialCSS = `h1 {color: green;}`
    const initialJavaScript = `document.querySelector("h1").addEventListener('click', function () { this.textContent = "bye"this.style.color = "red"}, { once: true })`

    const [mode, setMode] = useState('html')
    const [html, setHtml] = useState(initialHTML)
    const [css, setCss] = useState(initialCSS.trim())
    const [js, setJs] = useState(initialJavaScript.trim())
    const [srcDoc, setSrcDoc] = useState('')

    const runCode = () => {
        setSrcDoc(
            `<html lang="ru">
                <style>${css}</style>
                <body>${html}</body>
                 <script>${js}</script>
            </html>`
        )
    }

    const propsByMode: {[key: string]: TCodeEditor} = {
        html: {
            mode: 'xml',
            value: html,
            setValue: setHtml
        },
        css: {
            mode: 'css',
            value: css,
            setValue: setCss
        },
        js: {
            mode: 'javascript',
            value: js,
            setValue: setJs
        }
    }

    return (
        <div className={styles.container}>
            <MainPanel/>
            <Tabs mode={mode} setMode={setMode} />
            <CodeEditor {...propsByMode[mode]}/>
            <CodeExecutor srcDoc={srcDoc} runCode={runCode} />
        </div>
    )
}

export default Home