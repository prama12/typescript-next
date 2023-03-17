import { Notification } from "@/assets/icon";
import Image from "next/image";
import Link from "next/link";
import LeftArrow from "../../src/assets/icon/left-arrow.svg";
import Profile from "../../src/assets/profile.png";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-white ">
        <div className="w-full px-6 py-6 flex items-center justify-between">
          <Link href={""} className="flex items-center gap-5">
            <LeftArrow />
            <p className="text-primary-jet font-urbanist font-medium text-sm leading-[18px] tracking-[0.02em]">
              Assignments <span className="text-primary-blue">/</span> Lorem
              ipsum dolor sit
            </p>
          </Link>
          <div className="flex items-center gap-6">
            <Link href={""}>
              <Notification />
            </Link>
            <Link href={""}>
              <div className="relative w-[40px] h-[40px]">
                <Image
                  src={Profile}
                  alt="profile-pic"
                  fill
                  objectFit="contain"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
