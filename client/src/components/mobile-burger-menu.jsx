import React, { useEffect } from "react";
import { useBurgerMenu } from "../context/burger-menu-context";
import { useLocation } from "react-router-dom";

function MobileBurgerMenu() {
  const { isMenuOpen, setIsMenuOpen } = useBurgerMenu();
  const location = useLocation();

  const tailwindStyle = {
    textOnPageStyle: "font-prompt font-medium text-blue-600 text-[16px]",
    textOffPageStyle: "font-prompt font-medium text-gray-500 text-[16px]",
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsMenuOpen]);

  return (
    <>
      {isMenuOpen ? (
        <div className="w-screen min-h-screen bg-blue-100 absolute z-20 p-[50px]">
          {/** App-Logo Button Start */}
          <img src="images/miiyoung-logo.png" alt="" />
          {/** App-Logo Button End */}

          {/** Exit-Icon Button Start */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-8 absolute top-5 right-5"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <path d="M6 18 18 6M6 6l12 12" />
          </svg>
          {/** Exit-Icon Button End */}

          <div className="mt-[50px] flex flex-col gap-[30px]">
            {/** Home Button Start */}
            <button
              className={
                location.pathname === "/"
                  ? tailwindStyle.textOnPageStyle
                  : tailwindStyle.textOffPageStyle
              }
            >
              หน้าแรก
            </button>
            {/** Home Button End */}

            {/** All Book Button Start */}
            <button
              className={
                location.pathname === "/allbook"
                  ? tailwindStyle.textOnPageStyle
                  : tailwindStyle.textOffPageStyle
              }
            >
              หนังสือทั้งหมด
            </button>
            {/** All Book Button End */}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default MobileBurgerMenu;
