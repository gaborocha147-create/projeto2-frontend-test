import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import api from '../services/api'
import FormImovel from './FormImovel'

function EditarImovel() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [imovel, setImovel] = useState(null)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    api.get(`/imoveis/${id}`)
      .then((resp) => setImovel(resp.data))
      .catch(() => setErro('Imóvel não encontrado.'))
  }, [id])

  async function salvar(dados) {
    try {
      await api.put(`/imoveis/${id}`, dados)
      navigate(`/imoveis/${id}`)
    } catch (err) {
      alert(err.response?.data?.erro ?? err.response?.data ?? 'Erro ao atualizar.')
    }
  }

  if (erro) return <p>{erro}</p>
  if (!imovel) return <p>Carregando...</p>

  return (
    <div>
      <Link to={`/imoveis/${id}`}>← Voltar</Link>
      <h1>Editar imóvel</h1>
      <FormImovel valoresIniciais={imovel} onSalvar={salvar} textoBotao="Salvar alterações" />
    </div>
  )
}

export default EditarImovel