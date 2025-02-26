"use client"

import { useState } from "react"
import Link from "next/link"

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2 text-white focus:outline-none">
        <img src="/placeholder-avatar.jpg" alt="User Avatar" className="w-8 h-8 rounded-full" />
        <span>Usuário</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
          <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Perfil
          </Link>
          <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Configurações
          </Link>
          <Link href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Sair
          </Link>
        </div>
      )}
    </div>
  )
}

