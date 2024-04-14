import {useEffect, useState} from "react";
import axios from "axios";
import styles from "../QuestionsPage/styles.module.scss";
import {NavLink} from "react-router-dom";
import {getNew} from "../../app/GetRouting/GetRouting";
import {Card} from "antd";

type TNews = {
    id: string,
    title: string,
    text: string
}

const NewsPage = () => {
    const [News, setNews] = useState<TNews[]>([])

    useEffect(() => {
        axios
            .get('https://api.jsonbin.io/v3/b/661be699e41b4d34e4e43102?meta=false')
            .then((res) => {
                setNews(res.data.news)
            })
    }, [])

    return (
        <div className={styles.list}>
            {News.map(item => {
                return (
                    <NavLink key={item.id} to={getNew(item.id)} >
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

export default NewsPage