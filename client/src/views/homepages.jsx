import * as React from "react";
import Headers from "../component/homepages/headers";
import { Canvas } from "@react-three/fiber";
import { Bitcoin } from "../component/homepages/model3D/bitcoin";
import { useEffect } from "react";
import { gsap } from "gsap";

function HomePages() {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY / window.innerHeight;

  //     gsap.to("#textLeft", {
  //       x: scrollPosition * 200,
  //       ease: "power2.out",
  //     });

  //     gsap.to("#textRight", {
  //       x: -scrollPosition * 200,
  //       ease: "power2.out",
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      {/* <Headers /> */}
      {/* <section className="w-full h-screen flex items-center justify-center bg-blue-400">
        <Canvas
          camera={{
            fov: 50,
            position: [10, 2, 10],
          }}
        >
          <Bitcoin />
        </Canvas>
      </section> */}
      <div className="relative h-screen w-full overflow-hidden">
        <div
          className="fixed top-1/2 left-0 transform -translate-y-1/2 text-3xl whitespace-nowrap"
          id="textLeft"
        >
          Left Text
        </div>
        <div
          className="fixed top-1/2 right-0 transform -translate-y-1/2 text-3xl whitespace-nowrap"
          id="textRight"
        >
          Right Text
        </div>
        <div className="h-[200vh] bg-gray-100 flex items-center justify-center">
          <div className="text-4xl">Scroll down to see the effect!</div>
        </div>
      </div>
    </>
  );
}

export default HomePages;
