import ProductCard from "../components/ProductCard";

import img1 from "../assets/shoes/img1.png";
import img2 from "../assets/shoes/img2.png";
import img3 from "../assets/shoes/img3.png";
import img4 from "../assets/shoes/img4.png";

const products = [
  {
    image: img1,
    name: "AIR ZOOM PEGASUS",
    oldPrice: 990,
    newPrice: 749,
    bgColor: "bg-sky-100",
  },
  {
    image: img2,
    name: "AIR ZOOM PEGASUS",
    oldPrice: 990,
    newPrice: 749,
    bgColor: "bg-cyan-100",
  },
  {
    image: img3,
    name: "AIR ZOOM PEGASUS",
    oldPrice: 990,
    newPrice: 749,
    bgColor: "bg-orange-100",
  },
  {
    image: img4,
    name: "AIR ZOOM PEGASUS",
    oldPrice: 990,
    newPrice: 749,
    bgColor: "bg-cyan-100",
  },
];

export default function Shop() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-6">
      <div className="flex items-center gap-3 mb-10">
        <h1 className="text-4xl font-bold">
          SHOP
        </h1>

        <div className="w-20 h-[2px] bg-black"></div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}