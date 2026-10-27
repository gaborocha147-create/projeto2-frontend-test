import { useState } from 'react'

const VAZIO = {
  tipo: 'casa em condominio', tipo_logradouro: 'Rua', logradouro: '',
  bairro: '', cidade: '', cep: '', valor: '', data_aquisicao: '',
}

function FormImovel({ valoresIniciais = VAZIO, onSalvar, textoBotao }) {
  const [form, setForm] = useState(valoresIniciais)
  const [enviando, setEnviando] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setEnviando(true)
    await onSalvar({ ...form, valor: Number(form.valor) })
    setEnviando(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <select name="tipo" value={form.tipo} onChange={handleChange}>
        <option value="casa em condominio">Casa em condomínio</option>
        <option value="apartamento">Apartamento</option>
        <option value="terreno">Terreno</option>
      </select>
      <select name="tipo_logradouro" value={form.tipo_logradouro} onChange={handleChange}>
        <option>Rua</option>
        <option>Avenida</option>
        <option>Travessa</option>
      </select>
      <input name="logradouro" placeholder="Logradouro" value={form.logradouro} onChange={handleChange} required />
      <input name="bairro" placeholder="Bairro" value={form.bairro} onChange={handleChange} required />
      <input name="cidade" placeholder="Cidade" value={form.cidade} onChange={handleChange} required />
      <input name="cep" placeholder="CEP" value={form.cep} onChange={handleChange} required />
      <input name="valor" type="number" step="0.01" placeholder="Valor" value={form.valor} onChange={handleChange} required />
      <input name="data_aquisicao" type="date" value={form.data_aquisicao} onChange={handleChange} required />
      <button type="submit" disabled={enviando}>
        {enviando ? 'Salvando...' : textoBotao}
      </button>
    </form>
  )
}

export default FormImovel