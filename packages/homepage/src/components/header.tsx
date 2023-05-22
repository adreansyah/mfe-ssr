import React from "react";
import BgHeader from "/public/static/images/backgrounds/bg_header.png";
import IconLogo from "/public/static/images/logos/klik_retail.png";
import HeaderCart from "../assets/images/icons/header_cart.png";
import Image from "next/image";
import {
  QRAppDownload,
  DownloadApp,
  DownloadAtGooglePlay,
  DownloadAtAppStore,
  MediaSocialFB,
  MediaSocialIG,
  CustomerService,
  Call,
  Mail,
  Chevron,
  Shipping,
  KlikRetail,
  HeaderCategory,
  MagnifyingGlass,
  HeaderBell,
  HeaderFavorite,
  HeaderComplaint,
  HeaderInvite,
  HeaderListPassenger,
  Logout,
} from "@/assets/images";
const Header = () => {
  return (
    <header className="bg-white">
      <div className="absolute h-max bg-black"></div>
      <nav
        className="fixed z-10 w-full bg-cover border-gray-200 px-4 lg:px-6 py-auto pb-2.5"
        style={{ backgroundImage: `url(${BgHeader.src})` }}
      >
        <div className="flex justify-between mx-auto pb-4 max-w-screen-xl">
          <div className="flex gap-4 text-xs text-black">
            <div className="flex gap-1 items-center">
              <Image
                className="w-3 h-3"
                src={DownloadApp}
                alt="Download Icon"
              />
              <p>Download App Klik Indomaret</p>
              <Image className="w-2 h-2" src={Chevron} alt="chevron Icon" />
            </div>
            <div className="flex gap-4 text-xs text-black">
              <div className="flex gap-2 items-center">
                <p>Ikuti kami di</p>
                <Image
                  className="w-3.5 h-3.5 fill-black"
                  src={MediaSocialFB}
                  alt="chevron FB"
                />
                <Image
                  className="w-3.5 h-3.5"
                  src={MediaSocialIG}
                  alt="chevron IG"
                />
              </div>
            </div>
            <div className="flex gap-4 text-xs text-black">
              <div className="flex gap-2 items-center">
                <Image
                  className="w-3 h-3"
                  src={CustomerService}
                  alt="chevron CS"
                />
                <p>Layanan Pelanggan</p>
              </div>
            </div>
          </div>
          <div className="bg-white h-8 rounded-bl-xl rounded-br-xl w-1/3">
            <div className="flex gap-4 justify-between text-xs pt-1.5 mx-4 items-center text-black">
              <div className="flex gap-2 items-center">
                <Image
                  className="w-3 h-3"
                  src={CustomerService}
                  alt="chevron map"
                />
                <p className="text-blue-600">
                  Masuk dulu yuk untuk ganti alamat & lokasimu
                </p>
              </div>
              <Image className="w-3 h-3" src={Chevron} alt="chevron map" />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full items-center mx-auto max-w-screen-xl">
          <div className="flex gap-8 flex-row w-full">
            <a href="https://flowbite.com" className="flex items-center">
              <img src={IconLogo.src} className="h-8" alt="Flowbite Logo" />
            </a>
            <div className="flex gap-2 justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
              <Image
                className="h-[16px] mr-2"
                src={HeaderCategory}
                alt="Header Category Icon"
              />
              <span className="text-blue-600">kategori</span>
              <Image
                className="w-2 h-2"
                src={Chevron}
                alt="Header Category Icon"
              />
            </div>
            <div className="flex justify-between gap-4 items-center w-2/4 lg:flex  lg:order-1">
              <input
                type="text"
                placeholder="Mau beli apa hari ini ?"
                className="input bg-white text-black input-sm w-full lg:max-w-xs" // Updated className
              />
            </div>
          </div>
          <div className="flex w-max gap-4 items-center lg:order-2">
            <div>
              <a href="#" className="text-sm py-2 focus:outline-none">
                <Image src={HeaderCart} className="h-6" alt="Header Cart" />
              </a>
            </div>
            <button className="border leading-3 text-xs text-blue-600 font-bold btn-sm border-blue-600 bg-white rounded-md px-4 py-2 hover:bg-blue-500 hover:text-white">
              Masuk
            </button>
            <button className="border leading-3 text-xs text-white font-bold btn-sm bg-blue-600 rounded-md px-4 py-2 hover:bg-blue-500 hover:text-white">
              Daftar
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
