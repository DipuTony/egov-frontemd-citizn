import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { AiOutlineBell } from 'react-icons/ai';
import { MdBrightnessMedium } from 'react-icons/md';
import { TbHourglassLow } from 'react-icons/tb';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { AiOutlineMenuFold, AiFillHome, AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import image1 from './dash-img-1.png'
import avatar from './avatar.jpg'
import bgimg from './bg-image.jpg'
import userimg from './user-image.jpg'
import imgProperty from './property.png'
import imgWaterTap from './watre-tap.png'
import imgStandUser from './stand-user.png'
import SearchModel from '../Components/SearchModel';

function Dashboard() {

    return (
        <>
            <SearchModel />
            <div className='h-full w-full bg-gray-100'>
                <div className='h-full w-full p-5'>

                    <div className='flex float-right -m-5 mr-5'> {/* Righr Icons bell, brightness, User Icon*/}
                        {/* <AiOutlineBell size={25} className='cursor-pointer mr-5' /> <MdBrightnessMedium size={25} className='mr-5 cursor-pointer' /> <img src={avatar} alt="avatar" className='-mt-1 h-10 w-10 rounded-full cursor-pointer' /> */}
                    </div>
                    {/* Breadcrumb */}
                    <div className='flex ml-6 -mb-8 text-gray-400'><AiFillHome className='mt-0.5' /><span className='mx-3 cursor-pointer'>Home</span> <MdOutlineArrowForwardIos className='mt-1' /> <span className='mx-3 cursor-pointer'>Dashboard</span></div>
                    {/* First Box Start */}
                    <div className='flex'>

                        <div className='flex-initial w-2/3 ml-5 mt-12 font-serif'>
                            <div className="shadow-lg rounded-lg h-44 p-4 bg-white relative">
                                <img alt="Welcome" src={image1} className="absolute h-48 w-64 right-0 -top-3.5" />
                                <div className="w-4/6">
                                    <p className="text-gray-800 text-2xl font-medium m-3 font-RobotoSlab">
                                        Welcome 🙏 <span className='text-3xl'>David 🎉</span>
                                    </p>
                                    <p className="text-gray-400 text-l m-3 font-sans">
                                        You have complated 72% 🤩 of your profile.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex-initial w-1/3 ml-5 mt-12 font-serif'>
                            <div className="shadow-lg rounded-lg h-44 p-4 bg-white relative">
                                <img alt="Image Property" src={imgProperty} className="absolute right-1 -top-5 h-40 w-44 mb-4" />
                                <div className="w-4/6">
                                    <p className="text-gray-800 text-lg font-medium mb-2">
                                        Your Property Details
                                    </p>
                                    <div className="-mt-5 ">
                                        <p className=" font-sans mt-4 text-5xl text-black font-bold w-16">12 </p>
                                    </div>
                                    <div className="text-gray-400 text-xs">
                                        <p className="text-black"> Water Connections - 2</p> <hr className='w-20 my-2' />
                                        <p className="text-black">Land Record - 3</p><hr className='w-20 my-2' />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex m-3'>

                        <div className="shadow-lg rounded-lg my-5 mx-2 px-4 py-6 w-1/4 bg-white relative hover:bg-teal-300 cursor-pointer ">
                            <img src={imgStandUser} alt="User Image" className='absolute h-30 w-20 -top-9 right-0' />
                            <p className="text-xl text-gray-400">                                Profile                            </p>
                            <p className='text-gray-700 font-RobotoSlab text-m'>Johnny Depp</p>
                            <p className='text-gray-700 font-RobotoSlab text-m'>9687574856</p>
                            <p className='text-black  rounded-l w-24 py-1 text-center text-sm mt-3 bg-sky-300'>View Profile</p>

                        </div>
                        <div className="shadow-lg rounded-lg my-5 mx-2 px-4 py-6 w-1/4 bg-blue-300 relative text-center hover:bg-sky-300 cursor-pointer">
                            <p className="text-sm text-gray-700 font-semibold border-b border-gray-200">
                                Project Reffered
                            </p>
                            <p className="my-6 text-2xl  text-black font-bold">
                                Trade
                            </p>
                        </div>
                        <div className="shadow-lg rounded-lg my-5 mx-2 px-4 py-6 w-1/4 bg-white relative hover:bg-teal-300 cursor-pointer ">
                            <p className='z-0'><img src={imgWaterTap} alt="Water Connection" className='absolute h-40 w-20 top-0 right-0' />    </p>                      
                            <p className="my-6 text-2xl  text-black font-bold z-40">
                                Water Connection
                            </p>
                        </div>
                        <div className="shadow-lg rounded-lg my-5 mx-2 px-4 py-6 w-1/4 bg-white relative text-center hover:bg-sky-300 cursor-pointer">
                            <p className="text-sm text-gray-700 font-semibold border-b border-gray-200">
                                Project Reffered
                            </p>
                            <p className="my-6 text-2xl  text-black font-bold">
                                Solid Waste
                            </p>
                        </div>
                        <div className="shadow-lg rounded-lg my-5 mx-2 px-4 py-6 w-1/4 bg-white relative text-center hover:bg-sky-300 cursor-pointer">
                            <p className="text-sm text-gray-700 font-semibold border-b border-gray-200">
                                Project Reffered
                            </p>
                            <p className="my-6 text-2xl  text-black font-bold">
                                Building Plan
                            </p>
                        </div>
                    </div>



                    <div className="shadow-lg rounded-lg my-5 mx-2 px-4 py-6 w-1/4 bg-white relative">
                        <div className='self-center'>
                            <img src={userimg} alt="User Image" className='w-14 rounded-full' />
                            <p className='text-gray-700 font-RobotoSlab'>Johnny Depp</p>
                            <p className='text-gray-700 font-RobotoSlab'>john@gmail.com</p>
                            <button className="py-1.5 px-4 bg-green-600 active:bg-green-800 font-medium text-white hover:bg-green-700 ">Profile </button>
                        </div>

                    </div>

                    <div className="flex">
                        <div className=" w-64 items-center rounded-lg shadow-lg mb-4 flex bg-indigo-500 p-4 text-white">
                            <div className="w-64">
                                <h4 className="mb-2 font-bold">Title</h4>
                                <p>Lorem ipsum dolor sit amet. </p>
                            </div>
                            <div className="w-12">
                                <div className="text-2xl p-2 bg-indigo-600 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='ml-5 mt-5 font-serif'>
                        <div className="shadow-lg rounded-lg w-1/4 h-80 p-4 bg-white relative">
                            <p className="font-RobotoSlab text-m text-center text-black font-semibold border-b border-gray-200">
                                Recent Activity
                            </p>
                            <div className="p-4 mt-4">
                                <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
                                    <div className="flex md:contents"> {/*Line  Start */}
                                        <div className="col-start-1 col-end-3 mr-6 md:mx-auto relative"> {/*Line */}
                                            <div className="h-full w-6 flex items-center justify-center"> {/*DOT */}
                                                <div className="h-full w-1 bg-green-600 pointer-events-none"></div>
                                            </div>
                                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-600 shadow text-center">
                                                <i className="text-white"><AiOutlineCheckCircle size={23} /></i> {/*Check Sign */}
                                            </div>
                                        </div> {/*Line  End */}
                                        <div className="bg-green-600 col-start-3 col-end-12 p-2 rounded-xl my-2 shadow-md"> {/* Box */}
                                            <p className="text-m">Applied For SAF</p>
                                            <p className="text-sm text-justify"> 22 July 2022</p>
                                        </div>
                                    </div>
                                    <div className="flex md:contents"> {/*Line  Start */}
                                        <div className="col-start-1 col-end-3 mr-6 md:mx-auto relative"> {/*Line */}
                                            <div className="h-full w-6 flex items-center justify-center"> {/*DOT */}
                                                <div className="h-full w-1 bg-red-500 pointer-events-none"></div>
                                            </div>
                                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                                                <i className="fas fa-check-circle text-white"><AiOutlineCloseCircle size={23} /></i> {/*Check Sign */}
                                            </div>
                                        </div> {/*Line  End */}
                                        <div className="bg-red-400 col-start-3 col-end-12 p-2 rounded-xl my-2 shadow-md">
                                            <p className="text-m">Made Water Payment</p>
                                            <p className="text-sm text-justify"> 22 July 2022</p>
                                        </div>
                                    </div>
                                    <div className="flex md:contents"> {/*Line  Start */}
                                        <div className="col-start-1 col-end-3 mr-6 md:mx-auto relative"> {/*Line */}
                                            <div className="h-full w-6 flex items-center justify-center"> {/*DOT */}
                                                <div className="h-full w-1 bg-red-500 pointer-events-none"></div>
                                            </div>
                                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                                                <i className="fas fa-check-circle text-white"><TbHourglassLow className='ml-1 mt-0.5' size={18} /></i> {/*Check Sign */}
                                            </div>
                                        </div> {/*Line  End */}
                                        <div className="bg-red-400 col-start-3 col-end-12 p-2 rounded-xl my-2 shadow-md">
                                            <p className="text-m">Out for Delivery</p>
                                            <p className="text-sm text-justify"> 22 July 2022</p>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Dashboard