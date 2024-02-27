import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';
import { Card } from 'antd';
import { getTheory } from '../../app/GetRouting/GetRouting';
import { useEffect, useState } from 'react';
import axios from 'axios'

type TQuestion = {
  id: string,
  title: string,
  text: string
}

const QuestionsPage = () => {
  const [questions, setQuestions] = useState<TQuestion[]>([])

  useEffect(() => {
    axios
      .get('https://api.jsonbin.io/v3/b/65b4ea1b266cfc3fde81d3c0?meta=false')
      .then((res) => {
        setQuestions(res.data.questions)
      })
  }, [])

  return (
    <div className={styles.list}>
      {questions.map(item => {
        return (
          <NavLink key={item.id} to={getTheory(item.id)} >
            <Card
              title={item.title}
              className={styles.card}
            >
            </Card>
          </NavLink>
        )
      })}
    </div>
  )
}

export default QuestionsPage