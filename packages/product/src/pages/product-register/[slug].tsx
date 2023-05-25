import Breacrumbs from "@/components/breadcrumbs";
import axios from "axios";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { createContext } from "vm";

const Cart: any = dynamic(() => import("cart/shapeqty"), {
  ssr: false,
  // loading: () => <p>Loading...</p>,
});
const AppDetail = () => {
  const route = useRouter();
  const [data, setdata] = useState(null);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${route?.query?.slug}`)
      .then((result: any) => {
        if (result?.data !== "") {
          setdata(result?.data);
        }
      });
  }, [route.query.slug]);
  console.log(data);
  return (
    <div className="container mx-auto bg-white text-black px-32 h-full pt-24">
      <div className="max-w-screen-xl mx-0 flex justify-between">
        <Breacrumbs />
      </div>
      <div className="flex flex-row gap-4">
        <Card />
        <Information />
      </div>
      <div className="flex flex-row py-4 gap-4">
        <Description />
        <Socmed />
      </div>
    </div>
  );
};

export const Card = () => {
  return (
    <div className="p-6 w-82 bg-white h-5/6 shadow">
      <div className=" flex justify-center">
        <div className="h-56 w-56 border shadow"></div>
      </div>
      <div className="flex justify-center gap-4 pt-6">
        <div className="h-16 w-16 border shadow"></div>
        <div className="h-16 w-16 border shadow"></div>
        <div className="h-16 w-16 border shadow"></div>
        <div className="h-16 w-16 border shadow"></div>
      </div>
    </div>
  );
};

export const Description = () => {
  return (
    <div className="w-full bg-white h-5/6 shadow">
      <div className="border-b">
        <ul className="flex flex-wrap px-6">
          <li className="mr-2">
            <a
              href="#"
              className="inline-block text-sm p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Deskripsi Produk
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block text-sm p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
              aria-current="page"
            >
              Informasi Produk
            </a>
          </li>
        </ul>
      </div>
      <div className="px-6 py-12">
        CARA PENGGUNAAN : Larutkan 1 sendok teh sunlight cair ke dalam mangkok
        berisi 1/2 gelas air. Masukkan spons dalam larutan sunlight tersebut,
        lalu remas-remas sampai berbusa. Gunakanlah untuk membersihkan semua
        bekas lemak pada peralatan makan dan masak anda. Tuntaskan dengan
        membilas sampai bersih dengan air. KOMPOSISI : Bahan aktif : 15%
        (natrium alkil benzena sulfonat, natrium lauril eter sulfat). OTHER
        DETAILS : Sunlight baru dengan formula turbo pembersih lemak!. PERHATIAN
        : Jauhkan dari jangkauan anak-anak. Bila terkena mata, bilas dengan air
        bersih, bila terminum minumlah air yang banyak. PLU : 10005482
      </div>
    </div>
  );
};

export const Socmed = () => {
  return (
    <div className="p-6 w-4/12 bg-white h-5/6 shadow">
      <h1 className="font-bold text-sm">Share :</h1>
      <div className="flex py-2 gap-4">
        <div className="w-16 h-16 cursor-pointer shadow"></div>
        <div className="w-16 h-16 cursor-pointer shadow"></div>
      </div>
    </div>
  );
};

export const Information = () => {
  return (
    <div className="w-screen bg-white h-4/5 shadow">
      <div className="p-6 pb-3 flex flex-col gap-2">
        <h1 className="font-bold text-xl ">
          SunLight Pencuci Piring Jeruk Nipis 650mL
        </h1>
        <div className="flex gap-2pb-4">
          <span className="text-xs text-red-500">Toko Indomaret</span>
          <span className="text-xs px-2">|</span>
          <span className="text-xs">Cari Toko Yang Menjual</span>
        </div>
      </div>
      <div className="border-b border-b-slate-300 my-2"></div>
      <div className="px-6 py-3 flex flex-col gap-2">
        <div className="flex gap-2 py-0">
          <span className="text-2xl font-bold text-orange-400">Rp 15.300</span>
        </div>
      </div>
      <div className="border-b border-b-slate-300 my-2"></div>
      <Cart />
      <div className="border-b border-b-slate-300 my-2"></div>
      <div className="px-6 py-3 flex flex-col gap-2">
        <div className="flex gap-2 py-0 h-64">
          <span className="text-sm">
            Sunlight Jeruk Nipis 100 mampu menghilangkan lemak dengan kekuatan
            100 jeruk nipis di tiap kemasannya, secara aktif mengangkat dan
            menghilangkan lemak membandel, dan juga membersihkan dengan cepat
            berkat teknologi baru Cepat Bilas.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppDetail;
