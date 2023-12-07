import {useState, useRef, SetStateAction, Dispatch} from 'react'
import { Controlled } from 'react-codemirror2'

import 'codemirror/lib/codemirror.css'

import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'

import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/matchtags'
import 'codemirror/addon/edit/matchbrackets'
import {Button, ThemeSelector} from "shared/ui";

export type TCodeEditor = {
    mode: string,
    value: string,
    setValue: Dispatch<SetStateAction<string>>
}

export const CodeEditor = ({ mode, value, setValue }: TCodeEditor) => {
    const [theme, setTheme] = useState('dracula')
    const fileInputRef = useRef()

    const changeCode = (editor: any, data: any, value: string) => {
        setValue(value)
    }

    const isFileValid = (file: any) =>
        (mode === 'xml' && file.type === 'text/html') || file.type.includes(mode)

    const readFile = (file: any) => {
        if (!isFileValid(file)) return

        const reader = new FileReader()

        reader.onloadend = () => {
            setValue(reader.result as string)
        }

        reader.readAsText(file)
    }

    const loadFile = (e: any) => {
        const file = e.target.files[0]

        readFile(file)
    }

    const onDrop = (editor: any, e: any) => {
        e.preventDefault()

        const file = e.dataTransfer.items[0].getAsFile()

        readFile(file)
    }

    return (
        <div className='code-editor'>
            <ThemeSelector setTheme={setTheme} />
            <Button
                className='btn file'
                title='Load file'
                onClick={() => {
                    //@ts-ignore
                    fileInputRef.current.click()
                }}
            />
            <input
                type='file'
                accept='text/html, text/css, text/javascript'
                style={{ display: 'none' }}
                aria-hidden='true'
                //@ts-ignore
                ref={fileInputRef}
                onChange={loadFile}
            />
            <Controlled
                value={value}
                onBeforeChange={changeCode}
                onDrop={onDrop}
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