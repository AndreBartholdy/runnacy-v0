interface FeedItemProps {
  item: {
    id: number
    type: string
    content: string
  }
}

export function FeedItem({ item }: FeedItemProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      {item.type === "post" && (
        <div>
          <p className="font-semibold">Nova Postagem</p>
          <p>{item.content}</p>
        </div>
      )}
      {item.type === "event" && (
        <div>
          <p className="font-semibold">Evento</p>
          <p>{item.content}</p>
          <button className="mt-2 bg-primary text-white px-4 py-2 rounded">Participar</button>
        </div>
      )}
      {item.type === "achievement" && (
        <div>
          <p className="font-semibold">Nova Conquista</p>
          <p>{item.content}</p>
          <button className="mt-2 bg-secondary text-white px-4 py-2 rounded">Parabenizar</button>
        </div>
      )}
    </div>
  )
}

