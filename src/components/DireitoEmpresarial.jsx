import LandingPageLayout from './LandingPageLayout'
import { Briefcase, FileText, Users, TrendingUp, Shield, Building } from 'lucide-react'
import businessImage from '../assets/y9Urzj4oW67R.jpg'

const DireitoEmpresarial = () => {
  const services = [
    {
      icon: <Building className="h-6 w-6 text-blue-600" />,
      title: "Constituição de Empresas",
      description: "Abertura e estruturação jurídica de negócios"
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Contratos Empresariais",
      description: "Elaboração e revisão de contratos comerciais"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Sociedades",
      description: "Formação, alteração e dissolução de sociedades"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
      title: "Fusões e Aquisições",
      description: "Assessoria em operações de M&A"
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Compliance",
      description: "Adequação às normas e regulamentações"
    },
    {
      icon: <Briefcase className="h-6 w-6 text-blue-600" />,
      title: "Recuperação Judicial",
      description: "Reestruturação e recuperação de empresas"
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: "Crescimento Seguro",
      description: "Estrutura jurídica para expansão"
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Proteção Legal",
      description: "Blindagem jurídica do negócio"
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Contratos Sólidos",
      description: "Documentação empresarial segura"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Consultoria Estratégica",
      description: "Orientação para tomada de decisões"
    }
  ]

  return (
    <LandingPageLayout
      title="Assessoria Jurídica para Seu Negócio"
      subtitle="Especialistas em direito empresarial e crescimento sustentável"
      heroImage={businessImage}
      services={services}
      benefits={benefits}
      ctaText="Proteger Meu Negócio"
      accentColor="gold"
    />
  )
}

export default DireitoEmpresarial

