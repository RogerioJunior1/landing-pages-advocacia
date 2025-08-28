import LandingPageLayout from './LandingPageLayout'
import { DollarSign, Scale, AlertTriangle, FileText, Shield, TrendingUp } from 'lucide-react'
import indemnityImage from '../assets/0Vr0yNjx7UVn.jpg'

const IndenizacoesCobracas = () => {
  const services = [
    {
      icon: <DollarSign className="h-6 w-6 text-blue-600" />,
      title: "Cobrança de Dívidas",
      description: "Recuperação de valores em atraso de forma legal e eficiente"
    },
    {
      icon: <Scale className="h-6 w-6 text-blue-600" />,
      title: "Danos Morais",
      description: "Indenizações por constrangimentos, humilhações e ofensas"
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-blue-600" />,
      title: "Danos Materiais",
      description: "Ressarcimento de prejuízos financeiros e patrimoniais"
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Execução de Títulos",
      description: "Cobrança judicial de cheques, notas promissórias e contratos"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Defesa em Cobranças",
      description: "Proteção contra cobranças abusivas e ilegais"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      title: "Recuperação de Crédito",
      description: "Estratégias para recuperar valores perdidos"
    }
  ]

  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      title: "Recuperação Eficaz",
      description: "Máxima recuperação de valores devidos"
    },
    {
      icon: <Scale className="h-8 w-8 text-white" />,
      title: "Justiça Garantida",
      description: "Luta incansável pelos seus direitos"
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Proteção Legal",
      description: "Defesa contra práticas abusivas"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: "Resultados Comprovados",
      description: "Histórico de sucesso em recuperações"
    }
  ]

  return (
    <LandingPageLayout
      title="Recupere Seus Direitos e Valores"
      subtitle="Especialistas em indenizações, cobranças e recuperação de crédito"
      heroImage={indemnityImage}
      services={services}
      benefits={benefits}
      ctaText="Recuperar Meus Valores"
      accentColor="yellow"
    />
  )
}

export default IndenizacoesCobracas

