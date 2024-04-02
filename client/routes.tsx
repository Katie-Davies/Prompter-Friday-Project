import {
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from 'react-router-dom'
import App from './components/App.tsx'
import Home from './components/Home.tsx'
import Prompts from './components/Prompts.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/prompts/:id" element={<Prompts />} />
    </Route>,
  ),
)

export default router
