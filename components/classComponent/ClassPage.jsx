import { Download, Icon } from "@/assets/icon";
import Image from "next/image";
import Image1 from "../../src/assets/images/Subtract.png";
import Image2 from "../../src/assets/images/Subtract1.png";
import Image3 from "../../src/assets/images/Subtract2.png";
import Pdf from "../../src/assets/images/pdf.png";
import StudentListtile from "../common/studentListtile/StudentListtile";
import studentData from "../data/studentData";
import CustomButton from "../common/CustomButton";
import CustomSearch from "../common/CustomSearch";

const ClassPage = () => {
  return (
    <>
      <div className="p-6  flex flex-col gap-4">
        <div className="w-full rounded-lg bg-white font-urbanist p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <div className="w-[56px] h-[56px] flex items-center justify-center rounded text-sm tracking-[0.02em] leading-4  text-primary-red shadowN ">
                Sc
              </div>

              <div className="flex flex-col gap-[9px]">
                <div className="text-primary-jet font-semibold text-base leading-5 tracking-[0.02em]">
                  Lorem ipsum dolor sit amet consectetur. Scelerisque aenean
                  nibh.
                </div>
                <div className="flex gap-4">
                  <div className="tracking-[0.02em] text-sm flex gap-4">
                    <div>Submitted by:</div>
                    <div className="flex items-center">
                      <div className="relative w-[15px] h-[19px]">
                        <Image src={Image1} alt="" fill objectFit="contain" />
                      </div>
                      <div className="relative w-[15px] h-[19px]">
                        <Image src={Image2} alt="" fill objectFit="contain" />
                      </div>
                      <div className="relative w-[15px] h-[19px]">
                        <Image src={Image3} alt="" fill objectFit="contain" />
                      </div>
                      <div className="relative w-[19px] h-[19px] flex items-center bg-primary-light-blue rounded-full text-primary-blue font-urbanist tracking-[0.02em] text-[8px] justify-center">
                        +2
                      </div>
                    </div>
                  </div>
                  <div className="tracking-[0.02em] text-sm flex gap-4 ">
                    <div>Submitted by:</div>
                    <div className="text-primary-Spanish-Gray">
                      14 Apr 2021, 8:43 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-primary-green px-1 py-1 rounded-full w-fit text-primary-green flex items-center gap-1 ">
              <div className="w-[19px] bg-primary-green h-[19px] rounded-full flex items-center justify-center">
                <Icon />
              </div>
              <div className="text-sm leading-[14.4px] tracking-[0.02em] font-medium">
                4 days
              </div>
            </div>
          </div>
          <div className="text-sm tracking-[0.03em] text-primary-Spanish-Gray">
            Lorem ipsum dolor sit amet consectetur. Pulvinar auctor sed proin at
            sem. Diam nisl in morbi id diam felis. Lectus eget sit tristique sit
            magnis pretium nec. Mus fermentum consequat nisl volutpat viverra ut
            at. Lorem tristique dolor cursus euismod mus duis. Etiam aliquam
            ultrices tristique in ipsum congue. Nisl aenean netus lobortis ut
            amet. Lacus eleifend urna turpis amet mattis lacus. Dui elementum ac
            vitae quam ullamcorper nunc.
          </div>
          <div className="text-sm tracking-[0.03em] gap-20 text-primary-Spanish-Gray rounded-lg shadowN w-fit px-[13px] py-[14px] flex items-center justify-between ">
            <div className="flex gap-4 items-center">
              <div className="relative w-[30px] h-[30px]">
                <Image src={Pdf} alt="" fill objectFit="contain" />
              </div>
              <div className="font-urbanist text-sm tracking-[0.02em] text-primary-jet">
                <p>Evolution chapter notes.</p>
                <p className="text-primary-Rhythm">32.5 MB</p>
              </div>
            </div>
            <div>
              <Download />
            </div>
          </div>
        </div>

        <div className="w-full rounded-lg bg-white font-urbanist p-6 flex flex-col gap-4">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center">
              <div>
                <CustomButton
                  text="Not-Graded"
                  style="bg-primary-blue text-white rounded"
                />
              </div>

              <div>
                <CustomButton
                  text="Graded"
                  style="bg-white text-primary-jet rounded"
                />
              </div>
            </div>
            <CustomSearch />
          </div>
          <div className="flex flex-col">
            {studentData.map((data) => {
              console.log(data);
              return <StudentListtile key={data.id} {...data} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassPage;
