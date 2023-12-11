import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import { Suspense, lazy } from 'react'

const HomePage = lazy(() => import('./pages/HomePage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage'))


function App() {
  return (
    <div className=''>
      <Router>
        <NavBar />
        <Suspense fallback={<h1> Loading Page... </h1>}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
