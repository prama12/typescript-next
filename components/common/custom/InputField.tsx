type Props = {
  name?: string;
  label: string;
  placeholder: string;
  style?: any;
};

const InputField = ({ name, label, placeholder, style }: Props) => {
  return (
    <>
      <div className={`flex flex-col gap-2 ${style} `}>
        <label className="text-primary-jet tracking-[0.02em] font-urbanist text-sm font-semibold">
          <span> {label}</span>
          <span className="text-primary-red">*</span>
        </label>
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          className="w-full bg-secondary-background-gray focus:outline-none p-4 text-sm tracking-[0.02em] rounded text-primary-jet placeholder:text-primary-Spanish-Gray font-urbanist"
        />
      </div>
    </>
  );
};

export default InputField;
