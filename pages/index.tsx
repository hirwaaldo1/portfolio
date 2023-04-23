import Head from "next/head";
import localFont from "@next/font/local";
import Image from "next/image";
import Title from "./components/ui/Title";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GitHub, Instagram, Twitter, Linkedin, Dribbble } from "react-feather";
import Header from "./components/Header";
import Experience from "./data/Experience.json";
import Work from "./data/Work.json";
import { Slide } from "react-awesome-reveal";
import { SocialProfileJsonLd, DefaultSeo } from "next-seo";
import { NEXT_SEO_DEFAULT } from "../next-seo.config";
const myFont = localFont({
  src: [
    {
      path: "../public/assets/Calibre-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/Calibre-Regular.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/assets/SFMono.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/assets/Calibre-Semibold.woff2",
      weight: "800",
      style: "bold",
    },
  ],
});

export default function Home() {
  const [whereIWork, setWhereIWork] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const SKILLS = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Remix",
    "Node.js",
    "Dart",
    "Flutter",
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "MongoDB",
    "Supabase",
    "Tailwind CSS",
    "Material UI",
    "Bootstrap",
    "CSS",
    "HTML",
    "Figma",
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);
  return (
    <>
      <Head>
        <title className="font-">Hirwa Aldo</title>
        <meta
          name="Meet Hirwa Aldo, a highly skilled software engineer and full stack developer from Rwanda, with expertise in web and mobile development."
          content="Hirwa Aldo - Experienced Software Engineer and Full Stack Developer from Rwanda - Specializing in web development and delivering high-quality software solutions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="wEpcBrRP8ftcSOnDW-hZ62UN2S-S_c2QN0OZmMdkPzM"
        />
      </Head>
      <main className={myFont.className}>
        <Header />
        <div
          className={`fixed w-full h-fit delay-75 ${
            isScrolled
              ? "opacity-100 z-[100] top-0 visible transition"
              : "opacity-0 -z-[100] -top-10 invisible"
          }  bg-primary shadow-2xl`}
        >
          <Header />
        </div>
        <DefaultSeo {...NEXT_SEO_DEFAULT} />
        <SocialProfileJsonLd
          type="Person"
          name="Hirwa Aldo"
          url="https://www.hirwaaldo.com/"
          sameAs={[
            "https://www.facebook.com/hirwa.aldo/",
            "https://www.instagram.com/aldo_hirwa",
            "https://www.linkedin.com/in/aldo-hirwa/",
            "https://www.youtube.com/@hirwaaldo529/search",
          ]}
        />
        <div className="max-w-6xl m-auto px-4 lg:px-2">
          <section className="relative pt-16 sm:mb-32 sm:pt-44 -h-screen 2xl:h-auto">
            <div className="relative w-fit ml-[140px] sm:ml-[170px]">
              <h2 className="btn-shine text-[50px] sm:text-[60px]">
                I{"'"}m Hirwa Aldo
              </h2>
            </div>
            <p className="mt-12 mb-6 text-secondary-300 text-xl w-full leading-9 sm:leading-normal sm:w-[85%]">
              As a full stack developer, I specialize in{" "}
              <span className="button--text">JavaScript</span> and{" "}
              <span className="button--text">Dart</span> to create innovative
              solutions. I live in <span className="button--text">Rwanda</span>,
              a beautiful country known as the Land of a Thousand Hills.
            </p>
            <p className="mb-6 text-secondary-300 text-xl w-full leading-9 sm:leading-normal sm:w-[95%]">
              Working with my hands to make magic happen on the internet. View
              my{" "}
              <span className="button--text">
                <a href="#Work">Projects</a>
              </span>
              ,{" "}
              <span className="button--text">
                <Link href="/assets/resume.pdf" target="_blank">
                  {" "}
                  Resumé{" "}
                </Link>
              </span>
              ,{" "}
              <span className="button--text">
                <a href="#Contact"> Contact Me</a>
              </span>
              , or send me an email at{" "}
              <span className="button--text">
                <a
                  href="mailto:hirwaaldo1@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  hirwaaldo1@gmail.com{" "}
                </a>
              </span>
              .
            </p>
            <a href="#About">
              <div className="flex items-center gap-6 my-12 cursor-pointer group">
                <span className="text-lg text-secondary-100 mt-1 transition-all delay-100 group-hover:text-white">
                  See More About Me
                </span>
                <svg
                  className="invert relative transition-all delay-100 left-0 group-hover:left-3"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
                </svg>
              </div>
            </a>
            <div className="flex text-secondary-200 gap-3 flex-wrap sm:flex-nowrap sm:gap-12">
              <a
                href={"https://github.com/hirwaaldo1"}
                target="_blank"
                rel="noreferrer"
              >
                <GitHub size={18} />
              </a>
              <a
                href="https://www.instagram.com/aldo_hirwa/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com/Aldo22954826"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/aldo-hirwa"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://dribbble.com/hirwaaldo"
                target="_blank"
                rel="noreferrer"
              >
                <Dribbble size={18} />
              </a>
            </div>
          </section>
          <section className="mb-[50px] pt-20 sm:mb-[130px]" id="About">
            <Title name="About Me" number={"01"} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px]">
              <div className="text-secondary-100 flex flex-col gap-[15px] text-xl">
                <p>
                  I am a web developer who started my journey in 2018 when I
                  edited a custom clone of Facebook. I fell in love with web and
                  app development and learned a lot about HTML & CSS through
                  creating a custom reblog button. I enjoy creating things for
                  the internet.
                </p>
                <p>
                  My passion for web development has taken me from{" "}
                  <span className="text--underline">
                    {" "}
                    <a href="#Work">
                      a transport agency, start-up, corporation, to a
                      student-led design studio. Currently,
                    </a>
                  </span>{" "}
                  my focus is building accessible and inclusive products for
                  various clients at{" "}
                  <span className="text--underline">
                    <a
                      href="https://www.thegym-rwanda.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      theGymRwanda
                    </a>
                  </span>
                  . I strive to create positive online experiences for users
                  through my work.
                </p>
                <p>
                  Here are a few technologies I{"’"}ve been working with
                  recently:
                </p>
                <div className="grid grid-cols-2 overflow-hidden">
                  <Slide cascade damping={0.2}>
                    {SKILLS.map((v: any, k) => {
                      return (
                        <div
                          key={k}
                          className="text-[15px] flex items-center gap-3"
                        >
                          <span className="text-sm text-white">{"▹"}</span>
                          <span>{v}</span>
                        </div>
                      );
                    })}
                  </Slide>
                </div>
              </div>
              <div className="w-fit hidden md:block">
                <div className="relative cursor-pointer group">
                  <a href="/assets/hirwaaldo.jpeg" target="_blank">
                    <Image
                      src="/assets/hirwaaldo.jpeg"
                      alt="Hirwa Aldo - Experienced Software Engineer and Full Stack Developer from Rwanda - Specializing in web development and delivering high-quality software solutions"
                      width={300}
                      height={300}
                      className="rounded-sm z-50 transition-all delay-100 grayscale group-hover:grayscale-0"
                    />
                  </a>
                  <div className="block w-full h-full transition-all delay-100 absolute group-hover:top-3 group-hover:left-3 -z-20 border-2 rounded-sm top-6 left-6"></div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="mb-[50px] pt-20 sm:mb-[130px] w-full sm:w-fit mx-auto"
            id="Experience"
          >
            <Title name="Where I’ve Worked" number={"02"} />
            <div className="flex relative overflow-auto scrollbar--hidden sm:hidden mb-10">
              <div
                className="absolute w-32 rounded-full transition-all delay-100 bg-white h-0.5 bottom-0"
                style={{ left: `${whereIWork * 128}px` }}
              ></div>
              {Experience.map((v, k) => {
                return (
                  <button
                    key={k}
                    onClick={() => setWhereIWork(k)}
                    className={`px-5 outline-none py-2 min-w-[128px] w-32 text-[16px] transition-all delay-100 text-center ${
                      whereIWork === k ? "text-white" : "text-secondary-100"
                    }`}
                  >
                    {v.where}
                  </button>
                );
              })}
            </div>
            <div className="flex gap-7 w-full md:w-9/12">
              <div className="hidden relative sm:flex">
                <div
                  className="absolute w-0.5 rounded-full transition-all delay-100 bg-white h-[34px]"
                  style={{ top: `${whereIWork * 40}px` }}
                ></div>
                <div className="flex flex-col">
                  {Experience.map((v, k) => {
                    return (
                      <button
                        key={k}
                        onClick={() => setWhereIWork(k)}
                        className={`px-5 outline-none py-2 text-[16px] transition-all delay-100 text-start ${
                          whereIWork === k ? "text-white" : "text-secondary-100"
                        }`}
                      >
                        {v.where}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-medium text-secondary-200">
                  {Experience[whereIWork].role}{" "}
                  <span className="text-white">
                    @{" "}
                    <Link
                      href={Experience[whereIWork].link}
                      target="_blank"
                      className="text--underline"
                    >
                      {Experience[whereIWork].name}
                    </Link>
                  </span>
                </h2>
                <p className="text-secondary-300 mt-2 mb-[25px]">
                  {Experience[whereIWork].time} <span className="px-2">-</span>{" "}
                  Present
                </p>
                {Experience[whereIWork].whoWeDo.map((v, k) => {
                  return (
                    <div className="flex gap-4" key={k}>
                      <span className="text-lg text-white">{"▹"}</span>
                      <p className="text-lg text-secondary-300 leading-6 mb-3">
                        {v}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
          <section
            className="mb-[50px] pt-20 sm:mb-[130px] overflow-hidden"
            id="Work"
          >
            <Title name="Some Things I've Built" number={"03"} />
            <Slide style={{ overflow: "hidden" }}>
              {Work.map((v, k) => {
                return (
                  <a
                    href={v.link}
                    target="_blank"
                    key={k}
                    className="grid grid-cols-1 md:grid-cols-2 place-items-center group cursor-pointer mb-16"
                    rel="noreferrer"
                  >
                    {k % 2 === 0 && (
                      <div className="hidden md:block w-[579.162px] h-[362.388px] overflow-hidden rounded-sm relative">
                        <Image
                          src={v.image}
                          className="object-cover w-full h-full transition-all delay-100 opacity-60 grayscale group-hover:opacity-80 group-hover:grayscale-0"
                          alt={v.name}
                          width={779}
                          height={462}
                        />
                      </div>
                    )}
                    <div
                      className={`text-left ${
                        k % 2 === 0
                          ? "md:text-right md:-ml-[20px]"
                          : "md:text-left -mr-[20px]"
                      } z-50 relative overflow-hidden py-10 md:py-0 px-8 md:px-0 shadow-2xl md:shadow-none`}
                    >
                      <Image
                        src={v.image}
                        className="block md:hidden absolute inset-0 rounded-sm object-contain w-full h-full transition-all opacity-10 delay-100 grayscale hover:grayscale-0 -z-20"
                        alt=""
                        width={779}
                        height={462}
                      />
                      <h4 className="font-medium text-sm">
                        Featured {v.compay}
                      </h4>
                      <h2 className="text-3xl mt-3 mb-5 font-semibold text-secondary">
                        {v.name}
                      </h2>
                      <div>
                        <p className="text-lg text-secondary-100 leading-6 md:bg-[#141428] md:p-12 rounded-sm md:shadow-2xl">
                          {v.detail}
                        </p>
                      </div>
                      <div
                        className={`mt-6 flex justify-start gap-3 ${
                          k % 2 === 0 ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        {v.tech.map((v, k) => {
                          return (
                            <span
                              className="text-sm text-secondary-100"
                              key={k}
                            >
                              {v}
                            </span>
                          );
                        })}
                      </div>
                      <div
                        className={`flex justify-start ${
                          k % 2 === 0 ? "md:justify-end" : "md:justify-start"
                        } mt-3`}
                      >
                        <svg
                          width={24}
                          height={24}
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#ccd6f6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-external-link"
                        >
                          <title>External Link</title>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </div>
                    </div>
                    {k % 2 !== 0 && (
                      <div className="hidden md:block w-[579.162px] h-[362.388px] overflow-hidden rounded-sm relative">
                        <Image
                          src={v.image}
                          className="object-cover w-full h-full transition-all delay-100 opacity-60 grayscale group-hover:opacity-80 group-hover:grayscale-0"
                          alt={v.name}
                          width={379}
                          height={262}
                        />
                      </div>
                    )}
                  </a>
                );
              })}
            </Slide>
          </section>
          <section className="flex flex-col justify-center mb-2" id="Contact">
            <div className="text-center">
              <div className="flex justify-center gap-1 items-center">
                <span className="text-[13px] font-medium my-auto">04.</span>
                <span className="text-[16px] font-medium text-secondary">
                  What{"’"}s Next?
                </span>
              </div>
              <h3 className="text-6xl font-semibold text-secondary mt-5">
                Get In Touch
              </h3>
              <p className="w-11/12 md:w-4/6 lg:w-1/2 m-auto text-lg text-secondary-100 leading-6 mt-3">
                Although I{"’"}m not currently looking for any new
                opportunities, my inbox is always open. Whether you have a
                question or just want to say hi, I{"’"}ll try my best to get
                back to you!
              </p>
              <a
                href="mailto:hirwaaldo1@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <button className="border mt-[50px] text-[16px] pb-3 mt-50 pt-4 px-8 rounded-sm hover:bg-secondary-100 hover:bg-opacity-20">
                  Say Hello
                </button>
              </a>
              <div className="mt-[200px]">
                <p className="text-secondary-100">
                  Designed & Built by Hirwa Aldo
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
