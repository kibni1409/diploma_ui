import styles from './styles.module.scss';
import { questions } from './mock';
import { NavLink } from 'react-router-dom';
import { Card } from 'antd';
import { getTheory } from '../../app/GetRouting/GetRouting';

const QuestionsPage = () => {

  return (
    <div className={styles.list}>
      {questions.map(item => {
        return (
          <NavLink to={getTheory(item.id)} >
            <Card
              title={item.title}
              className={styles.card}
            >
              {item.text}
            </Card>
          </NavLink>
        )
      })}
    </div>
  )
}

export default QuestionsPage