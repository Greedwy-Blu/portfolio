import { useEffect, useRef, useState } from "react"

import { AnimatePresence, motion } from "framer-motion";
import overlay from '../../assets/overlay.png'
import image from '../../assets/profile.png'
import image2 from '../../assets/Open Doodles - Giant Ice Cream.png'




const sliders = [


{
  title: 'ROCKET COFFE',
  image: image2,
  class: ' flex items-center w-[500px] h-[500px] bg-color-17'
},
{
  title: 'HIGIA',
  image: 'https://images.unsplash.com/photo-1658184145200-3358c3338585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  class: 'w-[500px] h-[500px] bg-color-20'
},
{
  title: 'NLW SETUP',
image: 'https://images.unsplash.com/photo-1658186309018-1e3b880acd0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
class: 'w-[500px] h-[500px] bg-color-16'
},
{
  title: 'POKEDEX',
  image: 'https://images.unsplash.com/photo-1658193624919-50e49d7847e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',

class: 'w-[500px] h-[500px] bg-color-18'
}

]


const variants = {
  initial: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      // scale: 0.5,
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    // scale: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: direction => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      // scale: 0.5,
      // transition: 'ease-in',
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }
  },
}

export function FrontEnd(){

  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  function nextStep() {
    setDirection(1)
    if (index === sliders.length - 1) {
      setIndex(0)
      return
    }
    setIndex(index + 1)
  }

  function prevStep() {
    setDirection(-1)
    if (index === 0) {
      setIndex(sliders.length - 1)
      return
    }
    setIndex(index - 1)
  }

  var byslider = function(object) {
    return object.image
  };
  var bysliderTitle = function(object) {
    return object.title
};
var bysliderClass = function(object) {
  return object.class
};


console.log(byslider(sliders[0]));


return(

<section className="mt-[570px]  ">


<div className=" ml-12 w-11/12">


 <p className="flex items-center space-x-3 font-bold not-italic">

  <a className="text-4xl text-bege-escuro-2">FRONTEND</a>
  <div className="border-t-2 w-5/6  border-bege-escuro"></div>



 </p>



</div>

<div className="flex justify-center mr-40">


<div className="translate-x-12 mt-48 ">
        <a className="text-3xl font-bold text-yellow-bege">{bysliderTitle(sliders[index])}</a>
        </div>


     <button className='prevButton bg-transparent' onClick={prevStep}>
          ◀
     </button>



        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            variants={variants}
            animate='animate'
            initial='initial'
            exit='exit'
            className='slides mt-20 '
            key={index}
            custom={direction}
          >




                  <div className="">
                    <div className={bysliderClass(sliders[index])}>

                    <img src={byslider(sliders[index])} alt="" className="h-96 w-96 ml-16"/>

                    </div>

                  </div>


            </motion.div>
        </AnimatePresence>

  <button className='nextButton' onClick={nextStep}>
        ▶
  </button>

</div>


</section>

)


}