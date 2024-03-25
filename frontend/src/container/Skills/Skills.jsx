import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
// import { urlFor, client } from "../../client";
import "./Skills.scss";
import { images } from "../../constants";

const experiences = [
  {
    year: 2020,
    works: [
      {
        name: "Full Stack Developer",
        company: "HDSOFT Technologies",
        desc: "Internship",
      },
    ],
  },
  {
    year: 2023,
    works: [
      {
        name: "Junior DevOps System Administrator",
        company: "Sapna Technologies",
        desc: "Handle more than 20 servers",
      },
    ],
  },
];

const skills = [
  {
    name: "React",
    icon: images.react,
    bgColor: "#edf2f8",
    // description: "I am good at MERN Stack",
    // imgUrl: images.about01,
  },
  {
    name: "Figma",
    icon: images.figma,
    bgColor: "#edf2f8",
    // description: "I am good at MERN Stack",
    // imgUrl: images.about01,
  },
  {
    name: "Python",
    icon: images.python,
    bgColor: "#edf2f8",
    // description: "I am good at MERN Stack",
    // imgUrl: images.about01,
  },
  {
    name: "Node",
    icon: images.node,
    bgColor: "#edf2f8",
    // description: "I am good at MERN Stack",
    // imgUrl: images.about01,
  },
  {
    name: "HTML",
    icon: images.html,
    bgColor: "#edf2f8",
    // description: "I am good at MERN Stack",
    // imgUrl: images.about01,
  },
  {
    name: "CSS",
    icon: images.css,
    bgColor: "#edf2f8",
    // description: "I am good at MERN Stack",
    // imgUrl: images.about01,
  },
];

const Skills = () => {
  // const [experiences, setExperiences] = useState([]);
  // const [skills, setSkills] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "experiences"]';
  //   const skillsQuery = '*[_type == "skills"]';

  //   client.fetch(query).then((data) => {
  //     setExperiences(data);
  //   });

  //   client.fetch(skillsQuery).then((data) => {
  //     setSkills(data);
  //   });
  // }, []);
  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                // style={{ backgroundColor: skill.bgColor }}
                style={{ backgroundColor: "#edf2f8" }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
