import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { languages, codings, multimedias } from "../constants";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const SkillCard = ({ index, name, icon }) => (
    <Tilt className='xs:w-[120px] w-full'>
        <motion.div
            // variants={fadeIn("right", "spring", index * 0.2, 0.5)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-2 px-2 min-h-[150px] flex justify-evenly items-center flex-col'
            >
                <img
                    src={icon}
                    alt='web-development'
                    className='w-10 h-10 object-contain'
                />

                <h3 className='text-white text-[15px] font-bold text-center'>
                    {name}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const Tech = () => {
    return (
        <>
            <div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>Skills</h2>
            </div>

            <p className='text-white text-[20px] font-bold h-5'>
                Language
            </p>

            <div className='mt-7 mb-7 flex flex-wrap gap-5'>
                {languages.map((language, index) => (
                    <SkillCard key={language.name} index={index} {...language} />
                ))}
            </div>

            <p className='text-white text-[20px] font-bold h-5'>
                Coding
            </p>

            <div className='mt-7 mb-7 flex flex-wrap gap-5'>
                {codings.map((coding, index) => (
                    <SkillCard key={coding.name} index={index} {...coding} />
                ))}
            </div>

            <p className='text-white text-[20px] font-bold h-5'>
                Multimedia
            </p>

            <div className='mt-7 flex flex-wrap gap-5'>
                {multimedias.map((multimedia, index) => (
                    <SkillCard key={multimedia.name} index={index} {...multimedia} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "");
