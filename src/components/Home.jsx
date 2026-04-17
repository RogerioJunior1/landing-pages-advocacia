import { Button } from '@/components/ui/button'
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
  Briefcase,
  ChevronRight,
  CheckCircle2
} from 'lucide-react'
import { Link } from 'react-router-dom'

// --- Imagens Originais ---
import balanceImage from '../assets/2n8lhMswimEV.png'
import lawyerImage from '../assets/juninho.jpeg'

const CONTACT = {
  phone: "5515996651411",
  displayPhone: "(15) 99665-1411",
  message: encodeURIComponent("Olá, Dr. Rogério! Acessei o site e gostaria de um atendimento jurídico.")
}
const WA_URL = `https://wa.me/${CONTACT.phone}?text=${CONTACT.message}`

const areas = [
  { title: "Direito do Consumidor", desc: "Defesa implacável contra práticas abusivas de empresas e prestadores de serviços.", icon: ShoppingCart, link: "/direito-consumidor" },
  { title: "Direito Civil", desc: "Resolução estratégica de litígios pessoais, familiares e patrimoniais.", icon: Users, link: "/direito-civil" },
  { title: "Indenizações e Cobranças", desc: "Atuação incisiva na recuperação de valores e reparação de danos (morais e materiais).", icon: Scale, link: "/indenizacoes-cobrancas" },
  { title: "Direito Imobiliário", desc: "Segurança jurídica em contratos, compra, venda e regularização de imóveis.", icon: HomeIcon, link: "/direito-imobiliario" },
  { title: "Direito Empresarial", desc: "Blindagem jurídica e assessoria consultiva para o crescimento do seu negócio.", icon: Briefcase, link: "/direito-empresarial" }
]

