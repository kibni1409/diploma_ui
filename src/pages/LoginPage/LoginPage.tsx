import {Button, Checkbox, Form, Input} from "antd";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getQuestions} from "../../app/GetRouting/GetRouting";
import axios from "axios";

const LoginPage = () => {
    const navigate = useNavigate() // Навигатор
    const [user, setUser] = useState(localStorage.getItem("user"))

    // Перевод с формы на страницу платформы
    useEffect(() => {
        if (user){
            navigate(getQuestions())
        }
    }, [user])

    // Отправка на сервер данных пользователя
    const onFinish = (values: {[key:string]: string}) => {
        axios
            .post('https://api.jsonbin.io/v3/b/65b4ea1b266cfc3fde81d3c0?meta=false',
                {login: values.login, password: values.password})
            .then((res) => {
                setUser(res.data.questions)
            })
    };

    // Ошибка при заполнении полей
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Логин"
                    name="login"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите логин!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите пароль!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginPage