import { useNavigate, Link } from 'react-router-dom'
import api from '../services/api'
import FormImovel from './FormImovel'

function CadastrarImovel() {
  const navigate = useNavigate()

  async function salvar(dados) {
    try {
      const resp = await api.post('/imoveis', dados)
      navigate(`/imoveis/${resp.data.id}`)
    } catch (err) {
      alert(err.response?.data?.erro ?? err.response?.data ?? 'Erro ao cadastrar.')
    }
  }

  return (
    <div>
      <Link to="/">← Voltar</Link>
      <h1>Cadastrar imóvel</h1>
      <FormImovel onSalvar={salvar} textoBotao="Cadastrar" />
    </div>
  )
}

export default CadastrarImovel