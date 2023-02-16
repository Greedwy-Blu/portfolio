
import { Dialog, Transition } from "@headlessui/react";
import { useState,Fragment } from "react";
import styled from "styled-components";

export function Contact(){

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }


 const HeaderButton = styled.button`



  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 2px solid #80501cc3;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
	font-weight: 700;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  color: #FFFF;
  margin-top: 0.875rem;


&:after {
  content: "";
  background-color: #d8a063;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

&:hover:after {
  top: 0px;
  left: 0px;
}

@media (min-width: 768px) {
     padding: 13px 50px 13px;

}
`;

  return(

    <section className=" mt-[450px]">

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-[#00414b] shadow-lg rounded-sm ">

                <Dialog.Title
                  as="h3"
                  className=""
                >
                  <div className="flex">

                    <div className="text-lg font-medium text-cinza-claro">

                    <a>Send Email</a>

                    </div>

                   <div className="ml-auto">

                  <button
                    type="button"
                    className="text-bege-escuro font-extrabold"
                    onClick={closeModal}
                  >
                    X
                  </button>

                 </div>

                  </div>
                </Dialog.Title>


                <div className="mt-2 border-t w-full border-bege-escuro text-bege-escuro">

                  <p className="text-sm text-gray-500 pt-2 w-full">
                  <input type="text" className="w-full h-10  bg-[#015d6b] border-none" placeholder="Subject" />
                  </p>

                  <p className="text-sm text-gray-500 pt-2">
                  <input type="email" className="w-full  h-10  bg-[#015d6b] border-none" placeholder="Email" />
                  </p>

                  <p className="text-sm text-gray-500 pt-2 w-full">
                  <textarea  className="w-full  h-40  bg-[#015d6b] border-none " placeholder="Message"/>
                  </p>
                  <p className="flex justify-end space-x-4 mt-3">

                    <button className="w-24 h-7 bg-bege-escuro-2 text-bege-claro"  onClick={closeModal}>Cancel</button>
                    <button className="w-24 h-7 bg-bege-escuro-2 text-bege-claro">Submit</button>

                  </p>


                </div>


              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <p className="grid  justify-items-center">
      <a className="font-bold lg:text-6xl sm:text-sm text-bege-escuro-2  text-center break-words ">looking forward to the new things the world brings </a>

       <HeaderButton   onClick={openModal} className="mt-10">
         SEND EMAIL
       </HeaderButton>

      </p>

      <p className="flex justify-center space-x-4 mt-20">
        <a href="https://github.com/Greedwy-Blu" className="font-bold text-2xl  text-bege-escuro-2  text-center">GITHUB</a>
        <a href="https://www.linkedin.com/in/gabriel-oliveira-alves-da-silva-2838b9266/" className="font-bold text-2xl  text-bege-escuro-2  text-center">LINKEDIN</a>
      </p>


    </section>

  )
}