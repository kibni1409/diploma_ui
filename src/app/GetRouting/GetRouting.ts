export const getCodeEditor = () => '/code-editor';
export const getQuestions = () => `/questions`;
export const getMultiList = () => `/multi-list`;
export const getNews = () => `/news`;
export const getMulti = (id: string = ':id') => `${getMultiList()}/${id}`;
export const getTheory = (id: string = ':id') => `${getQuestions()}/${id}`;
export const getNew = (id: string = ':id') => `${getNews()}/${id}`;