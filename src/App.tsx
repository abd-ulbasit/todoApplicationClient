import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddTodo from './components/AddTodo/AddTodo';
import ArchivedList from './components/ArchivedTodos/ArchivedList';
import { AuthContext } from './components/Context/AuthContext';
import { ThemeContext } from './components/Context/ThemeContext';
import LogInPage from './components/login/LogInPage';
import NotFound from './components/notfound or error/NotFound';
import ServerError from './components/notfound or error/ServerError';
import TodoList from './components/TodoList/TodoList';
import Wrapper from './components/Wrapper';
function App() {
  const authCtx = useContext(AuthContext);
  const isAuthorized = authCtx.userName;
  const themeCtx = useContext(ThemeContext);
  console.log("In the app theme is", themeCtx.dark);
  return (
    <div className={`${themeCtx.dark ? 'dark' : ''}`}>
      {isAuthorized &&
        <div className='-'>
          <Wrapper  >
            <Routes>
              <Route path="/" element={<TodoList></TodoList>} />
              <Route path="/addtodo" element={<AddTodo></AddTodo>} />
              <Route path="/archivedtodos" element={<ArchivedList></ArchivedList>} />
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
