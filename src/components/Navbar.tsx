'use client';

import Link from "next/link"
import React, { useState } from "react"
import NavItem from "./NavItem";

const Navbar = () => {

  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  }

  return (
    <nav className="relative z-10 w-full bg-blue-500 text-white">
      <div className="flex items-center justify-between mx-5 sm:mx-10 lg:mx-20">

        {/*logo*/}
        <div className="flex items-center text-2xl h-14">
          <Link href="/">연세대학교 총동아리연합회</Link>
        </div>

        {/*menu 작아지고 커지는 거 할 때 버튼 조절*/}
        <div className="text-2xl sm:hidden">
          {menu === false ? 
          <button onClick={handleMenu}>+</button> : 
          <button onClick={handleMenu}>-</button>}  
        </div>

        <div className="hidden sm:block">
          <NavItem />
        </div>

      

      </div>

      <div className="block sm:hidden">
        {/*menu가 true이고 사이즈가 작을 때만 아래 세로로 메뉴 내려가게 분기처리*/}
        {(menu === false) ? null : <NavItem mobile />}

      </div>


    </nav>
  );
};


export default Navbar