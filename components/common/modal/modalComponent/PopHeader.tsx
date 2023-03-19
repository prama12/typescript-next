import { Close } from "@/assets/icon";

type Props = {
  style?: any;
  headStyle?: any;
  headTitle?: string;
  closeModal: () => void;
};

const PopHeader = ({ style, headTitle, headStyle, closeModal }: Props) => {
  return (
    <>
      <div className={`w-full flex items-center justify-between ${style}`}>
        <p
          className={`font-urbanist ${headStyle} capitalize font-semibold tracking-[0.02em]`}
        >
          {headTitle}
        </p>
        <Close
          className="cursor-pointer animation hover:scale-105"
          onClick={closeModal}
        />
      </div>
    </>
  );
};

export default PopHeader;
