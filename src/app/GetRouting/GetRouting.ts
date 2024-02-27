export const getCodeEditor = () => '/code-editor';
export const getQuestions = () => `/questions`;
export const getMultiList = () => `/multi-list`;
export const getMulti = (id: string = ':id') => `${getMultiList()}/${id}`;
export const getTheory = (id: string = ':id') => `${getQuestions()}/${id}`;