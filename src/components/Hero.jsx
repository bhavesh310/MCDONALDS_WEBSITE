import React, { useState } from "react";
import "./Hero.css";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
const menu = [
  {
    name: "Big Mac",
    shortName: "MAC",
    subtext: "The Ultimate Layered Legend.",
    description:
      "Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun. The undisputed icon of flavor.",
    image: "./images/mc-unlimited.png",
    // Cinematic crimson & deep charcoal depth contrast
    gradient: "radial-gradient(circle at 70% 50%, #E61E1E 0%, #7A0A0A 60%, #1A0202 100%)",
    backgrounds: [
      { src: "./images/tomato.png", width: "220px", height: "220px", top: "10%", right: "40%" },
      { src: "./images/flu1.png", width: "180px", height: "180px", top: "5%", right: "5%" },
      { src: "./images/chicks.png", width: "240px", height: "240px", top: "35%", right: "45%" },
      { src: "./images/leaf.png", width: "200px", height: "200px", top: "70%", right: "35%" },
      { src: "./images/chicks.png", width: "250px", height: "250px", top: "65%", right: "2%" },
      { src: "./images/tomato.png", width: "220px", height: "220px", top: "75%", right: "20%" },
    ],
  },
  {
    name: "Chicken McNuggets",
    shortName: "NUGGS",
    subtext: "Golden. Crispy. Perfect.",
    description:
      "Made with tender, juicy white meat chicken. Crispy on the outside, savory on the inside, and paired beautifully with classic sauces.",
    image: "./images/buckets.png",
    // Deep warm amber, honey-gold glow, and roasted caramel contrast
    gradient: "radial-gradient(circle at 70% 50%, #FFB01F 0%, #C6720B 50%, #3D1E00 100%)",
    backgrounds: [
      { src: "./images/p3.png", width: "220px", height: "220px", top: "10%", right: "40%" },
      { src: "./images/p2.png", width: "220px", height: "220px", top: "5%", right: "5%" },
      { src: "./images/p3.png", width: "200px", height: "200px", top: "35%", right: "45%" },
      { src: "./images/p2.png", width: "240px", height: "240px", top: "68%", right: "2%" },
      { src: "./images/p2.png", width: "220px", height: "220px", top: "70%", right: "35%" },
      { src: "./images/p3.png", width: "210px", height: '210px', top: "72%", right: "20%" },
    ],
  },
  {
    name: "World Famous Fries",
    shortName: "FRIES",
    subtext: "Crisped to Perfection.",
    description:
      "Our signature premium potatoes, sliced straight, fried until golden-crisp, and perfectly salted. Absolutely legendary.",
    image: "./images/fries.png",
    // Vibrant signature fry-box red with a vivid central spotlight halo
    gradient: "radial-gradient(circle at 70% 50%, #FF2E2E 0%, #D10A0A 45%, #4A0000 100%)",
    backgrounds: [
      { src: "./images/fry.png", width: "220px", height: "220px", top: "10%", right: "40%" },
      { src: "./images/fry.png", width: "240px", height: "240px", top: "5%", right: "5%" },
      { src: "./images/fry.png", width: "200px", height: "200px", top: "35%", right: "45%" },
      { src: "./images/fry.png", width: "250px", height: "250px", top: "65%", right: "2%" },
      { src: "./images/fry.png", width: "220px", height: "220px", top: "60%", right: "25%" },
      { src: "./images/fry.png", width: "230px", height: "230px", top: "70%", right: "40%" },
    ],
  },
  {
    name: "Coca-Cola",
    shortName: "COKE",
    subtext: "Ice Cold Refreshment.",
    description:
      "The definitive refreshing companion. Perfectly carbonated, incredibly crisp, and served ice cold to elevate your meal.",
    image: "./images/drinks-combo.png",
    // High-end dark luxury theme: Liquid-cola brown core out to pure midnight obsidian 
    gradient: "radial-gradient(circle at 70% 50%, #2B1408 0%, #140803 40%, #050505 100%)",
    backgrounds: [
      { src: "./images/ice.png", width: "200px", height: "200px", top: "10%", right: "40%" },
      { src: "./images/lemon.png", width: "220px", height: "220px", top: "5%", right: "5%" },
      { src: "./images/ice.png", width: "240px", height: "240px", top: "35%", right: "45%" },
      { src: "./images/ice.png", width: "230px", height: "230px", top: "70%", right: "2%" },
      { src: "./images/ice.png", width: "250px", height: "250px", top: "68%", right: "35%" },
      { src: "./images/mint.png", width: "210px", height: "210px", top: "72%", right: "20%" },
    ],
  },
  {
    name: "Oreo McFlurry",
    shortName: "MIXED",
    subtext: "Creamy. Crunchy. Dreamy.",
    description:
      "Velvety vanilla soft serve whipped together with crunchy, crushed Oreo cookie pieces. A dessert masterpiece.",
    image: "./images/flurry_combo.png",
    // Premium electric cobalt and crisp milky ice-blue frost gradient
    gradient: "radial-gradient(circle at 70% 50%, #1E51A4 0%, #0B2554 50%, #030A17 100%)",
    backgrounds: [
      { src: "./images/flu3.png", width: "200px", height: "200px", top: "10%", right: "40%" },
      { src: "./images/flu1.png", width: "220px", height: "220px", top: "5%", right: "5%" },
      { src: "./images/flu3.png", width: "240px", height: "240px", top: "35%", right: "45%" },
      { src: "./images/flu2.png", width: "230px", height: "230px", top: "70%", right: "2%" },
      { src: "./images/flu1.png", width: "250px", height: "250px", top: "68%", right: "35%" },
      { src: "./images/flu3.png", width: "210px", height: "210px", top: "72%", right: "20%" },
    ],
  },
  {
    name: "Classic Cheeseburger",
    shortName: "BURGER",
    subtext: "Simple. Fresh. Flawless.",
    description:
      "A perfectly seared, juicy 100% beef patty topped with a slice of melted cheddar cheese, crisp pickles, minced onions, ketchup, and mustard on a toasted bun.",
    image: "./images/burger.png",
    // Vivid cheddar cheese orange glowing into a rich, deep earthy clay brown
    gradient: "radial-gradient(circle at 70% 50%, #FF6200 0%, #A83200 50%, #3D0B00 100%)",
    backgrounds: [
      { src: "./images/tomato.png", width: "220px", height: "220px", top: "8%", right: "38%" },
      { src: "./images/leaf.png", width: "190px", height: "190px", top: "4%", right: "8%" },
      { src: "./images/cucum.png", width: "240px", height: "240px", top: "32%", right: "42%" },
      { src: "./images/tomato.png", width: "210px", height: "210px", top: "62%", right: "4%" },
      { src: "./images/tomato.png", width: "180px", height: "180px", top: "66%", right: "36%" },
      { src: "./images/leaf.png", width: "230px", height: "230px", top: "76%", right: "18%" },
    ],
  },
  {
    name: "Big Mac Combo",
    shortName: "MEAL",
    subtext: "The Whole Box Feast.",
    description:
      "Get the legendary Big Mac served right alongside our World Famous Fries and your choice of an ice-cold, refreshing drink.",
    image: "./images/combo.png",
    // Master luxury feast layout: Intense, bright golden yellow burst dropping into a deep royal amber
    gradient: "radial-gradient(circle at 70% 50%, #FFC72C 0%, #B8860B 50%, #4A3200 100%)",
    backgrounds: [
      { src: "./images/fry.png", width: "220px", height: "220px", top: "10%", right: "40%" },
      { src: "./images/p2.png", width: "240px", height: "240px", top: "5%", right: "5%" },
      { src: "./images/fry.png", width: "240px", height: "240px", top: "35%", right: "45%" },
      { src: "./images/p3.png", width: "250px", height: "250px", top: "65%", right: "2%" },
      { src: "./images/p2.png", width: "250px", height: "250px", top: "65%", right: "35%" },
      { src: "./images/fry.png", width: "220px", height: "220px", top: "75%", right: "20%" },
    ],
  },
];

