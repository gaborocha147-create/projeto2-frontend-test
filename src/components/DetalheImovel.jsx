import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../services/api'

function DetalheImovel() {
  const { id } = useParams()
  const [imovel, setImovel] = useState(null)
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    setCarregando(true)
    api.get(`/imoveis/${id}`)
      .then((resp) => setImovel(resp.data))
      .catch((err) => {
        if (err.response?.status === 404) setErro('Imóvel não encontrado.')
        else setErro('Erro ao carregar o imóvel.')
      })
      .finally(() => setCarregando(false))
  }, [id])

  if (carregando) return <p>Carregando...</p>
  if (erro) return <><p>{erro}</p><Link to="/">Voltar</Link></>

  return (
    <div>
      <Link to="/">← Voltar </Link>
      <Link to={`/imoveis/${id}/editar`}>Editar</Link>
      <h1>{imovel.tipo}</h1>
      <p>{imovel.tipo_logradouro} {imovel.logradouro}</p>
      <p>{imovel.bairro} — {imovel.cidade} — CEP {imovel.cep}</p>
      <p>Valor: {imovel.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      <p>Adquirido em: {imovel.data_aquisicao.split('-').reverse().join('/')}</p>
    </div>
  )
}

export default DetalheImovel