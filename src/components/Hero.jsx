import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`flex flex-row items-start gap-5 ${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-60 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]"> Daniel </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Full Stack engineer with passion for
            <br />
            Simple solutions, Clean Code and Teamwork
            <br />
            <br />
            My most current stack is TypeScript, React,
            <br />
            Nodejs, Nestjs, Mongo and Postgres and a bit of Python
            <br />
            <br />
            For fun i like to try new technologies and develop games
            <br />
            using Unity, Phaser, Libgdx and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
