import Link from 'next/link'
import React from "react"

const NavItem = ({mobile}: {mobile?: boolean}) => {
  return (
    <ul className={'text-md justify-center flex gap-4 w-full items-center ${mobile && "flex-col bg-pink-500 h-full"}'}>
      <li className='py-2 text center border-b-4 cursor-pointer'><Link href='/admin'>Admin</Link></li>
      <li className='py-2 text center border-b-4 cursor-pointer'><Link href='/user'>마이페이지</Link></li>
      <li className='py-2 text center border-b-4 cursor-pointer'><Link href='/login'>로그인/회원가입</Link></li>
      <li className='py-2 text center border-b-4 cursor-pointer'><button>로그아웃해라</button></li>

    </ul>
  )
}

export default NavItem