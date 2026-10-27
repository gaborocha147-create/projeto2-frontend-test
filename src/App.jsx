import { useEffect, useState } from 'react'
import './App.css'
import api from './services/api'

function App() {
  const [imoveis, setImoveis] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    api.get('/imoveis')
      .then((resp) => setImoveis(resp.data))
      .catch(() => setErro('Não foi possível carregar os imóveis.'))
      .finally(() => setCarregando(false))
  }, [])

  if (carregando) return <p>Carregando dados</p>
  if (erro) return <p>{erro}</p>

  return (
    <ul>
      {imoveis.map((imovel) => (
        <li key={imovel.id}>
          <strong>{imovel.tipo}</strong> — {imovel.tipo_logradouro} {imovel.logradouro}, {imovel.bairro}, {imovel.cidade}
          <br />
          {imovel.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </li>
      ))}
    </ul>
  )
}

export default App
