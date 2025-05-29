export default function Home() {
  return (
    <div className="text-center">
      <section className="py-12 sm:py-20 bg-white shadow-sm rounded-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-indigo-700 mb-6">
            Welcome to GadgetZone!
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Discover the latest and greatest in tech gadgets. From smart home
            devices to cutting-edge audio, we have everything you need to stay
            ahead of the curve.
          </p>
          <a
            href="/products"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg py-3 px-8 rounded-lg shadow-md transition duration-150 ease-in-out"
          >
            Explore Our Latest Gadgets
          </a>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Why Shop With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                Wide Selection
              </h3>
              <p className="text-gray-600">
                A vast collection of the newest gadgets and accessories.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                Great Prices
              </h3>
              <p className="text-gray-600">
                Competitive pricing on all our high-quality products.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-indigo-700 mb-3">
                Fast Shipping
              </h3>
              <p className="text-gray-600">
                Quick and reliable delivery to get your gadgets to you sooner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
