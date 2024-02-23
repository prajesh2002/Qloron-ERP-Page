import React from "react";

const Section6 = () => {
  return (
    <div className="sec6-container mx-3 xl:px-20">
      <div className="sec6-cards grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-12 my-10 lg:mx-10 ">
        <div className="sec6-card p-4 pb-5 shadow-lg border-solid rounded-lg leading-relaxed pl-6">
          <h6 className="font-bold pl-6">
            Create innovative business models at global scale
          </h6>
          <p className="pl-6">Drive top-line growth</p>
          <ul style={{listStyle:"disc"}}className="pl-6">
            <li>
              Open new sources of growth by transitioning from product- to
              service- based businesses with ease.
            </li>
            <li>
              Adapt to changes dynamically based on real-time usage and customer
              experience data.
            </li>
          </ul>
        </div>
        <div className="sec6-card p-4 pb-5 shadow-lg border-solid rounded-lg leading-relaxed pl-6">
          <h6 className="font-bold pl-6">
            Benefit from proven business processes for your industry
          </h6>
          <p className="pl-6">Activate bottom-line growth</p>
          <ul style={{listStyle:"disc"}}className="pl-6">
            <li>
              Work better together with instant and personalized business
              insight available from anywhere.{" "}
            </li>
            <li>
              Improve margin continuously with intelligent automation across
              your end-to-end operational processes.{" "}
            </li>
          </ul>
        </div>
        <div className="sec6-card p-4 pb-5 shadow-lg border-solid rounded-lg leading-relaxed pl-6">
          <h6 className="font-bold pl-6">
            Build sustainability directly into your business{" "}
          </h6>
          <p className="pl-6">Deliver green-line growth</p>
          <ul style={{listStyle:"disc"}}className="pl-6">
            <li>
              Adapt operations and processes to consistently reduce emissions,
              waste, and environmental impact.
            </li>
            <li>
              Manage regulatory requirements proactively with company-wide
              controls and in-depth reporting.
            </li>
          </ul>
        </div>
        <div className="sec6-card p-4 pb-5 shadow-lg border-solid rounded-lg leading-relaxed pl-6">
          <h6 className="font-bold pl-6">
            Bring your business wherever it needs to go{" "}
          </h6>
          <p className="pl-6">Grow without limits</p>
          <ul style={{listStyle:"disc"}}className="pl-6">
            <li>
              Stay on top of compliance and security with global standards
              built-in and always up to date.
            </li>
            <li>
              Keep innovating with a scalable platform and network of partners,
              continuously bringing new value.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section6;
