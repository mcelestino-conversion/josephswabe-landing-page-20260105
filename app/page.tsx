'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">landing page</h1>
            <div className="flex gap-4">
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">landing page</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">a modern, minimalist landing page with a hero section, features section, contact form, and footer. built with next.js, typescript, and tailwind css following best practices for seo and analytics.</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">Get Started</button>
            <button className="bg-white text-gray-700 px-8 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">Learn More</button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">Analytics Integration</h3>
            <p className="text-gray-600">Built-in analytics integration functionality ready to use.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">Contact Form</h3>
            <p className="text-gray-600">Built-in contact form functionality ready to use.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <p className="text-gray-600">Built-in responsive design functionality ready to use.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">Seo Optimization</h3>
            <p className="text-gray-600">Built-in seo optimization functionality ready to use.</p>
          </div>
        </div>

        {/* Pages Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Explore</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 hover:underline">contact</Link>
            <Link href="/home" className="text-blue-600 hover:text-blue-800 hover:underline">home</Link>
          </div>
        </div>
      </main>
    </div>
  )
}
