import React, { useState } from 'react';

const PopupComponent = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className='fixed top-0 left-0 h-screen w-screen bg-[#00000066] z-10'>
            <div className='h-[80vh] w-[90vw] bg-white rounded-xl mt-[10vh] ml-[5vw] flex justify-between items-center px-16'>
                <button onClick={onClose}
                    className='h-8 w-8 bg-[#FB4A4A] absolute top-[11.5vh] right-[6vw] rounded-full'>
                    <svg className='h-full w-full' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="white" d="M16.066 8.995a.75.75 0 1 0-1.06-1.061L12 10.939L8.995 7.934a.75.75 0 1 0-1.06 1.06L10.938 12l-3.005 3.005a.75.75 0 0 0 1.06 1.06L12 13.06l3.005 3.006a.75.75 0 0 0 1.06-1.06L13.062 12z" />
                    </svg>
                </button>

                {/* Icon */}
                <div className='relative h-[60%] w-[30%] flex flex-col items-center justify-center'>
                    <svg className='h-[22vh] w-[18vw]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="#72d73e" d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703a2.707 2.707 0 0 1-2.704 2.702m0-8.14c-2.539 0-4.51 1.649-5.31 4.366c-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.55 2.55 0 0 1-2.547 2.548a2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303c2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109c3 0 5.439-2.452 5.439-5.45c0-3-2.439-5.439-5.439-5.439" />
                    </svg>
                    <p className='text-5xl font-normal mt-2'>Upwork</p>
                </div>

                {/* Form */}
                <div className='h-[60%] w-[60%]'>
                    <h1 className='text-black font-medium text-5xl'>Connect Your Account</h1>
                    <div className='h-fit flex flex-col items-center mt-6'>
                        <input type="email"
                            placeholder='Enter Email'
                            className='h-[6vh] w-full mt-10 text-lg bg-slate-100 border border-gray-200 rounded-lg pl-4'
                        />
                        <div className="mt-10">
                            <input type="password"
                                placeholder="Enter Password"
                                className="h-[6vh] w-[50vw] text-lg bg-slate-100 border border-gray-200 rounded-lg pl-4"
                            />
                        </div>

                        <button className='h-[6vh] w-full mt-10 font-semibold text-xl text-white bg-[#002F53] rounded-lg flex items-center justify-center'>
                            <svg className='h-[2.5vh] w-[2vw]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                                <path fill="white" d="M231.4 44.34v.15l-58.2 191.94a15.88 15.88 0 0 1-14 11.51q-.69.06-1.38.06a15.86 15.86 0 0 1-14.42-9.15l-36.4-74.7a4 4 0 0 1 .77-4.58l57.92-57.92a8 8 0 0 0-11.31-11.31l-57.95 57.92a4 4 0 0 1-4.58.77l-74.77-36.39a16 16 0 0 1 2.49-29.8l191.94-58.2h.15a16 16 0 0 1 19.74 19.7" />
                            </svg>
                            Connect Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ConnectAcc = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(true);

    const closePopup = () => {
        setIsPopupOpen(false);
    };
    return (
        <>
            {isPopupOpen && <PopupComponent onClose={closePopup} />}
        </>
    );
};

export default ConnectAcc;
