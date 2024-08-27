import React, { useEffect, useState } from 'react'

import { act } from 'react'

function Profile() {

 
    return (
        <>
           <div class="bg-white md:mx-auto rounded-lg shadow-xl w-full  overflow-hidden">
                        <div class="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                        <div class="px-5 py-2 flex flex-col gap-3 pb-6">
                            <div class="h-[90px] shadow-md w-[90px] rounded-full border-4 overflow-hidden -mt-14 border-white"><img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="w-full h-full rounded-full object-center object-cover" /></div>
                            <div class="">
                                <h3 class="text-xl text-slate-900 relative font-bold leading-6">Dadda Hicham</h3>
                                <p class="text-sm text-gray-600">@daddasoft</p>
                            </div>
                            <div class="flex gap-3 flex-wrap"><span class="rounded-sm bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">Developer</span><span class="rounded-sm bg-green-100 px-3 py-1 text-xs font-medium text-green-800">Design</span><span class="rounded-sm bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">Managements</span><span class="rounded-sm bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800">Projects</span></div>
                            <div class="flex gap-2"><button type="button" class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 active:bg-white hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300">Send Message</button><button type="button" class="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-blue-700 px-3 py-2 text-sm font-medium text-white transition hover:border-blue-300 hover:bg-blue-600 active:bg-blue-700 focus:blue-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300">Add to projects</button></div>
                            <h4 class="text-md font-medium leading-3">About</h4>
                            <p class="text-sm text-stone-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dolores aliquid sequi sunt iusto ipsum earum natus omnis asperiores architecto praesentium dignissimos pariatur, ipsa cum? Voluptate vero eius at voluptas?</p>
                            {/* <h4 class="text-md font-medium leading-3">Experiences</h4>
                            <div class="flex flex-col gap-3">
                                <div class="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-8 w-8 text-slate-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
                                </svg>
                                    <div class="leading-3">
                                        <p class=" text-sm font-bold text-slate-700">Ui Designer</p><span class="text-xs text-slate-600">5 years</span>
                                    </div>
                                    <p class="text-sm text-slate-500 self-start ml-auto">As Ui Designer on Front Page</p>
                                </div>
                                <div class="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-8 w-8 text-slate-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
                                </svg>
                                    <div class="leading-3">
                                        <p class=" text-sm font-bold text-slate-700">Ui Designer</p><span class="text-xs text-slate-600">5 years</span>
                                    </div>
                                    <p class="text-sm text-slate-500 self-start ml-auto">As Ui Designer on Front Page</p>
                                </div>
                                <div class="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="h-8 w-8 text-slate-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
                                </svg>
                                    <div class="leading-3">
                                        <p class=" text-sm font-bold text-slate-700">Ui Designer</p><span class="text-xs text-slate-600">5 years</span>
                                    </div>
                                    <p class="text-sm text-slate-500 self-start ml-auto">As Ui Designer on Front Page</p>
                                </div>
                            </div> */}
                        </div>



                        <section class="w-full  bg-gray-100 rounded shadow-xl   overflow-hidden">
                            <div class="flex flex-col">

                                <div
                                    class="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">

                                    style


                                    <div class="w-full my-auto py-6 flex flex-col justify-center gap-2">
                                        <div class="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                                            <div class="w-full">
                                                <dl class="text-gray-900  divide-y divide-gray-200 ">
                                                    <div class="flex flex-col ">
                                                        <dt class="mb-1 text-gray-900  md:text-lg">First Name</dt>
                                                        <input class="text-lg font-semibold bg-transparent  outline-none   border-none"></input>
                                                    </div>
                                                    <div class="flex flex-col py-2">
                                                        <dt class="mb-1 text-gray-900 md:text-lg ">Last Name</dt>
                                                        <input class="text-lg font-semibold bg-transparent  outline-none   border-none"></input>

                                                    </div>
                                                    <div class="flex flex-col py-2">
                                                        <dt class="mb-1 text-gray-900 md:text-lg ">Date Of Birth</dt>
                                                        <input class="text-lg font-semibold bg-transparent  outline-none   border-none"></input>
                                                    </div>
                                                    <div class="flex flex-col py-2  ">
                                                        <dt class="mb-1 text-gray-900  md:text-lg ">Gender</dt>
                                                        <input class="text-lg font-semibold bg-transparent  outline-none  border-b-2 border-b-gray-200"></input>
                                                    </div>
                                                </dl>
                                            </div>
                                            <div class="w-full mx-2">
                                                <dl class="text-gray-900 divide-y divide-gray-300  ">
                                                    <div class="flex flex-col ">
                                                        <dt class="mb-1 text-gray-900  md:text-lg ">Location</dt>
                                                        <input class="text-lg font-semibold bg-transparent  outline-none   border-none"></input>

                                                    </div>

                                                    <div class="flex flex-col py-2">
                                                        <dt class="mb-1 text-gray-900  md:text-lg ">Phone Number</dt>
                                                        <input class="text-lg font-semibold bg-transparent  outline-none   border-none"></input>
                                                    </div>
                                                    <div class="flex flex-col py-2 ">
                                                        <dt class="mb-1 text-gray-900 md:text-lg ">Email</dt>
                                                        <input class="text-lg font-semibold bg-transparent  outline-none   border-none"></input>
                                                    </div>

                                                    <div class="flex flex-col py-2">
                                                        <dt class="mb-1 text-gray-900  md:text-lg ">Website</dt>
                                                        <input class="text-lg font-semibold bg-transparent  outline-none   border-b-2 border-b-gray-200"></input>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>

                                        {/* <div class="my-10 lg:w-[70%] md:h-[14rem] xs:w-full xs:h-[10rem]">

                                        <h1
                                            class="w-fit font-serif my-4 pb-1 pr-2 rounded-b-md border-b-4 border-blue-600 dark:border-b-4 dark:border-yellow-600 dark:text-white lg:text-4xl md:text-3xl xs:text-xl">
                                            My Location</h1>


                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02028974562!2d38.613328040215286!3d8.963479542403238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1710567234587!5m2!1sen!2set"
                                            class="rounded-lg w-full h-full" style={{ border: '0' }} allowfullscreen="" loading="lazy"
                                            referrerpolicy="no-referrer-when-downgrade"></iframe>

                                    </div> */}
                                    </div>

                                    <div
                                        class="fixed right-2 bottom-20 flex flex-col rounded-sm bg-gray-200 text-gray-500 dark:bg-gray-200/80 dark:text-gray-700 hover:text-gray-600 hover:dark:text-gray-400">
                                        <a href="https://www.linkedin.com/in/samuel-abera-6593a2209/">
                                            <div class="p-2 hover:text-primary hover:dark:text-primary">
                                                <svg class="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-blue-500" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd"
                                                        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                                                        clip-rule="evenodd" />
                                                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                                                </svg>

                                            </div>
                                        </a>
                                        <a href="https://twitter.com/Samuel7Abera7">
                                            <div class="p-2 hover:text-primary hover:dark:text-primary">
                                                <svg class="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-gray-900" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                                                </svg>

                                            </div>
                                        </a>    
                                        <a href="">
                                            <div class="p-2 hover:text-blue-500 hover:dark:text-blue-500">
                                                <svg class="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-blue-700" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd"
                                                        d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                        </a>
                                        <a href="https://www.youtube.com/@silentcoder7">
                                            <div class="p-2 hover:text-primary hover:dark:text-primary">
                                                <svg class="lg:w-6 lg:h-6 xs:w-4 xs:h-4 text-red-600" aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd"
                                                        d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>


        </>
    )
}

    export default Profile