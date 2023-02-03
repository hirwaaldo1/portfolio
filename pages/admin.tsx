import Head from "next/head";
import localFont from "@next/font/local";
import { useState, useEffect, useRef } from "react";
import { getSkills, addSkilltoDb, deleteSkilltoDb } from "@/services/skills";
import { Delete } from "react-feather";
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
  const [skills, setSkills] = useState<any>([]);
  const [name, setName] = useState<any>();
  const inputRel = useRef<any>(null);
  useEffect(() => {
    getSkills(setSkills, process.env.BACKEND_URL);
  }, []);
  const addSkills = () => {
    setSkills([...skills, name]);
    inputRel.current.value = "";
    addSkilltoDb(name, process.env.BACKEND_URL);
  };
  const deleteSkill = (id: number) => {
    const newSkills = skills.filter((skill: any) => skill.id !== id);
    setSkills(newSkills);
    deleteSkilltoDb(id, process.env.BACKEND_URL);
  };
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
      </Head>
      <main className={myFont.className}>
        <div className="max-w-5xl m-auto px-6 mt-10">
          <div>
            <input
              type="text"
              placeholder="Name of skills"
              ref={inputRel}
              onChange={(e) => {
                setName({ id: skills.length + 1, name: e.target.value });
              }}
              className="block mb-4 text-gray-800 py-2 px-4 outline-none rounded-sm"
            />
            <button
              onClick={addSkills}
              className="border pb-2 pt-3 px-8 font-semibold rounded-sm text-[18px] hover:bg-secondary-100 hover:bg-opacity-20"
            >
              Add
            </button>
          </div>
          <div className="grid grid-cols-2 overflow-hidden mt-10">
            {skills.map((v: any, k: number) => {
              return (
                <div key={k} className="text-[15px] flex items-center gap-3">
                  <span className="text-sm text-white">{"▹"}</span>
                  <span>{v.name}</span>

                  <Delete
                    className="cursor-pointer text-red-700"
                    size={15}
                    onClick={() => deleteSkill(v.id)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
