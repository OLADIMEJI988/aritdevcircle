import React, { useEffect } from "react";
import anime from "animejs";

import img31 from "../assets/31.png";
import java from "../assets/java.png";
import greenimg from "../assets/greenimg.png";
import github from "../assets/github.png";
import brownguy from "../assets/brownguy.png";
import browngirl from "../assets/browngirl.png";
import rainbowimg from "../assets/rainbowimg.png";
import dreadsguy from "../assets/dreadsguy.png";
import womanonblack from "../assets/womanonblack.png";

export default function HackathonRightImg() {
  const imgs = [
    rainbowimg,
    brownguy,
    greenimg,
    browngirl,
    womanonblack,
    github,
    java,
    dreadsguy,
    img31,
  ];

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;

    for (let i = 1; i <= imgs.length; i++) {
      const path = anime.path(`#path2 path:nth-of-type(${i})`);

      anime({
        targets: `#img${i}`,
        translateX: path("x"),
        translateY: path("y"),
        rotate: isMobile ? path("angle") : 0,
        opacity: [
          { value: 1, duration: (5000 + i * 500) * 0.9 },
          { value: 0, duration: (5000 + i * 500) * 0.1 },
        ],
        easing: "linear",
        duration: 5000 + i * 500,
        loop: true,
      });
    }
  }, [imgs.length]);

  return (
    <div className="mobile:max-lg:order-3 mobile:max-lg:rotate-90 lg:order-none text-white relative bottom-0 h-full flex justify-center items-center lg:justify-start">
      <svg
        id="path2"
        viewBox="0 0 466 594"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="lg:h-[550px] md:w-full mobile:max-lg:h-[370px]"
      >
        {/* Paths */}
        <path
          d="M235.607 290C134.554 267.345 142.77 123.345 18.6866 98"
          stroke="url(#paint0_linear_657_595)"
          strokeOpacity="0.6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
        <path
          d="M235.607 290C141.239 229.359 186.098 21.3584 2.00031 2"
          stroke="url(#paint1_linear_657_595)"
          strokeOpacity="0.6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
        <path
          d="M219.964 83.7588C328.111 90.0449 283.253 298.047 350.325 289.759"
          stroke="url(#paint2_linear_657_595)"
          strokeOpacity="0.6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
        <path
          d="M235.607 290C127.847 290 109.761 194 2.00031 194"
          stroke="url(#paint3_linear_657_595)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
        <path
          d="M464 290H2.00012"
          stroke="#676666"
          strokeOpacity="0.39"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
        <path
          d="M235.607 288C134.554 310.655 142.77 454.655 18.6866 480"
          stroke="url(#paint4_linear_657_595)"
          strokeOpacity="0.6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
        <path
          d="M226.394 294.034C96.8672 282.655 105.083 426.655 25.9717 375.601"
          stroke="url(#paint5_linear_657_595)"
          strokeOpacity="0.6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
        <path
          d="M235.607 288C141.239 348.641 186.098 556.642 2.00031 576"
          stroke="url(#paint6_linear_657_595)"
          strokeOpacity="0.6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
        <path
          d="M198 499.241C306.147 492.955 261.289 284.953 328.361 293.241"
          stroke="url(#paint7_linear_657_595)"
          strokeOpacity="0.6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />

        {imgs.map((src, idx) => (
          <image
            key={idx}
            id={`img${idx + 1}`}
            href={src}
            x="-20"
            y="-21"
            width="45"
            height="45"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipCircle)"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        ))}

        {/* ==== Gradients + ClipPath ==== */}
        <defs>
          <linearGradient
            id="paint0_linear_657_595"
            x1="127.147"
            y1="98"
            x2="127.147"
            y2="290"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#2D2C2C" />
            <stop offset="0.254808" stopColor="#646262" />
            <stop offset="0.6249" stopColor="#4A4848" />
            <stop offset="0.625" stopColor="#CDCBCB" />
          </linearGradient>

          <linearGradient
            id="paint1_linear_657_595"
            x1="118.804"
            y1="2"
            x2="118.804"
            y2="290"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#2D2C2C" />
            <stop offset="0.254808" stopColor="#646262" />
            <stop offset="0.6249" stopColor="#4A4848" />
            <stop offset="0.625" stopColor="#CDCBCB" />
          </linearGradient>

          <linearGradient
            id="paint2_linear_657_595"
            x1="285.144"
            y1="83.7588"
            x2="285.144"
            y2="290"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#2D2C2C" />
            <stop offset="0.254808" stopColor="#646262" />
            <stop offset="0.6249" stopColor="#4A4848" />
            <stop offset="0.625" stopColor="#CDCBCB" />
          </linearGradient>

          <linearGradient
            id="paint3_linear_657_595"
            x1="229.477"
            y1="284.677"
            x2="87.568"
            y2="201.333"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#EFE3E6" />
            <stop offset="0.615385" stopColor="#BF435E" />
            <stop offset="0.71875" stopColor="#CF4664" />
            <stop offset="0.822115" stopColor="#FC2656" />
          </linearGradient>

          <linearGradient
            id="paint4_linear_657_595"
            x1="127.147"
            y1="480"
            x2="127.147"
            y2="288"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#2D2C2C" />
            <stop offset="0.254808" stopColor="#646262" />
            <stop offset="0.6249" stopColor="#4A4848" />
            <stop offset="0.625" stopColor="#CDCBCB" />
          </linearGradient>

          <linearGradient
            id="paint5_linear_657_595"
            x1="126.183"
            y1="386.593"
            x2="126.183"
            y2="293.391"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#2D2C2C" />
            <stop offset="0.254808" stopColor="#646262" />
            <stop offset="0.6249" stopColor="#4A4848" />
            <stop offset="0.625" stopColor="#CDCBCB" />
          </linearGradient>

          <linearGradient
            id="paint6_linear_657_595"
            x1="118.804"
            y1="576"
            x2="118.804"
            y2="288"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#2D2C2C" />
            <stop offset="0.254808" stopColor="#646262" />
            <stop offset="0.6249" stopColor="#4A4848" />
            <stop offset="0.625" stopColor="#CDCBCB" />
          </linearGradient>

          <linearGradient
            id="paint7_linear_657_595"
            x1="263.181"
            y1="499.241"
            x2="263.181"
            y2="293"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#2D2C2C" />
            <stop offset="0.254808" stopColor="#646262" />
            <stop offset="0.6249" stopColor="#4A4848" />
            <stop offset="0.625" stopColor="#CDCBCB" />
          </linearGradient>

          <clipPath id="clipCircle">
            <circle cx="0" cy="0" r="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
