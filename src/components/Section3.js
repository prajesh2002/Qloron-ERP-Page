// import React from "react";
// import "../styles/section3.css";

// function Section3() {
//   return (
//     <div className="sec3-container m-10">
//       <div className="sec3-left">
//         <div className="sec3-inner-left">
//           <h1 className="text-xl">
//             Start your{" "}
//             <span style={{ color: "#12B1BE" }}>cloud ERP journey</span> by
//             adopting a ready-to-run solution
//           </h1>
//           <p>
//             Run, build, and grow your business with a cloud ERP that gives you
//             industry best practices and helps build your own breakthroughs.
//           </p>
//           <button className="sec3-btn">Explore Grow with QLoron</button>
//         </div>
//       </div>
//       <div className="sec3-right"></div>
//     </div>
//   );
// }

// export default Section3;

import React from "react";
import "../styles/section3.css";
import img from '../images/section3.png'
import Button from "./Button";

function Section3() {
  return (
    <div className="sec3-container mx-auto mb-5 flex flex-col md:flex-row ml-12 mr-8 lg:mt-10 mt-0">
      <div className="sec3-left md:w-1/2 p-4 mt-2 ml-10">
        <div className="sec3-inner-left xl:ml-12">
          <h1 className="md:text-2xl lg:text-3xl text-xl max-w-lg xl:mt-10">
            Start your{" "}
            <span className="text-cyan-500">cloud ERP journey</span> by
            adopting a ready-to-run solution
          </h1>
          <p className="mt-4 md:mt-6 max-w-xl">
            Run, build, and grow your business with a cloud ERP that gives you
            industry best practices and helps build your own breakthroughs.
          </p>
          <Button>Explore Grow with Qloron</Button>
        </div>
      </div>
      <div className="sec3-right md:size-7/12 lg:size-5/12">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Section3;
