const FeaturesSection = () => (
  <section className="grid md:grid-cols-3 gap-8 px-[5%] py-16 max-w-7xl mx-auto">
    <FeatureCard
      title="Business Solution"
      content="Interdum et malesuada fames ac ante..."
    />
    <FeatureCard
      title="Free project quote"
      content="Interdum et malesuada fames ante..."
    />
    <FeatureCard
      title="Nulla lobortis nunc"
      content="Interdum et malesuada fames ac ante..."
    />
  </section>
);

const FeatureCard = ({ title, content }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600">{content}</p>
  </div>
);

export default FeaturesSection;
