import '../assets/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import ChatPage from './ChatPage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/' element={<ChatPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
