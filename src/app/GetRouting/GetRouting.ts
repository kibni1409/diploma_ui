export const getCodeEditor = () => '/code-editor';
export const getQuestions = () => `/questions`
export const getTheory = (id: string = ':id') => `${getQuestions()}/${id}`;