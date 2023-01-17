"use client";

import {
  CalendarDaysIcon,
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
        <div className="how-works-bg">
          <MapPinIcon className="how-works-icon" />
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
        <div className="how-works-bg">
          <CalendarDaysIcon className="how-works-icon" />
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
        <div className="how-works-bg">
          <GlobeAmericasIcon className="how-works-icon" />
          <h5 className="mb-2 text-xl font-semibold tracking-tight">
            Explore our listing!
          </h5>
        </div>
      </motion.h2>
    </motion.div>
  );
}
