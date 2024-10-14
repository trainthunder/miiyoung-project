import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useBurgerMenu } from "../context/burger-menu-context";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isMenuOpen, setIsMenuOpen } = useBurgerMenu();
  const tailwindStyle = {
    textOnPageStyle: "font-prompt font-medium text-blue-600 text-[16px]",
    textOffPageStyle: "font-prompt font-medium text-gray-500 text-[16px]",
  };

  return (
    <header className="w-full bg-white flex items-center justify-center fixed drop-shadow-xl z-10">
      <div className="w-full max-w-[1300px] bg-white p-[20px] md:px-[30px] flex justify-between">
        {/** Responsive Mobile Button Start */}
        <div className="flex gap-[15px] md:hidden">
          {/** Menu-Icon Button Start */}
          <button onClick={() => setIsMenuOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-6"
            >
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          {/** Menu-Icon Button End */}

          {/** App-Logo Button Start */}
          <button onClick={() => navigate("/")}>
            <img
              src="images/miiyoung-logo.png"
              alt=""
              className="w-full h-[24px]"
            />
          </button>
          {/** App-Logo Button End */}
        </div>
        {/** Responsive Mobile Button End */}

        {/** Responsive Tablet Button Start */}
        <div className="gap-[15px] hidden md:flex">
          {/** Home Button Start */}
          <button
            className={
              location.pathname === "/"
                ? tailwindStyle.textOnPageStyle
                : tailwindStyle.textOffPageStyle
            }
            onClick={() => navigate("/")}
          >
            หน้าแรก
          </button>
          {/** Home Button End */}

          {/** All Book Button Start */}
          <button
            className={
              location.pathname === "/allbooks"
                ? tailwindStyle.textOnPageStyle
                : tailwindStyle.textOffPageStyle
            }
            onClick={() => navigate("/allbook")}
          >
            หนังสือทั้งหมด
          </button>
          {/** All Book Button End */}
        </div>
        {/** Responsive Tablet Button End */}

        {/** Responsive Logo Tablet Button Start */}
        <button onClick={() => navigate("/")}>
          <img
            src="images/miiyoung-logo.png"
            alt=""
            className="w-full h-[30px] hidden md:flex"
          />
        </button>
        {/** Responsive Logo Tablet Button End */}

        {/** Login Button Start */}
        <button
          className="border-[1px] border-blue-600 rounded-[8px] px-[10px] py-[5px]"
          onClick={() => navigate("/login")}
        >
          <span className="font-prompt font-medium text-blue-600 text-[16px]">
            เข้าสู่ระบบ
          </span>
        </button>
        {/** Login Button End */}
      </div>
    </header>
  );
}

export default Header;
