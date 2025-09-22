export default function Services() {
  return (
    <div className="font-sans">

      {/* Hero Section */}
      <section className="relative bg-gray-100">
        <img
          src="/doctor-patient.png"
          alt="Doctor with patient"
          className="w-full h-[600px] object-cover"
        />
        <h1 className="absolute top-1/2 left-10 text-5xl font-extrabold text-blue-900">
          Services
        </h1>
      </section>

      {/* Info Section */}
      <section className="flex flex-col md:flex-row items-center px-10 py-16 bg-white">
        <img src="/doctor-smiling.jpg" alt="Doctor" className="w-full md:w-1/2 rounded-lg shadow-lg h-full w-full" />
        <div className="md:ml-10 mt-6 md:mt-0">
          <h2 className="text-3xl font-bold mb-4 text-black">Your Health is Our Priorities.</h2>
          <p className="text-gray-600 mb-6">
            At Trinity, we go beyond just treating symptoms – we focus on addressing the underlying causes of illness and promoting holistic well-being. Whether you’re seeking preventive care, managing a chronic condition, or in need of specialized treatment, you can trust that you’re in good hands with our team.
          </p>
          <div className="grid grid-cols-2 gap-6 text-center font-bold">
            <div><span className="text-2xl text-blue-600">500+</span><p className="text-sm text-gray-500">Saving Patients Weekly</p></div>
            <div><span className="text-2xl text-blue-600">94%</span><p className="text-sm text-gray-500">Satisfaction Rate</p></div>
            <div><span className="text-2xl text-blue-600">20+</span><p className="text-sm text-gray-500">Years serving</p></div>
            <div><span className="text-2xl text-blue-600">24/7</span><p className="text-sm text-gray-500">Urgent Care</p></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-blue-50 py-12 text-center">
        <h2 className="text-2xl font-bold mb-8 text-black">We are providing best services</h2>
        <div className="grid md:grid-cols-3 gap-6 px-8 font-bold">
          {[
            { title: "General Check-Up", desc: "Regular check ups to keep you safe and healthy...", img: "/service1.jpg" },
            { title: "Dental Service", desc: "Healthy smile with gentle and professional care...", img: "/service2.png" },
            { title: "Pediatric Care", desc: "Healthcare services for infants, children, and teens...", img: "/service3.png" }
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6">
              <img src={s.img} alt={s.title} className="rounded-md mb-4 h-40 w-full object-cover" />
              <h3 className="text-lg font-extrabold text-blue-900">{s.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{s.desc}</p>
              <a href="#" className="text-blue-600 font-extrabold">Read more</a>
            </div>
          ))}
        </div>
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg">View More</button>
      </section>
    </div>
  )
}
