'use client'

import { useState } from 'react'
import { Upload, Link as LinkIcon, FileText, Mic, Settings, Search, Globe, Linkedin, InfoIcon } from 'lucide-react'

const CALL_TYPES = [
  { id: 'cold', name: 'Холодные звонки', description: 'Первичный контакт с потенциальными клиентами' },
  { id: 'promo', name: 'Информирование об акциях', description: 'Оповещение о специальных предложениях' },
  { id: 'meeting', name: 'Назначение встреч', description: 'Организация встреч с заинтересованными клиентами' },
  { id: 'feedback', name: 'Сбор обратной связи', description: 'Получение отзывов о продукте или услуге' },
  { id: 'support', name: 'Техническая поддержка', description: 'Помощь клиентам в решении проблем' },
  { id: 'survey', name: 'Опросы', description: 'Проведение маркетинговых исследований' }
]

const VOICE_OPTIONS = [
  { id: 'alex', name: 'Александр', gender: 'мужской', tone: 'деловой' },
  { id: 'maria', name: 'Мария', gender: 'женский', tone: 'дружелюбный' },
  { id: 'dmitry', name: 'Дмитрий', gender: 'мужской', tone: 'уверенный' },
  { id: 'elena', name: 'Елена', gender: 'женский', tone: 'профессиональный' }
]

