/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { useState, useEffect } from "react";
import SplashScreen from "../SplashScreen/SplashScreen";

const Galery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  // const [shuffledImage, setShuffledImage] = useState([]);
  const [shuffledImages, setShuffledImages] = useState([]);

  const images = [
    { src: "/assets/Galery/DesainerWeb/Web (1).png", datatype: "All web" },
    { src: "/assets/Galery/DesainerWeb/Web (2).png", datatype: "All web" },
    { src: "/assets/Galery/DesainerWeb/Web (3).png", datatype: "All web" },
    { src: "/assets/Galery/DesainerWeb/Web (4).png", datatype: "All web" },
    { src: "/assets/Galery/DesainerWeb/Web (5).png", datatype: "All web" },
    { src: "/assets/Galery/DesainerWeb/Web (6).png", datatype: "All web" },
    { src: "/assets/Galery/DesainerWeb/Web (7).png", datatype: "All web" },
    { src: "/assets/Galery/DesainerWeb/Web (8).png", datatype: "All web" },
    { src: "/assets/Galery/DesainerWeb/Web (9).png", datatype: "All web" },
    { src: "/assets/Galery/DesainerWeb/Web (10).png", datatype: "All web" },
    { src: "/assets/Galery/Mobile/Mobile1.png", datatype: "All mobile" },
    { src: "/assets/Galery/Mobile/Mobile2.png", datatype: "All mobile" },
    { src: "/assets/Galery/Mobile/Mobile3.png", datatype: "All mobile" },
    { src: "/assets/Galery/Mobile/Mobile4.png", datatype: "All mobile" },
    { src: "/assets/Galery/Mobile/Mobile5.png", datatype: "All mobile" },
    { src: "/assets/Galery/Mobile/Mobile6.png", datatype: "All mobile" },
    { src: "/assets/Galery/Camera/Camera (1).png", datatype: "All camera" },
    { src: "/assets/Galery/Camera/Camera (2).png", datatype: "All camera" },
    { src: "/assets/Galery/Camera/Camera (3).png", datatype: "All camera" },
    { src: "/assets/Galery/Camera/Camera (4).png", datatype: "All camera" },
    { src: "/assets/Galery/Camera/Camera (5).png", datatype: "All camera" },
    { src: "/assets/Galery/Camera/Camera (6).png", datatype: "All camera" },
    { src: "/assets/Galery/Camera/Camera (7).png", datatype: "All camera" },
    { src: "/assets/Galery/Camera/Camera (8).png", datatype: "All camera" },
    { src: "/assets/Galery/Camera/Camera (9).png", datatype: "All camera" },
    { src: "/assets/Galery/Camera/Camera (10).png", datatype: "All camera" },
  ];

  function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    const filteredImages = images.filter((image) => {
      if (selectedCategory === "All") {
        return true;
      }
      return image.datatype.includes(selectedCategory.toLowerCase());
    });

    const newShuffledImages = shuffleArray(filteredImages);
    setShuffledImages(newShuffledImages);
  }, [selectedCategory]);

  return (
    <div className="flex lg:flex-col items-center justify-center">
      <div className="w-full lg:w-9/12 bg-slate-600 p-3 text-black m-7 rounded-sm">
        <SplashScreen />
        <div className="w-full p-1 space-x-2 text-white flex justify-center items-center">
          <button onClick={() => setSelectedCategory("All")} className={`text-white pl-6 pr-6 p-1 rounded-lg sm:pl-8 sm:pr-8 ${selectedCategory === "All" ? "bg-sky-950" : "text-black"}`}>
            All
          </button>
          <button onClick={() => setSelectedCategory("Camera")} className={`pl-6 pr-6 p-1 rounded-lg sm:pl-8 sm:pr-8 ${selectedCategory === "Camera" ? "bg-sky-950" : ""}`}>
            Camera
          </button>
          <button onClick={() => setSelectedCategory("Mobile")} className={`pl-6 pr-6 p-1 rounded-lg sm:pl-8 sm:pr-8 ${selectedCategory === "Mobile" ? "bg-sky-950" : ""}`}>
            Mobile
          </button>
          <button onClick={() => setSelectedCategory("Web")} className={`pl-6 pr-6 p-1 rounded-lg sm:pl-8 sm:pr-8 ${selectedCategory === "Web" ? "bg-sky-950" : ""}`}>
            Web
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
          {shuffledImages.map((image: any, index: any) => (
            <div key={index} className="grid gap-4">
              <Image className="h-auto max-w-full rounded-lg" src={image.src} alt={`Image ${index}`} width={400} height={200} />
            </div>
          ))}
        </div>
        SplashScreen
      </div>
    </div>
  );
};

export default Galery;
