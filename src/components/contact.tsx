import React from "react";

import { Cover } from "./ui/cover";

// Contact Section
const Contact: React.FC = () => {
    return (
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-white/80 via-white to-white">
            Turning Ideas into Scalable Software <Cover>at Warp Speed</Cover>
          </h1>
    );
  };

export default Contact;