const Home = () => {
  const openWA = () => window.open(WA_URL, '_blank', 'noopener,noreferrer')

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#333333] font-sans selection:bg-[#C4A265] selection:text-white">
      
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
          <div className="flex items-center space-x-4 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img src={balanceImage} alt="Símbolo Justiça" className="h-10 w-10 object-contain" />
            <div className="flex flex-col">
              <h1 className="text-2xl font-serif text-[#1A1A1A] tracking-tight">Rogério CBJ</h1>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C4A265] font-semibold mt-0.5">Advocacia</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href={`tel:+${CONTACT.phone}`} className="flex items-center text-sm font-medium hover:text-[#C4A265] transition-colors">
              <Phone className="w-4 h-4 mr-2 text-[#C4A265]" />
              {CONTACT.displayPhone}
            </a>
            <Button onClick={openWA} className="bg-[#1A1A1A] hover:bg-[#333333] text-white px-6 py-5 rounded-none font-medium tracking-wide transition-all">
              Fale com o Advogado
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative pt-12 pb-24 lg:pt-24 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-8 z-10">
              <div className="inline-flex items-center space-x-2 border border-[#C4A265]/30 bg-[#C4A265]/5 px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#C4A265] animate-pulse"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C4A265]">Atendimento Personalizado</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-serif text-[#1A1A1A] leading-[1.1] tracking-tight">
                Defesa sólida <br/>
                <span className="italic text-[#C4A265]">para seus direitos.</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Atuação combativa, técnica e estratégica. Oferecemos segurança jurídica com excelência para pessoas físicas e empresas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button onClick={openWA} className="bg-[#C4A265] hover:bg-[#B39155] text-white px-8 py-6 rounded-none text-base font-semibold transition-all flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Agendar Consulta
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-4 bg-[#C4A265] opacity-10 blur-2xl rounded-full"></div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
                <img 
                  src={lawyerImage} 
                  alt="Dr. Rogério CBJ"
                  className="object-cover object-top w-full h-full scale-105 hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent opacity-80"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1A1A1A] py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-800">
            <div className="flex items-center space-x-4 md:px-8">
              <Award className="w-10 h-10 text-[#C4A265] stroke-[1.5]" />
              <div>
                <h4 className="text-white font-serif text-xl">OAB Ativa</h4>
                <p className="text-gray-400 text-sm">Registro regular e verificado</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 md:px-8 pt-8 md:pt-0">
              <Shield className="w-10 h-10 text-[#C4A265] stroke-[1.5]" />
              <div>
                <h4 className="text-white font-serif text-xl">Sigilo Absoluto</h4>
                <p className="text-gray-400 text-sm">Seus dados e caso protegidos</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 md:px-8 pt-8 md:pt-0">
              <Scale className="w-10 h-10 text-[#C4A265] stroke-[1.5]" />
              <div>
                <h4 className="text-white font-serif text-xl">Atuação Especializada</h4>
                <p className="text-gray-400 text-sm">Foco nas melhores soluções</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-xs tracking-[0.2em] font-bold text-[#C4A265] uppercase mb-4">Especialidades</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">Áreas de Atuação</h3>
            </div>
            <p className="text-gray-600 max-w-md">Soluções sob medida para o seu momento de vida ou para o seu modelo de negócio.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {areas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div key={idx} className="group cursor-pointer">
                  <div className="mb-6 w-14 h-14 bg-white border border-gray-100 flex items-center justify-center rounded-none shadow-sm group-hover:bg-[#C4A265] transition-colors duration-500">
                    <Icon className="w-6 h-6 text-[#1A1A1A] group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-serif text-[#1A1A1A] mb-3">{area.title}</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">{area.desc}</p>
                  <Link to={area.link} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center text-sm font-semibold text-[#C4A265] hover:text-[#1A1A1A] transition-colors">
                    Saiba mais <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                  <div className="h-px w-full bg-gray-200 mt-6 group-hover:bg-[#C4A265] transition-colors duration-500"></div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="bg-white border-y border-gray-100 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 relative">
                <div className="absolute top-4 -left-4 w-full h-full border border-[#C4A265] z-0 hidden md:block rounded-3xl"></div>
                <img 
                  src={lawyerImage} 
                  alt="Dr. Rogério"
                  className="w-full h-auto object-cover relative z-10 grayscale-[20%] rounded-3xl shadow-lg"
                />
              </div>
              
              <div className="lg:col-span-7 space-y-8 lg:pl-10">
                <div>
                  <h2 className="text-xs tracking-[0.2em] font-bold text-[#C4A265] uppercase mb-4">O Profissional</h2>
                  <h3 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-6">Dr. Rogério CBJ</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Com excelência técnica e rigor ético, o escritório é pautado pela transparência e pelo compromisso inabalável com os resultados de cada cliente. 
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Nossa missão não é apenas resolver litígios, mas proporcionar <strong className="text-[#1A1A1A] font-semibold">tranquilidade e segurança jurídica</strong> através de um atendimento humanizado, onde você fala diretamente com o especialista responsável pelo seu caso.
                  </p>
                </div>

                <ul className="grid sm:grid-cols-2 gap-4 pt-4">
                  {[
                    "Especialista em Litígios Complexos",
                    "Atendimento Humanizado",
                    "Transparência em todas as etapas",
                    "Análise Estratégica de Riscos"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-sm text-[#1A1A1A] font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#C4A265]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <Button onClick={openWA} className="bg-[#1A1A1A] hover:bg-[#333333] text-white px-8 py-6 rounded-none text-sm tracking-wide uppercase transition-all">
                    Falar diretamente com o Advogado
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-32 bg-[#1A1A1A] text-center px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8 flex flex-col items-center">
            <img src={balanceImage} alt="Brasão Advocacia" className="w-24 h-24 object-contain opacity-90 drop-shadow-lg" />
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
              A justiça ao seu alcance.
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Não adie a resolução do seu problema. Agende uma consultoria para avaliarmos o seu cenário jurídico.
            </p>
            <div className="pt-8">
              <Button onClick={openWA} className="bg-[#C4A265] hover:bg-white hover:text-[#1A1A1A] text-white px-10 py-7 rounded-none text-base font-semibold transition-all">
                Iniciar Atendimento no WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0A0A0A] text-gray-400 py-16 border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-3">
            <h3 className="text-2xl font-serif text-white">Rogério CBJ</h3>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href={WA_URL} target="_blank" rel="noreferrer" className="hover:text-[#C4A265] transition-colors">WhatsApp</a>
            <a href={`tel:+${CONTACT.phone}`} className="hover:text-[#C4A265] transition-colors">Telefone</a>
            <span className="text-gray-600">|</span>
            <span className="text-gray-500">OAB Ativa</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 text-xs text-gray-600 text-center md:text-left flex flex-col md:flex-row justify-between">
          <p>&copy; {new Date().getFullYear()} Rogério CBJ Advocacia. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com excelência.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
