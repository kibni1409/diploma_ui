import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CodeEditorPage from '../CodeEditorPage/CodeEditorPage';
import TheoryPage from '../TheoryPage/TheoryPage';
import AppLayout from '../AppLayout/AppLayout';
import {
  getCodeEditor, getLogin,
  getMulti,
  getMultiList,
  getNew,
  getNews,
  getQuestions,
  getTheory
} from '../../app/GetRouting/GetRouting';
import QuestionsPage from '../QuestionsPage/QuestionsPage';
import MultimediaPage from '../MultimediaPage/MultimediaPage';
import MultiView from '../MultiView/MultiView';
import NewsPage from "../NewsPage/NewsPage";
import NewPage from "../NewPage/NewPage";
import LoginPage from "../LoginPage/LoginPage";

const Routing = () => {

  return (
    <Routes>
      <Route element={<AppLayout/>}>
        <Route index path={getCodeEditor()} element={<CodeEditorPage/>} />
        <Route index path={getQuestions()} element={<QuestionsPage/>} />
        <Route index path={getMultiList()} element={<MultimediaPage/>} />
        <Route index path={getNews()} element={<NewsPage/>} />
        <Route index path={getLogin()} element={<LoginPage/>} />
        <Route index path={`${getTheory()}/*`} element={<TheoryPage/>}/>
        <Route index path={`${getMulti()}/*`} element={<MultiView/>}/>
        <Route index path={`${getNew()}/*`} element={<NewPage/>}/>
        <Route
          path='*'
          element={<Navigate to={getQuestions()} />}
        />
      </Route>
    </Routes>
  )
}

export default Routing