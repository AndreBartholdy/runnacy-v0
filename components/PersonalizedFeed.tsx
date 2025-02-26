import { FeedItem } from "./FeedItem"

export function PersonalizedFeed() {
  // Aqui você buscaria os itens do feed do backend
  const feedItems = [
    { id: 1, type: "post", content: "Acabei de completar minha primeira maratona!" },
    { id: 2, type: "event", content: "Corrida noturna no parque - Junte-se a nós!" },
    { id: 3, type: "achievement", content: 'João ganhou a medalha "Corredor Consistente"' },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Seu Feed</h2>
      {feedItems.map((item) => (
        <FeedItem key={item.id} item={item} />
      ))}
    </div>
  )
}

