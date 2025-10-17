export function CulinaryMastery() {
  return (
    <section id="culinary-mastery" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <img
              src="{{image_1}}"
              alt="Culinary presentation"
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
            />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-black text-balance">Culinary Mastery in Wind</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
            Experience flavors that transport you to a world of culinary excellence. Every dish is crafted with passion,
            precision, and the finest ingredients.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            View Menu
          </button>
        </div>
      </div>
    </section>
  )
}
