export function ProgressBar() {
  const progress = 75 // Isso viria do estado do usuário

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-2">Seu Progresso</h3>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-sm text-gray-600 mt-2">75% do caminho para seu objetivo semanal</p>
    </div>
  )
}

