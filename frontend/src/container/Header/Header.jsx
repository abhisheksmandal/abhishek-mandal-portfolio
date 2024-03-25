import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import "./Header.scss";
import { AppWrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  const sentences = [
    "Hey there!",
    "I am Abhishek Mandal",
    "Welcome to my Portfolio...",
  ];

  const [typedText, setTypedText] = useState("");
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    let isTyping = true;
    let typingInterval;

    const startTyping = () => {
      const currentSentence = sentences[currentSentenceIndex];
      typingInterval = setInterval(() => {
        if (isTyping) {
          if (currentIndex <= currentSentence.length) {
            setTypedText(currentSentence.slice(0, currentIndex));
            currentIndex++;
          } else {
            isTyping = false; // Switch to backspacing mode after typing completes
            setTimeout(() => {
              startBackspacing();
            }, 1000); // Wait for 1 second before starting backspacing
          }
        }
      }, 100); // Adjust typing speed here (milliseconds)
    };

    const startBackspacing = () => {
      let backspacingInterval = setInterval(() => {
        if (currentIndex >= 0) {
          setTypedText(sentences[currentSentenceIndex].slice(0, currentIndex));
          currentIndex--;
        } else {
          clearInterval(backspacingInterval); // Clear backspacingInterval
          setCurrentSentenceIndex(
            (prevIndex) => (prevIndex + 1) % sentences.length
          ); // Move to the next sentence
          setTimeout(() => {
            setTypedText(""); // Clear typed text before starting typing the next sentence
            startTyping(); // Start typing the next sentence after 2 seconds
          }, 2000); // Wait for 2 seconds before starting typing the next sentence
        }
      }, 100); // Adjust backspacing speed here (milliseconds)
    };

    startTyping(); // Start the typing animation initially

    return () => clearInterval(typingInterval); // Cleanup function
  }, [currentSentenceIndex]); // Add currentSentenceIndex as dependency

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              {/* <p className="p-text">{typedText}</p> */}
              <h1
              // className="head-text"
              >
                {typedText}
                <span style={{ fontWeight: "normal" }}>|</span>
              </h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">DevOps System Administrator</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
