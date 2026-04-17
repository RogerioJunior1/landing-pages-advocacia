import { Button } from '@/components/ui/button'
import { Phone, MessageCircle, ArrowLeft, ShoppingCart, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

// Puxando a mesma imagem da balança que usamos na Home
import balanceImage from '../assets/2n8lhMswimEV.png'

const CONTACT = {
  phone: "5515996651411",
  displayPhone: "(15) 99665-1411",
  message: encodeURIComponent("Olá, Dr. Rogério! Acessei o site e preciso de ajuda com Direito do Consumidor.")
}
const WA_URL = `https://wa.me/${CONTACT.phone}?text=${CONTACT.message}`

const DireitoConsumidor = () => {
  const openWA = () => window.open(WA_URL, '_blank', 'noopener,noreferrer')

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#333333] font-sans selection:bg-[#C4A265] selection:text-white">
      {/* Cabeçalho idêntico ao da Home */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4 cursor-pointer">
            <img src={balanceImage} alt="Símbolo Justiça" className="h-10 w-10 object-contain" />
            <div className="flex flex-col">
              <h1 className="text-2xl font-serif text-[#1A1A1A] tracking-tight">Rogério CBJ</h1>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C4A265] font-semibold mt-0.5">Advocacia</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center text-sm font-medium text-gray-500 hover:text-[#C4A265] transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Início
            </Link>
            <Button onClick={openWA} className="bg-[#1A1A1A] hover:bg-[#333333] text-white px-6 py-5 rounded-none font-medium tracking-wide transition-all">
              Fale com o Advogado
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Sessão Principal */}
        <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 mb-6">
              <ShoppingCart className="w-5 h-5 text-[#C4A265]" />
              <span className="text-xs tracking-[0.2em] font-bold text-[#C4A265] uppercase">Direito do Consumidor</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif text-[#1A1A1A] leading-[1.1] tracking-tight mb-8">
              Defesa implacável contra <span className="italic text-[#C4A265]">práticas abusivas.</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Você não precisa aceitar o prejuízo. Somos especialistas em proteger consumidores contra grandes empresas, bancos, companhias aéreas e planos de saúde. Garantimos que seus direitos sejam respeitados e que você seja devidamente indenizado.
            </p>
            <Button onClick={openWA} className="bg-[#C4A265] hover:bg-[#B39155] text-white px-8 py-6 rounded-none text-base font-semibold transition-all flex items-center justify-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Defender Meus Direitos Agora
            </Button>
          </div>
        </section>

        {/* Lista de Problemas Comuns */}
        <section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-100">
          <h2 className="text-3xl font-serif text-[#1A1A1A] mb-12">Principais problemas que resolvemos:</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Voos cancelados, atrasos e extravio de bagagem",
              "Nome negativado indevidamente (SPC/Serasa)",
              "Planos de saúde (negativa de cirurgias, exames ou home care)",
              "Atraso na entrega de produtos ou compras com defeito",
              "Cobranças indevidas e juros abusivos em empréstimos",
              "Fraudes bancárias, golpes no PIX e clonagem de cartão"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4 p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CheckCircle2 className="w-6 h-6 text-[#C4A265] flex-shrink-0" />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default DireitoConsumidor
