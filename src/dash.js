import Navbar from './App';
import React, { useRef } from 'react';
import { FaHome, FaUser, FaEnvelope,FaBars } from 'react-icons/fa';
import { MdAttachMoney,MdOutlineSettings } from "react-icons/md";
import { FcSalesPerformance } from "react-icons/fc";
import { GiCash } from "react-icons/gi";
import { GrTransaction ,GrHistory  } from "react-icons/gr";


function dash() {
    let brand = " PATAN COLLEGE";
    let user = {
        "username" : "ramkumar mahato",
        "email":"ramshree990@gmail.com"
    }
    
    function closemodel(){
        let bar = document.getElementById('sidebar');
        bar.classList.toggle('hidden')
    }
    return (
        <div class="bg-slate-200 flex h-screen">
            <aside id='sidebar' class="fixed z-50 md:relative ">
                
                <label class="peer-checked:rounded-full peer-checked:p-2 peer-checked:right-6 peer-checked:bg-gray-600 peer-checked:text-white absolute top-8 z-20 mx-4 cursor-pointer md:hidden" for="sidebar-open">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <nav aria-label="Sidebar Navigation" class="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-gray-700 text-white transition-all md:h-screen md:w-64 lg:w-72">
                    <div class="bg-slate-800 py-4 pl-10 ">
                        <span class="">
                            <span class="mr-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-600 align-bottom text-2xl font-bold">P</span>
                            <span class="text-xl">{brand}</span>
                        </span>
                    </div>
                    <ul class="mt-8 space-y-3 md:mt-20">
                        <li class="relative">
                            <button class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-white focus:outline-none">
                                <span class=" flex items-center justify-center gap-2"><FaHome size={32}/>Overview</span>
                            </button>
                        </li>
                        <li class="relative">
                            <button class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 font-semibold focus:outline-none">
                            <span class="flex items-center justify-center gap-2"> <FcSalesPerformance size={32} /> Sales</span>
                            </button>
                            
                        </li>
                        <li class="relative">
                            <button class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
                            <span class="flex items-center justify-center gap-2"> <GiCash size={32} /> Purchase</span>
                            </button>
                        </li>
                        <li class="relative">
                            <button class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
                            <span class="flex items-center justify-center gap-2"> <GrTransaction size={32} /> Transaction</span>
                            </button>
                        </li>
                        <li class="relative">
                            <button class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
                            <span class="flex items-center justify-center gap-2"> <GrHistory  size={32} /> history</span>
                            </button>
                        </li>
                        <li class="relative">
                            <button class="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 text-gray-300 focus:outline-none">
                            <span class="flex items-center justify-center gap-2"> <MdOutlineSettings size={32} /> Settings</span>
                            </button>
                        </li>
                    </ul>

                    <div class="my-6 mt-auto  flex cursor-pointer items-start  justify-center">
                        <div>
                        < FaUser size={42}/>
                        </div>
                        <div class="ml-3">
                            
                            <p class="font-medium">{user.username}</p>
                            <p class="text-sm text-gray-300">{user.email}</p>
                        </div>
                    </div>
                </nav>
            </aside>


            <div class="flex h-full w-full flex-col">
                <header class="relative flex flex-col items-center bg-white px-4 py-4 shadow sm:flex-row md:h-20">
                <div class="w-full flex items-center justify-between">
                <button id='clodebtn' class="w-auto " onClick={closemodel}><FaBars /></button>
                    <span> {brand}</span>
                    <span class="flex gap-2 items-center justify-start">< FaUser size={20}/> {user.username}</span>
                </div>
                </header>

                <div class="h-full overflow-hidden pl-10">
                    <main id="dashboard-main" class="h-[calc(100vh-10rem)] overflow-auto px-4 py-10">

                        <h1 class="text-2xl font-black text-gray-800">Good Morning! {user.username}</h1>
                        <p class="mb-6 text-gray-600">Here's an overview of your monthly transactions.</p>
                        <div class="flex flex-wrap gap-x-4 gap-y-8">
                  
                            <div class="h-auto w-full rounded-xl bg-white p-10 shadow-md">
                            
                            </div>
                           
                        </div>
                    </main>
                </div>

            </div>
        </div>

    );
}

export default dash;