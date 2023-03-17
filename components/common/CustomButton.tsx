type Props = {
  text: string;
  style?: any;
};

const CustomButton = ({ text, style }: Props) => {
  return (
    <>
      <button className={` py-3 px-10 ${style}`}>{text}</button>
    </>
  );
};

export default CustomButton;
