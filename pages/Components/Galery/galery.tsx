import Image from "next/image";
import { useState } from "react";

const Galery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const images = [
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg", datatype: "All desain camera" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg", datatype: "All web desain mobile" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg", datatype: "All desain" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg", datatype: "All desain camera" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg", datatype: "All desain" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg", datatype: "All camera" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg", datatype: "All camera" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg", datatype: "All web mobile" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg", datatype: "All web mobile" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg", datatype: "All web desain" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg", datatype: "All web desain" },
    { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg", datatype: "All desain mobile" },
  ];

  const filteredImages = images.filter((image) => {
    if (selectedCategory === "All") {
      return true;
    }

    // Menggunakan "datatype" dari setiap foto untuk membandingkannya dengan kategori yang dipilih
    return image.datatype.includes(selectedCategory.toLowerCase());
  });

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
          {filteredImages.map((image, index) => (
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
