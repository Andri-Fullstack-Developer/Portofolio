import { abort } from "process";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot, faPhone, faPersonSwimming, faBasketball, faPersonRunning, faTableTennisPaddleBall } from "@fortawesome/free-solid-svg-icons";

const about = () => {
  const downloadCV = () => {
    const cvFileName = "./doc.pdf";

    const downloadLink = document.createElement("a");
    downloadLink.href = `/${cvFileName}`;
    downloadLink.download = cvFileName;

    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();

  };

  const colorsHtml = ["bg-slate-50", "bg-slate-50", "bg-slate-50", "bg-slate-50", "bg-slate-50", "bg-slate-50", "bg-slate-50", "bg-slate-50", "bg-slate-50", , "bg-slate-600"];
  const colorsReactJs = ["bg-slate-50", "bg-slate-50", "bg-slate-50", "bg-slate-50", "bg-slate-50", "bg-slate-50", "bg-slate-50", "bg-slate-50", "bg-slate-600", , "bg-slate-600"];
  const colorsPhp = ["bg-slate-50", "bg-slate-50", "bg-slate-50", "bg-slate-50", "bg-slate-50", "bg-slate-50", "bg-slate-600", "bg-slate-600", "bg-slate-600", , "bg-slate-600"];

  return (
    <div className="xl:h-screen flex lg:flex-col items-center justify-center">
      <div className="w-full lg:w-8/12 bg-white p-3 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:flex-col-reverse lg:w-full">
          {/* Kolom Kiri */}
          <div className=" p-1 flex justify-center items-center">
            <div className=" bg-sky-950 w-full pt-3">
              <div className="flex items-center justify-center  ">
                <Image src="/Images/andri.png" className="rounded-sm border-2 border-slate-600  bg-sky-900" alt="profil" width={100} height={200} />
              </div>
              <h1 className="flex justify-center">Andrianto</h1>

              <div className="bg-transparent p-2 mt-3">
                <h6 className="ms-6">
                  <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                  pro.ancode@gmail.com
                </h6>
              </div>

              <div className="bg-slate-600 p-2">
                <h6 className="ms-6">
                  <FontAwesomeIcon icon={faPhone} className="me-3" />
                  +62 812 4919 2305
                </h6>
              </div>

              <div className="bg-transparent p-2">
                <h6 className="ms-6 text-sm">
                  <FontAwesomeIcon icon={faLocationDot} className="me-3" />
                  Jl. Grabagan, Kec. Grabagan, Kab. Tuban Kode Pos: 62371
                </h6>
              </div>
              <div className="bg-slate-600 p-2">
                <div className="flex justify-center items-center">
                  <div className="grow w-14 text-center">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <div className="grow-0 ">
                    <button onClick={downloadCV}>CV</button>
                  </div>
                  <div className="grow w-14 text-center">
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 mt-5 justify-center items-center pl-1 pr-1">
                <div className="w-full h-3 bg-slate-600 rounded-full"></div>
                <div className="text-center text-2xl xl:text-4xl">INTEREST</div>
                <div className="w-full h-3 bg-slate-600 rounded-full"></div>
              </div>

              <div className="m-3 grid grid-cols-2 justify-center gap-2 justify-items-center">
                <div className="bg-slate-600 w-3/5 xl:w-2/5 p-5 text-center">
                  <FontAwesomeIcon icon={faPersonSwimming} className="text-5xl " />
                </div>
                <div className="bg-slate-600 w-3/5 xl:w-2/5 p-5 text-center">
                  <FontAwesomeIcon icon={faBasketball} className="text-5xl " />
                </div>
                <div className="bg-slate-600 w-3/5 xl:w-2/5 p-5 text-center">
                  <FontAwesomeIcon icon={faPersonRunning} className="text-5xl " />
                </div>
                <div className="bg-slate-600 w-3/5 xl:w-2/5 p-5 text-center">
                  <FontAwesomeIcon icon={faTableTennisPaddleBall} className="text-5xl " />
                </div>
              </div>
            </div>
          </div>
          {/* About Me */}
          {/* Kolom Kanan */}
          <div className="lg:mt-0 mt-4 md:mt-4">
            <div className="p-2">
              <h1 className="mt-1 font-bold text-black text-4xl text-center tracking-widest">About Me</h1>
              <div className="text-black mt-4 " style={{ fontFamily: "Fira Code, monospace " }}>
                <p>
                  Andrianto is a talented mobile application developer. With his dedication to the world of development, Andrianto has created innovative and highly useful mobile applications. He possesses expertise in various cutting-edge
                  technologies, making him one of the leading professionals in the mobile application development industry.
                </p>
              </div>
              <div className="grid grid-cols-3 mt-4 justify-center gap-2 items-center pl-1 pr-1">
                <div className="bg-slate-600 h-2 w-full rounded-full"></div>
                <div className="text-xl lg:text-2xl font-bold text-center text-black">EDUCATION</div>
                <div className="bg-slate-600 h-2 w-full rounded-full"></div>
              </div>
              <div className="mt-3 grid grid-cols-6 justify-center gap-2 items-center pl-1 pr-1">
                <div className="bg-sky-950 p-2 rounded-lg border-2 border-slate-600 leading-3">
                  <p className="text-xs">
                    Seb,
                    <span className="text-sm">
                      <br />
                      2019
                    </span>
                  </p>
                </div>
                <div className=" text-black col-span-5 pl-4">
                  <h6 className="font-bold text-lg">Middle Education</h6>
                  <p className="text-sm">SMK PGRI 2 Taruna Bojonegoro</p>
                </div>
              </div>
              <div className="mt-2 grid grid-cols-6 justify-center gap-2 items-center pl-1 pr-1">
                <div className="bg-sky-950 p-2 rounded-lg border-2 border-slate-600 leading-3">
                  <p className="text-xs">
                    Seb,
                    <span className="text-sm">
                      <br />
                      2021
                    </span>
                  </p>
                </div>
                <div className=" text-black col-span-5 pl-4">
                  <h6 className="font-bold text-lg">Studying</h6>
                  <p className="text-sm">Universitas 17 Agustus 1945 Surabaya</p>
                </div>
              </div>
              {/* Skilss */}
              <>
                <div className="grid grid-cols-3 mt-4 justify-center gap-2 items-center pl-1 pr-1">
                  <div className="bg-slate-600 h-2 w-full rounded-full"></div>
                  <div className="text-xl lg:text-2xl font-bold text-center text-black">SKILLS</div>
                  <div className="bg-slate-600 h-2 w-full rounded-full"></div>
                </div>
                <div className="mt-4 justify-center items-center text-center text-black">
                  <div className="grid grid-cols-6 items-center border-2 border-sky-950">
                    <div className="p-1 text-xs font-bold ">HTML, Css, JS</div>
                    <div className="col-span-5 bg-sky-950">
                      <div className="flex space-x-2 p-3 justify-end ">
                        {colorsHtml.map((color, index) => (
                          <div key={index} className={`w-4 h-4 ${color}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className=" mt-2 grid grid-cols-6 items-center border-2 border-sky-950">
                    <div className="p-1 text-xs font-bold ">React.Js, Next.Js</div>
                    <div className="col-span-5 bg-sky-950">
                      <div className="flex space-x-2 p-3 justify-end ">
                        {colorsReactJs.map((color, index) => (
                          <div key={index} className={`w-4 h-4 ${color}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className=" mt-2 grid grid-cols-6 items-center border-2 border-sky-950">
                    <div className="p-1 text-xs font-bold ">Sql, MongoDB</div>
                    <div className="col-span-5 bg-sky-950">
                      <div className="flex space-x-2 p-3 justify-end ">
                        {colorsPhp.map((color, index) => (
                          <div key={index} className={`w-4 h-4 ${color}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
