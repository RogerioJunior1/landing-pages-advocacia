import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import DireitoConsumidor from './components/DireitoConsumidor'
import DireitoCivil from './components/DireitoCivil'
import DireitoImobiliario from './components/DireitoImobiliario'
import DireitoEmpresarial from './components/DireitoEmpresarial'
import IndenizacoesCobrancas from './components/IndenizacoesCobrancas'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/direito-consumidor" element={<DireitoConsumidor />} />
        <Route path="/direito-civil" element={<DireitoCivil />} />
        <Route path="/direito-imobiliario" element={<DireitoImobiliario />} />
        <Route path="/direito-empresarial" element={<DireitoEmpresarial />} />
        <Route path="/indenizacoes-cobrancas" element={<IndenizacoesCobrancas />} />
      </Routes>
    </Router>
  )
}

export default App
