// import React from "react";
// import '../styles/section2.css'
// function Section2() {
//   return (
//     <div className="sec2-container">
//       <h1 className="xl:text-4xl lg:text-3xl md:text-2xl
//       sm:text-xl text-xl m-4">
//         We have the right <span style={{ color: "#12B1BE" }}>cloud ERP</span>{" "}for you
//       </h1>
//       <p>Whether adopting your first ERP or migrating from an existing one to the cloud, you can gain a complete, modular solution with the AI and analytics capabilities to move your business forward.</p>
//     </div>
//   );
// }

// export default Section2;

import React from "react";
// import '../styles/section2.css'

function Section2() {
  return (
    <div className="sec2-container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="sec2-inner pl-4 ml-5">
        <h1 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-xl font-semibold text-gray-800 mb-4 text-center">
          We have the right <span className="text-cyan-500">cloud ERP</span> for
          you
        </h1>
        <p className="text-black max-w-2xl mx-auto">
          Whether adopting your first ERP or migrating from an existing one to
          the cloud, you can gain a complete, modular solution with the AI and
          analytics capabilities to move your business forward.
        </p>
      </div>
    </div>
  );
}

export default Section2;
