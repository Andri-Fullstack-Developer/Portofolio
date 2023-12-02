import Image from "next/image";
import { useState } from "react";

const Galery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const images = [
    { src: "/assets/Galery/Web/Web (1).png", datatype: "All web" },
    { src: "/assets/Galery/Web/Web (2).png", datatype: "All web" },
    { src: "/assets/Galery/Web/Web (3).png", datatype: "All web" },
    { src: "/assets/Galery/Web/Web (4).png", datatype: "All web" },
    { src: "/assets/Galery/Web/Web (5).png", datatype: "All web" },
    { src: "/assets/Galery/Web/Web (6).png", datatype: "All web" },
    { src: "/assets/Galery/Web/Web (7).png", datatype: "All web" },
    { src: "/assets/Galery/Web/Web (8).png", datatype: "All web" },
    { src: "/assets/Galery/Web/Web (9).png", datatype: "All web" },
    { src: "/assets/Galery/Web/Web (10).png", datatype: "All web" },
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

  const filteredImages = images.filter((image) => {
    if (selectedCategory === "All") {
      return true;
    }

    return image.datatype.includes(selectedCategory.toLowerCase());
  });

    const shuffledImages = shuffleArray(filteredImages);

  return (
    <div className="flex lg:flex-col items-center justify-center">
      <div className="w-full lg:w-9/12 bg-slate-600 p-3 text-black m-7 rounded-sm">
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
      </div>
    </div>
  );
};

export default Galery;
