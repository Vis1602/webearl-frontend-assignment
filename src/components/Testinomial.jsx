const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Product Manager at TechNova",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "Webearl transformed our online presence! Their team was extremely professional, timely, and insightful. Highly recommended.",
  },
  {
    name: "Sneha Patel",
    role: "Founder at Designify",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "Working with Webearl was a breeze. They truly understood our brand and delivered beyond expectations!",
  },
  {
    name: "Rahul Sharma",
    role: "CEO at StartUp Hub",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    feedback:
      "Incredible service and support. The website they built has drastically improved our conversion rate.",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700">
    Client Testinomials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              “{t.feedback}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
