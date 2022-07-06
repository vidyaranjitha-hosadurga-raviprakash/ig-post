import React, { useRef } from "react";
import "./cubeImage.css";

import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";

const cubeSides = [
  { name: "top", img: img6 },
  { name: "right", img: img5 },
  { name: "bottom", img: img4 },
  { name: "left", img: img3 },
  { name: "back", img: img2 },
  { name: "front", img: img1 },
];
export const CubeImage = () => {
  const cubeRef = useRef();

  const rotateCube = (e) => {
    cubeRef.current.style.transform =
      "rotateX(" + -e.pageY + "deg)" + "rotateY(" + e.pageX + "deg)";
  };

  return (
    <>
      <div className="ui card" style={{ width: "100%" }}>
        <div className="content">
          <div className="right floated meta">11h</div>
          <img
            className="ui avatar image"
            src={img3}
            alt="display-of-the-user"
          ></img>
          <span>Vidruth</span>
        </div>
        <div className="ui clearing divider"></div>
        <div className="image cube-post">
          <div
            className="cube"
            ref={cubeRef}
            onMouseMove={(e) => rotateCube(e)}
          >
            {cubeSides.map(({ name, img }, index) => {
              return (
                <div className={`${name}`} key={index}>
                  <img src={img} alt="memories-captures"></img>
                </div>
              );
            })}
          </div>
        </div>
        <div className="content">
          <span className="right floated likes">
            <i className="heart outline like icon"></i>
            Forever love
          </span>
          <span>
            <p className="caption">
              Five months memories | high five ❤️️🥰
              <span className="person-tag">@sushruth_pattar</span>,
              <strong>ILY</strong>
            </p>
          </span>
        </div>
        <div className="extra content">
          <div className="ui large transparent left icon input">
            <i className="heart outline icon"></i>
            <input type="text" placeholder="Add Comment..." />
          </div>
        </div>
      </div>

      <br></br>
    </>
  );
};
