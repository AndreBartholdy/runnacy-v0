import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, Flame, Calendar, MapPin } from "lucide-react"

export default function RunnerProfile() {
  // Placeholder data - in a real app, this would come from a database or API
  const runnerData = {
    name: "João Silva",
    username: "@joaorunner",
    location: "São Paulo, Brasil",
    profileImage: "/placeholder-avatar.jpg",
    level: 7,
    xp: 3500,
    nextLevelXp: 5000,
    streak: 15,
    runnacoins: 1250,
    totalDistance: 523.7,
    totalRuns: 78,
    averagePace: "5:30",
    achievements: [
      { name: "Primeira Corrida", description: "Completou 5 km", icon: Trophy },
      { name: "Maratonista", description: "42 km acumulados", icon: Award },
      { name: "Corredor Consistente", description: "Correu 5 dias seguidos", icon: Flame },
    ],
    recentActivities: [
      { date: "2024-02-20", distance: 10.5, time: "55:30", pace: "5:17" },
      { date: "2024-02-18", distance: 5.2, time: "26:45", pace: "5:08" },
      { date: "2024-02-16", distance: 8.0, time: "43:20", pace: "5:25" },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <Image
                src={runnerData.profileImage || "/placeholder.svg"}
                alt={runnerData.name}
                width={120}
                height={120}
                className="rounded-full border-4 border-orange-500"
              />
              <div className="ml-6">
                <h1 className="text-4xl font-bold">{runnerData.name}</h1>
                <p className="text-xl text-gray-300">{runnerData.username}</p>
                <div className="flex items-center mt-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{runnerData.location}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <Badge variant="outline" className="mb-2 text-lg px-3 py-1">
                Nível {runnerData.level}
              </Badge>
              <div className="flex items-center">
                <Flame className="w-5 h-5 text-orange-500 mr-2" />
                <span>{runnerData.streak} dias de streak</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="activities">Atividades</TabsTrigger>
              <TabsTrigger value="achievements">Conquistas</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Progresso</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>XP</span>
                          <span>
                            {runnerData.xp} / {runnerData.nextLevelXp}
                          </span>
                        </div>
                        <Progress value={(runnerData.xp / runnerData.nextLevelXp) * 100} className="h-2" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Runnacoins</span>
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                          {runnerData.runnacoins} 🏅
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Estatísticas Gerais</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Distância Total</p>
                        <p className="text-2xl font-bold">{runnerData.totalDistance} km</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Total de Corridas</p>
                        <p className="text-2xl font-bold">{runnerData.totalRuns}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Ritmo Médio</p>
                        <p className="text-2xl font-bold">{runnerData.averagePace} /km</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="activities">
              <Card>
                <CardHeader>
                  <CardTitle>Atividades Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {runnerData.recentActivities.map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between border-b pb-4 last:border-b-0 last:pb-0"
                      >
                        <div className="flex items-center">
                          <Calendar className="w-5 h-5 mr-3 text-gray-500" />
                          <div>
                            <p className="font-semibold">{new Date(activity.date).toLocaleDateString("pt-BR")}</p>
                            <p className="text-sm text-gray-500">{activity.distance} km</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{activity.time}</p>
                          <p className="text-sm text-gray-500">{activity.pace} /km</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Ver Todas as Atividades</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="achievements">
              <Card>
                <CardHeader>
                  <CardTitle>Conquistas Desbloqueadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {runnerData.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow">
                        <achievement.icon className="w-10 h-10 text-orange-500 mr-4" />
                        <div>
                          <p className="font-semibold">{achievement.name}</p>
                          <p className="text-sm text-gray-500">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Ver Todas as Conquistas</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para seu próximo desafio?</h2>
          <p className="mb-6">Junte-se a um grupo de corrida ou crie seu próprio desafio!</p>
          <Button variant="outline" className="bg-white text-orange-600 hover:bg-orange-100">
            Explorar Desafios
          </Button>
        </div>
      </section>
    </div>
  )
}

