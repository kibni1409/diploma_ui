import { Button } from '../../../shared';
import styles from './styles.module.scss';

type TCodeExecutorProps = {
  srcDoc: string,
  runCode: () => void
}

const CodeExecutor = ({ srcDoc, runCode }: TCodeExecutorProps) => (
  <div className={styles.codeExecutor}>
    <Button className={styles.btn} title='Run code' onClick={runCode} />
    <iframe
      srcDoc={srcDoc}
      title='output'
      sandbox='allow-scripts'
      className={styles.codeFrame}
    />
  </div>
)

export default CodeExecutor
