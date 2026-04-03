import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, MessageCircle, Scale, Shield, Award, Clock } from 'lucide-react'
import balanceImage from '../assets/2n8lhMswimEV.png'

const LandingPageLayout = ({ 
  title, 
  subtitle, 
  heroImage, 
  services, 
  benefits,
  ctaText = "Fale Conosco Agora",
  accentColor = "blue"
}) => {
  const whatsappNumber = "5515996651411"
  const whatsappMessage = encodeURIComponent(`Olá! Gostaria de saber mais sobre ${title.toLowerCase()}.`)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank')
  }

  const handleCallClick = () => {
    window.open('tel:+5515996651411', '_self')
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src={balanceImage} alt="Justiça" className="h-12 w-12 object-contain" />
              <div>
                <h1 className="text-2xl font-serif font-bold text-slate-900 tracking-tight">Rogério CBJ</h1>
                <p className="text-sm font-medium text-amber-600 uppercase tracking-wider">Advocacia</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-2 text-slate-700 hover:text-amber-600 transition-colors">
                <Phone className="h-5 w-5" />
                <span className="font-semibold text-lg">(15) 99665-1411</span>
              </div>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-md font-semibold transition-all shadow-md hover:shadow-lg flex items-center border-0"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b-4 border-amber-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in space-y-6">
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2 border border-slate-700">
                <Shield className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-medium text-amber-500 uppercase tracking-wider">Especialistas em Seus Direitos</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
                {subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all border-0 rounded-md flex items-center justify-center"
                >
                  <MessageCircle className="h-6 w-6 mr-2" />
                  {ctaText}
                </Button>
                <Button 
                  onClick={handleCallClick}
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-slate-400 text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg font-semibold transition-all rounded-md flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Ligar Agora
                </Button>
              </div>
            </div>
            <div className="animate-fade-in lg:ml-auto">
              <img 
                src={heroImage} 
                alt={title}
                className="w-full max-w-lg h-auto rounded-xl shadow-2xl border border-slate-700/50 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-600 rounded-xl transform translate-x-4 translate-y-4 opacity-20"></div>
              <img 
                src="/api/placeholder/600/500" 
                alt="Advogado Rogério CBJ"
                className="relative w-full h-auto rounded-xl shadow-xl object-cover z-10"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                Excelência e Dedicação na Advocacia
              </h2>
              <div className="h-1 w-20 bg-amber-600 rounded-full"></div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Com anos de experiência em advocacia, o Dr. Rogério CBJ é especialista em diversas áreas do direito, 
                oferecendo atendimento personalizado, transparente e soluções jurídicas altamente eficazes para proteger os interesses de seus clientes.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">OAB Ativo</h4>
                    <p className="text-sm text-slate-500">Regularizado e certificado</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">+10 Anos</h4>
                    <p className="text-sm text-slate-500">De experiência prática</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Sigilo Total</h4>
                    <p className="text-sm text-slate-500">Garantia de confidencialidade</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Scale className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900">Especialista</h4>
                    <p className="text-sm text-slate-500">Foco em resultados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
              Como Podemos Defender Você
            </h2>
            <div className="h-1 w-24 bg-amber-600 rounded-full mx-auto"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Atuação estratégica e dedicada para garantir que seus direitos sejam plenamente respeitados e protegidos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl overflow-hidden group">
                <CardContent className="p-8 space-y-4">
                  <div className="inline-flex p-3 bg-slate-50 rounded-lg group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                    {/* Cloned icon to force amber color on hover if possible, otherwise relies on parent text color */}
                    <div className="text-slate-700 group-hover:text-amber-600 transition-colors">
                       {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-serif">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Por Que Escolher Nosso Escritório?
            </h2>
            <div className="h-1 w-24 bg-amber-600 rounded-full mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center flex flex-col items-center space-y-4">
                <div className="p-4 bg-slate-800 rounded-2xl shadow-inner border border-slate-700 text-amber-500">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold font-serif text-white">
                  {benefit.title}
                </h3>
                <p className="text-slate-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 mix-blend-overlay object-cover"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif font-bold">
            Seus Direitos Não Podem Esperar
          </h2>
          <p className="text-xl text-amber-50">
            Fale com um advogado especialista agora mesmo e dê o primeiro passo para resolver o seu problema com segurança jurídica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-7 text-xl font-bold shadow-2xl hover:shadow-green-900/50 transition-all border-0 rounded-md flex items-center"
            >
              <MessageCircle className="h-6 w-6 mr-3" />
              Chamar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <img src={balanceImage} alt="Justiça" className="h-10 w-10 opacity-80" />
                <div>
                  <h3 className="text-xl font-serif font-bold text-white">Rogério CBJ</h3>
                  <p className="text-xs text-amber-600 uppercase tracking-widest font-semibold">Advocacia</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Comprometimento, ética e excelência na busca pelas melhores soluções jurídicas para você ou sua empresa.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-6 font-serif">Áreas de Atuação</h4>
              <ul className="space-y-3">
                <li><a href="/direito-consumidor" className="hover:text-amber-500 transition-colors">Direito do Consumidor</a></li>
                <li><a href="/direito-civil" className="hover:text-amber-500 transition-colors">Direito Civil</a></li>
                <li><a href="/indenizacoes-cobrancas" className="hover:text-amber-500 transition-colors">Indenizações e Cobranças</a></li>
                <li><a href="/direito-imobiliario" className="hover:text-amber-500 transition-colors">Direito Imobiliário</a></li>
                <li><a href="/direito-empresarial" className="hover:text-amber-500 transition-colors">Direito Empresarial</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-6 font-serif">Contato Rápido</h4>
              <div className="space-y-4">
                <a href="tel:+5515996651411" className="flex items-center space-x-3 hover:text-amber-500 transition-colors">
                  <Phone className="h-5 w-5 text-amber-600" />
                  <span className="text-lg">(15) 99665-1411</span>
                </a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center space-x-3 hover:text-green-500 transition-colors">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                  <span className="text-lg">WhatsApp Atendimento</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; 2026 Rogério CBJ Advocacia. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0">OAB/SP: XX.XXX</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPageLayout
