import React from 'react'
import logo from "../assets/logo.png"

function NavBar() {
    return (
        <header className="text-gray-700 body-font nav">
        <div className="flex justify-between flex-wrap p-5 flex-col md:flex-row items-center">
            <div className="flex gap-8">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img className="w-8 h-auto" src={logo} alt="logo"/>
            </a>
            <div className="relative text-gray-600 border-b-2 search_div">
                <input type="search" name="serch" placeholder="search for articles, blog or any readings…"
                    className="bg-white h-10 px-5 pr-10 text-sm focus:outline-none border-l-4 search"/>
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                        viewBox="0 0 56.966 56.966" style={{enableBackground: "new 0 0 56.966 56.966"}}
                        xmlSpace="preserve" width="512px" height="512px">
                        <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                </button>
            </div>
            </div>
            <div className="flex gap-3">
            <div className="flex justify-center items-center">
                <button
                    className="py-1 px-3 focus:outline-nonemt-4 md:mt-0 font-bold">Login
                    
                </button>
                <div className="hr"></div>
                <button
                className="py-1 px-3 focus:outline-nonemt-4 md:mt-0 font-bold">Sign
                    Up
                </button>
            </div>

            <button
                className="custom text-base mt-4 md:mt-0 pl-8 pt-3 pb-2 pr-8 font-bold">Publish
            </button>
            </div>
        </div>
    </header>
    )
}

export default NavBar
