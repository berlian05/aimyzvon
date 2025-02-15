'use client'

import { BarChart, CalendarDays, PhoneCall, Users } from 'lucide-react'

const statsData = [
  { 
    title: 'Активные кампании', 
    value: '3', 
    change: '+2 за неделю',
    icon: PhoneCall,
    color: 'text-green-400'
  },
  { 
    title: 'Всего звонков', 
    value: '1,234', 
    change: '+180 сегодня',
    icon: BarChart,
    color: 'text-blue-400'
  },
  { 
    title: 'Успешные контакты', 
    value: '68%', 
    change: '+5% к среднему',
    icon: Users,
    color: 'text-purple-400'
  },
  { 
    title: 'Запланировано', 
    value: '12', 
    change: 'На следующей неделе',
    icon: CalendarDays,
    color: 'text-orange-400'
  }
]

export function CampaignStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statsData.map((stat, index) => (
        <div 
          key={index} 
          className="bg-[#24252D] rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-colors"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              stat.color === 'text-green-400' ? 'bg-green-400/10' :
              stat.color === 'text-blue-400' ? 'bg-blue-400/10' :
              stat.color === 'text-purple-400' ? 'bg-purple-400/10' :
              'bg-orange-400/10'
            }`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <span className="text-xs text-gray-500">{stat.change}</span>
          </div>
          <h3 className="text-gray-400 text-sm mb-1">{stat.title}</h3>
          <p className="text-3xl font-bold text-white">{stat.value}</p>
        </div>
      ))}
    </div>
  )
} 