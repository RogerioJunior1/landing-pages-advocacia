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
import {
  ArrowLeft,
  ChevronRight,
  CheckCircle2
  CheckCircle2,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom'

// --- Imagens ---
// AQUI ESTÁ A MÁGICA: Importando o arquivo exato que você me mostrou!
import balanceImage from '../assets/2n8lhMswimEV.png'
import lawyerImage from '../assets/juninho.jpeg'

// --- Configurações ---
const CONTACT = {
  phone: "5515996651411",
  displayPhone: "(15) 99665-1411",
  message: encodeURIComponent("Olá, Dr. Rogério! Acessei o site e gostaria de um atendimento jurídico.")
  phone: '5515996651411',
  displayPhone: '(15) 99665-1411',
  message: encodeURIComponent(
    'Olá, Dr. Rogério! Acessei o site e gostaria de um atendimento jurídico.'
  ),
}

const WA_URL = `https://wa.me/${CONTACT.phone}?text=${CONTACT.message}`

const areas = [
  { title: "Direito do Consumidor", desc: "Defesa implacável contra práticas abusivas de empresas e prestadores de serviços.", icon: ShoppingCart, link: "/direito-consumidor" },
  { title: "Direito Civil", desc: "Resolução estratégica de litígios pessoais, familiares e patrimoniais.", icon: Users, link: "/direito-civil" },
  { title: "Indenizações e Cobranças", desc: "Atuação incisiva na recuperação de valores e reparação de danos (morais e materiais).", icon: Scale, link: "/indenizacoes-cobrancas" },
  { title: "Direito Imobiliário", desc: "Segurança jurídica em contratos, compra, venda e regularização de imóveis.", icon: HomeIcon, link: "/direito-imobiliario" },
  { title: "Direito Empresarial", desc: "Blindagem jurídica e assessoria consultiva para o crescimento do seu negócio.", icon: Briefcase, link: "/direito-empresarial" }
  {
    title: 'Direito do Consumidor',
    desc: 'Defesa implacável contra práticas abusivas de empresas e prestadores de serviços.',
    link: '/direito-consumidor',
  },
  {
    title: 'Direito Civil',
    desc: 'Resolução estratégica de litígios pessoais, familiares e patrimoniais.',
    link: '/direito-civil',
  },
  {
    title: 'Indenizações e Cobranças',
    desc: 'Atuação incisiva na recuperação de valores e reparação de danos (morais e materiais).',
    link: '/indenizacoes-cobrancas',
  },
  {
    title: 'Direito Imobiliário',
    desc: 'Segurança jurídica em contratos, compra, venda e regularização de imóveis.',
    link: '/direito-imobiliario',
  },
  {
    title: 'Direito Empresarial',
    desc: 'Blindagem jurídica e assessoria consultiva para o crescimento do seu negócio.',
    link: '/direito-empresarial',
  },
]

const Home = () => {
const accentMap = {
  gold: '#C4A265',
  yellow: '#D0A243',
  brown: '#9B7B52',
  default: '#C4A265',
}

const LandingPageLayout = ({
  title,
  subtitle,
  heroImage,
  services = [],
  benefits = [],
  ctaText = 'Falar com Especialista',
  accentColor = 'default',
}) => {
  const location = useLocation()
  const accent = accentMap[accentColor] ?? accentMap.default
  const pageLabel = title?.split(' e ')[0] ?? 'Especialidade'

  const openWA = () => window.open(WA_URL, '_blank', 'noopener,noreferrer')
  const openCall = () => window.open(`tel:+${CONTACT.phone}`, '_self')

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#333333] font-sans selection:bg-[#C4A265] selection:text-white">
      
      {/* HEADER MINIMALISTA */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
          <div className="flex items-center space-x-4 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            {/* Logo do Header */}
            <img src={balanceImage} alt="Símbolo Justiça" className="h-10 w-10 object-contain" />
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-12">
          <Link to="/" className="flex items-center space-x-4">
            <img
              src={balanceImage}
              alt="Símbolo Justiça"
              className="h-10 w-10 object-contain"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl font-serif text-[#1A1A1A] tracking-tight">Rogério CBJ</h1>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C4A265] font-semibold mt-0.5">Advocacia</span>
              <h1 className="text-2xl tracking-tight text-[#1A1A1A] font-serif">
                Rogério CBJ
              </h1>
              <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C4A265]">
                Advocacia
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href={`tel:+${CONTACT.phone}`} className="flex items-center text-sm font-medium hover:text-[#C4A265] transition-colors">
              <Phone className="w-4 h-4 mr-2 text-[#C4A265]" />
          </Link>

          <div className="hidden items-center space-x-8 md:flex">
            <Link
              to="/"
              className="flex items-center text-sm font-medium text-gray-500 transition-colors hover:text-[#C4A265]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Início
            </Link>
            <a
              href={`tel:+${CONTACT.phone}`}
              className="flex items-center text-sm font-medium transition-colors hover:text-[#C4A265]"
            >
              <Phone className="mr-2 h-4 w-4 text-[#C4A265]" />
              {CONTACT.displayPhone}
            </a>
            <Button onClick={openWA} className="bg-[#1A1A1A] hover:bg-[#333333] text-white px-6 py-5 rounded-none font-medium tracking-wide transition-all">
            <Button
              onClick={openWA}
              className="rounded-none bg-[#1A1A1A] px-6 py-5 font-medium tracking-wide text-white transition-all hover:bg-[#333333]"
            >
              Fale com o Advogado
            </Button>
          </div>
      </header>

      <main>
        {/* HERO SECTION EDITORIAL */}
        <section className="relative pt-12 pb-24 lg:pt-24 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-8 z-10">
              <div className="inline-flex items-center space-x-2 border border-[#C4A265]/30 bg-[#C4A265]/5 px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#C4A265] animate-pulse"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C4A265]">Atendimento Personalizado</span>
        <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-12 lg:px-12 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="max-w-3xl space-y-8">
              <div
                className="inline-flex items-center rounded-full border px-4 py-2"
                style={{
                  borderColor: `${accent}4d`,
                  backgroundColor: `${accent}0d`,
                }}
              >
                <span
                  className="mr-2 h-2 w-2 rounded-full"
                  style={{ backgroundColor: accent }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: accent }}
                >
                  {pageLabel}
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-serif text-[#1A1A1A] leading-[1.1] tracking-tight">
                Defesa sólida <br/>
                <span className="italic text-[#C4A265]">para seus direitos.</span>

              <h1 className="text-5xl leading-[1.05] tracking-tight text-[#1A1A1A] font-serif lg:text-7xl">
                {title}
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Atuação combativa, técnica e estratégica. Oferecemos segurança jurídica com excelência para pessoas físicas e empresas.

              <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
                {subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button onClick={openWA} className="bg-[#C4A265] hover:bg-[#B39155] text-white px-8 py-6 rounded-none text-base font-semibold transition-all flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Agendar Consulta

              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <Button
                  onClick={openWA}
                  className="flex items-center justify-center rounded-none px-8 py-6 text-base font-semibold text-white transition-all hover:brightness-95"
                  style={{ backgroundColor: accent }}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {ctaText}
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
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-full blur-3xl"
                style={{ backgroundColor: `${accent}26` }}
              />
              <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
                <img
                  src={heroImage}
                  alt={title}
                  className="h-full min-h-[420px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA]/30 via-transparent to-transparent" />
              </div>
            </div>
            
          </div>
        </section>

        {/* BARRA DE CREDIBILIDADE (Dark Mode) */}
        <section className="bg-[#1A1A1A] py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-800">
            <div className="flex items-center space-x-4 md:px-8">
              <Award className="w-10 h-10 text-[#C4A265] stroke-[1.5]" />
        <section className="border-y border-gray-100 bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h4 className="text-white font-serif text-xl">OAB Ativa</h4>
                <p className="text-gray-400 text-sm">Registro regular e verificado</p>
                <h2
                  className="mb-4 text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: accent }}
                >
                  Atuação Estratégica
                </h2>
                <h3 className="text-4xl text-[#1A1A1A] font-serif md:text-5xl">
                  Como Podemos Ajudar
                </h3>
              </div>
              <p className="max-w-xl text-gray-600">
                Cada demanda recebe análise minuciosa, estratégia sob medida e
                condução direta para buscar segurança jurídica e resultado.
              </p>
            </div>
            <div className="flex items-center space-x-4 md:px-8 pt-8 md:pt-0">
              <Shield className="w-10 h-10 text-[#C4A265] stroke-[1.5]" />
              <div>
                <h4 className="text-white font-serif text-xl">Sigilo Absoluto</h4>
                <p className="text-gray-400 text-sm">Seus dados e caso protegidos</p>
              </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={`${service.title}-${index}`}
                  className="group border border-gray-100 bg-[#FAFAFA] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border transition-colors duration-300"
                    style={{
                      backgroundColor: `${accent}14`,
                      borderColor: `${accent}33`,
                    }}
                  >
                    {service.icon}
                  </div>
                  <h4 className="mb-3 text-2xl text-[#1A1A1A] font-serif">
                    {service.title}
                  </h4>
                  <p className="leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
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

        {/* ÁREAS DE ATUAÇÃO (Minimalista / Editorial) */}
        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-xs tracking-[0.2em] font-bold text-[#C4A265] uppercase mb-4">Especialidades</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">Áreas de Atuação</h3>
        <section className="bg-[#1A1A1A] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-12 text-center">
              <h2
                className="mb-4 text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: accent }}
              >
                Diferenciais do Escritório
              </h2>
              <h3 className="text-4xl text-white font-serif md:text-5xl">
                O Que Você Ganha com Nossa Atuação
              </h3>
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
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div
                  key={`${benefit.title}-${index}`}
                  className="border border-white/8 bg-white/4 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/7"
                >
                  <div
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${accent}33` }}
                  >
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-serif text-[#1A1A1A] mb-3">{area.title}</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">{area.desc}</p>
                  <Link to={area.link} className="inline-flex items-center text-sm font-semibold text-[#C4A265] hover:text-[#1A1A1A] transition-colors">
                    Saiba mais <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                  <div className="h-px w-full bg-gray-200 mt-6 group-hover:bg-[#C4A265] transition-colors duration-500"></div>
                  <h4 className="mb-3 text-2xl text-white font-serif">
                    {benefit.title}
                  </h4>
                  <p className="leading-relaxed text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE O ADVOGADO (Layout Dividido e Elegante) */}
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
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                className="mb-4 text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: accent }}
              >
                Outras Especialidades
              </h2>
              <h3 className="text-4xl text-[#1A1A1A] font-serif md:text-5xl">
                Explore Outras Áreas de Atuação
              </h3>
            </div>
            <p className="max-w-xl text-gray-600">
              Se sua necessidade envolver outra frente jurídica, você pode
              navegar diretamente para a página correspondente.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => {
              const isCurrent = area.link === location.pathname

              return (
                <div key={area.title} className="group">
                  <div
                    className="mb-6 h-1 w-20 transition-all duration-300 group-hover:w-28"
                    style={{ backgroundColor: isCurrent ? accent : '#E5E7EB' }}
                  />
                  <h4 className="mb-3 text-xl text-[#1A1A1A] font-serif">
                    {area.title}
                  </h4>
                  <p className="mb-4 leading-relaxed text-gray-600">
                    {area.desc}
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
                  {isCurrent ? (
                    <span
                      className="inline-flex items-center text-sm font-semibold"
                      style={{ color: accent }}
                    >
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Pagina atual
                    </span>
                  ) : (
                    <Link
                      to={area.link}
                      className="inline-flex items-center text-sm font-semibold transition-colors hover:text-[#1A1A1A]"
                      style={{ color: accent }}
                    >
                      Saiba mais <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
              )
            })}
          </div>
        </section>

        {/* CTA FINAL DE LUXO */}
        <section className="relative py-32 bg-[#1A1A1A] text-center px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-8 flex flex-col items-center">
            {/* Brasão dourado substituindo a balança! */}
            <img 
              src={balanceImage} 
              alt="Brasão Advocacia" 
              className="w-24 h-24 object-contain opacity-90 drop-shadow-lg" 
        <section className="relative overflow-hidden bg-[#0F0F0F] px-6 py-28 text-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]" />

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center space-y-8">
            <img
              src={balanceImage}
              alt="Brasão Advocacia"
              className="h-24 w-24 object-contain opacity-90 drop-shadow-lg"
            />
            
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight">
              A justiça ao seu alcance.

            <h2 className="text-4xl tracking-tight text-white font-serif md:text-6xl">
              Atendimento Direto e Estrategico para o Seu Caso.
            </h2>
            <p className="text-xl text-gray-400 font-light">
              Não adie a resolução do seu problema. Agende uma consultoria para avaliarmos o seu cenário jurídico.

            <p className="text-xl font-light text-gray-400">
              Fale agora com o advogado para uma analise inicial e descubra o
              melhor caminho juridico para sua situacao.
            </p>
            <div className="pt-8">
              <Button onClick={openWA} className="bg-[#C4A265] hover:bg-white hover:text-[#1A1A1A] text-white px-10 py-7 rounded-none text-base font-semibold transition-all">
                Iniciar Atendimento no WhatsApp

            <div className="pt-4">
              <Button
                onClick={openWA}
                className="rounded-none px-10 py-7 text-base font-semibold text-white transition-all hover:bg-white hover:text-[#1A1A1A]"
                style={{ backgroundColor: accent }}
              >
                {ctaText}
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER CLEAN */}
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
export default LandingPageLayout
