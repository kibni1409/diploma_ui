import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './styles.module.scss';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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

  if(!question){
    return null
  }

  return (
    <div className={style.theory}>
      <Markdown>{question.title}</Markdown>
      <Markdown className={style.markdown} >{question.text}</Markdown>
    </div>
  )
}

export default TheoryPage