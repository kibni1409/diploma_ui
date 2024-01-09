import { Controlled } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/matchtags'
import 'codemirror/addon/edit/matchbrackets'

export const CodeEditor = ({ mode, value, setValue, theme }) => {


  const changeCode = (editor, data, value) => {
    setValue(value)
  }

  const title = {
      xml: 'HTML',
      javascript: 'JS',
      css: 'CSS'
  }

  return (
    <div className='wrapper'>
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
