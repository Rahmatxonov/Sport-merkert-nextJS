import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1F1D14] text-white">
      <div className="h-[20px] bg-[#FBD029]"></div>
      <div className="container footer flex items-center justify-between">
        <Image
          style={{ width: "189px", height: "59px" }}
          src="/logo.svg"
          alt="logotip"
          width={0}
          height={0}
        />
        <div>
          <h3 className="pb-[19px]">Контакты</h3>
          <span className="flex items-center space-x-2 mb-[25px]">
            <Image
              src="/phone.svg"
              style={{ width: "16px", height: "16px" }}
              alt="phone"
              width={0}
              height={0}
            />
            <p>
              +998 (90) <b>565-85-85</b>
            </p>
          </span>
          <span className="flex items-center space-x-2">
            <Image
              src="/email.svg"
              alt="email"
              style={{ width: "16px", height: "16px" }}
              width={0}
              height={0}
            />
            <p>support@figma.com</p>
          </span>
        </div>
        <div>
          <span className="flex items-center space-x-2 w-[280px]">
            <Image
              src="/lokatsiya.svg"
              alt="lokatsiya"
              style={{ width: "24px", height: "24px" }}
              width={0}
              height={0}
            />
            <p>Tashkent Sh. Chilonzor 9 kvartal 12 uy</p>
          </span>
        </div>
        <div className="w-[235px]">
          <h3 className="pb-[16px]">Подписатся</h3>
          <input
            className="px-5 py-[8px] rounded-md"
            type="text"
            placeholder="support@figma.com"
          />
          <button className="w-[255px] px-[40px] py-[8px] bg-[#FBD029] text-black rounded-md mt-[16px]">
            Отправить
          </button>
          <span className="flex items-center space-x-3 mt-[49px]">
            <Image
              src="/instagram.svg"
              alt="lokatsiya"
              style={{ width: "32px", height: "32px" }}
              width={0}
              height={0}
            />
            <Image
              src="/facebook.svg"
              alt="lokatsiya"
              style={{ width: "32px", height: "32px" }}
              width={0}
              height={0}
            />
            <Image
              src="/telegram.svg"
              alt="lokatsiya"
              style={{ width: "32px", height: "32px" }}
              width={0}
              height={0}
            />
          </span>
        </div>
      </div>
      <span className="block w-full h-[2px] bg-[#f2f2f28e]"></span>
      <div className="container flex items-center justify-between h-[50px] text-[#f2f2f28e]">
        <p>© 2022 All Rights Reserved</p>
        <ul className="flex items-center space-x-5">
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Sales and Refunds</li>
          <li>Legal</li>
          <li>Site Map</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
