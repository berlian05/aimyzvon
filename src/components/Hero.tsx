import Image from 'next/image'
import { useState } from 'react'
import { AuthModal } from './AuthModal'

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative h-screen flex items-center justify-center px-4">
      {/* Логотип */}
      <div className="absolute top-6 left-6">
        <div className="w-40 h-12 bg-white/10 rounded-lg backdrop-blur-sm">
          {/* Место для логотипа */}
        </div>
      </div>

      {/* Кнопка входа */}
      <div className="absolute top-6 right-6">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg backdrop-blur-sm text-white font-medium transition-all"
        >
          Войти в кабинет
        </button>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          Революция в бизнес-коммуникациях
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Представляем AI-менеджера по звонкам, который автоматизирует ваше общение с клиентами, повышает продажи и оптимизирует бизнес-процессы
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-transform">
          Попробовать бесплатно
        </button>
      </div>

      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
} 