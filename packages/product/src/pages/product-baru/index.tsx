import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const ProductList = () => {
  const [data, setData] = useState<[]>([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      setData(result.data);
    });
  });
  return (
    <div className="bg-white text-black py-6 flex justify-center">
      <div className="max-h-full h-auto max-w-screen-xl flex justify-center">
        <div className="">
          <h1 className="text-black text-lg font-bold pb-4">Produk Terlaris</h1>
          <div className="flex flex-wrap justify-center gap-6">
            {data?.map((item: any, index: number) => {
              return <Card key={index} {...item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Card = ({ image, title }: { title: string; image: string }) => {
  return (
    <div className="max-w-sm w-40 p-4 bg-white border border-gray-200 rounded-lg shadow">
      <div className="w-full flex justify-center mb-2">
        <Image
          className="max-w-full w-28 h-28 bg-center"
          width={50}
          height={50}
          alt="pict-bord"
          src={image}
        />
      </div>
      <div className="flex flex-col">
        <p className="mb-1 text-red-500 leading-none text-xs font-normal ">
          Toko Indomaret
        </p>
        <p className="mb-3 text-xs font-normal text-gray-700">
          Amani Yoghurt Drink Mixed Orange 250mL
        </p>
      </div>
      <div className="flex flex-col">
        <p className="mb-1 text-gray-300 leading-none text-xs font-normal ">
          <span className="line-through">Rp 9.600</span>
          <span className="ml-1 text-xs p-1 rounded-md bg-orange-400 text-white">
            10%
          </span>
        </p>
        <p className="mb-3 text-md text-black-700 font-bold">Rp 7.900</p>
      </div>
      <Link
        href="#"
        className="inline-flex justify-center items-center px-2 w-full py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Beli
      </Link>
    </div>
  );
};

export default ProductList;
