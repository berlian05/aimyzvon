'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Пример данных о кампаниях
const campaignEvents = [
  {
    id: 1,
    title: 'Холодные звонки: IT компании',
    date: '2024-03-15',
    type: 'cold',
    status: 'scheduled'
  },
  {
    id: 2,
    title: 'Акция: Весенние скидки',
    date: '2024-03-18',
    type: 'promo',
    status: 'scheduled'
  },
  {
    id: 3,
    title: 'Опрос удовлетворенности',
    date: '2024-03-20',
    type: 'feedback',
    status: 'scheduled'
  }
]

export function CampaignCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  return (
    <div className="bg-[#2A2B33] rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-white">Календарь кампаний</h2>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
            className="p-2 hover:bg-[#24252D] rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>
          <span className="text-white font-medium">
            {currentMonth.toLocaleString('ru', { month: 'long', year: 'numeric' })}
          </span>
          <button 
            onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
            className="p-2 hover:bg-[#24252D] rounded-lg transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {campaignEvents.map(event => (
          <div 
            key={event.id}
            className="flex items-center p-3 bg-[#24252D] rounded-lg hover:bg-[#2F3039] transition-colors"
          >
            <div className="flex-1">
              <h3 className="text-white font-medium text-sm mb-1">{event.title}</h3>
              <p className="text-xs text-gray-500">
                {new Date(event.date).toLocaleDateString('ru', { 
                  day: 'numeric',
                  month: 'long',
                  weekday: 'long'
                })}
              </p>
            </div>
            <div className={`
              px-3 py-1 rounded-full text-xs
              ${event.type === 'cold' ? 'bg-blue-500/20 text-blue-400' : 
                event.type === 'promo' ? 'bg-purple-500/20 text-purple-400' : 
                'bg-orange-500/20 text-orange-400'}
            `}>
              {event.type === 'cold' ? 'Холодные звонки' : 
               event.type === 'promo' ? 'Акция' : 'Опрос'}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 