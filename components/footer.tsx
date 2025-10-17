export function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">{"{{business_name}}"}</h3>
            <p className="text-gray-400 text-sm text-pretty">Experience culinary excellence in every bite.</p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>{"{{business_email}}"}</p>
              <p>{"{{business_phone}}"}</p>
              <p className="text-pretty">{"{{business_address}}"}</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Hours</h4>
            <div className="text-sm text-gray-400 whitespace-pre-line">{"{{business_hours}}"}</div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 {"{{business_name}}"}. All rights reserved.</p>
          <p className="mt-2">
            <a href="{{website_url}}" className="hover:text-white transition-colors">
              {"{{website_url}}"}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
