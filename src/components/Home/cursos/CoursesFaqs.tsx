import { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { arrayCourses } from "../../../data/siteConfig";

import { motion, AnimatePresence } from "framer-motion";
export const CoursesFaqs = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const handleToggle = (index: any) => {
    if (isOpen === index) {
      setIsOpen(null);
    } else {
      setIsOpen(index);
    }
  };
  const [countPrev, setCountPrev] = useState(0);
  const [countNext, setCountNext] = useState(5);
  const [arrayListCourses, setArrayListCourses] = useState(
    arrayCourses.slice(countPrev, countNext),
  );
  useEffect(() => {
    setArrayListCourses(arrayCourses.slice(countPrev, countNext));
  }, [countPrev, countNext]);

  const handleCountPrev = () => {
    if (countPrev > 0) {
      setCountPrev(countPrev - 5);
      setCountNext(countNext - 5);
    }
  };
  const handleCountNext = () => {
    if (countNext < arrayCourses.length) {
      setCountPrev(countPrev + 5);
      setCountNext(countNext + 5);
    }
  };
  return (
    <div className="flex items-center justify-center xl:max-w-[1280px] w-full mt-[-30px] mx-auto flex-wrap h-auto relative sm:p-12">
      <div className="xl:max-w-[920px] w-full gap-3 mx-auto cursor-pointer mt-12 sm:mt-0">
        <div>
          {arrayListCourses.map((faq, index) => {
            return (
              <div key={index}>
                <motion.div
                  layout
                  onClick={() => handleToggle(index)}
                  className={`px-3 py-3 border-primary ${
                    isOpen === index ? "border-b-[0px]" : ""
                  } border-2 border-dashed last:mb-4 flex justify-between items-center text-primary sm:text-xl text-[16px] rounded-md`}
                >
                  {faq.title}
                  {isOpen === index ? (
                    <AiOutlineMinus className="text-primary h-[30px] w-[30px] border-primary lg:border-2 rounded-full cursor-pointer" />
                  ) : (
                    <BsPlus className="text-primary h-[30px] w-[30px] border-primary lg:border-2 rounded-full cursor-pointer" />
                  )}
                </motion.div>
                <AnimatePresence>
                  {isOpen === index && (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 1 } }}
                      className={`px-3 py-3 border-primary ${
                        isOpen === index ? "border-t-[0px]" : ""
                      } border-2 border-dashed last:mb-4 flex justify-between items-center`}
                    >
                      <ul className="last:list-disc ml-4">
                        <li>
                          <b className="text-primary">Fecha:</b> {faq.date}
                        </li>
                        <li>{faq.item1}</li>
                        <li>{faq.item2}</li>
                        <li>{faq.item3}</li>
                        <li>
                          <a
                            href={faq.url}
                            target="_blanck"
                            className="text-primary"
                          >
                            {faq.item4}
                          </a>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-center">
          <button
            className="px-3 py-2 border-primary text-primary text-xl flex items-center justify-center"
            onClick={handleCountPrev}
            id="countPrev"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>

          <p className="text-primary text-xl ">
            {countPrev + 1} - {countNext}
          </p>

          <button
            className="px-3 py-2  border-primary  text-primary text-xl  flex items-center justify-center"
            onClick={handleCountNext}
            id="countNext"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
