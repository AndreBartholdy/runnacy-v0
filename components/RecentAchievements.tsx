export function RecentAchievements() {
  const achievements = [
    { id: 1, title: "Corredor Madrugador", description: "Completou 5 corridas antes das 7h" },
    { id: 2, title: "Maratonista", description: "Completou sua primeira maratona" },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-2">Conquistas Recentes</h3>
      <ul className="space-y-2">
        {achievements.map((achievement) => (
          <li key={achievement.id} className="flex items-center">
            <span className="mr-2">🏅</span>
            <div>
              <p className="font-semibold">{achievement.title}</p>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

