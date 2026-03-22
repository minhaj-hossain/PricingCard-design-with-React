
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Nav = () => {

    const [menu, setMenu] = useState(false)

    const handleClick = () => {
        console.log('hello there')
        setMenu(prevMenu => !prevMenu)
    }


    return (
        <>

            <div className='navbar bg-base-100 shadow-lg'>
                {menu ? <ul
                    className="menu menu-sm dropdown-content absolute top-15
                    bg-base-100 rounded-box   mt-3 w-52 p-2 shadow"
                >
                    <li ><a className="hover:bg-base-200">Item 1</a></li>
                    <li ><a className="hover:bg-base-200">Item 1</a></li>
                    <li ><a className="hover:bg-base-200">Item 3</a></li>
                </ul> : null}
                <div className="navbar-start">
                    <div className="">
                        <div onClick={handleClick} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            {menu ? <IoCloseOutline size={'25px'} /> : <CiMenuFries />}

                        </div>


                    </div>
                    <a href="#" className="btn btn-ghost rounded-2xl text-xl">HeyTech</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    {/* Optional: Add center navigation links here if needed */}
                    <ul className="menu menu-horizontal">
                        <li>
                            <a href="#" >Home</a>
                        </li>
                        <li>
                            <details>
                                <summary>About Us</summary>
                                <ul className="p-2 bg-base-100 w-40 z-1">
                                    <li><a>Submenu</a></li>
                                    <li><a>Submenu</a></li>
                                </ul>
                            </details>

                        </li>
                        <li>
                            <a href="#" >Product</a>
                        </li>

                    </ul>
                </div>

                <div className="navbar-end">
                    <a className="btn rounded-2xl">Button</a>
                </div>

            </div>

        </>
    );
};

export default Nav;