export function CampaignSetup() {
  const [activeTab, setActiveTab] = useState('database')
  const tabs = [
    { id: 'database', name: 'База данных', icon: Upload },
    { id: 'script', name: 'Скрипт', icon: FileText },
    { id: 'company', name: 'О компании', icon: LinkIcon },
    { id: 'research', name: 'Изучить компанию', icon: Search },
    { id: 'settings', name: 'Настройки', icon: Settings }
  ]

  return (
    <div className="bg-[#24252D] rounded-2xl p-8 border border-gray-800">
      <h2 className="text-2xl font-bold text-white mb-8">Настройка кампании обзвона</h2>

      {/* Табы */}
      <div className="flex space-x-4 mb-8 border-b border-gray-800">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-4 py-3 border-b-2 transition-colors ${
              activeTab === tab.id 
                ? 'border-indigo-500 text-white' 
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <tab.icon className="w-5 h-5 mr-2" />
            {tab.name}
          </button>
        ))}
      </div>

      {/* База данных */}
      {activeTab === 'database' && (
        <div className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-2">База клиентов (Excel)</label>
            <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-indigo-500 transition-colors">
              <input
                type="file"
                accept=".xlsx,.xls,.csv"
                className="hidden"
                id="database-upload"
              />
              <label
                htmlFor="database-upload"
                className="cursor-pointer text-indigo-400 hover:text-indigo-300 flex flex-col items-center"
              >
                <Upload className="w-8 h-8 mb-2" />
                <span>Загрузить базу клиентов</span>
                <span className="text-sm text-gray-500 mt-1">XLSX, XLS или CSV</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Прайс-лист</label>
            <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-indigo-500 transition-colors">
              <input
                type="file"
                accept=".xlsx,.xls,.csv,.pdf"
                className="hidden"
                id="price-upload"
              />
              <label
                htmlFor="price-upload"
                className="cursor-pointer text-indigo-400 hover:text-indigo-300 flex flex-col items-center"
              >
                <FileText className="w-8 h-8 mb-2" />
                <span>Загрузить прайс-лист</span>
                <span className="text-sm text-gray-500 mt-1">XLSX, PDF или CSV</span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Скрипт продаж */}
      {activeTab === 'script' && (
        <div className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-2">Скрипт продаж</label>
            <textarea
              className="w-full h-48 px-4 py-3 bg-[#2A2B33] rounded-xl border border-gray-700 focus:border-indigo-500 outline-none text-white resize-none"
              placeholder="Введите скрипт продаж..."
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Тип обзвона</label>
            <select className="w-full px-4 py-3 bg-[#2A2B33] rounded-xl border border-gray-700 focus:border-indigo-500 outline-none text-white">
              {CALL_TYPES.map(type => (
                <option key={type.id} value={type.id}>{type.name} - {type.description}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* О компании */}
      {activeTab === 'company' && (
        <div className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-2">Сайт компании</label>
            <input
              type="url"
              className="w-full px-4 py-3 bg-[#2A2B33] rounded-xl border border-gray-700 focus:border-indigo-500 outline-none text-white"
              placeholder="https://example.com"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Описание компании</label>
            <textarea
              className="w-full h-32 px-4 py-3 bg-[#2A2B33] rounded-xl border border-gray-700 focus:border-indigo-500 outline-none text-white resize-none"
              placeholder="Опишите вашу компанию, продукты и услуги..."
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Уникальные преимущества</label>
            <textarea
              className="w-full h-32 px-4 py-3 bg-[#2A2B33] rounded-xl border border-gray-700 focus:border-indigo-500 outline-none text-white resize-none"
              placeholder="Опишите ключевые преимущества вашей компании..."
            />
          </div>
        </div>
      )}

      {/* Изучить компанию */}
      {activeTab === 'research' && (
        <div className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-2">Ссылки на компанию</label>
            <div className="space-y-4">
              <div>
                <div className="flex items-center mb-2">
                  <Globe className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-400">Веб-сайт</span>
                </div>
                <input
                  type="url"
                  className="w-full px-4 py-3 bg-[#2A2B33] rounded-xl border border-gray-700 focus:border-indigo-500 outline-none text-white"
                  placeholder="https://company-website.com"
                />
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <Linkedin className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-400">LinkedIn</span>
                </div>
                <input
                  type="url"
                  className="w-full px-4 py-3 bg-[#2A2B33] rounded-xl border border-gray-700 focus:border-indigo-500 outline-none text-white"
                  placeholder="https://linkedin.com/company/..."
                />
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <FileText className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-400">Презентация компании</span>
                </div>
                <div className="border-2 border-dashed border-gray-700 rounded-xl p-6 text-center hover:border-indigo-500 transition-colors">
                  <input
                    type="file"
                    accept=".pdf,.ppt,.pptx"
                    className="hidden"
                    id="presentation-upload"
                  />
                  <label
                    htmlFor="presentation-upload"
                    className="cursor-pointer text-indigo-400 hover:text-indigo-300 flex flex-col items-center"
                  >
                    <Upload className="w-6 h-6 mb-2" />
                    <span>Загрузить презентацию</span>
                    <span className="text-sm text-gray-500 mt-1">PDF, PPT или PPTX</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Ключевые слова и фразы</label>
            <textarea
              className="w-full h-32 px-4 py-3 bg-[#2A2B33] rounded-xl border border-gray-700 focus:border-indigo-500 outline-none text-white resize-none"
              placeholder="Введите ключевые слова и фразы, характерные для вашей отрасли..."
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Целевая аудитория</label>
            <div className="bg-[#2A2B33] p-4 rounded-xl">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 mb-2">Размер компании</label>
                  <select className="w-full px-4 py-2 bg-[#1E1F25] rounded-lg border border-gray-700 text-white">
                    <option>Малый бизнес</option>
                    <option>Средний бизнес</option>
                    <option>Крупный бизнес</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Отрасль</label>
                  <select className="w-full px-4 py-2 bg-[#1E1F25] rounded-lg border border-gray-700 text-white">
                    <option>IT и технологии</option>
                    <option>Производство</option>
                    <option>Розничная торговля</option>
                    <option>Услуги</option>
                    <option>Другое</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/10 p-4 rounded-xl">
            <div className="flex items-start">
              <InfoIcon className="w-5 h-5 text-blue-400 mr-3 mt-1" />
              <p className="text-sm text-blue-400">
                AI-ассистент проанализирует предоставленную информацию о компании и автоматически адаптирует скрипт продаж под специфику бизнеса клиента, учитывая отраслевые особенности и потребности.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Настройки */}
      {activeTab === 'settings' && (
        <div className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-2">Голос бота</label>
            <div className="grid grid-cols-2 gap-4">
              {VOICE_OPTIONS.map(voice => (
                <label
                  key={voice.id}
                  className="flex items-center p-4 bg-[#2A2B33] rounded-xl cursor-pointer hover:bg-[#32333C] transition-colors"
                >
                  <input
                    type="radio"
                    name="voice"
                    value={voice.id}
                    className="mr-3"
                  />
                  <div>
                    <div className="text-white font-medium">{voice.name}</div>
                    <div className="text-sm text-gray-400">
                      {voice.gender}, {voice.tone} тон
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Кнопка запуска */}
      <div className="mt-8 pt-8 border-t border-gray-800">
        <button className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity">
          Запустить кампанию
        </button>
      </div>
    </div>
  )
} 