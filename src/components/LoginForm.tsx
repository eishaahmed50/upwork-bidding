import React, { useState } from 'react';

const LoginForm = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div>
            <h1 className='text-[3vw] font-bold mt-[12vh] ml-[8vw]'>Log in to your account</h1>
            <div className='h-screen mt-[12vh] mx-[8vw] flex flex-col place-items-center'>
                <input type="email"
                    placeholder='  Enter Email '
                    className='h-[6vh] w-[40vw] mr-[12vw] mt-[2vh] border bg-slate-100 border-gray-200 rounded-lg'
                />
                <div className="relative mt-10 mr-[12vw]">
                    <input
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder="Enter Password"
                        className="h-[6vh] w-[40vw] bg-slate-100 border border-gray-200 rounded-lg pl-4"
                    />
                    <span
                        className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
                        onClick={togglePasswordVisibility}
                    >
                        {isPasswordVisible ? (
                            <svg className='h-[2.5vh] w-[2vw]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                                <g fill="currentColor">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0" />
                                </g>
                            </svg>
                        ) : (
                            <svg className='h-[3vh] w-[2vw]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="m3.282 21.782l4.278-4.278M21.782 3.282L17.673 7.39m-3.363 3.363a2.64 2.64 0 0 0-1.063-1.063a2.625 2.625 0 1 0-2.494 4.62m3.557-3.557l-3.557 3.557m3.557-3.557l3.363-3.363m-6.92 6.92L7.56 17.504M17.673 7.39c-.38-.319-.791-.621-1.232-.894C15.2 5.726 13.717 5.19 12 5.19c-4.956 0-7.948 4.459-8.91 6.16c-.11.196-.165.293-.197.446a1.2 1.2 0 0 0 0 .408c.032.152.088.25.198.445c.51.903 1.593 2.582 3.237 3.96c.38.319.791.621 1.232.895m12.18-7.925c.528.694.919 1.328 1.17 1.773c.11.194.165.292.197.444c.023.112.023.296 0 .408c-.032.152-.087.25-.197.444c-.96 1.702-3.95 6.162-8.91 6.162q-.714-.002-1.374-.117"
                                />
                            </svg>
                        )}
                    </span>
                </div>
                
                <button className="h-[6vh] w-[40vw] mr-[12vw] mt-5 font-semibold text-white bg-[#002F53] rounded-lg flex items-center justify-center">
                    <svg className='text-xl mr-2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="white" d="M231.4 44.34v.15l-58.2 191.94a15.88 15.88 0 0 1-14 11.51q-.69.06-1.38.06a15.86 15.86 0 0 1-14.42-9.15l-36.4-74.7a4 4 0 0 1 .77-4.58l57.92-57.92a8 8 0 0 0-11.31-11.31l-57.95 57.92a4 4 0 0 1-4.58.77l-74.77-36.39a16 16 0 0 1 2.49-29.8l191.94-58.2h.15a16 16 0 0 1 19.74 19.7" /></svg>
                    Log In
                </button>
                <p className='mt-5 mr-[37vw] text-slate-500 font-semibold'>
                    Don't have an account? <a href="/signup" className='text-[#002F53] hover:underline'>Sign up</a>
                </p>
            </div>
        </div>
    )
}
export default LoginForm;