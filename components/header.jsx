import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="mb-10">
      <nav>
        <div className="navbar bg-[#1F1D14] py-[10px] text-[#ffffffc9]">
          <div className="container flex justify-between items-center">
            <div className="flex items-center">
              <Image
                style={{ width: "189px", height: "59px" }}
                src="/logo.svg"
                alt="logotip"
                width={0}
                height={0}
              />
              <ul className="flex gap-x-[30px]">
                <li>
                  <Link href="/products">Продукты</Link>
                </li>
                <li>
                  <Link href="/contacts">Контакты</Link>
                </li>
                <li>
                  <Link href="/payment-and-delivery">Оплата и Доставка</Link>
                </li>
                <li>
                  <Link href="/news">Новости</Link>
                </li>
                <li>
                  <Link href="/about-us">О нас</Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center space-x-4 ">
              <span className="flex items-center space-x-2">
                <Image
                  src="/email.svg"
                  alt="email"
                  style={{ width: "16px", height: "16px" }}
                  width={0}
                  height={0}
                />
                <p>+998 (90) 565-85-85</p>
              </span>
              <span className="flex items-center space-x-2">
                <Image
                  src="/phone.svg"
                  style={{ width: "16px", height: "16px" }}
                  alt="phone"
                  width={0}
                  height={0}
                />
                <p>info@gmail.com</p>
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div className="hero mt-[15px]">
        <div className="container flex items-center justify-between">
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 px-[40px] py-[15px] bg-black text-white rounded-md">
              <Image
                src="/layers.svg"
                style={{ width: "20px", height: "20px" }}
                alt="layers"
                width={0}
                height={0}
              />
              <p> Каталог</p>
            </button>
            <div className="bg-[#F2F2F2] px-5 rounded-md flex items-center">
              <input
                type="text"
                placeholder="Поиск"
                className="outline-none bg-[#F2F2F2]"
              />
              <Image
                src="/search.svg"
                style={{ width: "16px", height: "16px" }}
                alt="search"
                width={0}
                height={0}
              />
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <span className="block w-[45px] h-[45px] bg-[#F2F2F2] rounded-md p-3">
              <Image
                src="/user.svg"
                style={{ width: "20px", height: "20px" }}
                alt="user"
                width={0}
                height={0}
              />
            </span>
            <span className="relative block w-[45px] h-[45px] bg-[#F2F2F2] rounded-md p-3">
              <Image
                src="/yurak.svg"
                style={{ width: "20px", height: "20px" }}
                alt="yurak"
                width={0}
                height={0}
              />
              <span className="block absolute w-[14px] h-[14px] bg-[#FF1313] rounded-[50%] top-[-6px] right-[-6px]"></span>
            </span>
            <button className="flex items-center space-x-2 px-[40px] py-[15px] bg-[#F2F2F2] text-black rounded-md">
              <Image
                src="/korzina.svg"
                style={{ width: "20px", height: "20px" }}
                alt="korzina"
                width={0}
                height={0}
              />
              <p>Корзина</p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
