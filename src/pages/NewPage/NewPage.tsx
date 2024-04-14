import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import styles from "../QuestionsPage/styles.module.scss";
import {Card} from "antd";

type TNew = {
    id: string,
    title: string,
    text: string
}

const NewPage = () => {
    const {id} = useParams()
    const [New, setNew] = useState<TNew[]>()

    useEffect(() => {
        axios
            .get('https://api.jsonbin.io/v3/b/661be699e41b4d34e4e43102?meta=false ')
            .then((res) => {
                setNew(res.data.news.find((item: TNew) => item.id === id).news)
            })
    }, []);

    if (!New) {
        return null
    }

    return (
        <div className={styles.list}>
            {New.map(item => {
                return (
                    <Card
                        className={styles.card}
                        title={item.title}
                    >
                        {item.text}
                    </Card>
                )
            })}
        </div>
    )
}

export default NewPage