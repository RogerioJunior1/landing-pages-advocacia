import LandingPageLayout from './LandingPageLayout'
import { Users, Shield, Scale, Clock, HeartHandshake, FileText } from 'lucide-react'

// Usando a foto nova do advogado para manter o padrão
import heroImage from '../assets/imagem.jpg' 

const DireitoCivil = () => {
  // Lista de serviços específicos dessa área
  const civilServices = [
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#C4A265]" />,
      title: "Direito de Família",
      description: "Divórcio, pensão alimentícia, guarda e regulamentação de visitas com atendimento humanizado e discreto."
    },
    {
      icon: <FileText className="w-6 h-6 text-[#C4A265]" />,
      title: "Inventários e Sucessões",
      description: "Atuação ágil em inventários judiciais e extrajudiciais, testamentos e planejamento patrimonial."
    },
    {
      icon: <Scale className="w-6 h-6 text-[#C4A265]" />,
      title: "Contratos Civis",
      description: "Elaboração, revisão e rescisão de contratos, garantindo total blindagem e segurança jurídica."
    }
  ]

  // Benefícios de fechar com o escritório
  const civilBenefits = [
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Agilidade",
      description: "Foco na resolução rápida para evitar desgaste emocional e financeiro."
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Segurança",
      description: "Análise minuciosa de cada detalhe do seu caso antes de qualquer ação."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Atendimento Humanizado",
      description: "Compreensão, empatia e respeito absoluto ao seu momento de vida."
    },
    {
      icon: <Scale className="w-6 h-6 text-white" />,
      title: "Experiência",
      description: "Anos de atuação combativa com excelentes resultados comprovados."
    }
  ]

  return (
    <LandingPageLayout 
      title="Direito Civil e de Família"
      subtitle="Resolução estratégica de litígios pessoais, familiares e patrimoniais com total discrição e rigor técnico."
      heroImage={heroImage}
      services={civilServices}
      benefits={civilBenefits}
      ctaText="Falar com Especialista"
    />
  )
}

export default DireitoCivil
