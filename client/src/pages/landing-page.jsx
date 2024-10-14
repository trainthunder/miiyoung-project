import React from "react";
import Header from "../components/header";
import { BurgerMenuProvider } from "../context/burger-menu-context";
import MobileBurgerMenu from "../components/mobile-burger-menu";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <BurgerMenuProvider>
      <MobileBurgerMenu />
      <div className="w-full min-h-screen bg-blue-100 overflow-clip">
        <Header />
        <main className="w-full h-full pt-[77px] flex justify-center items-center">
          <div className="w-full max-w-[1300px] px-[20px] mt-[60px] flex flex-col items-center">
            {/** First Section Start */}
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col gap-[32px]">
                <div className="flex flex-col gap-[16px]">
                  <p className="font-prompt font-semibold text-[40px] text-blue-700">
                    เรื่องจำ...ให้เราช่วยดูแลคุณ
                  </p>
                  <p className="font-prompt font-medium text-[20px] text-black">
                    "ลิสต์ เช็ค ช็อป"
                  </p>
                </div>
                <p className="font-prompt font-medium text-[18px] text-gray-700">
                  ลืม!! จำไม่ได้!! กลัวซื้อซ้ำ!! MIIYOUNG
                  <br className="hidden min-[375px]:flex" />
                  พร้อมที่จะช่วยลิสต์ มังงะ และ ไลท์โนเวล
                  <br className="hidden min-[375px]:flex" />
                  ที่คุณมีแล้วเพื่อป้องกันการซื้อซ้ำที่จะเกิดขึ้น
                </p>
                <button
                  className="w-[190px] h-[55px] bg-blue-600 hover:bg-blue-500 active:blue-800 rounded-[8px] text-white font-prompt font-medium text-[20px]"
                  onClick={() => navigate("/allbook")}
                >
                  ไปลิสต์กันเลย
                </button>
              </div>
              <img
                src="images/hero-image.png"
                alt=""
                className="max-w-[327px] mt-[10px]"
              />
            </div>
            {/** First Section End */}
          </div>
        </main>
      </div>
    </BurgerMenuProvider>
  );
}

export default LandingPage;
