export default function Home() {
  const services = [
    "SAP Mobility Solutions",
    "Enterprise Software Development",
    "IT Consulting",
    "Cloud Integration",
    "Architecture Modernization",
    "AI & Automation",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="border-b border-white/10 sticky top-0 backdrop-blur-md bg-black/70 z-10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Aaryanex Technology</h1>
            <p className="text-sm text-gray-400">SAP Mobility</p>
          </div>
          <button className="px-5 py-2 rounded-xl bg-white text-black font-medium">
            Contact Us
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-28 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Enterprise IT Solutions
          </p>
          <h2 className="text-6xl font-bold leading-tight mb-6">
            Accelerate Digital Transformation with SAP Mobility
          </h2>
          <p className="text-gray-400 text-lg leading-8 mb-8">
            We help enterprises modernize operations through intelligent
            software solutions, SAP mobility platforms, and strategic IT consulting.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-2xl bg-white text-black font-medium">
              Book Consultation
            </button>
            <button className="px-6 py-3 rounded-2xl border border-white/20">
              Explore Services
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <h3 className="text-4xl font-semibold mb-10">Why Choose Us</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
            Enterprise-grade Architecture
          </div>
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
            Faster Delivery Cycles
          </div>
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
            SAP Domain Expertise
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-8 py-8 text-gray-400">
          © 2026 Aaryanex Technology · Enterprise IT Consulting
        </div>
      </footer>
    </div>
  );
}
