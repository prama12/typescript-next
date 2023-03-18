import Image from "next/image";
import data from "../../data/navlink";
import SideLink from "../../common/sidenavLink/SideLink";
import { Logo } from "@/assets/images";

const Sidebar = () => {
  return (
    <>
      <div className="w-64 h-screen overflow-y-auto no-scrollbar bg-white">
        <div className="flex flex-col gap-4 px-3 py-10">
          <div className="relative w-[200px] h-[39px]">
            <Image src={Logo} fill objectFit="cover" alt="logo" />
          </div>
          <div className="w-full flex flex-col gap-2">
            {data.map((item) => {
              {
                /* console.log(data); */
              }
              return (
                <SideLink
                  key={item.id}
                  name={item.name}
                  icon={item.icon}
                  url={item.url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
