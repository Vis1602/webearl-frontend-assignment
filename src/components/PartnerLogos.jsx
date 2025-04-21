const partners = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Slack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
  },
];

const PartnerLogos = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center max-w-7xl mx-auto">
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner.logo}
            alt={partner.name}
            className="h-12 w-auto filter grayscale opacity-60 hover:opacity-100 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default PartnerLogos;
