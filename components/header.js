import React from "react";
import Link from 'next/link'
const Header = () => {
  return (
    <div className="flex flex-row  w-full p-2 bg-red-300 shadow-xl">
      <div className="flex space-x-4 w-1/2">
        <div>Sidebar</div>
        <div><Link href={'/'}>Todo</Link></div>
        <div><Link href={'/completed'}>Completed</Link></div>
      </div>
      <div className="flex w-1/2 justify-end">Logout</div>
    </div>
  );
};

export default Header;
