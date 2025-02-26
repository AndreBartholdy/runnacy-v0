import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Runnacy</h3>
            <p className="text-sm text-gray-600">A maior rede da América Latina para corredores.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Links Rápidos</h4>
            <ul className="text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Siga-nos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Facebook
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Runnacy. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

