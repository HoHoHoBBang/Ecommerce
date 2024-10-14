import { Link } from "react-router-dom";

interface Props {
  id: string;
  image: string[];
  name: string;
  currency: string;
  price: number;
}

const ProductItems = ({ id, image, name, currency, price }: Props) => {
  return (
    <Link
      to={`/product/${id}`}
      className="flex flex-col items-center justify-center transition-all ease-in-out hover:scale-110"
    >
      <img
        src={image[0]}
        alt=""
        className="w-full overflow-hidden rounded-xl"
      />
      <div className="flex w-full flex-col justify-start">
        <p className="text-sm">{name}</p>
        <p className="text-lg font-bold">
          {currency}
          {price.toLocaleString("ko-KR")}
        </p>
      </div>
    </Link>
  );
};

export default ProductItems;
