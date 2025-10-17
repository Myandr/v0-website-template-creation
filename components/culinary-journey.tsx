export function CulinaryJourney() {
  return (
    <section id="culinary-journey" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-5xl md:text-6xl text-center mb-16 text-black text-balance">
          A Curated Culinary Journey
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
            <img
              src="/gourmet-pasta-dish-plated-elegantly.jpg"
              alt="Gourmet dish 1"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
            <img
              src="/grilled-meat-with-herbs-presentation.jpg"
              alt="Gourmet dish 2"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
            <img
              src="/salmon-fillet-with-vegetables-fine-dining.jpg"
              alt="Gourmet dish 3"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
            <img
              src="/elegant-dessert-plating-with-sauce.jpg"
              alt="Gourmet dish 4"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
            <img
              src="/colorful-appetizer-fine-dining-presentation.jpg"
              alt="Gourmet dish 5"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-serif mb-4 text-black">Latest Menu</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-pretty">
            Discover the art of culinary excellence with our signature tasting menu—each course tells a story of
            tradition, innovation, and unparalleled flavor.
          </p>
        </div>
      </div>
    </section>
  )
}
