export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-5xl md:text-6xl text-center mb-16 text-black text-balance">Voices of Delight</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/happy-couple-dining-at-restaurant.jpg" alt="Customer 1" className="w-full h-64 object-cover" />
            <div className="p-6 bg-gray-50">
              <p className="text-gray-600 mb-4 text-pretty">
                "An unforgettable dining experience. Every dish was a work of art, and the ambiance was simply magical."
              </p>
              <p className="font-medium text-black">— Sarah M.</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/elegant-woman-enjoying-meal-at-restaurant.jpg" alt="Customer 2" className="w-full h-64 object-cover" />
            <div className="p-6 bg-gray-50">
              <p className="text-gray-600 mb-4 text-pretty">
                "The attention to detail is extraordinary. From the service to the presentation, everything exceeded our
                expectations."
              </p>
              <p className="font-medium text-black">— James L.</p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="{{image_4}}" alt="Customer 3" className="w-full h-64 object-cover" />
            <div className="p-6 bg-gray-50">
              <p className="text-gray-600 mb-4 text-pretty">
                "A culinary journey like no other. The flavors, the atmosphere, the service—all absolutely perfect."
              </p>
              <p className="font-medium text-black">— Emily R.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
