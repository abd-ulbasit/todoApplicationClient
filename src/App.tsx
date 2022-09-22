import { Route, Routes } from 'react-router-dom';
import AddTodo from './components/AddTodo/AddTodo';
import LogInPage from './components/login/LogInPage';
import NotFound from './components/notfound or error/NotFound';
import ServerError from './components/notfound or error/ServerError';
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
              <Route path="/addtodo" element={<AddTodo></AddTodo>} />
              <Route path="/servererror" element={<ServerError></ServerError>} />
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
