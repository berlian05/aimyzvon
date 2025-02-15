import { DashboardLayout } from '@/components/dashboard/DashboardLayout'

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="max-w-[1920px] mx-auto">
        <div className="bg-[#24252D] rounded-2xl p-8 border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-8">Настройки</h2>
          <div className="space-y-6">
            <div className="bg-[#2A2B33] p-6 rounded-xl">
              <h3 className="text-white font-medium mb-4">Настройки голосового движка</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 mb-2">Голос</label>
                  <select className="w-full px-4 py-2 bg-[#1E1F25] rounded-lg border border-gray-700 text-white">
                    <option>Александр (мужской)</option>
                    <option>Елена (женский)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Скорость речи</label>
                  <input 
                    type="range" 
                    className="w-full"
                    min="0.5"
                    max="2"
                    step="0.1"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#2A2B33] p-6 rounded-xl">
              <h3 className="text-white font-medium mb-4">Интеграции</h3>
              <button className="px-4 py-2 bg-[#1E1F25] rounded-lg text-gray-400 hover:text-white transition-colors">
                Подключить CRM
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 