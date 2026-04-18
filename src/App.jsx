import DireitoCivil from './components/DireitoCivil'
import DireitoImobiliario from './components/DireitoImobiliario'
import DireitoEmpresarial from './components/DireitoEmpresarial'
// Omitimos a página de indenizações temporariamente para não dar erro
import IndenizacoesCobracas from './components/IndenizacoesCobracas'

function App() {
  return (
        <Route path="/direito-civil" element={<DireitoCivil />} />
        <Route path="/direito-imobiliario" element={<DireitoImobiliario />} />
        <Route path="/direito-empresarial" element={<DireitoEmpresarial />} />
        <Route
          path="/indenizacoes-cobrancas"
          element={<IndenizacoesCobracas />}
        />
      </Routes>
    </Router>
  )
