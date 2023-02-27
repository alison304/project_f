import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterForm from './views/RegisterForm/RegisterForm';
import LoginForm from './views/LoginForm/LoginForm';
import PageInit from './views/PageInit/PageInit';
import FormList from './views/FormList/FormList';
import MovieList from './views/MovieList/MovieList';
import MovieForm from './views/MovieForm/MovieForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageInit />}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='/user/:id' element={<RegisterForm/>}/>
          <Route path='/user/list' element={<FormList/>}/>   
          <Route path='/movie/list' element={<MovieList/>}/> 
          <Route path='/movie/:id' element={<MovieForm/>}/> 
          <Route path='/movie' element={<MovieForm/>}/>          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
