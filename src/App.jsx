import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importando todas as páginas do seu site
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
        {/* Rota Principal */}
        <Route path="/" element={<Home />} />
        
        {/* Rotas das Áreas de Atuação */}
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
