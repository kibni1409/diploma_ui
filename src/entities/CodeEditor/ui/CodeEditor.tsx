import { Controlled } from 'react-codemirror2'
import styles from './styles.module.scss'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/matchtags'
import 'codemirror/addon/edit/matchbrackets'


type TCodeEditorProps = {
  mode: string,
  value: string,
  setValue: (value: string) => void,
  theme: string
}

const title: {[key: string]: string} = {
  xml: 'HTML',
  javascript: 'JS',
  css: 'CSS'
}

const CodeEditor = ({ mode, value, setValue, theme }: TCodeEditorProps) => {

  const changeCode = (editor: string, data: string, value: string) => {
    setValue(value)
  }

  return (
    <div className={styles.wrapper}>
      <h1>{title[mode]}</h1>
      <Controlled
        value={value}
        onBeforeChange={changeCode}
        options={{
          mode,
          theme,
          lint: true,
          lineNumbers: true,
          lineWrapping: true,
          spellcheck: true,
          autoCloseTags: true,
          autoCloseBrackets: true,
          matchTags: true,
          matchBrackets: true
        }}
      />
    </div>
  )
}

export default CodeEditor
