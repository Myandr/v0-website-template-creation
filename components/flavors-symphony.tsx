export function FlavorsSymphony() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img src="{{image_2}}" alt="Signature dish" className="w-full rounded-lg shadow-2xl" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-serif text-5xl md:text-6xl mb-6 text-black text-balance">A Symphony of Flavors</h2>
            <p className="text-lg text-gray-600 mb-6 text-pretty">
              Each dish is a masterpiece of culinary artistry—crafted with precision, passion, and the finest seasonal
              ingredients.
            </p>
            <p className="text-lg text-gray-600 text-pretty">
              From land to sea, our menu celebrates the diversity of flavors that nature provides, transformed into
              unforgettable dining experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
