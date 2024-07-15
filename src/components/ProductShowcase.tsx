import productImage from "@/assets/Product.png";
import Image from "next/image";

function ProductShowcase() {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#5d2ca8] py-[72px] sm:py-24">
      <div className="container text-center">
        <h2 className="text-5xl font-bold tracking-tighter sm:text-6xl">
          Intuitive interface
        </h2>
        <div className="max-w-[540px] mx-auto">
          <p className="mt-5 text-xl text-white/70">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <Image
          className="inline-flex mt-14"
          src={productImage}
          alt="Product Image"
        />
      </div>
    </div>
  );
}

export default ProductShowcase;
