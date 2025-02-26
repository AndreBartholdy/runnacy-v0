import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Runnacy</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-sm hover:text-orange-600">
              Features
            </Link>
            <Link href="/pricing" className="text-sm hover:text-orange-600">
              Pricing
            </Link>
            <Link href="/gamification" className="text-sm hover:text-orange-600">
              Gamification
            </Link>
            <Link href="/profile" className="text-sm hover:text-orange-600">
              Profile
            </Link>
            <Link href="/etc" className="text-sm hover:text-orange-600">
              Etc
            </Link>
          </nav>
          <Button className="bg-orange-600 hover:bg-orange-700 text-white">Download the app</Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Running groups for all</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
              Start a challenge or accountability group. Track and share activity with your people.
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6">Get started</Button>
            <div className="mt-16 relative">
              <div className="absolute -z-10 w-96 h-96 bg-orange-600 rounded-full blur-3xl opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              <Image src="/placeholder.svg" alt="App interface showcase" width={800} height={600} className="mx-auto" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Individual and team challenges</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Participate as an individual or join forces with a team and engage in healthy competition.
                </p>
                <p className="text-lg text-gray-600 mb-8">End result: super-charged activity levels for everyone.</p>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">Learn more</Button>
              </div>
              <div className="order-1 md:order-2">
                <Image src="/placeholder.svg" alt="Challenge interface" width={400} height={800} className="mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Scoring System Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <Image
                  src="/placeholder.svg"
                  alt="Scoring system interface"
                  width={400}
                  height={800}
                  className="mx-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Flexible scoring system</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Score using a recommended, inclusive, and fairly-weighted point system. From running to pilates, the
                  goal is to encourage more activity.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  ... or make your own rules. Define a completely customizable scoring system that fosters habits of
                  your choosing.
                </p>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">Explore features</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-orange-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-gray-600 hover:text-orange-600">
                    News
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Help center</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-orange-600">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-orange-600">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-orange-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-orange-600">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Download</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/ios" className="text-gray-600 hover:text-orange-600">
                    iOS
                  </Link>
                </li>
                <li>
                  <Link href="/android" className="text-gray-600 hover:text-orange-600">
                    Android
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-gray-600">
            <p>© 2024 Runnacy. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

