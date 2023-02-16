import { motion } from "framer-motion";

import imageAPi from "../../assets/icons8-api-64.png";

import image4 from '../../assets/pngegg.png'
import image3 from '../../assets/undraw_yoga_re_i5ld.svg'
import image2 from '../../assets/undraw_accept_tasks_re_09mv.svg'
import image1 from '../../assets/Open Doodles - Giant Ice Cream.png'

export function Techs() {
  const sliders = [
    imageAPi,
    image1,
    image2,
    image3,
    image4,

  ];




  return (
    <section className="mt-[250px]">
      <div className=" ml-12 w-11/12">
        <p className="flex items-center space-x-3 font-bold not-italic">
          <a className="text-4xl text-bege-escuro-2">TECHNOLOGY</a>
          <div className="border-t-2 w-5/6  border-bege-escuro"></div>
        </p>
      </div>

      <div>
        <motion.div className="overflow-hidden">
          <motion.div className="flex">

            {sliders.map((image) =>{
              return(
                <motion.div className="w-full h-[500px]">
                  <img src={image} alt="" className="h-20 w-20" />
                </motion.div>
              )

            })}

          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
