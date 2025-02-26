import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"

export default function Pricing() {
  const plans = [
    {
      name: "Básico",
      price: "Grátis",
      description: "Perfeito para começar sua jornada",
      features: [
        "Tracking básico de corridas",
        "Participação em grupos públicos",
        "Perfil básico de corredor",
        "Feed de atividades",
        "Calendário de eventos",
      ],
      limitations: ["Análise avançada de performance", "Grupos privados", "Fotos profissionais", "Chat privado"],
    },
    {
      name: "Pro",
      price: "R$ 21,90",
      period: "/mês",
      description: "Para corredores que querem mais",
      features: [
        "Todas as features do plano Básico",
        "Análise avançada de performance",
        "Criação de grupos privados",
        "Chat privado com corredores",
        "Métricas detalhadas",
        "Planejador de treinos",
        "Desconto em fotos profissionais",
        "Medalhas exclusivas",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "R$ 39,90",
      period: "/mês",
      description: "Para atletas profissionais",
      features: [
        "Todas as features do plano Pro",
        "Fotos profissionais ilimitadas",
        "Análise biomecânica",
        "Suporte prioritário",
        "Consultoria personalizada",
        "Descontos exclusivos na loja",
        "Acesso antecipado a eventos",
        "Badge verificado de atleta",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Escolha o plano ideal para você</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Planos flexíveis que crescem junto com sua evolução como corredor.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? "border-2 border-orange-600 relative bg-white shadow-xl"
                    : "border border-gray-200 bg-white"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm">
                    Mais Popular
                  </span>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-gray-600">{plan.period}</span>}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {plan.limitations?.map((limitation, i) => (
                    <div key={i} className="flex items-center space-x-3 text-gray-400">
                      <XCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{limitation}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className={`w-full mt-8 ${
                    plan.popular
                      ? "bg-orange-600 hover:bg-orange-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  }`}
                >
                  {plan.name === "Básico" ? "Começar Grátis" : "Assinar Agora"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold mb-2">Posso trocar de plano depois?</h3>
              <p className="text-gray-600">
                Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Como funciona o período gratuito?</h3>
              <p className="text-gray-600">
                Você pode usar todas as funcionalidades do plano básico gratuitamente, sem limite de tempo.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Existe fidelidade?</h3>
              <p className="text-gray-600">Não há fidelidade. Você pode cancelar sua assinatura a qualquer momento.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Quais formas de pagamento?</h3>
              <p className="text-gray-600">Aceitamos cartões de crédito, débito, PIX e boleto bancário.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

