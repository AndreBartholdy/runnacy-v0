import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function Features() {
  const features = [
    {
      title: "Grupos de Corrida",
      description: "Encontre grupos de corrida próximos a você e participe de treinos em conjunto.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Desafios e Competições",
      description: "Participe de desafios semanais e mensais, competindo com outros corredores.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Fotos Profissionais",
      description: "Acesse e compre fotos profissionais de suas corridas e eventos.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Marketplace",
      description: "Encontre os melhores produtos e equipamentos para sua corrida.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const additionalFeatures = [
    "Tracking de corridas em tempo real",
    "Análise detalhada de performance",
    "Calendário de eventos e corridas",
    "Chat com outros corredores",
    "Planejamento de treinos",
    "Integração com smartwatches",
    "Compartilhamento em redes sociais",
    "Medalhas e conquistas virtuais",
    "Histórico completo de atividades",
    "Suporte a grupos privados",
    "Métricas avançadas de corrida",
    "Perfil personalizado de corredor",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Recursos para todos os tipos de corredor</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Do iniciante ao maratonista, a Runnacy tem tudo que você precisa para evoluir na sua jornada como corredor.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="w-full transition duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tudo que você precisa em um só lugar</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 p-4">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para começar sua jornada?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Junte-se a maior comunidade de corredores da América Latina e transforme sua experiência de corrida.
          </p>
          <Button className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6">Começar agora</Button>
        </div>
      </section>
    </div>
  )
}

