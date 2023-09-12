import Link from "next/link";
import "./file.css";
import "./globals.css";
import Products from "sections/Products";
import Info from "sections/Info";
import Testimonials from "sections/Testimonials";
import Populars from "sections/Populars";

export default function Home() {
  return (
    <div className="home w-full min-h-screen">
      <div className=" text-black font-roboto min-h-[500px] bg-white bg-opacity-70 w-1/2 flex justify-center flex-col px-10">
        <h1 className="text-5xl ">Rich, Long lasting Fragrance</h1>
        <p className="text-lg mt-2">Made with 100% pure Bee's wax</p>
        <Link href="/discover">
          <button className="bg-green rounded-xl w-28 px-5 py-3 text-sm text-white font-semibold mt-5 hover:bg-darkGreen">
            Discover
          </button>
        </Link>
      </div>
      <Products />
      <Info />
      <Testimonials />
      <Populars />
    </div>
  );
}
