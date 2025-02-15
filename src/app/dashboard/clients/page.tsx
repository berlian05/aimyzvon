import { DashboardLayout } from '@/components/dashboard/DashboardLayout'
import { Users } from 'lucide-react'

export default function Clients() {
  return (
    <DashboardLayout>
      <div className="max-w-[1920px] mx-auto">
        <div className="bg-[#24252D] rounded-2xl p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-8">База клиентов</h2>
          <div className="bg-[#2A2B33] p-6 rounded-xl">
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 mb-4">База клиентов пуста</p>
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white font-medium">
                Загрузить базу клиентов
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 