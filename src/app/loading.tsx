'use client';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-2xl font-bold text-white">MS</span>
          </div>

          {/* Spinning Ring */}
          <div className="absolute inset-0 w-20 h-20 mx-auto border-4 border-transparent border-t-blue-400 rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">
            Carregando Portfolio
          </h2>
          <p className="text-gray-300">
            Preparando uma experiência incrível...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 w-64 mx-auto">
          <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-full rounded-full animate-pulse"
              style={{
                width: '100%',
                animation: 'loading-progress 2s ease-in-out infinite',
              }}
            ></div>
          </div>
        </div>

        {/* Tech Icons Animation */}
        <div className="flex justify-center space-x-4 mt-8">
          {['⚛️', '🚀', '💻', '🎨'].map((icon, index) => (
            <div
              key={index}
              className="text-2xl animate-bounce"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes loading-progress {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
