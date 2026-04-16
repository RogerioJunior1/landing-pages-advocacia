import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home.jsx'
import DireitoConsumidor from './components/DireitoConsumidor.jsx'
import DireitoCivil from './components/DireitoCivil.jsx'
import DireitoImobiliario from './components/DireitoImobiliario.jsx'
import DireitoEmpresarial from './components/DireitoEmpresarial.jsx'

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
      </Routes>
    </Router>
  )
}

export default App
