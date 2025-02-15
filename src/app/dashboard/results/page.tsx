import { DashboardLayout } from '@/components/dashboard/DashboardLayout'

export default function Results() {
  return (
    <DashboardLayout>
      <div className="max-w-[1920px] mx-auto">
        <div className="bg-[#24252D] rounded-2xl p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-8">Результаты обзвона</h2>
          <div className="space-y-4">
            <div className="bg-[#2A2B33] p-6 rounded-xl">
              <h3 className="text-white font-medium mb-2">Кампания: Холодные звонки IT</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#1E1F25] p-4 rounded-lg">
                  <p className="text-gray-400 text-sm">Всего звонков</p>
                  <p className="text-2xl font-bold text-white">487</p>
                </div>
                <div className="bg-[#1E1F25] p-4 rounded-lg">
                  <p className="text-gray-400 text-sm">Успешных</p>
                  <p className="text-2xl font-bold text-green-400">234</p>
                </div>
                <div className="bg-[#1E1F25] p-4 rounded-lg">
                  <p className="text-gray-400 text-sm">Конверсия</p>
                  <p className="text-2xl font-bold text-blue-400">48%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 