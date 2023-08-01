import React, { useState } from "react";
import logo from '../../assets/logo.png';
import close from '../../assets/close.svg';
import menu from '../../assets/menu.svg';
import { NAVLINKS } from '../../products';
import { Link, Outlet } from 'react-router-dom';
import ContactStyle from "./ContactSytle";
import Contact from "./Contact";
import Footer from "../Footer/Footer";

const Navbar = () => {
    const [active, setActive] = useState('/')
    const [toggle, setToggle] = useState(false)
    return ( 
        <div> 
            {/* Contact to shop */}
            {/* <ContactStyle /> */}
            <Contact/>
            {/* <Contact /> */}
            <div className='bg-gray-300 shadow-md flex items-center navbar'> 
                {/* Logo and Name shop */} 
                <Link to='/'> 
                    <span className='flex w-16 h-16 ml-2 mr-0 
                    justify-start cursor-pointer hover:text-amber-500 
                    duration-500 md:w-28 md:h-28 md:ml-10'>
                        <img src={logo} alt='Ntc computer' />
                    </span>                                  
                </Link>
                <Link to='/'>
                    <h1 className='font-[Poppins] text-2xl font-bold 
                    text-white cursor-pointer mx-4
                    hover:text-amber-500 duration-500 px-8 md:text-4xl
                    md:mx-0'>
                        NTC Computer
                    </h1>
                </Link>
                
                <ul className='list-none sm:flex hidden justify-center
                    items-center flex-1 pt-0 pb-4
                    md:justify-end md:mr-32 md:pt-10 '>  
                    
                    { 
                        NAVLINKS.map((nav) => (
                            <Link to={nav.link} key={nav.id}
                            >
                                <li 
                                    className='font-[Poppins] font-normal text-xl cursor-pointer 
                                    text-white hover:text-amber-500 duration-300 flex items-center justify-center'                         
                                >   
                                    {/* Icon products */}
                                    <span className='pl-6 pr-2 flex items-center'>{nav.icon}</span>                 
                                
                                    {/* Title products */}
                                    {nav.title} 
                                                                
                                </li> 
                            </Link> 
                        ))
                    } 

                </ul>             
                    {/* Mobile */}
                <div className='sm:hidden flex flex-1 justify-end items-center mr-4'>

                    <img src={toggle ? close: menu} alt='menu'
                        className='w-[28px] h-[28px] object-contain'
                        onClick={() => setToggle(!toggle)} />
                
                    <div className={`${!toggle ? 'hidden': 'flex'}
                        p-6 bg-gradient-to-r from-amber-500 absolute top-20 right-0
                        mx-4 my-24 min-w-[140px] rounded-xl sidebar`}
                    >
                        <ul className='list-none flex items-center justify-end items-left flex-col flex-1'> 

                            {
                                NAVLINKS.map((nav, index) => (
                                    <li                             
                                        className={`font-[Poppins] font-medium cursor-pointer text-[16px]
                                        ${active === nav.title ? 'text-black': 'text-black'}
                                        ${index === NAVLINKS.length - 1 ? 'mb-0': 'mb-4'}`} 
                                        onClick={() => setActive(nav.title)}                                 
                                    >
                                        {/* Icon products */}
                                        <span className='mr-2'>
                                            <a href={nav.link}>{nav.icon}</a>                    
                                        </span> 

                                        {/* Product Titles  */}
                                        <a href={nav.link}>{nav.title} </a>                    
                                    </li>  
                                ))
                            }
                        </ul> 
                    </div>         
                </div>                   
            </div> 
           
            <Outlet /> 
            <Footer />  
        </div>                 
    )
} 

export default Navbar