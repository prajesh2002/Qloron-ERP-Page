// import React from "react";
// import img1 from "../images/section1.jpg";
// import "../styles/section1.css";

// function Section1() {
//   return (
//     <div className="sec1-container">
//       <div className="sec1-content">
//         <h1>Enterprise Resource Planning (ERP)</h1>
//         <h6>Run at your best with market-leading Financial ERP Software</h6>
//       {/* </div>
//       <div className="sec1-btn"> */}
//         <button>Request a demo</button>
//       </div>
//     </div>
//   );
// }

// export default Section1;

// -------------------

// import React from "react";
// import img1 from "../images/section1.jpg";
// // import "../styles/section1.css";

// function Section1() {
//   return (
//     <div className="sec1-container bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${img1})` }}>
//       <div className="sec1-content text-white p-8 md:p-16 lg:p-24 xl:p-32">
//         <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 font-semibold">Enterprise Resource Planning (ERP)</h1>
//         <h6 className="text-sm md:text-base lg:text-lg xl:text-xl mb-6 font-normal">
//           Run at your best with market-leading Financial ERP Software
//         </h6>
//         <button className="text-cyan-500 bg-white px-4 py-2 rounded-md">Request a demo</button>
//       </div>
//     </div>
//   );
// }

// export default Section1;

import React from "react";
import img1 from "../images/section1.jpg";

function Section1() {
  return (
    <div
      className="sec1-container bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="flex items-center lg:h-screen">
        <div className="sec1-content text-white p-8 md:p-16 lg:p-24 xl:p-32 w-8/12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold mb-4 ">
            Enterprise Resource Planning (ERP)
          </h1>
          <h6 className="text-sm md:text-base lg:text-lg xl:text-xl mb-6 font-normal">
            Run at your best with market-leading Financial ERP Software
          </h6>
          <button className="text-cyan-600 bg-white  p-2 px-3 m-4 mx-auto rounded-md font-semibold">
            Request a demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section1;
