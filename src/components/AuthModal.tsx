import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-xl p-8 w-full max-w-md relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">
          {isLogin ? 'Вход в личный кабинет' : 'Регистрация'}
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 bg-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Пароль</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 bg-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
          >
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            {isLogin ? 'Нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войдите'}
          </button>
        </div>
      </div>
    </div>
  )
} 