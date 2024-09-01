import * as React from "react";
import Headers from "../component/homepages/headers";
import { Canvas } from "@react-three/fiber";
import { Bitcoin } from "../component/homepages/model3D/bitcoin";
import { useEffect } from "react";
import { gsap } from "gsap";

function HomePages() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY / window.innerHeight;

      gsap.to("#textLeft", {
        x: scrollPosition * 200,
        ease: "power2.out",
      });

      gsap.to("#textRight", {
        x: -scrollPosition * 200,
        ease: "power2.out",
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Headers />
      <section className="w-full h-screen flex items-center justify-center bg-blue-400">
        <Canvas
          camera={{
            fov: 50,
            position: [10, 2, 10],
          }}
        >
          <Bitcoin />
        </Canvas>
      </section>
    </>
  );
}

export default HomePages;
