import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Inquiry from './pages/Inquiry'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inquiry" element={<Inquiry />} />
    </Routes>
  )
}
