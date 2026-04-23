import { Button } from '@/components/ui/button'
import {
  Phone,
  MessageCircle,
  Scale,
  Shield,
  Award,
  Users,
  ShoppingCart,
  Home as HomeIcon,
  Briefcase,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import balanceImage from '../assets/2n8lhMswimEV.png'
import heroImage from '../assets/imagem.jpg'
import lawyerImage from '../assets/juninho.jpeg'

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
    icon: ShoppingCart,
    link: '/direito-consumidor',
  },
  {
    title: 'Direito Civil',
    desc: 'Resolução estratégica de litígios pessoais, familiares e patrimoniais.',
    icon: Users,
    link: '/direito-civil',
  },
  {
    title: 'Indenizações e Cobranças',
    desc: 'Atuação incisiva na recuperação de valores e reparação de danos (morais e materiais).',
    icon: Scale,
    link: '/indenizacoes-cobrancas',
  },
  {
    title: 'Direito Imobiliário',
    desc: 'Segurança jurídica em contratos, compra, venda e regularização de imóveis.',
    icon: HomeIcon,
    link: '/direito-imobiliario',
  },
  {
    title: 'Direito Empresarial',
    desc: 'Blindagem jurídica e assessoria consultiva para o crescimento do seu negócio.',
    icon: Briefcase,
    link: '/direito-empresarial',
  },
]

