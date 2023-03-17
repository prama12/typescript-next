import Search from "../../src/assets/icon/search.svg";
const CustomSearch = () => {
  return (
    <>
      <div className=" relative flex items-center  w-60 pl-10 bg-secondary-background-gray rounded-full">
        <div className="absolute left-4 ">
          <Search />
        </div>
        <input
          type="search"
          className="w-full  appearance-none  bg-transparent pr-4 py-2 text-base placeholder-primary-Spanish-Gray  focus:outline-none focus:ring-none "
          placeholder="Search"
        />
      </div>
    </>
  );
};

export default CustomSearch;
