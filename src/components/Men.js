import React from "react";
import { motion } from "framer-motion";
import Shirt from "../products/index.jpg";

const Men = () => {
  return (
    <div className="flex flex-wrap px-20">
      {/* Men's pair 1 */}
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.1,
        }}
        className="border rounded border-gray-300 divide-y-2"
      >
        {/* Product image ↓ */}
        <div className=" w-36 h-36 mx-auto py-px">
          <motion.img
            src={Shirt}
            whileHover={{
              scale: 2,
              rotateY: 360,
              transition: {
                rotateY: { duration: 2, repeat: Infinity, ease: "linear" },
              },
            }}
            alt=""
          />
        </div>

        {/* Product details ↓ */}
        <div className="text-center">
          <h1 className=" font-extrabold ">Denim</h1>
          <h2 className="font-bold px-3">Blue Jenes shirt</h2>
          <p className="px-3">2000/-</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Men;
