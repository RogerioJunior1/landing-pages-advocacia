import { Button } from '@/components/ui/button'
import {
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import balanceImage from '../assets/2n8lhMswimEV.png'

const CONTACT = {
  phone: '5515996651411',
  displayPhone: '(15) 99665-1411',
  message: encodeURIComponent(
    'Olá, Dr. Rogério! Acessei o site e gostaria de um atendimento jurídico.'
  ),
}

const WA_URL = `https://wa.me/${CONTACT.phone}?text=${CONTACT.message}`

const areas = [
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

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#333333] font-sans selection:bg-[#C4A265] selection:text-white">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-12">
          <Link to="/" className="flex items-center space-x-4">
            <img
              src={balanceImage}
              alt="Símbolo Justiça"
              className="h-10 w-10 object-contain"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl tracking-tight text-[#1A1A1A] font-serif">
                Rogério CBJ
              </h1>
              <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C4A265]">
                Advocacia
              </span>
            </div>
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
            <Button
              onClick={openWA}
              className="rounded-none bg-[#1A1A1A] px-6 py-5 font-medium tracking-wide text-white transition-all hover:bg-[#333333]"
            >
              Fale com o Advogado
            </Button>
          </div>
        </div>
      </header>

      <main>
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

              <h1 className="text-5xl leading-[1.05] tracking-tight text-[#1A1A1A] font-serif lg:text-7xl">
                {title}
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
                {subtitle}
              </p>

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
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA]/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-gray-100 bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
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
          </div>
        </section>

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
                  <h4 className="mb-3 text-2xl text-white font-serif">
                    {benefit.title}
                  </h4>
                  <p className="leading-relaxed text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
              )
            })}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#0F0F0F] px-6 py-28 text-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]" />

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center space-y-8">
            <img
              src={balanceImage}
              alt="Brasão Advocacia"
              className="h-24 w-24 object-contain opacity-90 drop-shadow-lg"
            />

            <h2 className="text-4xl tracking-tight text-white font-serif md:text-6xl">
              Atendimento Direto e Estrategico para o Seu Caso.
            </h2>

            <p className="text-xl font-light text-gray-400">
              Fale agora com o advogado para uma analise inicial e descubra o
              melhor caminho juridico para sua situacao.
            </p>

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
    </div>
  )
}

export default LandingPageLayout
