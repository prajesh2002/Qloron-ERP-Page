// import React from "react";
// import '../styles/section4.css'

// function Section4() {
//   return (
//     <div className="sec4-container">
//       <div className="sec4-left text-lg">
//         <h2>Manage inflation challenges</h2>
//       </div>
//       <div className="sec4-right">
//         <p>
//           Qloron has the right solutions to help guide you through these
//           unprecedented times.
//         </p>
//       </div>
//       <button className="sec4-btn">Learn More</button>
//     </div>
//   );
// }

// export default Section4;

import React from "react";
import '../styles/section4.css'

function Section4() {
  return (
    <div className="sec4-container bg-cover bg-center py-6 md:py-6 lg:py-6 items-center px-3 md:px-5 lg:px-10">
      <div className="sec4-left text-lg md:text-xl lg:text-2xl font-bold">
        <h2>Manage inflation challenges</h2>
      </div>
      <div className="sec4-right text-sm md:text-base lg:text-lg w-full md:w-1/3 lg:w-1/3">
        <p>
          Qloron has the right solutions to help guide you through these unprecedented times.
        </p>
      </div>
      <button className="sec4-btn mt-2 bg-cyan-500 border-none py-2 px-3 text-white  font-semibold rounded-md">
        Learn More
      </button>
    </div>
  );
}

export default Section4;
