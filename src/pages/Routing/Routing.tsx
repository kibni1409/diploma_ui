import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CodeEditorPage from '../CodeEditorPage/CodeEditorPage';
import TheoryPage from '../TheoryPage/TheoryPage';
import AppLayout from '../AppLayout/AppLayout';
import { getCodeEditor, getQuestions, getTheory } from '../../app/GetRouting/GetRouting';
import QuestionsPage from '../QuestionsPage/QuestionsPage';

const Routing = () => {

  return (
    <Routes>
      <Route element={<AppLayout/>}>
        <Route index path={getCodeEditor()} element={<CodeEditorPage/>} />
        <Route index path={getQuestions()} element={<QuestionsPage/>} />
        <Route index path={`${getTheory()}/*`} element={<TheoryPage/>}/>
        <Route
          path='*'
          element={<Navigate to={getQuestions()} />}
        />
      </Route>
    </Routes>
  )
}

export default Routing