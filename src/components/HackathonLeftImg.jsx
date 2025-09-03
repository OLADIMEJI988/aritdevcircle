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

export default function HackathonLeftImg() {
  const circles = [
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

    for (let i = 1; i <= circles.length; i++) {
      const path = anime.path(`#path1 path:nth-of-type(${i})`);
      anime({
        targets: `#circle${i}`,
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
  }, [circles.length]);

  return (
    <div className="mobile:max-lg:order-1 mobile:max-lg:rotate-90 lg:order-none text-white relative top-0 h-full flex justify-center items-center lg:justify-end">
      <svg
        id="path1"
        viewBox="0 0 454 578"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="lg:h-[550px] md:w-full mobile:max-lg:h-[370px]"
      >
        {/* Paths */}
        <path d="M218.393 290C319.446 267.345 311.23 123.345 435.313 98" stroke="url(#paint0_linear_639_595)" stroke-opacity="0.6" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M218.393 290C312.762 229.359 267.902 21.3584 452 2" stroke="url(#paint1_linear_639_595)" stroke-opacity="0.6" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M234.036 83.7588C125.889 90.0449 170.747 298.047 103.675 289.759" stroke="url(#paint2_linear_639_595)" stroke-opacity="0.6" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M218.393 290C326.153 290 344.239 194 452 194" stroke="url(#paint3_linear_639_595)" stroke-opacity="0.6" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M-10 290H452" stroke="#676666" stroke-opacity="0.39" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M218.393 288C319.446 310.655 311.23 454.655 435.313 480" stroke="url(#paint4_linear_639_595)" stroke-opacity="0.6" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M218.393 288C312.762 348.641 267.902 556.642 452 576" stroke="url(#paint5_linear_639_595)" stroke-opacity="0.6" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M256 499.241C147.853 492.955 192.711 284.953 125.639 293.241" stroke="url(#paint6_linear_639_595)" stroke-opacity="0.6" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/>
        <path d="M218 288C325.76 288 343.847 384 451.607 384" stroke="url(#paint7_linear_639_595)" stroke-width="4" stroke-linecap="round" stroke-linejoin="bevel"/>

        {circles.map((src, i) => (
          <image
            key={i}
            id={`circle${i + 1}`}
            href={src}
            x="-20"
            y="-21"
            width="45"
            height="45"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipCircle)"
          />
        ))}

        {/* Gradients + ClipPath */}
        <defs>
          <linearGradient id="paint0_linear_639_595" x1="326.853" y1="98" x2="326.853" y2="290" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2D2C2C"/>
            <stop offset="0.254808" stop-color="#646262"/>
            <stop offset="0.6249" stop-color="#4A4848"/>
            <stop offset="0.625" stop-color="#CDCBCB"/>
          </linearGradient>
          <linearGradient id="paint1_linear_639_595" x1="335.196" y1="2" x2="335.196" y2="290" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2D2C2C"/>
            <stop offset="0.254808" stop-color="#646262"/>
            <stop offset="0.6249" stop-color="#4A4848"/>
            <stop offset="0.625" stop-color="#CDCBCB"/>
          </linearGradient>
          <linearGradient id="paint2_linear_639_595" x1="168.856" y1="83.7588" x2="168.856" y2="290" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2D2C2C"/>
            <stop offset="0.254808" stop-color="#646262"/>
            <stop offset="0.6249" stop-color="#4A4848"/>
            <stop offset="0.625" stop-color="#CDCBCB"/>
          </linearGradient>
          <linearGradient id="paint3_linear_639_595" x1="335.196" y1="194" x2="335.196" y2="290" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2D2C2C"/>
            <stop offset="0.254808" stop-color="#646262"/>
            <stop offset="0.6249" stop-color="#4A4848"/>
            <stop offset="0.625" stop-color="#CDCBCB"/>
          </linearGradient>
          <linearGradient id="paint4_linear_639_595" x1="326.853" y1="480" x2="326.853" y2="288" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2D2C2C"/>
            <stop offset="0.254808" stop-color="#646262"/>
            <stop offset="0.6249" stop-color="#4A4848"/>
            <stop offset="0.625" stop-color="#CDCBCB"/>
          </linearGradient>
          <linearGradient id="paint5_linear_639_595" x1="335.196" y1="576" x2="335.196" y2="288" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2D2C2C"/>
            <stop offset="0.254808" stop-color="#646262"/>
            <stop offset="0.6249" stop-color="#4A4848"/>
            <stop offset="0.625" stop-color="#CDCBCB"/>
          </linearGradient>
          <linearGradient id="paint6_linear_639_595" x1="190.819" y1="499.241" x2="190.819" y2="293" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2D2C2C"/>
            <stop offset="0.254808" stop-color="#646262"/>
            <stop offset="0.6249" stop-color="#4A4848"/>
            <stop offset="0.625" stop-color="#CDCBCB"/>
          </linearGradient>
          <linearGradient id="paint7_linear_639_595" x1="225.105" y1="295.042" x2="400.004" y2="385.027" gradientUnits="userSpaceOnUse">
            <stop stop-color="#EFE3E6"/>
            <stop offset="0.615385" stop-color="#BF435E"/>
            <stop offset="0.71875" stop-color="#CF4664"/>
            <stop offset="0.822115" stop-color="#FC2656"/>
          </linearGradient>

          <clipPath id="clipCircle">
            <circle cx="0" cy="0" r="37" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
