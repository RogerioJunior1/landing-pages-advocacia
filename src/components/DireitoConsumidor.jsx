import LandingPageLayout from './LandingPageLayout'
import { ShoppingCart, AlertTriangle, CreditCard, FileText, Shield, Users } from 'lucide-react'
import consumerImage from '../assets/qzprc18eU4P1.jpg'

const DireitoConsumidor = () => {
  const services = [
    {
      icon: <AlertTriangle className="h-6 w-6 text-blue-600" />,
      title: "Produtos Defeituosos",
      description: "Defesa contra produtos com defeitos, vícios ou que não funcionam adequadamente"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-blue-600" />,
      title: "Cobranças Indevidas",
      description: "Contestação de cobranças abusivas, juros excessivos e taxas ilegais"
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Contratos Abusivos",
      description: "Revisão e anulação de cláusulas abusivas em contratos de consumo"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Negativação Indevida",
      description: "Remoção de nome dos órgãos de proteção ao crédito de forma indevida"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Atendimento Deficiente",
      description: "Ações contra empresas por mau atendimento e descaso com o consumidor"
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-blue-600" />,
      title: "Compras Online",
      description: "Problemas com e-commerce, entregas, trocas e devoluções"
    }
  ]

  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Proteção Total",
      description: "Defendemos todos os seus direitos como consumidor"
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Análise Gratuita",
      description: "Avaliação inicial do seu caso sem custos"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-white" />,
      title: "Recuperação de Valores",
      description: "Buscamos indenizações e restituições devidas"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Atendimento Personalizado",
      description: "Acompanhamento dedicado do início ao fim"
    }
  ]

  return (
    <LandingPageLayout
      title="Defenda Seus Direitos como Consumidor"
      subtitle="Especialistas em proteger consumidores contra práticas abusivas de empresas"
      heroImage={consumerImage}
      services={services}
      benefits={benefits}
      ctaText="Defender Meus Direitos"
      accentColor="green"
    />
  )
}

export default DireitoConsumidor

