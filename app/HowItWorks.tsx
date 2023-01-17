"use client";

import {
  CalendarDaysIcon,
  GlobeAltIcon,
  GlobeAmericasIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { textContainer, textVariant, textVariant2 } from "../utils/motion";

export default function HowItWorks() {
  return (
    <motion.div variants={textContainer}>
      <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="py-8 font-extrabold text-3xl text-center"
      >
        How it <span className="highlighted">works</span>
      </motion.h2>
      <motion.h2
        variants={textVariant(0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="flex flex-col gap-4 text-center justify-between items-center p-4 leading-normal">
          <MapPinIcon className="h-20 w-20 p-4 text-main-red rounded-3xl bg-main-red bg-opacity-10" />
          <h5 className="mb-2 text-xl font-semibold tracking-tight">
            Choose the location
          </h5>
        </div>
      </motion.h2>

      <motion.h2
        variants={textVariant(0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="flex flex-col gap-4 text-center justify-between items-center p-4 leading-normal">
          <CalendarDaysIcon className="h-20 w-20 p-4 text-main-red rounded-3xl bg-main-red bg-opacity-10" />
          <h5 className="mb-2 text-xl font-semibold tracking-tight">
            Choose the date
          </h5>
        </div>
      </motion.h2>

      <motion.h2
        variants={textVariant(0.35)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="flex flex-col gap-4 text-center justify-between items-center p-4 leading-normal">
          <GlobeAmericasIcon className="h-20 w-20 p-4 text-main-red rounded-3xl bg-main-red bg-opacity-10" />
          <h5 className="mb-2 text-xl font-semibold tracking-tight">
            Explore our listings!
          </h5>
        </div>
      </motion.h2>
    </motion.div>
  );
}
