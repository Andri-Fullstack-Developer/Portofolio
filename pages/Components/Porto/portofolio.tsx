import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import SplashScreen from "../SplashScreen/SplashScreen";

const Portofolio = () => {
  return (
    <div className="flex bg-sky-950 flex-col  justify-center items-center">
      <SplashScreen />
      <div className="  w-11/12 mb-10">
        <div className="flex justify-center">
          <h1 className="text-2xl lg:text-8xl mt-5 font-bold text-center p-2 w-10/12">Imagination Trumps Knowledge!</h1>
        </div>
        <div className="mt-10 flex justify-center items-center">
          <div className="p-3 border-2 w-11/12 bg-slate-600 rounded-xl border-b-8 border-r-8">
            <div className="lg:p-4">
              <div className="flex flex-col lg:flex-row justify-center items-center">
                <div className="w-full p-3">
                  <div className="p2">
                    <Link href={"https://andri-fullstack-developer.github.io/Projects-CV/"} className="cursor-pointer overflow-hidden rounded-xl relative">
                      <div className="relative overflow-hidden rounded-lg">
                        <Image src={"/assets/Project/Pro2.png"} width={100} height={100} alt="Project" layout="responsive" className="rounded-lg transition-transform duration-300 transform-gpu hover:scale-105" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="w-full p-3 justify-center">
                  <div className="p-2 flex flex-col ">
                    <span className="text-lg font-medium lg:text-lg md:text-base text-teal-500">Featured Project</span>
                    <Link href={"https://andri-fullstack-developer.github.io/Projects-CV/"} className="rounded text-lg font-medium md:text-base hover:underline">
                      <h2 className="my-2 w-full text-left text-1xl font-bold lg:text-2xl ">Cv Profesional</h2>
                    </Link>
                    <span className="">
                      Graduated in Teknik Informatika from Universitas 17 Agustus 1945. Interested in a career in the fleid of Busuiness Devolopment Experienced working in fintech for 1 year. Gread at negotiation, concientious, critical,
                      and ambitious.
                    </span>
                    <div className="flex flex-row mt-5 items-center space-x-3">
                      <Link href={"https://github.com/Andri-Fullstack-Developer/Projects-CV.git"} className="">
                        <FontAwesomeIcon icon={faGithub} className="text-4xl" />
                      </Link>
                      <Link href={"https://andri-fullstack-developer.github.io/Projects-CV/"} className="p-2 bg-white rounded-lg text-black text-lg font-medium">
                        Visit Project
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* col 2 */}
        <div className="grid lg:grid-cols-2 mt-10">
          <div className="flex justify-center items-center p-5">
            <div className="p-3 border-2  lg:w-10/12 bg-slate-600 rounded-xl border-b-8 border-r-8">
              <div className="p-4">
                <Link href={"https://andri-fullstack-developer.github.io/Trevel/"} className="cursor-pointer overflow-hidden rounded-lg relative">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image src={"/assets/Project/Pro4.png"} width={100} height={50} layout="responsive" className="rounded-lg transition-transform duration-300 transform-gpu hover:scale-105" alt="Project" />
                  </div>
                </Link>
                <div className="mt-4 flex w-full flex-col item-start justify-between">
                  <span className="text-lg font-medium lg:text-lg md:text-base text-teal-500">Website Template</span>
                  <Link href={"https://andri-fullstack-developer.github.io/Trevel/"} className="rounded text-lg font-medium md:text-base hover:underline">
                    <h2 className="my-2 w-full text-left text-1xl font-bold lg:text-2xl ">Travels</h2>
                  </Link>

                  <div className="flex w-full items-center justify-between">
                    <Link href={"https://andri-fullstack-developer.github.io/Trevel/"} className="rounded text-sm font-medium underline md:text-base ">
                      Visit
                    </Link>
                    <Link href={"https://github.com/Andri-Fullstack-Developer/Trevel.git"} className="w-8 md:w-6 ">
                      <FontAwesomeIcon icon={faGithub} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center p-5">
            <div className="p-3 border-2  lg:w-10/12 bg-slate-600 rounded-xl border-b-8 border-r-8">
              <div className="p-4">
                <Link href={"https://andri-fullstack-developer.github.io/CarAnto/"} className="cursor-pointer overflow-hidden rounded-lg relative">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image src={"/assets/Project/Pro1.png"} width={100} height={50} layout="responsive" className="rounded-lg transition-transform duration-300 transform-gpu hover:scale-105" alt="Project" />
                  </div>
                </Link>
                <div className="mt-4 flex w-full flex-col item-start justify-between">
                  <span className="text-lg font-medium  lg:text-lg md:text-base text-teal-500">Website Template</span>
                  <Link href={"https://andri-fullstack-developer.github.io/CarAnto/"} className="rounded text-lg font-medium md:text-base hover:underline">
                    <h2 className="my-2 w-full text-left text-1xl font-bold lg:text-2xl ">CarAnto car shop</h2>
                  </Link>

                  <div className="flex w-full items-center justify-between">
                    <Link href={"https://andri-fullstack-developer.github.io/CarAnto/"} className="rounded text-sm font-medium underline md:text-base ">
                      Visit
                    </Link>
                    <Link href={"https://github.com/Andri-Fullstack-Developer/CarAnto"} className="w-8 md:w-6 ">
                      <FontAwesomeIcon icon={faGithub} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* EndF */}
        </div>
        {/* END Pro */}
        <div className="mt-10 flex justify-center items-center">
          <div className="p-3 border-2 w-11/12 bg-slate-600 rounded-xl border-b-8 border-r-8">
            <div className="lg:p-4">
              <div className="flex flex-col lg:flex-row justify-center items-center">
                <div className="w-full p-3">
                  <div className="p2">
                    <Link href={"https://andri-fullstack-developer.github.io/Admin-Panel/template/indexHome.html"} className="cursor-pointer overflow-hidden rounded-xl relative">
                      <div className="relative overflow-hidden rounded-lg">
                        <Image src={"/assets/Project/Pro3.png"} width={100} height={100} alt="Project" layout="responsive" className="rounded-lg transition-transform duration-300 transform-gpu hover:scale-105" />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="w-full p-3 justify-center">
                  <div className="p-2 flex flex-col ">
                    <span className="text-lg font-medium lg:text-lg md:text-base text-teal-500">Featured Project</span>
                    <Link href={"https://andri-fullstack-developer.github.io/Admin-Panel/template/indexHome.html"} className="rounded text-lg font-medium md:text-base hover:underline">
                      <h2 className="my-2 w-full text-left text-1xl font-bold lg:text-2xl ">Admin Panel Bootstrap </h2>
                    </Link>
                    <span className="">
                      Plus Admin is a one-of-a-kind admin template dashboard with an eye-catchy design, essential components, and refined typography. Packed with pre-built applications, pages, and a huge collection of components, Plus Admin
                      is sure to make the development effortless and contains multiple plugins which negate the need to search for anywhere else to give the application additional functionalities.
                    </span>
                    <div className="flex flex-row mt-5 items-center space-x-3">
                      <Link href={"https://github.com/Andri-Fullstack-Developer/Admin-Panel.git"} className="">
                        <FontAwesomeIcon icon={faGithub} className="text-4xl" />
                      </Link>
                      <Link href={"https://andri-fullstack-developer.github.io/Admin-Panel/template/indexHome.html"} className="p-2 bg-white rounded-lg text-black text-lg font-medium">
                        Visit Project
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* col 2 */}
        {/* <div className="grid lg:grid-cols-2 mt-10">
          <div className="flex justify-center items-center p-5">
            <div className="p-3 border-2  lg:w-10/12 bg-slate-600 rounded-xl border-b-8 border-r-8">
              <div className="p-4">
                <Link href={""} className="cursor-pointer overflow-hidden rounded-lg relative">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image src={"/Images/pjt1.jpg"} width={100} height={50} layout="responsive" className="rounded-lg transition-transform duration-300 transform-gpu hover:scale-105" alt="Project" />
                  </div>
                </Link>
                <div className="mt-4 flex w-full flex-col item-start justify-between">
                  <span className="text-lg font-medium lg:text-lg md:text-base text-teal-500">Website Template</span>
                  <Link href={""} className="rounded text-lg font-medium md:text-base hover:underline">
                    <h2 className="my-2 w-full text-left text-1xl font-bold lg:text-2xl ">Filem Kartun Upin & Ipin</h2>
                  </Link>

                  <div className="flex w-full items-center justify-between">
                    <Link href={""} className="rounded text-sm font-medium underline md:text-base ">
                      Visit
                    </Link>
                    <Link href={""} className="w-8 md:w-6 ">
                      <FontAwesomeIcon icon={faGithub} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center p-5">
            <div className="p-3 border-2  lg:w-10/12 bg-slate-600 rounded-xl border-b-8 border-r-8">
              <div className="p-4">
                <Link href={""} className="cursor-pointer overflow-hidden rounded-lg relative">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image src={"/Images/pjt1.jpg"} width={100} height={50} layout="responsive" className="rounded-lg transition-transform duration-300 transform-gpu hover:scale-105" alt="Project" />
                  </div>
                </Link>
                <div className="mt-4 flex w-full flex-col item-start justify-between">
                  <span className="text-lg font-medium  lg:text-lg md:text-base text-teal-500">Website Template</span>
                  <Link href={""} className="rounded text-lg font-medium md:text-base hover:underline">
                    <h2 className="my-2 w-full text-left text-1xl font-bold lg:text-2xl ">Filem Kartun Upin & Ipin</h2>
                  </Link>

                  <div className="flex w-full items-center justify-between">
                    <Link href={""} className="rounded text-sm font-medium underline md:text-base ">
                      Visit
                    </Link>
                    <Link href={""} className="w-8 md:w-6 ">
                      <FontAwesomeIcon icon={faGithub} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* End Pro */}
      </div>
    </div>
  );
};

export default Portofolio;
