import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './styles.module.scss';

type TQuestion = {
  id: string,
  title: string,
  text: string
}

const TheoryPage = () => {
  const {id} = useParams()
  const [question, setQuestion] = useState<TQuestion>()

  useEffect(() => {
    axios
      .get('https://api.jsonbin.io/v3/b/65b4ea1b266cfc3fde81d3c0?meta=false ')
      .then((res) => {
        setQuestion(res.data.questions.find((item: TQuestion) => item.id === id))
      })
  }, []);

  return (
    <div className={style.theory}>
      <h1>{question?.title}</h1>
      <span style={{color: 'white'}}>{question?.text}</span>
    </div>
  )
}

export default TheoryPage