const Hero = () => {
  const [direction, setDirection] = useState(1);
  const [current, setCurrent] = useState(0);
  const item = menu[current];

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % menu.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + menu.length) % menu.length);
  };

  const slideVariants = {
    initial: (dir) => ({ x: dir === 1 ? "100%" : "-100%" }),
    animate: { x: "0%" },
    exit: (dir) => ({ x: dir === 1 ? "-100%" : "100%" }),
  };

  return (
    <div className="hero">
      <div className="bg-slides-container">
        {[0, 1, 2].map((slideIndex) => (
          <div key={slideIndex} className="bg-slide-track">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={item.shortName + "-" + slideIndex}
                custom={direction}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: 0.95,
                  ease: [0.16, 1, 0.3, 1],
                  delay: slideIndex * 0.06,
                }}
                className="bg-slide-panel"
                style={{ background: item.gradient }}
              >
                {slideIndex === 1 && (
                  <div className="slide-bg-word">{item.shortName}</div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        ))}
      </div>

      <Navbar />

      <div className="hero-main-layout">
        {/* Left Side Content */}
        <div className="hero-content">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={item.name + "-heading"}
              initial={{
                x: direction === 1 ? 150 : -150,
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{
                x: direction === 1 ? -150 : 150,
                opacity: 0,
                filter: "blur(10px)",
              }}
              transition={{ duration: 0.6, cubicBezier: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="drink-title">{item.name}</h1>
              <h3 className="drink-subtext">{item.subtext}</h3>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.p
              key={item.name + "-desc"}
              className="hero-text"
              initial={{
                x: direction === 1 ? 120 : -120,
                opacity: 0,
                filter: "blur(5px)",
              }}
              animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{
                x: direction === 1 ? -120 : 120,
                opacity: 0,
                filter: "blur(5px)",
              }}
              transition={{
                duration: 0.6,
                delay: 0.05,
                cubicBezier: [0.16, 1, 0.3, 1],
              }}
            >
              {item.description}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Right Side Showcase */}
        <div className="hero-image-showcase">
          <AnimatePresence mode="wait">
            <motion.img
              key={item.name + "-img"}
              src={item.image}
              alt={item.name}
              className="hero-img"
              initial={{
                scale: 0.2,
                rotate: direction === 1 ? 90 : -90,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                rotate: 0,
                opacity: 1,
                y: [0, -25, 0],
              }}
              exit={{
                scale: 0.2,
                rotate: direction === 1 ? -90 : 90,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 65,
                damping: 15,
                y: {
                  repeat: Infinity,
                  duration: 4.5,
                  ease: "easeInOut",
                },
              }}
            />
          </AnimatePresence>

          {/* Floating Ingredients synced to current item */}
          <AnimatePresence>
            {item.backgrounds.map((bg, index) => {
              const isTop = index < 3;
              return (
                <motion.img
                  key={item.name + "-bg-" + index}
                  src={bg.src}
                  alt=""
                  className="bg"
                  style={{
                    width: bg.width,
                    height: bg.height,
                    position: "absolute",
                    top: bg.top,
                    right: bg.right,
                    zIndex: 3,
                  }}
                  initial={{
                    y: isTop ? -250 : 250,
                    x: direction === 1 ? 300 : -300,
                    opacity: 0,
                    rotate: isTop ? -60 : 60,
                  }}
                  animate={{
                    y: 0,
                    x: 0,
                    opacity: 0.5,
                    rotate: 0,
                    y: [0, index % 2 === 0 ? 20 : -20, 0],
                    rotate: [0, index % 2 === 0 ? 12 : -12, 0],
                  }}
                  exit={{
                    y: isTop ? -250 : 250,
                    x: direction === 1 ? -300 : 300,
                    opacity: 0,
                    rotate: isTop ? 60 : -60,
                  }}
                  transition={{
                    duration: 0.95,
                    ease: [0.16, 1, 0.3, 1],
                    y: {
                      repeat: Infinity,
                      duration: 4 + (index % 3),
                      ease: "easeInOut",
                    },
                    rotate: {
                      repeat: Infinity,
                      duration: 5.5 + (index % 2),
                      ease: "easeInOut",
                    },
                  }}
                />
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="arrows">
        <button className="arrow left" onClick={handlePrev}>
          ←
        </button>
        <button className="arrow right" onClick={handleNext}>
          →
        </button>
      </div>
    </div>
  );
};

export default Hero;