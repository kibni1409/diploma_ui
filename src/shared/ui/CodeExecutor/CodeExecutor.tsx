import {Button} from "shared/ui";

type TCodeExecutor = {
    srcDoc: string,
    runCode: () => void
}
const CodeExecutor = ({ srcDoc, runCode }: TCodeExecutor) => (
    <div className='code-executor'>
        <Button className='btn run' title='Run code' onClick={runCode} />
        <iframe
            srcDoc={srcDoc}
            title='output'
            sandbox='allow-scripts'
            className='code-frame'
        />
    </div>
)

export default CodeExecutor