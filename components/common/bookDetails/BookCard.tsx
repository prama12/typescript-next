import { Edit, Trash } from "@/assets/icon";
import { Book1 } from "@/assets/images";
import Image from "next/image";
import BookQuantity from "./BookQuantity";

const BookCard = () => {
  return (
    <>
      <div className=" bg-white w-[800px] font-urbanist tracking-[0.02em] p-4 rounded-2xl grid grid-cols-12 gap-4 ">
        <div className=" col-span-3 relative w-full h-hull">
          <Image
            src={Book1}
            alt="The Girl with the Dragon Tattoo"
            fill
            objectFit="contain"
          />
        </div>

        <div className="col-span-9">
          <div className="flex flex-col gap-2">
            <div className="w-full flex items-center justify-between">
              <h1 className="text-primary-jet text-base leading-[22px] font-bold ">
                The Girl with the Dragon Tattoo
              </h1>
              <div className="flex gap-8">
                <Edit className="cursor-pointer" />
                <Trash className="cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center gap-4 ">
              <p className="text-primary-blue text-sm  ">L35278 </p>
              <p className="text-primary-jet text-sm font-semibold  ">
                Shelf 2
              </p>
            </div>

            <div className="flex items-center gap-4 ">
              <p className="text-primary-jet text-sm">1st edition </p>
              <p className="text-primary-jet text-sm">
                Book by <span>DR. Simkhada</span>
              </p>
            </div>
            <p className="text-primary-jet text-sm  ">Vidyarthi Publication </p>
          </div>
          <div className="flex gap-4">
            <BookQuantity name="" quantity={1} />
            <BookQuantity name="" quantity={1} />
            <BookQuantity name="" quantity={1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
