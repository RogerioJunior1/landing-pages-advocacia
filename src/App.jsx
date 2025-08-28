import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Import landing page components
import DireitoConsumidor from './components/DireitoConsumidor'
import DireitoCivil from './components/DireitoCivil'
import IndenizacoesCobracas from './components/IndenizacoesCobracas'
import DireitoImobiliario from './components/DireitoImobiliario'
import DireitoEmpresarial from './components/DireitoEmpresarial'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/direito-consumidor" element={<DireitoConsumidor />} />
          <Route path="/direito-civil" element={<DireitoCivil />} />
          <Route path="/indenizacoes-cobrancas" element={<IndenizacoesCobracas />} />
          <Route path="/direito-imobiliario" element={<DireitoImobiliario />} />
          <Route path="/direito-empresarial" element={<DireitoEmpresarial />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
