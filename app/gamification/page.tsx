import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Trophy, Heart, Zap, Award, Users, Flame, Star, Calendar, TrendingUp } from "lucide-react"

export default function Gamification() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Gamificação Runnacy</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transforme sua jornada de corrida em uma experiência envolvente e recompensadora.
          </p>
        </div>
      </section>

      {/* XP and Levels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Pontos de Experiência (XP) e Níveis</h2>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-lg font-semibold">Nível 7 - Intermediário</p>
                <p className="text-sm text-gray-600">3500 XP / 5000 XP para o próximo nível</p>
              </div>
              <Badge variant="outline" className="bg-orange-100 text-orange-800 border-orange-300">
                Nível 7
              </Badge>
            </div>
            <Progress value={70} className="h-2 mb-2" />
            <p className="text-sm text-gray-600">70% para o próximo nível</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Como ganhar XP</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-orange-500" /> 1 km corrido = 10 XP
                </li>
                <li className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-orange-500" /> Concluir um desafio = 500 XP
                </li>
                <li className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-orange-500" /> Curtir ou comentar = 5 XP
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Níveis de Corredor</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-500" /> Iniciante (Nível 1-5)
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-blue-500" /> Intermediário (Nível 6-10)
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-purple-500" /> Avançado (Nível 11-15)
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-red-500" /> Elite (Nível 16-20)
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 mr-2 text-green-500" /> Lendário (Nível 21+)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leagues */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Ligas Competitivas</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {["Bronze", "Prata", "Ouro", "Safira", "Diamante"].map((league, index) => (
              <div key={league} className="bg-white rounded-lg shadow p-6 text-center">
                <div className="text-4xl mb-2">
                  {index === 0 && "🥉"}
                  {index === 1 && "🥈"}
                  {index === 2 && "🥇"}
                  {index === 3 && "💎"}
                  {index === 4 && "🔥"}
                </div>
                <h3 className="text-xl font-semibold">{league}</h3>
                <p className="text-sm text-gray-600 mt-2">Top 50 sobem</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Streaks and Hearts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Streak Diário</h2>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Flame className="w-8 h-8 text-orange-500 mr-3" />
                    <div>
                      <p className="text-2xl font-bold">7 dias</p>
                      <p className="text-sm text-gray-600">Streak atual</p>
                    </div>
                  </div>
                  <Button variant="outline" className="bg-orange-100 text-orange-800 border-orange-300">
                    Proteger Streak
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-4">Mantenha seu streak para ganhar bônus especiais!</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Sistema de Energia</h2>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((heart) => (
                    <Heart
                      key={heart}
                      className={`w-8 h-8 ${heart <= 4 ? "text-red-500" : "text-gray-300"} mr-2`}
                      fill={heart <= 4 ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Você tem 4 corações. Complete atividades para recuperá-los!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Runnacoins and Challenges */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Runnacoins 🏅</h2>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-2xl font-bold">1,250 Runnacoins</p>
                  <Button variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                    Loja de Recompensas
                  </Button>
                </div>
                <p className="text-sm text-gray-600 mt-4">Use Runnacoins para comprar itens exclusivos e descontos!</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Desafios Semanais</h2>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-4">Desafio dos 100K</h3>
                <Progress value={65} className="h-2 mb-2" />
                <p className="text-sm text-gray-600">65 km / 100 km</p>
                <Button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white">Ver Todos os Desafios</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements and Profile */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Conquistas e Perfil do Corredor</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Troféus Desbloqueados</h3>
              <div className="bg-white rounded-lg shadow p-6 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
                  <div>
                    <p className="font-semibold">Primeira Corrida</p>
                    <p className="text-sm text-gray-600">Completou 5 km</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="w-8 h-8 text-blue-500 mr-3" />
                  <div>
                    <p className="font-semibold">Maratonista</p>
                    <p className="text-sm text-gray-600">42 km acumulados</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Linha do Tempo</h3>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-gray-500 mr-3" />
                  <div>
                    <p className="font-semibold">Corrida Completada</p>
                    <p className="text-sm text-gray-600">10 km em 55:30</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-6 h-6 text-green-500 mr-3" />
                  <div>
                    <p className="font-semibold">Novo Recorde Pessoal</p>
                    <p className="text-sm text-gray-600">5 km em 22:15</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Features */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Socialização e Clubes de Corrida</h2>
          <div className="max-w-2xl mx-auto">
            <Users className="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <p className="text-lg mb-8">
              Conecte-se com outros corredores, participe de clubes locais e desafie seus amigos!
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">Encontrar Grupos Próximos</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para elevar sua experiência de corrida?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Junte-se à Runnacy hoje e transforme cada corrida em uma aventura gamificada!
          </p>
          <Button className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6">Começar Agora</Button>
        </div>
      </section>
    </div>
  )
}

