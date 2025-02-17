import { DashboardLayout } from '@/components/dashboard/DashboardLayout'
import { BarChart3, Download, Phone, PhoneOff, ThumbsUp, ThumbsDown, Calendar, Clock } from 'lucide-react'

// Примеры данных звонков
const callData = [
  {
    id: 1,
    company: 'ООО "ТехноПрогресс"',
    contact: 'Александр Иванов',
    phone: '+7 (999) 123-45-67',
    date: '2024-03-15 14:30',
    status: 'success',
    result: 'meeting',
    duration: '4:32',
    notes: 'Заинтересован в презентации, назначена встреча на следующую неделю'
  },
  {
    id: 2,
    company: 'ИП Петров А.С.',
    contact: 'Андрей Петров',
    phone: '+7 (999) 234-56-78',
    date: '2024-03-15 14:45',
    status: 'no-answer',
    result: 'recall',
    duration: '0:00',
    notes: 'Нет ответа, запланирован повторный звонок'
  },
  {
    id: 3,
    company: 'АО "СтройКомплекс"',
    contact: 'Елена Сидорова',
    phone: '+7 (999) 345-67-89',
    date: '2024-03-15 15:00',
    status: 'success',
    result: 'reject',
    duration: '2:15',
    notes: 'Нет заинтересованности в данный момент'
  },
  {
    id: 4,
    company: 'ООО "ИнвестГрупп"',
    contact: 'Дмитрий Козлов',
    phone: '+7 (999) 456-78-90',
    date: '2024-03-15 15:15',
    status: 'success',
    result: 'interested',
    duration: '5:45',
    notes: 'Запросил коммерческое предложение'
  }
]

// Статусы для фильтрации
const statusFilters = [
  { id: 'all', name: 'Все звонки' },
  { id: 'success', name: 'Успешные' },
  { id: 'no-answer', name: 'Недозвон' },
  { id: 'reject', name: 'Отказ' },
  { id: 'interested', name: 'Заинтересован' },
  { id: 'meeting', name: 'Назначена встреча' }
]

export default function Results() {
  return (
    <DashboardLayout>
      <div className="max-w-[1920px] mx-auto">
        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#24252D] rounded-2xl p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <span className="text-xs text-gray-500">Сегодня</span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Всего звонков</h3>
            <p className="text-3xl font-bold text-white">487</p>
          </div>
          
          <div className="bg-[#24252D] rounded-2xl p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-400/10 flex items-center justify-center">
                <ThumbsUp className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-xs text-gray-500">+12%</span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Успешные</h3>
            <p className="text-3xl font-bold text-white">234</p>
          </div>

          <div className="bg-[#24252D] rounded-2xl p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-400/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-xs text-gray-500">Сегодня</span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Встречи</h3>
            <p className="text-3xl font-bold text-white">12</p>
          </div>

          <div className="bg-[#24252D] rounded-2xl p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-orange-400/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-400" />
              </div>
              <span className="text-xs text-gray-500">В среднем</span>
            </div>
            <h3 className="text-gray-400 text-sm mb-1">Длительность</h3>
            <p className="text-3xl font-bold text-white">3:24</p>
          </div>
        </div>

        {/* Основная таблица */}
        <div className="bg-[#24252D] rounded-2xl p-8 border border-gray-800">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">История звонков</h2>
            <div className="flex items-center space-x-4">
              <select className="px-4 py-2 bg-[#2A2B33] rounded-lg border border-gray-700 text-white">
                {statusFilters.map(filter => (
                  <option key={filter.id} value={filter.id}>{filter.name}</option>
                ))}
              </select>
              <button className="flex items-center px-4 py-2 bg-[#2A2B33] rounded-lg text-gray-400 hover:text-white transition-colors">
                <Download className="w-4 h-4 mr-2" />
                Экспорт
              </button>
            </div>
          </div>

          {/* Таблица звонков */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Компания</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Контакт</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Дата</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Статус</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Результат</th>
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Длительность</th>
                </tr>
              </thead>
              <tbody>
                {callData.map(call => (
                  <tr key={call.id} className="border-b border-gray-800 hover:bg-[#2A2B33] transition-colors">
                    <td className="py-4 px-4">
                      <div>
                        <div className="text-white font-medium">{call.company}</div>
                        <div className="text-gray-500 text-sm">{call.phone}</div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-white">{call.contact}</td>
                    <td className="py-4 px-4 text-white">{call.date}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                        ${call.status === 'success' ? 'bg-green-400/10 text-green-400' :
                          call.status === 'no-answer' ? 'bg-red-400/10 text-red-400' :
                          'bg-orange-400/10 text-orange-400'}`}>
                        {call.status === 'success' ? 'Дозвон' :
                         call.status === 'no-answer' ? 'Недозвон' : 'Отказ'}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                        ${call.result === 'meeting' ? 'bg-purple-400/10 text-purple-400' :
                          call.result === 'interested' ? 'bg-blue-400/10 text-blue-400' :
                          call.result === 'reject' ? 'bg-red-400/10 text-red-400' :
                          'bg-gray-400/10 text-gray-400'}`}>
                        {call.result === 'meeting' ? 'Встреча' :
                         call.result === 'interested' ? 'Заинтересован' :
                         call.result === 'reject' ? 'Отказ' : 'Перезвонить'}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-white">{call.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Карточки активных сделок */}
        <h2 className="text-2xl font-bold text-white mt-8 mb-6">Активные сделки</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {callData.filter(call => call.result === 'interested' || call.result === 'meeting').map(deal => (
            <div key={deal.id} className="bg-[#24252D] rounded-2xl p-6 border border-gray-800">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-white font-medium mb-1">{deal.company}</h3>
                  <p className="text-gray-400 text-sm">{deal.contact}</p>
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                  ${deal.result === 'meeting' ? 'bg-purple-400/10 text-purple-400' : 'bg-blue-400/10 text-blue-400'}`}>
                  {deal.result === 'meeting' ? 'Встреча' : 'Заинтересован'}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">{deal.notes}</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">{deal.date}</span>
                <button className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
} 