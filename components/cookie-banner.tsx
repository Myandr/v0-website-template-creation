"use client"

interface CookieBannerProps {
  onAccept: () => void
  onDecline: () => void
}

export function CookieBanner({ onAccept, onDecline }: CookieBannerProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-medium text-black mb-2">We value your privacy</h3>
            <p className="text-sm text-gray-600 text-pretty">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
              By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={onDecline}
              className="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium text-black hover:bg-gray-50 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={onAccept}
              className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
