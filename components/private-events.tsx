export function PrivateEvents() {
  return (
    <section id="private-events" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-5xl md:text-6xl text-center mb-16 text-black text-balance">
          Romantic Dinners & Private Events
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/elegant-table-setting.png"
              alt="Private dining 1"
              className="w-full h-96 object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/romantic-dinner-table-with-candles.jpg"
              alt="Private dining 2"
              className="w-full h-96 object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/outdoor-dining-setup-with-food.jpg"
              alt="Private dining 3"
              className="w-full h-96 object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-gray-600 mb-8 text-pretty">
            Whether you're celebrating a milestone or creating an intimate moment, our private dining experiences are
            crafted to perfection.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Book an Event
          </button>
        </div>
      </div>
    </section>
  )
}
