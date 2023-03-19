import TabNavigation from "./LibraryLayout";

const Library = () => {
  // for opan and close modal

  // let [isOpen, setIsOpen] = useState(false);

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // function openModal() {
  //   setIsOpen(true);
  // }

  return (
    <>
      <TabNavigation />

      {/* <h1>
        <div className="w-fit cursor-pointer " onClick={openModal}>
          openModal
        </div>

        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          className="w-[400px] rounded-2xl "
        >
          <PopHeader
            closeModal={closeModal}
            style="px-6 py-[18px]"
            headStyle="text-base leading-[20px] "
            headTitle="add book"
          />
        </Modal>
      </h1>

      <BookCard /> */}
    </>
  );
};

export default Library;
