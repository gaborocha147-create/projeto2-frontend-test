import { Routes, Route } from 'react-router-dom'
import ListaImoveis from './components/ListaImoveis'
import DetalheImovel from './components/DetalheImovel'
import CadastrarImovel from './components/CadastrarImovel'
import EditarImovel from './components/EditarImovel'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListaImoveis />} />
      <Route path="/imoveis/:id" element={<DetalheImovel />} />
      <Route path="/imoveis/novo" element={<CadastrarImovel />} />
      <Route path="/imoveis/:id/editar" element={<EditarImovel />} />
    </Routes>
  )
}

export default App
