import { PhoneIcon, CalendarIcon, ChartBarIcon, CogIcon } from '@heroicons/react/24/outline'

export function Features() {
  const features = [
    {
      icon: PhoneIcon,
      title: 'Автоматические звонки',
      description: 'ИИ самостоятельно обзванивает клиентов и ведет диалог на естественном языке'
    },
    {
      icon: CalendarIcon,
      title: 'Планирование встреч',
      description: 'Автоматическое назначение встреч и внесение их в календарь'
    },
    {
      icon: ChartBarIcon,
      title: 'Квалификация лидов',
      description: 'Оценка потенциальных клиентов и определение их готовности к покупке'
    },
    {
      icon: CogIcon,
      title: 'Интеграция с CRM',
      description: 'Бесшовная интеграция со всеми популярными CRM-системами'
    }
  ]

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Возможности нашего AI-менеджера
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 