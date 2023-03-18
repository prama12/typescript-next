import Image, { StaticImageData } from "next/image";

import CustomButton from "../CustomButton";

type Props = {
  name: string;
  img: StaticImageData;
  date: string;
  submission: string;
  style: string;
};

const StudentListtile = ({ name, img, date, submission, style }: Props) => {
  return (
    <>
      <div className="px-4 py-2 flex items-center justify-between ">
        <div className="flex gap-3">
          <div className="relative w-[64px] h-[64px]">
            <Image src={img} alt="" fill objectFit="contain" />
          </div>
          <div className="flex flex-col gap-1 text-primary-jet ">
            <p className="text-sm font-semibold tracking-[0.02em]">{name}</p>
            <p className="text-primary-Spanish-Gray text-xs tracking-[0.02em] ">
              {date}
            </p>
            <p className={` ${style} text-xs tracking-[0.02em] `}>
              {submission}
            </p>
          </div>
        </div>
        <div>
          <CustomButton
            text="Grade"
            style="rounded-full bg-primary-blue text-white "
          />
        </div>
      </div>
    </>
  );
};

export default StudentListtile;
