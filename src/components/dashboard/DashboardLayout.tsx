'use client'

import { ReactNode } from 'react'
import { 
  PhoneIcon, 
  ChartBarIcon, 
  DocumentTextIcon, 
  Cog6ToothIcon,
  UserGroupIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CampaignCalendar } from './CampaignCalendar'

interface DashboardLayoutProps {
  children: ReactNode
}

const navigation = [
  { name: 'Начать обзвон', icon: PhoneIcon, href: '/dashboard' },
  { name: 'Результаты обзвона', icon: ChartBarIcon, href: '/dashboard/results' },
  { name: 'Отчеты', icon: DocumentTextIcon, href: '/dashboard/reports' },
  { name: 'База клиентов', icon: UserGroupIcon, href: '/dashboard/clients' },
  { name: 'Расписание', icon: CalendarIcon, href: '/dashboard/schedule' },
  { name: 'Настройки', icon: Cog6ToothIcon, href: '/dashboard/settings' },
]

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-[#1E1F25]">
      <div className="flex">
        {/* Левая панель */}
        <div className="w-80 min-h-screen bg-[#24252D] border-r border-gray-800">
          <div className="p-6">
            <div className="h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl mb-8 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">Aimy</span>
            </div>
          </div>
          
          <nav className="px-4 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white' 
                      : 'text-gray-400 hover:bg-[#2A2B33] hover:text-white'
                  }`}
                >
                  <item.icon className={`w-5 h-5 mr-3 ${isActive ? 'text-white' : ''}`} />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Календарь в левой панели */}
          <div className="mt-8 px-4">
            <CampaignCalendar />
          </div>
        </div>

        {/* Основной контент */}
        <div className="flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  )
} 