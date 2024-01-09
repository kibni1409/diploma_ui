import {Button} from "shared/ui";
import styles from './styles.module.scss'

type TCodeExecutor = {
    srcDoc: string,
    runCode: () => void
}
const CodeExecutor = ({ srcDoc, runCode }: TCodeExecutor) => (
    <div className={styles.resultWrapper}>
        <iframe
            srcDoc={srcDoc}
            title='output'
            sandbox='allow-scripts'
            className={styles.iframe}
        />
        <Button className='btn run' title='Run code' onClick={runCode} />
    </div>
)

export default CodeExecutor