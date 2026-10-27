import { Routes, Route } from 'react-router-dom'
import ListaImoveis from './components/ListaImoveis'
import DetalheImovel from './components/DetalheImovel'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListaImoveis />} />
      <Route path="/imoveis/:id" element={<DetalheImovel />} />
    </Routes>
  )
}

export default App
