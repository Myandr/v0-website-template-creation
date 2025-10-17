export function ExperienceCascades() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-6xl md:text-7xl mb-8 text-black text-balance">Experience Cascades</h2>
            <p className="text-lg text-gray-600 mb-8 text-pretty">
              Begin your journey with us and discover how each visit creates memories that cascade into the next,
              building a relationship with flavors that last a lifetime.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Start Your Journey
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/outdoor-restaurant-seating-with-nature.jpg" alt="Experience 1" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg mt-8">
              <img src="/chef-preparing-food.png" alt="Experience 2" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
