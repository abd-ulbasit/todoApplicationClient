import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import LogInPage from './components/login/LogInPage';
import NAVBAR from './components/Navbar/NavbarfromTailWindUI';
import NotFound from './components/NotFound/NotFound';
import TodoList from './components/TodoList/TodoList';
import Wrapper from './components/Wrapper';
function App() {
  const isAuthorized = true;
  return (
    <div className='dark'>
      {isAuthorized &&
        <div className='-'>
          <Wrapper>
            <Routes>
              <Route path="/" element={<TodoList></TodoList>} />
              <Route path="*" element={<NotFound></NotFound>} />
            </Routes>
          </Wrapper>

        </div>
      }
      {!isAuthorized &&
        <Routes>
          <Route path='/' element={<LogInPage></LogInPage>} />
          <Route path='/*' element={<NotFound></NotFound>} />
        </Routes>

      }
    </div>
  )
}


export default App;
