import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Phone, 
  MessageCircle, 
  Scale, 
  Shield, 
  Award, 
  Clock, 
  Users, 
  ShoppingCart, 
  Home as HomeIcon, 
  Briefcase 
} from 'lucide-react'
import { Link } from 'react-router-dom'

// --- Imagens ---
import balanceImage from '../assets/2n8lhMswimEV.png'
import lawyerImage from '../assets/juninho.jpeg'

// --- Configurações ---
const CONTACT_INFO = {
  phone: "5515996651411",
  displayPhone: "(15) 99665-1411",
  message: encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços jurídicos.")
}

const WHATSAPP_URL = `https://wa.me/${CONTACT_INFO.phone}?text=${CONTACT_INFO.message}`

const Home = () => {

  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_URL, '_blank')
  }

  const handleCallClick = () => {
    window.open(`tel:+${CONTACT_INFO.phone}`, '_self')
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      {/* HEADER */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
          
          <div className="flex items-center space-x-3 cursor-pointer">
            <img 
              src={balanceImage} 
              alt="Logo" 
              className="h-10 w-10 brightness-110 contrast-125" 
            />
            <div>
              <h1 className="text-xl font-bold">Rogério CBJ</h1>
              <p className="text-sm text-gray-500">Advocacia</p>
            </div>
          </div>

          <Button onClick={handleWhatsAppClick} className="bg-green-500 text-white">
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-slate-900 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Soluções Jurídicas
        </h1>
        <p className="text-gray-300 mb-6">
          Defesa completa dos seus direitos com excelência
        </p>

        <div className="flex justify-center gap-4">
          <Button onClick={handleWhatsAppClick} className="bg-green-500">
            WhatsApp
          </Button>
          <Button onClick={handleCallClick} variant="outline">
            Ligar
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-gray-400 py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex items-center space-x-3">

          {/* 🔥 AQUI FOI CORRIGIDO */}
          <img 
            src={balanceImage} 
            alt="Logo" 
            className="h-10 w-10 brightness-110 contrast-125" 
          />

          <div>
            <h3 className="text-white font-bold">Rogério CBJ</h3>
            <p>Advocacia</p>
          </div>

        </div>
      </footer>

    </div>
  )
}

export default Home
