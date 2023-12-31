/* eslint-disable react-hooks/exhaustive-deps */
// Sertifikasi.jsx
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SplashScreen from "../SplashScreen/SplashScreen";

const Sertifikasi = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [shuffledImages, setShuffledImages] = useState([]);

  const data = {
    SertifikasiData: [
      {
        judul: "Startegi Pelingdung data atau Cyber",
        image: "/assets/Penghargaan/01.png",
        dis: "Filem Upin dan Ipin 1",
      },
      {
        judul: "Mobile Devoloper and Flutter",
        image: "/assets/Penghargaan/02.png",
        dis: "Filem Upin dan Ipin 1",
      },
      {
        judul: "Mengunkan React Hook",
        image: "/assets/Penghargaan/03.png",
        dis: "Filem Upin dan Ipin 1",
      },
      {
        judul: "Seorang Full Stack Devoloper",
        image: "/assets/Penghargaan/04.png",
        dis: "Filem Upin dan Ipin 1",
      },
      {
        judul: "Stop Syberbullying",
        image: "/assets/Penghargaan/05.png",
        dis: "Filem Upin dan Ipin 1",
      },
      {
        judul: "Sumpah Permuad UMKM",
        image: "/assets/Penghargaan/06.png",
        dis: "Filem Upin dan Ipin 1",
      },
      {
        judul: "Fluter Login Devoloper",
        image: "/assets/Penghargaan/07.png",
        dis: "Filem Upin dan Ipin 1",
      },
      {
        judul: "Visualisasi Data",
        image: "/assets/Penghargaan/08.png",
        dis: "Filem Upin dan Ipin 1",
      },
      {
        judul: "E-commerce Data analysis",
        image: "/assets/Penghargaan/09.png",
        dis: "Filem Upin dan Ipin 1",
      },
      {
        judul: "Basic Api Devoloper",
        image: "/assets/Penghargaan/10.png",
        dis: "Filem Upin dan Ipin 1",
      },
      {
        judul: "Mengunkan React Hook",
        image: "/assets/Penghargaan/11.png",
        dis: "Filem Upin dan Ipin 1",
      },
      {
        judul: "DevOps",
        image: "/assets/Penghargaan/12.png",
        dis: "Filem Upin dan Ipin 1",
      },
      {
        judul: "Build Prefesional website wordpress",
        image: "/assets/Penghargaan/13.png",
        dis: "Filem Upin dan Ipin 1",
      },
      {
        judul: "Flutter & Dart The Complete Guide",
        image: "/assets/Penghargaan/14.jpg",
        dis: "Filem Upin dan Ipin 1",
      },
      {
        judul: "The Complete Web Devoloper",
        image: "/assets/Penghargaan/15.jpg",
        dis: "Filem Upin dan Ipin 1",
      },
      {
        judul: "Web Development Bootcamp",
        image: "/assets/Penghargaan/16.jpg",
        dis: "Filem Upin dan Ipin 1",
      },
      {
        judul: "The Complete Bootcamp Full Stack",
        image: "/assets/Penghargaan/17.jpg",
        dis: "Filem Upin dan Ipin 1",
      },
      {
        judul: "Advanced CSS and Sass",
        image: "/assets/Penghargaan/18.jpg",
        dis: "Filem Upin dan Ipin 1",
      },
    ],
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    const filteredImages = data.SertifikasiData.filter((sertifikasi) => {
      if (selectedCategory === "All") {
        return true;
      }

      return sertifikasi.kategori === selectedCategory.toLowerCase();
    });

    const newShuffledImages = shuffleArray(filteredImages);
    setShuffledImages(newShuffledImages);
  }, [selectedCategory]);

  return (
    <div className="relative flex justify-center items-center">
      <SplashScreen />
      <div className="w-10/12 lg:w-10/12 grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4 pt-1 pb-5 relative z-10">
        {shuffledImages.map((sertifikasi, index) => (
          <div className="relative group" key={index}>
            <Link href={""}>
              <div className="bg-green-900 w-full relative rounded-sm group-hover:bg-green-500 transition duration-300 h-100">
                <Image src={sertifikasi.image} width={500} height={100} alt={sertifikasi.dis} className="object-fill h-48 w-96 rounded-sm" />
                <div className="text-white absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 transition duration-300 opacity-0 group-hover:opacity-100">
                  <h1 className="text-center">{sertifikasi.judul}</h1>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sertifikasi;
