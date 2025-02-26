import Link from "next/link"
import { UserMenu } from "./UserMenu"

export function Header() {
  return (
    <header className="bg-primary text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Runnacy
        </Link>
        <nav className="space-x-4">
          <Link href="/discover">Descobrir</Link>
          <Link href="/pictures">Fotos</Link>
          <Link href="/store">Loja</Link>
          <Link href="/pro">Pro</Link>
        </nav>
        <UserMenu />
      </div>
    </header>
  )
}

