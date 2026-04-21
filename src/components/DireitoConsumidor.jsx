import { Button } from '@/components/ui/button'
import {
  MessageCircle,
  ArrowLeft,
  ShoppingCart,
  CheckCircle2,
} from 'lucide-react'
import { Link } from 'react-router-dom'

import balanceImage from '../assets/2n8lhMswimEV.png'

const CONTACT = {
  phone: '5515996651411',
  message: encodeURIComponent(
    'Olá, Dr. Rogério! Acessei o site e preciso de ajuda com Direito do Consumidor.'
  ),
}

const WA_URL = `https://wa.me/${CONTACT.phone}?text=${CONTACT.message}`

const DireitoConsumidor = () => {
  const openWA = () => window.open(WA_URL, '_blank', 'noopener,noreferrer')

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#333333] font-sans selection:bg-[#C4A265] selection:text-white">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-12">
          <Link to="/" className="flex cursor-pointer items-center space-x-4">
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
        <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-12 lg:px-12 lg:pb-24 lg:pt-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5 text-[#C4A265]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C4A265]">
                Direito do Consumidor
              </span>
            </div>

            <h1 className="mb-8 text-5xl leading-[1.1] tracking-tight text-[#1A1A1A] font-serif lg:text-7xl">
              Defesa implacável contra{' '}
              <span className="italic text-[#C4A265]">práticas abusivas.</span>
            </h1>

            <p className="mb-10 text-lg leading-relaxed text-gray-600">
              Você não precisa aceitar o prejuízo. Somos especialistas em
              proteger consumidores contra grandes empresas, bancos, companhias
              aéreas e planos de saúde. Garantimos que seus direitos sejam
              respeitados e que você seja devidamente indenizado.
            </p>

            <Button
              onClick={openWA}
              className="flex items-center justify-center rounded-none bg-[#C4A265] px-8 py-6 text-base font-semibold text-white transition-all hover:bg-[#B39155]"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Defender Meus Direitos Agora
            </Button>
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-t border-gray-100 px-6 py-16 lg:px-12">
          <h2 className="mb-12 text-3xl text-[#1A1A1A] font-serif">
            Principais problemas que resolvemos:
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              'Voos cancelados, atrasos e extravio de bagagem',
              'Nome negativado indevidamente (SPC/Serasa)',
              'Planos de saúde (negativa de cirurgias, exames ou home care)',
              'Atraso na entrega de produtos ou compras com defeito',
              'Cobranças indevidas e juros abusivos em empréstimos',
              'Fraudes bancárias, golpes no PIX e clonagem de cartão',
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-4 border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-[#C4A265]" />
                <p className="font-medium text-gray-700">{item}</p>
              </div>
            ))}
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
                className="rounded-none bg-[#C4A265] px-10 py-7 text-base font-semibold text-white transition-all hover:bg-white hover:text-[#1A1A1A]"
              >
                Falar com Especialista
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default DireitoConsumidor
