import Image from "next/image";
import { useRef, useState } from "react";
import { Menu, X } from "react-feather";
export default function Header() {
  const [opan, setOpan] = useState(false);
  const refCategoryMenu = useRef(null);
  console.log(opan);
  return (
    <div className="max-w-screen-2xl pr-4 sm:px-10 m-auto relative">
      <div className="flex items-center justify-between">
        <Image
          src="/assets/logo.png"
          className="z-[10000000000] sm:z-auto -ml-2.5 sm:ml-0"
          alt="Hirwa Aldo"
          width={80}
          height={80}
        />
        <div className="hidden items-center gap-7 sm:flex">
          {["About", "Experience", "Work", "Contact"].map((v, k) => {
            return (
              <a key={k} href={`#${v}`}>
                <div className="flex gap-1 items-center cursor-pointer group">
                  <span className="text-[13px] font-medium my-auto">
                    0{k + 1}.
                  </span>
                  <span className="text-[16px] font-medium text-secondary group-hover:text-white">
                    {v}
                  </span>
                </div>
              </a>
            );
          })}
          <button className="border pb-1 pt-2 px-5 rounded-sm text-[15px] hover:bg-secondary-100 hover:bg-opacity-20">
            Resumé
          </button>
        </div>
        <div className="items-center block sm:hidden">
          <Menu size={30} onClick={() => setOpan(true)} />
        </div>

        <div
          ref={refCategoryMenu}
          className={`fixed h-screen flex backdrop-blur-sm transition-all delay-75 right-0 w-[0%] ${
            opan ? "w-[100%] right-0" : "w-[0%] -right-32"
          }  z-50 top-0 `}
        >
          <div className="flex-1" onClick={() => setOpan(false)}></div>
          <div className="w-[77%] h-full bg-primary ml-auto p-4">
            <X
              size={40}
              className="w-fit ml-auto"
              onClick={() => setOpan(false)}
            />
            <div className="flex justify-center items-center h-full">
              <div className="items-center gap-7 flex flex-col">
                {["About", "Experience", "Work", "Contact"].map((v, k) => {
                  return (
                    <a key={k} href={`#${v}`} onClick={() => setOpan(false)}>
                      <div className="flex  items-center flex-col cursor-pointer">
                        <span className="text-[18px] font-semibold my-auto">
                          0{k + 1}.
                        </span>
                        <span className="text-[20px] font-semibold text-secondary">
                          {v}
                        </span>
                      </div>
                    </a>
                  );
                })}
                <button className="border pb-3 pt-4 px-8 font-semibold rounded-sm text-[18px] hover:bg-secondary-100 hover:bg-opacity-20">
                  Resumé
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
