import React from 'react'
import Link from 'next/link'
import { Phone, Bot, Zap, BarChart, Users, Database, Shield, Clock } from 'lucide-react'

const features = [
  {
    icon: Phone,
    title: 'Автоматические звонки',
    description: 'ИИ самостоятельно совершает звонки, ведет диалог и адаптируется под ответы клиента'
  },
  {
    icon: Bot,
    title: 'Умный ИИ-менеджер',
    description: 'Использует передовые языковые модели для естественного общения с клиентами'
  },
  {
    icon: Users,
    title: 'Квалификация лидов',
    description: 'Оценивает потенциал и заинтересованность клиентов, сортирует по приоритетности'
  },
  {
    icon: Clock,
    title: 'Назначение встреч',
    description: 'Автоматически планирует встречи и вносит их в календарь менеджеров'
  },
  {
    icon: Database,
    title: 'Интеграция с CRM',
    description: 'Бесшовная интеграция со всеми популярными CRM-системами'
  },
  {
    icon: Shield,
    title: 'Безопасность',
    description: 'Защищенная обработка данных и соответствие требованиям регуляторов'
  },
  {
    icon: BarChart,
    title: 'Аналитика',
    description: 'Подробная статистика и отчеты по результатам звонков'
  },
  {
    icon: Zap,
    title: 'Масштабируемость',
    description: 'Увеличивайте количество звонков без найма дополнительных сотрудников'
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1E1F25]">
      {/* Хедер */}
      <header className="fixed w-full bg-[#1E1F25]/80 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Aimy
          </div>
          <Link 
            href="/dashboard" 
            className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
          >
            Войти в кабинет
          </Link>
        </div>
      </header>

      {/* Главный экран */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Революция в бизнес-коммуникациях <br/>
            с помощью <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">искусственного интеллекта</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Автоматизируйте общение с клиентами, увеличивайте продажи и оптимизируйте бизнес-процессы с помощью ИИ-менеджера нового поколения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/dashboard" 
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white font-medium hover:opacity-90 transition-opacity"
            >
              Попробовать бесплатно
            </Link>
            <button className="px-8 py-4 bg-[#2A2B33] rounded-xl text-white font-medium hover:bg-[#32333C] transition-colors">
              Смотреть демо
            </button>
          </div>
        </div>
      </section>

      {/* Особенности */}
      <section className="py-20 px-4 bg-[#24252D]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Возможности платформы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-[#2A2B33] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-600/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-white font-medium text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Преимущества использования ИИ в бизнесе
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Снижение затрат</h3>
                    <p className="text-gray-400">Сокращение расходов на колл-центр до 70%</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Масштабируемость</h3>
                    <p className="text-gray-400">Мгновенное увеличение объема звонков без найма персонала</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-400">✓</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Эффективность</h3>
                    <p className="text-gray-400">Работа 24/7 без перерывов и человеческого фактора</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#2A2B33] rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">
                Начните использовать ИИ уже сегодня
              </h3>
              <p className="text-gray-400 mb-8">
                Подключите Aimy к вашему бизнесу за 15 минут и увеличьте эффективность продаж
              </p>
              <Link 
                href="/dashboard" 
                className="w-full block text-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white font-medium hover:opacity-90 transition-opacity"
              >
                Начать бесплатно
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#24252D] py-12 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Aimy
          </div>
          <p className="text-gray-400">
            Интеллектуальная система автоматизации звонков
          </p>
        </div>
      </footer>
    </main>
  )
} 