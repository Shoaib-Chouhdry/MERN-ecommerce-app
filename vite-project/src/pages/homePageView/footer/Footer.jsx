import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faPhone,faArrowRight,faBell  } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {


    return (
        <div className="m-4 border rounded-2xl py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 text-sm mt-2 text-white" style={{ backgroundColor: " #09243C" }}>
            {/* /* top */}
            <div className="pb-8">
                <h1 className="text-6xl tracking-wide ">Hello MD</h1>
                <div className="w-full border-t-2 border-white my-10"></div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-24">
                {/* left */}
                <div className="w-full md:w-1/2 lg:w-2/4  flex flex-col gap-8">
                    <div className="text-2xl tracking-wide">Contact With Us!</div>
                    <p>50h Business Pkwy,<br/>
                        Richardson, TX 75081, USA</p>
                    <span className="font-semibold">Support mail:  info@hellomds.com</span>
                    <span className='flex  items-center gap-4'>
                        <span className='flex items-center justify-center w-12 h-12  text-white rounded-full' style={{ backgroundColor: " #09A8D4"}} >
                        <FontAwesomeIcon icon={faPhone} width={28} height={28} />
                        </span>
                        <span className="font-semibold">(469) 421-2777</span>
                    </span>
                    <button className='p-4 w-2/4 rounded-2xl' style={{ backgroundColor: " #09A8D4"}}> 
                        <span>
                             Schedule A Meeting
                            <FontAwesomeIcon icon={faArrowRight} width={28} height={28} />
                        </span>
                    </button>
                    
                </div>
                {/* center */}
                <div className="w-full tracking-wide  md:w-1/2 lg:w-1/4  flex flex-col gap-6">
                    <div className="text-2xl tracking-wide">Our Services</div>
                    
                    <p className='hover:text-[#099DC8] hover:cursor-pointer'>Medical Billing Services</p>
                    <p className='hover:text-[#099DC8] hover:cursor-pointer'>Prior Authorization Services</p>
                    <p className='hover:text-[#099DC8] hover:cursor-pointer'>Denial management Services</p>
                    <p className='hover:text-[#099DC8] hover:cursor-pointer'> Enrollment & Credentialing</p>
                    <p className='hover:text-[#099DC8] hover:cursor-pointer'>Payment Posting</p>
                    <p className='hover:text-[#099DC8] hover:cursor-pointer'>Account receivable Services</p>
                    <p className="text-2xl ">Others</p>
                    <p className='hover:text-[#099DC8] hover:cursor-pointer'>Privacy Policies</p>

                </div>
                {/* right */}
                <div className="w-full md:w-1/2 lg:w-2/4  flex flex-col gap-8 ">
                    <h1 className="text-2xl tracking-wide">Subscribe Newsletter</h1>
                    <span className='flex gap-2 items-center '>
                         <span className='flex items-center justify-center w-12 h-12 text-white rounded-full' style={{ backgroundColor: " #09A8D4"}}>
                            <FontAwesomeIcon icon={faBell} width={28} height={28} />
                         </span>
                         <p> Please sign up to follow the latest news and events from <br />
                             us, we promise not to spam your inbox.
                         </p>

                    </span>
                    
                    <div className="">
                        <input type="text" placeholder="Email Address" className="p-4 w-3/4 rounded-bl-2xl rounded-tl-2xl text-black focus:border-transparent focus-ring-0" />
                        <button className=" p-4 bg-white text-black rounded-br-2xl rounded-tr-2xl ">
                             <FontAwesomeIcon icon={faArrowRight} width={28} height={28} />
                        </button>
                    </div>
                    <span className='flex gap-2'>
                        <button className='flex items-center justify-center w-12 h-12  text-white rounded-full bg-[#09A8D4] hover:bg-[#3C5973] '  >
                             <FontAwesomeIcon icon={faFacebook} width={28} height={28} />
                        </button>
                        <button className='flex items-center justify-center w-12 h-12  text-white rounded-full  bg-[#09A8D4] hover:bg-[#3C5973]'  >
                             <FontAwesomeIcon icon={faInstagram} width={28} height={28} />
                        </button>
                        <button className='flex items-center justify-center w-12 h-12  text-white rounded-full bg-[#09A8D4] hover:bg-[#3C5973]'  >
                             <FontAwesomeIcon icon={faLinkedin} width={28} height={28} />
                        </button>
                    </span>
                </div>
            </div>
        

        </div>
    )

}