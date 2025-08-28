import LandingPageLayout from './LandingPageLayout'
import { Users, FileText, Heart, Home, Car, Scale } from 'lucide-react'
import civilImage from '../assets/FMsPqJte6wfv.jpg'

const DireitoCivil = () => {
  const services = [
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Contratos em Geral",
      description: "Elaboração, revisão e análise de contratos civis e comerciais"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Responsabilidade Civil",
      description: "Ações de indenização por danos morais e materiais"
    },
    {
      icon: <Heart className="h-6 w-6 text-blue-600" />,
      title: "Direito de Família",
      description: "Divórcio, pensão alimentícia, guarda de filhos e partilha de bens"
    },
    {
      icon: <Home className="h-6 w-6 text-blue-600" />,
      title: "Sucessões",
      description: "Inventários, testamentos e questões hereditárias"
    },
    {
      icon: <Car className="h-6 w-6 text-blue-600" />,
      title: "Acidentes de Trânsito",
      description: "Indenizações por acidentes e danos veiculares"
    },
    {
      icon: <Scale className="h-6 w-6 text-blue-600" />,
      title: "Direitos da Personalidade",
      description: "Proteção da honra, imagem e privacidade"
    }
  ]

  const benefits = [
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Experiência Comprovada",
      description: "Anos de atuação em direito civil"
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Consultoria Completa",
      description: "Orientação jurídica em todas as etapas"
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "Atendimento Humanizado",
      description: "Cuidado especial com questões familiares"
    },
    {
      icon: <Scale className="h-8 w-8 text-white" />,
      title: "Soluções Eficazes",
      description: "Resultados práticos para seus problemas"
    }
  ]

  return (
    <LandingPageLayout
      title="Soluções Jurídicas para Sua Vida Pessoal"
      subtitle="Especialistas em direito civil, família e questões patrimoniais"
      heroImage={civilImage}
      services={services}
      benefits={benefits}
      ctaText="Resolver Minha Questão"
      accentColor="gray"
    />
  )
}

export default DireitoCivil

