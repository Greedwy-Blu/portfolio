// @ts-nocheck
import { motion } from "framer-motion";

import image0 from "../../assets/file_type_typescript_icon_130108.svg";
import image5 from "../../assets/javascript_icon_213796.svg";
import image6 from "../../assets/LogosJest.svg";
import image7 from "../../assets/LogosNextjs.svg";
import image8 from "../../assets/LogosReact.svg";
import image9 from "../../assets/LogosSequelize.svg";
import image10 from "../../assets/LogosPrisma.svg";
import image11 from "../../assets/LogosPython.svg";
import image12 from "../../assets/LogosMysqlIcon.svg";
import image13 from "../../assets/LogosPostgresql.svg";
import image14 from "../../assets/LogosNodejsIcon.svg";
import image4 from "../../assets/LogosExpress.svg";
import image3 from "../../assets/LogosDockerIcon.svg";
import image2 from "../../assets/LogosGitIcon.svg";
import image1 from "../../assets/LogosGraphql.svg";
import { useEffect, useRef, useState } from "react";

function Techs() {
  const sliders = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image0,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
  ];

  const [width, setwidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="mt-[250px] overflow-x-hidden ">
      <div className=" ml-12 w-11/12">
        <p className="flex items-center space-x-3 font-bold not-italic">
          <a className="text-4xl text-bege-escuro-2">TECHNOLOGY</a>
          <div className="border-t-2 w-5/6  border-bege-escuro"></div>
        </p>
      </div>

      <div className="mt-[160px] ml-[1729px] ">
        <motion.div
          ref={carousel}
          className=""
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex  justify-center
          "
          >
            {sliders.map((image) => {
              return (
                <motion.div
                  className="w-[500px] h[500px] mb-3  mx-3 outline outline-[0.5px] outline-bege-escuro-2 rounded-full p-2 hover:scale-105 "
                  key={image}
                >
                  <div
                    className="overflow-auto   flex items-center  h-72 w-48 rounded-tl-[100px] rounded-tr-[100px] rounded-br-[94px] rounded-bl-[94px]
                   outline-color-7  bg-color-19 shadow "
                  >
                    <img src={image} alt="" className="h-16 w-16 ml-16 " />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Techs

