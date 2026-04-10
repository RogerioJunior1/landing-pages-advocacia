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
    icon: <ShoppingCart className="h-7 w-7 text-amber-600" aria-hidden="true" />,
    link: "/direito-consumidor"
  },
  {
    title: "Direito Civil",
    description: "Soluções jurídicas seguras para questões pessoais e patrimoniais.",
    icon: <Users className="h-7 w-7 text-amber-600" aria-hidden="true" />,
    link: "/direito-civil"
  },
  {
    title: "Indenizações e Cobranças",
    description: "Recupere seus direitos e valores com total segurança jurídica.",
    icon: <Scale className="h-7 w-7 text-amber-600" aria-hidden="true" />,
    link: "/indenizacoes-cobrancas"
  },
  {
    title: "Direito Imobiliário",
    description: "Proteja seu patrimônio imobiliário com assessoria especializada.",
    icon: <HomeIcon className="h-7 w-7 text-amber-600" aria-hidden="true" />,
    link: "/direito-imobiliario"
  },
  {
    title: "Direito Empresarial",
    description: "Assessoria jurídica completa para o seu negócio prosperar.",
    icon: <Briefcase className="h-7 w-7 text-amber-600" aria-hidden="true" />,
    link: "/direito-empresarial"
  }
]

const aboutFeatures = [
  { icon: <Award className="h-5 w-5 text-amber-500" />, text: "OAB Ativa" },
  { icon: <Clock className="h-5 w-5 text-amber-500" />, text: "Experiência Comprovada" },
  { icon: <Shield className="h-5 w-5 text-amber-500" />, text: "Profissional Confiável" },
  { icon: <Scale className="h-5 w-5 text-amber-500" />, text: "Especialista" }
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
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-slate-800">
      
      {/* Header Premium (Azul Marinho) */}
      <header className="bg-slate-950 shadow-md border-b border-amber-500/20 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src={balanceImage} alt="Logo Justiça" className="h-10 w-10 transition-transform group-hover:scale-110 sepia brightness-150 hue-rotate-[10deg]" />
              <div>
                <h1 className="text-2xl font-serif font-bold text-amber-500 tracking-wide">Rogério CBJ</h1>
                <p className="text-xs text-slate-300 font-medium tracking-widest uppercase">Advocacia</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-5">
              <div className="hidden md:flex items-center space-x-2 text-amber-500 hover:text-amber-400 transition-colors cursor-pointer" onClick={handleCallClick}>
                <Phone className="h-4 w-4" />
                <span className="font-bold tracking-wide">{CONTACT_INFO.displayPhone}</span>
              </div>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-500 px-5 py-2 rounded-md font-semibold shadow-lg hover:shadow-emerald-900/50 transition-all flex items-center"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section (Fundo creme/pergaminho com destaque em ouro) */}
        <section className="bg-stone-100 border-b border-stone-200 py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-100 via-transparent to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-slate-900">
                  Especialistas em <br />
                  <span className="text-amber-600 italic">Soluções Jurídicas</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
                  Defendemos seus direitos com ética, excelência técnica e foco total em resultados concretos para o seu patrimônio e sua tranquilidade.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-bold rounded-sm shadow-xl hover:shadow-emerald-900/30 transition-all flex items-center justify-center border border-emerald-500"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Fale Conosco Agora
                  </Button>
                  <Button 
                    onClick={handleCallClick}
                    variant="outline"
                    size="lg"
                    className="border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white px-8 py-6 text-lg font-bold rounded-sm transition-all flex items-center justify-center bg-transparent shadow-lg"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Ligar Agora
                  </Button>
                </div>
              </div>
              
              {/* Foto com moldura elegante */}
              <div className="animate-fade-in hidden lg:block">
                <div className="relative p-2">
                  <div className="absolute inset-0 border-2 border-amber-400/60 rounded-tl-[3rem] rounded-br-[3rem] transform translate-x-4 translate-y-4"></div>
                  <img 
                    src={lawyerImage} 
                    alt="Dr. Rogério CBJ em seu escritório"
                    className="w-full h-auto rounded-tl-[3rem] rounded-br-[3rem] shadow-2xl object-cover object-top max-h-[550px] relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Áreas de Especialização (Cards estilo Premium) */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                Áreas de <span className="text-amber-600">Atuação</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Oferecemos atendimento artesanal e altamente especializado nas principais vertentes do direito.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practiceAreas.map((area, index) => (
                <Card key={index} className="bg-white group hover:-translate-y-1 shadow-md hover:shadow-2xl transition-all duration-300 border-t-4 border-t-amber-500 border-x-stone-200 border-b-stone-200 rounded-sm">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex flex-col items-center text-center space-y-4 mb-6">
                      <div className="p-4 bg-stone-100 rounded-full border border-stone-200 group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors duration-300">
                        {area.icon}
                      </div>
                      <h3 className="text-xl font-serif font-bold text-slate-900">
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 mb-8 flex-grow leading-relaxed text-center">
                      {area.description}
                    </p>
                    <Link to={area.link} className="mt-auto">
                      <Button variant="outline" className="w-full font-semibold border-amber-200 text-amber-700 hover:bg-amber-50 hover:text-amber-800 rounded-sm transition-colors">
                        Saber mais detalhes
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Sobre (Elegante e Clássica) */}
        <section className="py-20 bg-white border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                 <div className="absolute inset-0 bg-amber-600 opacity-10 rounded-sm transform rotate-3"></div>
                <img 
                  src={lawyerImage} 
                  alt="Retrato profissional do Advogado Dr. Rogério CBJ"
                  className="w-full h-auto rounded-sm shadow-xl object-cover relative z-10 border border-stone-200"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                    Conheça o Advogado
                  </h2>
                  <div className="w-16 h-1 bg-amber-500"></div>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  Com sólida experiência na advocacia, o <strong className="text-slate-900 font-serif">Dr. Rogério CBJ</strong> atua de forma incansável na defesa dos interesses de seus clientes. Nosso escritório prioriza o atendimento exclusivo, mantendo o rigor ético e a busca constante pelas melhores soluções jurídicas.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  {aboutFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 bg-stone-50 p-4 border-l-2 border-amber-500 shadow-sm">
                      <div className="flex-shrink-0">
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
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-bold rounded-sm shadow-lg transition-all flex items-center border border-emerald-500"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Agendar Consulta
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA (Chamada para Ação) - Azul Marinho */}
        <section className="py-20 bg-slate-950 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-amber-500">
              Precisa de Orientação Jurídica?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Resguarde seus direitos com quem entende do assunto. Entre em contato agora e agende uma análise do seu caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-bold rounded-sm shadow-xl hover:shadow-emerald-900/50 transition-all flex items-center justify-center border border-emerald-500"
              >
                <MessageCircle className="h-6 w-6 mr-2" />
                Conversar no WhatsApp
              </Button>
              <Button 
                onClick={handleCallClick}
                variant="outline"
                size="lg"
                className="border-2 border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-slate-900 px-8 py-6 text-lg font-bold rounded-sm transition-all flex items-center justify-center bg-transparent"
              >
                <Phone className="h-5 w-5 mr-2" />
                {CONTACT_INFO.displayPhone}
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer (Rodapé Premium) */}
      <footer className="bg-slate-900 text-slate-300 py-12 md:py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Coluna da Marca */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center space-x-3">
                <img src={balanceImage} alt="Justiça" className="h-10 w-10 opacity-80 sepia brightness-150 hue-rotate-[10deg]" />
                <div>
                  <h3 className="text-xl font-serif font-bold text-amber-500 tracking-tight">Rogério CBJ</h3>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-widest">Advocacia Especializada</p>
                </div>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed">
                Trabalhamos para oferecer excelência técnica, segurança jurídica e resultados concretos de forma ética e transparente.
              </p>
            </div>
            
            {/* Coluna de Links */}
            <div className="md:col-span-4">
              <h4 className="text-lg font-serif font-bold text-white mb-6 tracking-tight">Áreas de Atuação</h4>
              <ul className="space-y-3">
                {practiceAreas.map((area, idx) => (
                  <li key={idx}>
                    <Link to={area.link} className="text-slate-400 hover:text-amber-500 transition-colors flex items-center group">
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2 opacity-50 group-hover:opacity-100 transition-opacity"></span>
                      {area.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Coluna de Contato */}
            <div className="md:col-span-3">
              <h4 className="text-lg font-serif font-bold text-white mb-6 tracking-tight">Contato Direto</h4>
              <div className="space-y-4">
                <a href={`tel:+${CONTACT_INFO.phone}`} className="flex items-center space-x-3 text-slate-400 hover:text-amber-500 transition-colors group">
                  <div className="p-2 bg-slate-800 border border-slate-700 rounded-sm group-hover:border-amber-500 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{CONTACT_INFO.displayPhone}</span>
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-slate-400 hover:text-amber-500 transition-colors group">
                  <div className="p-2 bg-slate-800 border border-slate-700 rounded-sm group-hover:border-amber-500 transition-colors">
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
