import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex justify-between items-center py-4  shadow-purple-500 border-s-purple-500">
            <div className="flex justify-around  ">
                <a href="#" className="text-lg font-bold">
                    <span className="text-xl font-bold text-gray-800">
                        <span className="text-purple-500">N</span>AV<span className="text-purple-500">B</span>AR</span>
                </a>
                <button
                    className="lg:hidden flex justify-center w-8 h-8 bg-gray-200 right-0 ml-10 hover:bg-gray-300 rounded-full"
                    onClick={toggleNavbar}
                >
                    
                    <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
            <ul
                className={`lg:flex lg:items-center lg:justify-between ${isOpen ? 'block' : 'hidden'
                    }`}
            >
                <li className="lg:mr-4">
                    <a href="#" className="text-lg font-bold">
                        Home
                    </a>
                </li>
                <li className="lg:mr-4">
                    <a href="#" className="text-lg font-bold">
                        Products
                    </a>
                </li>
                <li className="lg:mr-4">
                    <a href="#" className="text-lg font-bold">
                        Resources
                    </a>
                </li>
                <li className="lg:mr-4">
                    <a href="#" className="text-lg font-bold">
                        Pricing
                    </a>
                </li>
                <div className="flex items-center">
                    <button className="text-purple-500 bg-gray-200 rounded-md p-2 hover:text-gray-700 mr-4">Log in</button>
                    <button className="text-white bg-purple-500 rounded-md p-2 hover:text-gray-700 mr-4">Sign up</button>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;