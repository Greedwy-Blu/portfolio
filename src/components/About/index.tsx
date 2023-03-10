import { Fragment, useState } from "react";
import { Border, HeaderButton, ImgProfile } from "./styled";
import { Dialog, Transition } from "@headlessui/react";
import emailjs from "@emailjs/browser";

import { Modal } from "antd";
 function Header() {
  let [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: any) {
    e.preventDefault();
    if (subject === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
    }

    const templateParams = {
      subject: subject,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_ujwnjdm",
        "template_zr3zk5f",
        templateParams,
        "iA81tHlMgxyuHOSsr"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          setSubject("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("EROO", err);
        }
      );
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section className=" mx-auto  overflow-hidden ">
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
                <Dialog.Title as="h3" className="">
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
                  <form onSubmit={sendEmail}>
                    <p className="text-sm text-gray-500 pt-2 w-full">
                      <input
                        type="text"
                        className="w-full h-10  bg-[#015d6b] border-none"
                        placeholder="Subject"
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                      />
                    </p>

                    <p className="text-sm text-gray-500 pt-2">
                      <input
                        type="email"
                        className="w-full  h-10  bg-[#015d6b] border-none"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </p>

                    <p className="text-sm text-gray-500 pt-2 w-full">
                      <textarea
                        className="w-full  h-40  bg-[#015d6b] border-none "
                        placeholder="Message"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                      />
                    </p>
                    <p className="flex justify-end space-x-4 mt-3">
                      <button
                        className="w-24 h-7 bg-bege-escuro-2 text-bege-claro"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                      <button className="w-24 h-7 bg-bege-escuro-2 text-bege-claro">
                        Submit
                      </button>
                    </p>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <div className="grid grid-rows-1 grid-flow-col  columns-2">
        <div className="flex justify-around">
          <div className="flex items-center w-2/6">
            <p className="not-italic font-bold">
              <a className="inline-block align-text-top text-3xl text-bege-escuro-2 mb-5 ">
                FULL STACK AND COMPUTER SCIENTIST, EXCITED FOR NEW TECHNOLOGIES
              </a>

              <a className="text-left   text-bege-escuro text-2xl flow-root">
                Hey! I'm gabriel I'm 18 old I'm a stundent computer science. I'm
                dedicate to learning about technologies and programming
                languages and their impact on the world and their elaboration
                process to achieve a better world for us through technology.
              </a>

              <HeaderButton onClick={openModal} className="flow-root">
                SEND EMAIL
              </HeaderButton>
            </p>
          </div>

          <div className="mt-16 ">
            <Border className="overflow-auto  ">
              <ImgProfile className="translate-y-40 " />
            </Border>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header