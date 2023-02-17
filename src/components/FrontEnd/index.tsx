// @ts-nocheck
import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import image4 from "../../assets/pngegg.png";
import image3 from "../../assets/undraw_yoga_re_i5ld.svg";
import image2 from "../../assets/undraw_accept_tasks_re_09mv.svg";
import image1 from "../../assets/Open Doodles - Giant Ice Cream.png";
import arrowleft from "../../assets/iconmonstr-arrow-left-thin.svg";
import arrowright from "../../assets/iconmonstr-arrow-right-thin.svg";
import { Link } from "react-router-dom";

const sliders = [
  {
    title: "ROCKET COFFE",
    image: image1,
    class: " flex items-center w-[500px] h-[500px] bg-color-17",
    link: "https://greedwy-blu.github.io/rocketCoffee/",
  },
  {
    title: "HIGIA",
    image: image3,
    class: "w-[500px] h-[500px] bg-color-20",
    link: "https://github.com/Greedwy-Blu/higia",
  },
  {
    title: "NLW SETUP",
    image: image2,
    class: "w-[500px] h-[500px] bg-color-16",
    link: "https://nlw-setup-deploy.vercel.app",
  },
  {
    title: "POKEDEX",
    image: image4,
    class: "w-[500px] h-[500px] bg-color-18",
    link: "https://pokedex-nufy.vercel.app/",
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

export function FrontEnd() {
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
    <section className="mt-[570px]  ">
      <div className=" ml-12 w-11/12">
        <p className="flex items-center space-x-3 font-bold not-italic">
          <a className="text-4xl text-bege-escuro-2">FRONTEND</a>
          <div className="border-t-2 w-5/6  border-bege-escuro"></div>
        </p>
      </div>

      <div className="flex justify-center mr-40">
        <div className="translate-x-16 mt-48 ">
          <a className="text-3xl font-bold text-yellow-bege">
            {bysliderTitle(sliders[index])}
          </a>
        </div>

        <button className="prevButton  mr-5 mt-16" onClick={prevStep}>
          <img src={arrowleft} alt="" className="h-6 w-6" />
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
                    className="h-96 w-96 ml-16"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </a>
        <button className="nextButton ml-5 mt-16" onClick={nextStep}>
          <img src={arrowright} alt="" className="h-6 w-6 " />
        </button>
      </div>
    </section>
  );
}
