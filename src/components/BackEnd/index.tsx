// @ts-nocheck
import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import imageAPi from "../../assets/icons8-api-64.png";
import arrowleft from "../../assets/iconmonstr-arrow-left-thin.svg";
import arrowright from "../../assets/iconmonstr-arrow-right-thin.svg";

const sliders = [
  {
    title: "SQL NODE",
    image: imageAPi,
    class: " flex items-center w-[500px] h-[500px] bg-[#D96704]  ",
    link: "https://github.com/Greedwy-Blu/sql_node",
  },
  {
    title: "CADASTRE CURSOS",
    image: imageAPi,
    class: "flex items-center w-[500px] h-[500px] bg-[#C33A1A]  ",
    link: "https://github.com/Greedwy-Blu/cadastre-seus-cursos",
  },
  {
    title: "NODEJS COM TDD",
    image: imageAPi,
    class: "flex items-center w-[500px] h-[500px] bg-color-24 ",
    link: "https://github.com/Greedwy-Blu/nodejsComTDD",
  },
  {
    title: "GRAPHQL API",
    image: imageAPi,

    class: " flex items-center w-[500px] h-[500px] bg-color-18",
    link: "https://github.com/Greedwy-Blu/Graphql",
  },
];

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      // scale: 0.5,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    // scale: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      // scale: 0.5,
      // transition: 'ease-in',
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

function BackEnd() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function nextStep() {
    setDirection(1);
    if (index === sliders.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(sliders.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  var byslider = function (object: any) {
    return object.image;
  };
  var bysliderTitle = function (object: any) {
    return object.title;
  };
  var bysliderClass = function (object: any) {
    return object.class;
  };

  var bysliderLink = function (object: any) {
    return object.link;
  };

  return (
    <section className="mt-[250px]  " id="backend">
      <div className=" ml-12 w-11/12">
        <p className="flex items-center space-x-3 font-bold not-italic">
          <div className="border-t-2 w-5/6  border-bege-escuro"></div>
          <a className="text-4xl text-bege-escuro-2">BACKEND</a>
        </p>
      </div>

      <div className="flex justify-center mr-40">
        <div className="translate-x-16 mt-48 ">
          <a className="text-3xl font-bold text-yellow-bege">
            {bysliderTitle(sliders[index])}
          </a>
        </div>

        <button className="prevButton  lg:mr-5 mt-16" onClick={prevStep}>
          <img src={arrowleft} alt="" className="h-6 w-6 " />
        </button>

        <a href={bysliderLink(sliders[index])}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              variants={variants}
              animate="animate"
              initial="initial"
              exit="exit"
              className="slides mt-20 "
              key={index}
              custom={direction}
            >
              <div className="">
                <div className={bysliderClass(sliders[index])}>
                  <img
                    src={byslider(sliders[index])}
                    alt=""
                    className="h-28 w-28 ml-48"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </a>

        <button className="nextButton  ml-5 mt-16" onClick={nextStep}>
          <img src={arrowright} alt="" className="h-4 w-4  " />
        </button>
      </div>
    </section>
  );
}

export default BackEnd
