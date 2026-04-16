export default function AaryanexWebsite() {
  const services = [
    "IT Consulting",
    "Software Development",
    "SAP Mobility Solutions",
    "Cloud Integration",
    "Enterprise Architecture",
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <header className="border-b border-gray-800 backdrop-blur-sm sticky top-0 bg-gray-950/90 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <span className="text-xl font-bold">A</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Aaryanex Technology</h1>
              <p className="text-sm text-gray-400">SAP Mobility</p>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Building Smart Enterprise Software for the Future
          </h2>
          <p className="text-gray-400 text-lg leading-8">
            We help businesses accelerate digital transformation through modern
            software development, IT consulting, and SAP mobility solutions.
          </p>
        </div>

        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-gray-800 border border-gray-700"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
