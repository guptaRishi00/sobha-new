import React from "react";

const AboutDeveloper = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#003380] mb-2 text-center">
            About Sobha Limited
          </h2>
          <div className="w-24 h-1 bg-gray-200 relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-10 h-1 bg-[#003380]" />
          </div>
        </div>

        {/* Content Section */}
        <div className="text-gray-800 text-[15px] leading-relaxed text-justify md:text-left">
          <p>
            Sobha Realty is a globally renowned luxury developer founded by
            **PNC Menon**, known for its rare backward-integrated model that
            controls every stage of development—from design to construction—for
            unmatched quality and timely delivery. Operating as Sobha Realty in
            Dubai and Sobha Limited in India, the brand has a strong presence
            across the UAE, India, Oman, Bahrain, and Brunei. Recognized as one
            of the top private developers in Dubai and consistently ranked among
            India’s leading real estate brands, Sobha is admired for its
            craftsmanship, attention to detail, and high-end residential and
            mixed-use communities. The company is led by an experienced
            leadership team, including **Co-Chairman Ravi Menon** and **CEO
            Jagadish Nangineni**, driving its vision of excellence across global
            markets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutDeveloper;
