import { DashboardLayout } from '@/components/dashboard/DashboardLayout'
import { BarChart3, Download } from 'lucide-react'

export default function Reports() {
  return (
    <DashboardLayout>
      <div className="max-w-[1920px] mx-auto">
        <div className="bg-[#24252D] rounded-2xl p-8 border border-gray-800">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">Отчеты</h2>
            <button className="flex items-center px-4 py-2 bg-[#2A2B33] rounded-lg text-gray-400 hover:text-white transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Скачать отчет
            </button>
          </div>
          <div className="bg-[#2A2B33] p-6 rounded-xl flex items-center justify-center h-[400px]">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Здесь будет график статистики</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 