import { Heart, ShoppingCart } from "lucide-react";
import { Card } from "../components/ui/card";

export default function ProductCard({
  image,
  name,
  oldPrice,
  newPrice,
  bgColor,
}) {
  return (
    <Card
      className={`group relative overflow-hidden rounded-2xl p-8 flex flex-col items-center shadow-none hover:shadow-xl transition-all duration-500 ${bgColor}`}
    >
      {/* Vertical Name */}
      <div
        className="
        absolute
        top-0
        -left-14
        group-hover:left-0
        duration-500
        h-full
        w-14
        bg-black
        text-white
        font-bold
        flex
        items-center
        justify-center
        [writing-mode:vertical-rl]
        rotate-180
      "
      >
        {name}
      </div>

      {/* Shoe */}
      <img
        src={image}
        alt={name}
        className="
        w-44
        py-10
        transition-all
        duration-500
        group-hover:rotate-[30deg]
        group-hover:ml-14
      "
      />

      {/* Bottom */}
      <div
        className="
        flex
        justify-between
        items-end
        w-full
        transition-all
        duration-500
        group-hover:ml-14
        group-hover:px-6
      "
      >
        <Heart
          className="cursor-pointer hover:text-red-500"
          size={24}
        />

        <div className="text-center">
          <p className="text-sm text-red-500">
            ${oldPrice}
          </p>

          <p className="font-bold text-lg">
            ${newPrice}
          </p>
        </div>

        <ShoppingCart
          className="cursor-pointer hover:text-red-500"
          size={24}
        />
      </div>
    </Card>
  );
}