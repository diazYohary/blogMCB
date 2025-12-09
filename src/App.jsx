import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import Layout from './pages/Layout/Layout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        {routes.map((i, index)=>(
          <Route key={index} path={i.path} element={i.Component}></Route>
        ))}
      </Route>

      <Route path="*" element={<h1>404 | Página no encontrada</h1>} />
    </Routes>
  )
}

export default App
