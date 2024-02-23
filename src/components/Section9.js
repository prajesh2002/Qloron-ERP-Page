// import React from "react";

// const Section9 = () => {
//   return (
//     <div>
//       <h6 className="bg-cyan-600 p-4 text-white text-center  font-bold">
//         How is your experience with this page?
//         <span className="items-center bg-slate-100 text-gray-600 m-2 p-1 lg:p-1 lg:px-2 rounded-sm cursor-pointer hover:bg-green-400">
//           <i class="fa-solid fa-thumbs-up fa-lg"></i>{" "}
//         </span>
//         <span className="items-center bg-slate-100 text-gray-600 m-2 p-1 lg:p-1 lg:px-2 rounded-sm cursor-pointer hover:bg-red-400">
//           <i class="fa-solid fa-thumbs-down fa-lg"></i>
//         </span>
//       </h6>
//     </div>
//   );
// };

// export default Section9;

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const Section9 = () => {
  return (
    <div className="sec9-container my-8">
      <h6 className="bg-cyan-600 p-4 text-white text-center font-bold">
        How is your experience with this page?
        <span className="items-center bg-slate-100 m-2 px-2 lg:py-1 lg:px-2 rounded-sm cursor-pointer hover:bg-green-400">
          <FontAwesomeIcon icon={faThumbsUp} className="text-base md:text-xl lg:text-2xl text-cyan-500" />
        </span>
        <span className="items-center bg-slate-100 m-2 px-2 lg:py-1 lg:px-2 rounded-sm cursor-pointer hover:bg-red-400">
          <FontAwesomeIcon icon={faThumbsDown} className="text-base md:text-xl lg:text-2xl text-cyan-500" />
        </span>
      </h6>
    </div>
  );
};

export default Section9;

