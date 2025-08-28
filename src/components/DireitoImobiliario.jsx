import LandingPageLayout from './LandingPageLayout'
import { Home, FileText, Key, MapPin, Shield, Users } from 'lucide-react'
import realEstateImage from '../assets/hsRUbnFp62u8.jpg'

const DireitoImobiliario = () => {
  const services = [
    {
      icon: <Home className="h-6 w-6 text-blue-600" />,
      title: "Compra e Venda",
      description: "Assessoria completa em negociações imobiliárias"
    },
    {
      icon: <Key className="h-6 w-6 text-blue-600" />,
      title: "Locação",
      description: "Contratos de aluguel, despejo e questões locatícias"
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Regularização",
      description: "Documentação, escrituras e registros imobiliários"
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Usucapião",
      description: "Aquisição de propriedade por posse prolongada"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Disputas Imobiliárias",
      description: "Resolução de conflitos e litígios imobiliários"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Condomínios",
      description: "Questões condominiais e administração predial"
    }
  ]

  const benefits = [
    {
      icon: <Home className="h-8 w-8 text-white" />,
      title: "Proteção Patrimonial",
      description: "Segurança total para seus imóveis"
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Documentação Segura",
      description: "Análise completa de documentos"
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Prevenção de Problemas",
      description: "Evitamos futuros litígios"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Assessoria Especializada",
      description: "Conhecimento profundo do mercado"
    }
  ]

  return (
    <LandingPageLayout
      title="Proteja Seu Patrimônio Imobiliário"
      subtitle="Especialistas em direito imobiliário e proteção patrimonial"
      heroImage={realEstateImage}
      services={services}
      benefits={benefits}
      ctaText="Proteger Meu Patrimônio"
      accentColor="brown"
    />
  )
}

export default DireitoImobiliario

