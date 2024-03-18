import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { getMulti } from '../../app/GetRouting/GetRouting';
import styles from './styles.module.scss';
import { Card } from 'antd';

type TMultiList = {
  id: string,
  title: string,
  link: string
}

const MultimediaPage = () => {
  const [multiList, setMultiList] = useState<TMultiList[]>([])

  useEffect(() => {
    axios
      .get('https://api.jsonbin.io/v3/b/65de276cdc74654018aaaf79?meta=false')
      .then((res) => {
        setMultiList(res.data.multi)
      })
  }, [])

  return (
    <div className={styles.list}>
      {multiList.map(item => {
        return (
          <NavLink key={item.id} to={getMulti(item.id)} >
            <Card
              className={styles.card}
            >
              {item.title}
            </Card>
          </NavLink>
        )
      })}
    </div>
  )
}

export default MultimediaPage