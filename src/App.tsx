import { useState } from 'react'
import LogInPage from './components/login/LogInPage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='dark'>

      <div className='dark:bg-slate-700'>
        <LogInPage></LogInPage>
      </div>
    </div>
  )
}


export default App;
