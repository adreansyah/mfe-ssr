import Image from "next/image";
import footerImage from "/public/static/images/backgrounds/icon_hp_footer.png";
import android from "/public/static/images/backgrounds/icon_android.png";
import ios from "/public/static/images/backgrounds/icon_ios.png";
import huawei from "/public/static/images/backgrounds/icon_huawei.png";

const Footer = () => {
  return (    
      <div className="flex justify-center bg-yellow-400 px-32 h-56 mt-8">
        <div className="max-w-screen-xl flex justify-between">
          <div className="flex flex-col w-7/12 py-8 gap-4">
            <h1 className="text-xl font-bold text-blue-600 leading-10">
              Nikmati pengalaman terbaik belanja kebutuhanmu lewat aplikasi Klik
              Indomaret Unduh aplikasi Klik Indomaret sekarang juga!
            </h1>
            <div className="flex gap-4">
              <div className="cursor-pointer">
                <Image
                  width={"250"}
                  height={"75"}
                  className="w-max-full bg-cover bottom-0 w-46"
                  src={android.src}
                  alt="android logo"
                />
              </div>
              <div className="cursor-pointer">
                <Image
                  width={"250"}
                  height={"75"}
                  className="w-max-full bg-cover bottom-0 w-46"
                  src={ios.src}
                  alt="ios logo"
                />
              </div>
              <div className="cursor-pointer">
                <Image
                  width={"250"}
                  height={"75"}
                  className="w-max-full bg-cover bottom-0 w-46"
                  src={huawei.src}
                  alt="huawei logo"
                />
              </div>
            </div>
          </div>
          <div className="relative w-max-full w-80">
            <Image
              width={"500"}
              height={"500"}
              className="w-max-full bg-cover bottom-0 absolute w-80 h-72"
              src={footerImage.src}
              alt="footer logo"
            />
          </div>
        </div>
        
      </div>
  );
};
export default Footer;