const Home = () => {
  const openWA = () => window.open(WA_URL, '_blank', 'noopener,noreferrer')

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#333333] font-sans selection:bg-[#C4A265] selection:text-white">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-12">
          <div
            className="flex cursor-pointer items-center space-x-4"
            onClick={() => window.scrollTo(0, 0)}
          >
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
          </div>

          <div className="hidden items-center space-x-8 md:flex">
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
        <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-12 lg:pb-32 lg:pt-24">
          <div className="grid items-center gap-16 lg:grid-cols-12">
            <div className="z-10 space-y-8 lg:col-span-6">
              <div className="inline-flex items-center space-x-2 rounded-full border border-[#C4A265]/30 bg-[#C4A265]/5 px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#C4A265]"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C4A265]">
                  Atendimento Personalizado
                </span>
              </div>

              <h1 className="text-5xl leading-[1.1] tracking-tight text-[#1A1A1A] font-serif lg:text-7xl">
                Defesa sólida <br />
                <span className="italic text-[#C4A265]">
                  para seus direitos.
                </span>
              </h1>

              <p className="max-w-lg text-lg leading-relaxed text-gray-600">
                Atuação combativa, técnica e estratégica. Oferecemos segurança
                jurídica com excelência para pessoas físicas e empresas.
              </p>

              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Button
                  onClick={openWA}
                  className="flex items-center justify-center rounded-none bg-[#C4A265] px-8 py-6 text-base font-semibold text-white transition-all hover:bg-[#B39155]"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar Consulta
                </Button>
              </div>
            </div>

            <div className="relative lg:col-span-6">
              <div className="absolute -inset-4 rounded-full bg-[#C4A265] opacity-10 blur-2xl"></div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={heroImage}
                  alt="Dr. Rogério CBJ"
                  className="h-full w-full scale-105 object-cover object-top transition-transform duration-1000 hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent opacity-80"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#1A1A1A] px-6 py-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 divide-y divide-gray-800 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="flex items-center space-x-4 md:px-8">
              <Award className="h-10 w-10 text-[#C4A265] stroke-[1.5]" />
              <div>
                <h4 className="text-xl text-white font-serif">OAB Ativa</h4>
                <p className="text-sm text-gray-400">
                  Registro regular e verificado
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-8 md:px-8 md:pt-0">
              <Shield className="h-10 w-10 text-[#C4A265] stroke-[1.5]" />
              <div>
                <h4 className="text-xl text-white font-serif">
                  Sigilo Absoluto
                </h4>
                <p className="text-sm text-gray-400">
                  Seus dados e caso protegidos
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-8 md:px-8 md:pt-0">
              <Scale className="h-10 w-10 text-[#C4A265] stroke-[1.5]" />
              <div>
                <h4 className="text-xl text-white font-serif">
                  Atuação Especializada
                </h4>
                <p className="text-sm text-gray-400">
                  Foco nas melhores soluções
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#C4A265]">
                Especialidades
              </h2>
              <h3 className="text-4xl text-[#1A1A1A] font-serif md:text-5xl">
                Áreas de Atuação
              </h3>
            </div>
            <p className="max-w-md text-gray-600">
            
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, idx) => {
              const Icon = area.icon

              return (
                <div key={idx} className="group cursor-pointer">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-none border border-gray-100 bg-white shadow-sm transition-colors duration-500 group-hover:bg-[#C4A265]">
                    <Icon
                      className="h-6 w-6 text-[#1A1A1A] transition-colors group-hover:text-white"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h4 className="mb-3 text-xl text-[#1A1A1A] font-serif">
                    {area.title}
                  </h4>

                  <p className="mb-4 leading-relaxed text-gray-600">
                    {area.desc}
                  </p>

                  <Link
                    to={area.link}
                    className="inline-flex items-center text-sm font-semibold text-[#C4A265] transition-colors hover:text-[#1A1A1A]"
                  >
                    Saiba mais <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>

                  <div className="mt-6 h-px w-full bg-gray-200 transition-colors duration-500 group-hover:bg-[#C4A265]"></div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="border-y border-gray-100 bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid items-center gap-16 lg:grid-cols-12">
              <div className="relative lg:col-span-5">
                <div className="absolute top-4 -left-4 z-0 hidden h-full w-full rounded-3xl border border-[#C4A265] md:block"></div>
                <img
                  src={lawyerImage}
                  alt="Dr. Rogério"
                  className="relative z-10 h-auto w-full rounded-3xl object-cover shadow-lg grayscale-[20%]"
                />
              </div>

              <div className="space-y-8 lg:col-span-7 lg:pl-10">
                <div>
                  <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#C4A265]">
                    O Profissional
                  </h2>
                  <h3 className="mb-6 text-4xl text-[#1A1A1A] font-serif md:text-5xl">
                    Dr. Rogério CBJ
                  </h3>
                  <p className="mb-6 text-lg leading-relaxed text-gray-600">
                    Com excelência técnica e rigor ético, o escritório é pautado
                    pela transparência e pelo compromisso inabalável com os
                    resultados de cada cliente.
                  </p>
                  <p className="leading-relaxed text-gray-600">
                    Nossa missão não é apenas resolver litígios, mas
                    proporcionar{' '}
                    <strong className="font-semibold text-[#1A1A1A]">
                      tranquilidade e segurança jurídica
                    </strong>{' '}
                    através de um atendimento humanizado, onde você fala
                    diretamente com o especialista responsável pelo seu caso.
                  </p>
                </div>

                <ul className="grid gap-4 pt-4 sm:grid-cols-2">
                  {[
                    'Especialista em Litígios Complexos',
                    'Atendimento Humanizado',
                    'Transparência em todas as etapas',
                    'Análise Estratégica de Riscos',
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center space-x-3 text-sm font-medium text-[#1A1A1A]"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#C4A265]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <Button
                    onClick={openWA}
                    className="rounded-none bg-[#1A1A1A] px-8 py-6 text-sm uppercase tracking-wide text-white transition-all hover:bg-[#333333]"
                  >
                    Falar diretamente com o Advogado
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#1A1A1A] px-6 py-32 text-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03]"></div>

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center space-y-8">
            <img
              src={balanceImage}
              alt="Brasão Advocacia"
              className="h-24 w-24 object-contain opacity-90 drop-shadow-lg"
            />

            <h2 className="text-4xl tracking-tight text-white font-serif md:text-6xl">
              A justiça ao seu alcance.
            </h2>

            <p className="text-xl font-light text-gray-400">
              Não adie a resolução do seu problema. Agende uma consultoria para
              avaliarmos o seu cenário jurídico.
            </p>

            <div className="pt-8">
              <Button
                onClick={openWA}
                className="rounded-none bg-[#C4A265] px-10 py-7 text-base font-semibold text-white transition-all hover:bg-white hover:text-[#1A1A1A]"
              >
                Iniciar Atendimento no WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1A1A1A] bg-[#0A0A0A] py-16 text-gray-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row lg:px-12">
          <div className="flex items-center space-x-3">
            <h3 className="text-2xl text-white font-serif">Rogério CBJ</h3>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[#C4A265]"
            >
              WhatsApp
            </a>
            <a
              href={`tel:+${CONTACT.phone}`}
              className="transition-colors hover:text-[#C4A265]"
            >
              Telefone
            </a>
            <span className="text-gray-600">|</span>
            <span className="text-gray-500">OAB Ativa</span>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between px-6 text-center text-xs text-gray-600 md:flex-row md:text-left lg:px-12">
          <p>
            &copy; {new Date().getFullYear()} Rogério CBJ Advocacia. Todos os
            direitos reservados.
          </p>
          <p className="mt-2 md:mt-0">Desenvolvido com excelência.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
