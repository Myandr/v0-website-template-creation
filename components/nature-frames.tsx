export function NatureFrames() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="{{image_3}}" alt="Nature frames" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl ml-auto text-white">
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-balance">Nature Frames Every Moment</h2>
          <p className="text-lg mb-8 text-pretty">
            Dine surrounded by breathtaking views where nature becomes part of your culinary experience. Every seat
            offers a window to tranquility.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Discover More
          </button>
        </div>
      </div>
    </section>
  )
}
