import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import style from './styles.module.scss';
import axios from 'axios';

type TMultiList = {
  id: string,
  title: string,
  link: string
}

const MultiView = () => {
  const {id} = useParams()
  const [question, setQuestion] = useState<TMultiList>()

  useEffect(() => {
    axios
      .get('https://api.jsonbin.io/v3/b/65de276cdc74654018aaaf79?meta=false ')
      .then((res) => {
        setQuestion(res.data.multi.find((item: TMultiList) => item.id === id))
      })
  }, []);

  return (
    <div className={style.multi}>
      <h1>{question?.title}</h1>
      <iframe
        style={{
          maxWidth: '800px',
          width: '80%',
          maxHeight: '500px',
          height: '500px'
        }}
        src={question?.link}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>

      </iframe>
    </div>
  )
}

export default MultiView