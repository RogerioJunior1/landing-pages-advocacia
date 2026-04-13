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

// --- Configurações Constantes ---
const CONTACT_INFO = {
  phone: "5515996651411",
  displayPhone: "(15) 99665-1411",
  message: encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços jurídicos.")
}
const WHATSAPP_URL = `https://wa.me/${CONTACT_INFO.phone}?text=${CONTACT_INFO.message}`

// --- Dados das Seções ---
const practiceAreas = [
  {
    title: "Direito do Consumidor",
    description: "Defenda seus direitos como consumidor contra práticas abusivas.",
    icon: <ShoppingCart className="h-6 w-6 text-blue-600" aria-hidden="true" />,
    link: "/direito-consumidor"
  },
  {
    title: "Direito Civil",
    description: "Soluções jurídicas seguras para questões pessoais e patrimoniais.",
    icon: <Users className="h-6 w-6 text-blue-600" aria-hidden="true" />,
    link: "/direito-civil"
  },
  {
    title: "Indenizações e Cobranças",
    description: "Recupere seus direitos e valores com total segurança jurídica.",
    icon: <Scale className="h-6 w-6 text-blue-600" aria-hidden="true" />,
    link: "/indenizacoes-cobrancas"
  },
  {
    title: "Direito Imobiliário",
    description: "Proteja seu patrimônio imobiliário com assessoria especializada.",
    icon: <HomeIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />,
    link: "/direito-imobiliario"
  },
  {
    title: "Direito Empresarial",
    description: "Assessoria jurídica completa para o seu negócio prosperar.",
    icon: <Briefcase className="h-6 w-6 text-blue-600" aria-hidden="true" />,
    link: "/direito-empresarial"
  }
]

const aboutFeatures = [
  { icon: <Award className="h-5 w-5 text-yellow-500" />, text: "OAB Ativa" },
  { icon: <Clock className="h-5 w-5 text-blue-600" />, text: "Experiência Comprovada" },
  { icon: <Shield className="h-5 w-5 text-green-600" />, text: "Profissional Confiável" },
  { icon: <Scale className="h-5 w-5 text-blue-800" />, text: "Especialista" }
]

const Home = () => {
  // --- Handlers ---
  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')
  }

  const handleCallClick = () => {
    window.open(`tel:+${CONTACT_INFO.phone}`, '_self')
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src={balanceImage} alt="Logo Justiça" className="h-10 w-10 transition-transform group-hover:scale-110" />
              <div>
                <h1 className="text-xl font-bold text-slate-900 tracking-tight">Rogério CBJ</h1>
                <p className="text-sm text-slate-600 font-medium">Advocacia</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-5">
              <div className="hidden md:flex items-center space-x-2 text-blue-800 hover:text-blue-600 transition-colors cursor-pointer" onClick={handleCallClick}>
                <Phone className="h-4 w-4" />
                <span className="font-bold tracking-wide">{CONTACT_INFO.displayPhone}</span>
              </div>
              <Button 
                onClick={handleWhatsAppClick}
                className="whatsapp-button bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-gradient bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                  Especialistas em <span className="text-blue-400">Soluções Jurídicas</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed">
                  Defendemos seus direitos com ética, experiência, dedicação e foco total em resultados comprovados para o seu caso.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="whatsapp-button bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-green-500/20 transition-all flex items-center justify-center"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Fale Conosco Agora
                  </Button>
                  <Button 
                    onClick={handleCallClick}
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/80 text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg font-bold rounded-xl transition-all flex items-center justify-center bg-transparent"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Ligar Agora
                  </Button>
                </div>
              </div>
              
              <div className="animate-fade-in hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-2xl transform translate-x-4 translate-y-4 opacity-20"></div>
                  <img 
                    src={lawyerImage} 
                    alt="Dr. Rogério CBJ em seu escritório"
                    className="w-full h-auto rounded-2xl shadow-2xl object-cover object-top max-h-[600px] relative z-10 border-4 border-slate-800/50"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Nossas Áreas de Especialização
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Oferecemos atendimento técnico, estratégico e altamente especializado nas principais vertentes do direito.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceAreas.map((area, index) => (
                <Card key={index} className="law-card group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border-slate-200">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        {area.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 leading-tight">
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                      {area.description}
                    </p>
                    <Link to={area.link} className="mt-auto">
                      <Button variant="outline" className="w-full font-semibold border-slate-300 hover:bg-slate-100 hover:text-slate-900 transition-colors">
                        Saber mais detalhes
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                 <div className="absolute -inset-4 bg-slate-100 rounded-3xl transform -rotate-2"></div>
                <img 
                  src={lawyerImage} 
                  alt="Retrato profissional do Advogado Dr. Rogério CBJ"
                  className="w-full h-auto rounded-2xl shadow-lg object-cover relative z-10"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                    Conheça o Advogado
                  </h2>
                  <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
                </div>
                
                <p className="text-lg text-slate-700 leading-relaxed">
                  Com sólida experiência na advocacia, o <strong className="text-slate-900">Dr. Rogério CBJ</strong> atua de forma incansável na defesa dos interesses de seus clientes. Nosso escritório prioriza o atendimento humanizado, ágil e focado na busca pelas melhores soluções jurídicas para cada caso.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  {aboutFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div className="flex-shrink-0 bg-white p-2 rounded-lg shadow-sm">
                        {feature.icon}
                      </div>
                      <span className="font-semibold text-slate-800">{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6">
                  <Button 
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="whatsapp-button bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg font-bold rounded-xl shadow-md transition-all flex items-center"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Agendar Consulta
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-900 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Precisa de Orientação Jurídica?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Não adie a resolução dos seus problemas. Entre em contato agora mesmo e agende uma análise preliminar do seu caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-green-500/20 transition-all flex items-center justify-center"
              >
                <MessageCircle className="h-6 w-6 mr-2" />
                Conversar no WhatsApp
              </Button>
              <Button 
                onClick={handleCallClick}
                variant="outline"
                size="lg"
                className="border-2 border-white/50 text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg font-bold rounded-xl transition-all flex items-center justify-center bg-transparent"
              >
                <Phone className="h-5 w-5 mr-2" />
                {CONTACT_INFO.displayPhone}
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Brand Col */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center space-x-3">
                <img src={balanceImage} alt="Justiça" className="h-10 w-10 opacity-90" />
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Rogério CBJ</h3>
                  <p className="text-sm text-blue-400 font-medium">Advocacia Especializada</p>
                </div>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed">
                Trabalhamos incansavelmente para oferecer segurança jurídica, excelência técnica e resultados concretos para nossos clientes.
              </p>
            </div>
            
            {/* Links Col */}
            <div className="md:col-span-4">
              <h4 className="text-lg font-bold text-white mb-6 tracking-tight">Áreas de Atuação</h4>
              <ul className="space-y-3">
                {practiceAreas.map((area, idx) => (
                  <li key={idx}>
                    <Link to={area.link} className="text-slate-400 hover:text-blue-400 hover:underline transition-colors flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 opacity-50"></span>
                      {area.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Col */}
            <div className="md:col-span-3">
              <h4 className="text-lg font-bold text-white mb-6 tracking-tight">Contato Direto</h4>
              <div className="space-y-4">
                <a href={`tel:+${CONTACT_INFO.phone}`} className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors group">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{CONTACT_INFO.displayPhone}</span>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors group">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-green-600 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <span className="font-medium">WhatsApp 24h</span>
                </a>
              </div>
            </div>

          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Rogério CBJ Advocacia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
