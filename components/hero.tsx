"use client"

export function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/elegant-restaurant-poolside-dining-with-tranquil-a.jpg" alt="Hero background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="font-serif text-6xl md:text-8xl mb-6 text-balance">A Taste of Tranquility</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-pretty">{"{{business_details}}"}</p>
        <button
          onClick={() => {
            const element = document.getElementById("culinary-mastery")
            element?.scrollIntoView({ behavior: "smooth" })
          }}
          className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
        >
          Explore
        </button>
      </div>
    </section>
  )
}
