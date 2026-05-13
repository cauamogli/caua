import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const mockProducts = [
  { id: "flora-pitcher", name: "Hana Pitcher", subtitle: "花 · Celadon", price: "$185" },
  { id: "moss-vase", name: "Koke Vase", subtitle: "苔 · Ash Glaze", price: "$145" },
  { id: "ember-cup-set", name: "Hi Cup Set", subtitle: "火 · Tenmoku", price: "$95" },
  { id: "stone-bowl", name: "Ishi Bowl", subtitle: "石 · Unglazed", price: "$165" },
];

const Shop = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-extralight text-foreground tracking-wider text-center mb-16 font-display">
          Shop
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {mockProducts.map((product) => (
            <Link
              key={product.id}
              to={`/shop/${product.id}`}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={heroBg}
                  alt={`${product.name} ${product.subtitle}`}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 space-y-1">
                <h2 className="text-lg font-light text-foreground tracking-wide">
                  {product.name} — {product.subtitle}
                </h2>
                <p className="text-primary text-base">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
