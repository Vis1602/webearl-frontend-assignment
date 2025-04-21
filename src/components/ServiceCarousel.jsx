import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample service data
const services = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    description:
      "Pellentesque in placerat libero. Vivamus eget ex tortor. Nulla eu libero nunc. In sit amet nunc ipsum dolor lorem tortor.",
    image:
      "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    description:
      "Pellentesque in placerat libero. Vivamus eget ex tortor. Nulla eu libero nunc. In sit amet nunc ipsum dolor lorem tortor.",
    image:
      "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    description:
      "Pellentesque in placerat libero. Vivamus eget ex tortor. Nulla eu libero nunc. In sit amet nunc ipsum dolor lorem tortor.",
    image:
      "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor",
    description:
      "Pellentesque in placerat libero. Vivamus eget ex tortor. Nulla eu libero nunc. In sit amet nunc ipsum dolor lorem tortor.",
    image:
      "https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor",
    description:
      "Pellentesque in placerat libero. Vivamus eget ex tortor. Nulla eu libero nunc. In sit amet nunc ipsum dolor lorem tortor.",
    image:
      "https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g",
  },
];

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col w-full min-w-[240px] m-2">
      <div className="h-40">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
        <button className="text-blue-600 font-medium text-sm border border-blue-600 rounded px-4 py-1 hover:bg-blue-50 transition-colors">
          SEE DETAIL
        </button>
      </div>
    </div>
  );
};

const ServiceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [cardsWidth, setCardsWidth] = useState(0);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);

  // Handle responsive sizing
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCards(1);
      } else if (width < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    const calculateCardWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        // Account for margins between cards
        const cardWidth = containerWidth / visibleCards - 16;
        setCardsWidth(cardWidth);
      }
    };

    updateVisibleCards();

    // Add a small delay to ensure DOM is updated
    setTimeout(calculateCardWidth, 0);

    window.addEventListener("resize", () => {
      updateVisibleCards();
      calculateCardWidth();
    });

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, [visibleCards]);

  const maxIndex = Math.max(0, services.length - visibleCards);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Update scroll position when index changes
  useEffect(() => {
    if (carouselRef.current) {
      const cardContainer = carouselRef.current;
      const scrollAmount = currentIndex * (cardsWidth + 16); // card width + margin
      cardContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [currentIndex, cardsWidth]);

  return (
    <div className="bg-gradient-to-br from-cyan-50 to-white py-8 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-700">Our Services</h2>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 flex items-center"
          >
            SEE ALL <ChevronRight className="ml-1" size={16} />
          </a>
        </div>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex overflow-x-hidden scroll-smooth gap-4"
            style={{ scrollbarWidth: "none" }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="flex-shrink-0"
                style={{
                  width:
                    cardsWidth > 0
                      ? `${cardsWidth}px`
                      : `calc(${100 / visibleCards}% - 16px)`,
                }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 z-10">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full bg-white shadow-md ${
                currentIndex === 0
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-blue-600 hover:bg-blue-50"
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 z-10">
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className={`p-2 rounded-full bg-white shadow-md ${
                currentIndex >= maxIndex
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-blue-600 hover:bg-blue-50"
              }`}
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Decorative elements */}
          <div className="absolute -right-8 top-16 hidden md:block">
            <div className="w-12 h-12 bg-purple-500 rounded-lg"></div>
          </div>
          <div className="absolute right-32 -bottom-4 hidden md:block">
            <div className="w-8 h-8 bg-cyan-400 rounded-full"></div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ServiceCarousel;
