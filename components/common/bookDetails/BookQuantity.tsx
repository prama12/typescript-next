type Props = {
  name: string;
  quantity: number;
};

const BookQuantity = ({ name, quantity }: Props) => {
  return (
    <>
      <div className="px-4 bg-secondary-background-gray py-2 font-urbanist tracking-[0.02em]">
        <p>{name}</p>
        <p>{quantity}</p>
      </div>
    </>
  );
};

export default BookQuantity;
