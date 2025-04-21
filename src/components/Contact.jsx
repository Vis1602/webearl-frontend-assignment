const Contact = () => {
  return (
    <section className="bg-blue-600 text-white py-12 px-6 md:px-16 rounded-2xl max-w-5xl mx-auto my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Text */}
        <p className="text-lg md:text-xl max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper, justo nec efficitur cursus, velit turpis tincidunt odio,
          vel feugiat ipsum nunc in lorem.
        </p>

        {/* Button */}
        <button className="bg-white border border-sky-500 text-sky-500 font-medium text-[16px] px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-sky-100 transition">
          WRITE TO US
          <span className="text-sm">▶</span>
        </button>
      </div>
    </section>
  );
};

export default Contact;
