import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CodeEditorPage from '../CodeEditorPage/CodeEditorPage';
import TheoryPage from '../TheoryPage/TheoryPage';
import AppLayout from '../AppLayout/AppLayout';
import { getCodeEditor, getMulti, getMultiList, getQuestions, getTheory } from '../../app/GetRouting/GetRouting';
import QuestionsPage from '../QuestionsPage/QuestionsPage';
import MultimediaPage from '../MultimediaPage/MultimediaPage';
import MultiView from '../MultiView/MultiView';

const Routing = () => {

  return (
    <Routes>
      <Route element={<AppLayout/>}>
        <Route index path={getCodeEditor()} element={<CodeEditorPage/>} />
        <Route index path={getQuestions()} element={<QuestionsPage/>} />
        <Route index path={getMultiList()} element={<MultimediaPage/>} />
        <Route index path={`${getTheory()}/*`} element={<TheoryPage/>}/>
        <Route index path={`${getMulti()}/*`} element={<MultiView/>}/>
        <Route
          path='*'
          element={<Navigate to={getQuestions()} />}
        />
      </Route>
    </Routes>
  )
}

export default Routing