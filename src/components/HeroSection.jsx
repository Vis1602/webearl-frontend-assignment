import heroImage from "../assets/img-1.png";

const HeroSection = () => {
  return (
    <section className="bg-white pt-20 pb-12 px-[5%]">
      <div className="flex flex-col md:flex-row items-center max-w-[1400px] mx-auto gap-16">
        {/* Text Section */}
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Aenean Facilisis Vitae
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing
            <br className="hidden md:block" />
            Integer id orci sed ante tincidunt
          </p>
          <button className="bg-white border border-sky-500 text-sky-500 font-medium text-[16px] px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-sky-100 transition">
            WRITE TO US
            <span className="text-sm">▶</span>
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-[500px] h-auto"
          />
          {/* Optional: Background shape */}
          <div className="absolute -top-8 -right-12 w-full h-full bg-blue-100 rounded-[60px] -z-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
