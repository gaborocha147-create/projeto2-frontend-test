import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'

function ListaImoveis() {
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
        <Link to="/imoveis/novo">+ Cadastrar imóvel</Link>
      {imoveis.map((imovel) => (
        <li key={imovel.id}>
            <Link to={`/imoveis/${imovel.id}`}>
                <strong>{imovel.tipo}</strong> — {imovel.logradouro}, {imovel.cidade}
            </Link>
        </li>
      ))}
    </ul>
  )
}

export default ListaImoveis