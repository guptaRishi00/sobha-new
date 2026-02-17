import React from "react";

const pricingData = [
  { type: "3 BHK", area: "2300 Sq. Ft.", price: "₹ 5.70 Cr*" },
  { type: "4 BHK", area: "2700 Sq. Ft.", price: "₹ 7.70 Cr*" },
  { type: "4 BHK + DH", area: "3000 Sq. Ft.", price: "₹ 8.55 Cr*" },
];

const PricingSection = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#003380] mb-2 text-center">
            Tentative Area & Pricing of Sobha Sector 63A
          </h2>
          <div className="w-24 h-1 bg-gray-200 relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-10 h-1 bg-[#003380]" />
          </div>
        </div>

        {/* Pricing Table Container */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            {/* Table Header */}
            <thead>
              <tr className="bg-[#003380] text-white">
                <th className="py-5 px-8 font-semibold text-sm">Type</th>
                <th className="py-5 px-8 font-semibold text-sm">Area</th>
                <th className="py-5 px-8 font-semibold text-sm">
                  Price ( Onwards )
                </th>
                <th className="py-5 px-8"></th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {pricingData.map((item, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-[#f2f2f2]" : "bg-white"} border-b border-gray-100 last:border-0`}
                >
                  <td className="py-6 px-8 text-sm font-medium text-gray-700">
                    {item.type}
                  </td>
                  <td className="py-6 px-8 text-sm text-gray-600">
                    {item.area}
                  </td>
                  <td className="py-6 px-8 text-sm font-bold text-gray-800">
                    {item.price}
                  </td>
                  <td className="py-6 px-8 text-right">
                    <button className="bg-[#003380] hover:bg-[#002866] text-white text-xs font-bold py-3 px-6 rounded-lg transition-all shadow-md active:scale-95 border border-[#d4a017]">
                      Complete Costing Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
