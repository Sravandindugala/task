import React, { useRef } from "react";
import "./perticulars.css";
import class04 from '../assets/box/class04.jpg';
import class02 from "../assets/box/class02.jpg";
import class03 from "../assets/box/class03.jpg";
import test01 from "../assets/box/test01.jpg";
import test02 from "../assets/box/test02.jpg";
import test03 from "../assets/box/test03.jpg";

const Perticulars = () => {
  const scrollRef = useRef(null);

  const data = [
    { Image: class04, text: "Yoga" },
    { Image: class02, text: "Zumba" },
    { Image: class03, text: "Meditation" },
    { Image: test01, text: "Historical places" },
    { Image: test02, text: "Nature meditation" },
    { Image: test03, text: "Yoga in Forest" }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 500, behavior:"smooth" });
    }
  };

  return (
    <div id="popular" className="second-container">
      <h1 className="second-heading">Our Services</h1>
      <div className="scroll-container">
        <button className="scroll-left" onClick={scrollLeft}>‹</button>
        <div className="classes-wrapper" ref={scrollRef}>
          {data.map((ele, index) => (
            <div className="class-card" key={index}>
              <img src={ele.Image} alt="Class" />
              <p>{ele.text}</p>
            </div>
          ))}
        </div>
        <button className="scroll-right" onClick={scrollRight}>›</button>
      </div>
    </div>
  );
};

export default Perticulars;
