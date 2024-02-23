// import React from "react";
// import img from "../images/section7.jpg";

// const Section7 = () => {
//   return (
//     <div>
//       <div className="sec7-container mx-20">
//         <h1 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl font-semibold text-gray-800 mb-4 text-center">
//           Additional <span style={{ color: "#26D6EB" }}>ERP </span> solutions
//         </h1>
//         <div className="sec7-inner-container mx-auto mb-5 flex flex-col md:flex-row ml-12 mr-8 mt-10">
//           <div className="sec7-left md:size-7/12 lg:size-5/12">
//             <img src={img} alt="" />
//           </div>
//           <div className="sec7-right md:w-1/2 p-4 my-0 lg:my-20 lg:ml-10">
//             <h6 className="font-bold lg:mt-10 sm:mt-0">ERP for small and midsize companies</h6>
//             <p className="mt-2">
//               Manage your entire small or midsize business with a single
//               solution, from accounting, financials, purchasing, inventory,
//               sales, and customer relationships to reporting and analytics.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section7;


import React from "react";
import img from "../images/section7.jpg";

const Section7 = () => {
  return (
    <div>
      <div className="sec7-container mx-4 md:mx-10 lg:mx-20">
        <h1 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl font-semibold mb-4 text-center">
          Additional <span className="text-teal-500">ERP</span> solutions
        </h1>
        <div className="sec7-inner-container lg:mx-20 md:mx-2 sm:mx-auto mb-5 flex flex-col md:flex-row">
          <div className="sec7-left md:w-7/12 lg:w-5/12">
            <img src={img} alt="" className="w-full h-auto md:pr-5" />
          </div>
          <div className="sec7-right md:w-1/2 py-4 my-0 lg:my-8 lg:ml-16">
            <h6 className="font-bold md:mt-2 xl:mt-10">ERP for small and midsize companies</h6>
            <p className="mt-2 lg:w-10/12">
              Manage your entire small or midsize business with a single
              solution, from accounting, financials, purchasing, inventory,
              sales, and customer relationships to reporting and analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
