import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CodeEditorPage from '../CodeEditorPage/CodeEditorPage';
import TheoryPage from '../TheoryPage/TheoryPage';
import AppLayout from '../AppLayout/AppLayout';

const Routing = () => {
  return (
    <Routes>
      <Route element={<AppLayout/>}>
        <Route index path={'code'} element={<CodeEditorPage/>} />
        <Route index path={'theory'} element={<TheoryPage/>} />
      </Route>
    </Routes>
  )
}

export default Routing