import {useState, SetStateAction, Dispatch} from 'react'
import { Controlled } from 'react-codemirror2'

import 'codemirror/lib/codemirror.css'

import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'

import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/matchtags'
import 'codemirror/addon/edit/matchbrackets'
import {ThemeSelector} from "shared/ui";
import styles from './styles.module.scss'

export type TCodeEditor = {
    mode: string,
    value: string,
    setValue: Dispatch<SetStateAction<string>>
}

export const CodeEditor = ({ mode, value, setValue }: TCodeEditor) => {
    const [theme, setTheme] = useState('dracula')

    const changeCode = (editor: any, data: any, value: string) => {
        setValue(value)
    }

    return (
        <div className={styles.codeWrapper}>
            <ThemeSelector setTheme={setTheme} />
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