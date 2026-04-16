import LandingPageLayout from './LandingPageLayout'
import { AlertTriangle, CreditCard, FileText, Shield, Users, ShoppingCart } from 'lucide-react'

// Importando a imagem da balança com ramos dourados (provavelmente é o simbolo.png)
import simboloImage from '../assets/simbolo.png' 

const DireitoConsumidor = () => {
  // Os 6 cards exatos da sua foto "Como Posso Te Ajudar"
  const consumerServices = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-blue-600" />,
      title: "Produtos Defeituosos",
      description: "Defesa contra produtos com defeitos, vícios ou que não funcionam adequadamente"
    },
    {
      icon: <CreditCard className="w-6 h-6 text-blue-600" />,
      title: "Cobranças Indevidas",
      description: "Contestação de cobranças abusivas, juros excessivos e taxas ilegais"
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "Contratos Abusivos",
      description: "Revisão e anulação de cláusulas abusivas em contratos de consumo"
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Negativação Indevida",
      description: "Remoção de nome dos órgãos de proteção ao crédito de forma indevida"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Atendimento Deficiente",
      description: "Ações contra empresas por mau atendimento e descaso com o consumidor"
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
      title: "Compras Online",
      description: "Problemas com e-commerce, entregas, trocas e devoluções"
    }
  ]

  return (
    <LandingPageLayout 
      title="Defenda Seus Direitos como Consumidor"
      subtitle="Especialistas em proteger consumidores contra práticas abusivas de empresas"
      heroImage={simboloImage}
      services={consumerServices}
      ctaText="Defender Meus Direitos"
      accentColor="blue"
    />
  )
}

export default DireitoConsumidor
