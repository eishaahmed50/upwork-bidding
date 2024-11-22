import React, { useState } from 'react';
import Popup from "@components/popups/connectAcc"
import UpdatePopup from "@components/popups/updateAcc"

const accounts = () => {

    const [isPopupOpened, setisPopupOpened] = useState(false)
    const [isUpdatePopupOpened, setisUpdatePopupOpened] = useState(false)

    const ConnectAccTapped = () => {
        setisPopupOpened(!isPopupOpened)
    }

const UpdateAccTapped = () => {
    setisUpdatePopupOpened(!isUpdatePopupOpened)
}

    return (
        <div>

            <div className="">
                {
                    isPopupOpened ? (
                        <Popup />
                    ) : null
                }
            </div>

            <div className="">
                {
                    isUpdatePopupOpened ? (
                        <UpdatePopup />
                    ) : null
                }

            </div>

            <h1 className="text-[#555555] text-[3vw] font-semibold py-5 pl-6">Accounts</h1>

            <div className='h-[4vw] w-[19vw] bg-[#002F53] absolute top-[15vh] right-[4vw] rounded-xl flex content-center items-center justify-evenly cursor-pointer' onClick={ConnectAccTapped}>
                <svg className='h-8 w-8' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M5 13v-1h6V6h1v6h6v1h-6v6h-1v-6z" /></svg>
                <p className='text-white font-semibold text-xl -ml-3'>Connect New Account</p>
            </div>

            <div className='h-[70vh] w-full grid grid-cols-4 p-14 overflow-scroll'>

                <div className='h-[18vh] w-[15vw] bg-[#FDFAFA] ml-5 mb-2 rounded-lg'>
                    <div className='flex'>
                        <div className='flex h-6 w-[6vw] mt-2'>
                            <svg className='m-1' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#54ff5b" d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709" /></svg>
                            <p className='text-sm font-medium'>Connected</p>
                        </div>
                        <button className='flex mt-2 ml-12' onClick={UpdateAccTapped}>
                            <p className='text-[#959595] text-xs'>Click To Update</p>
                            <svg className='mt-' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="#959595" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0" /><path d="M2 12c1.6-4.097 5.336-7 10-7s8.4 2.903 10 7c-1.6 4.097-5.336 7-10 7s-8.4-2.903-10-7" /></g></svg>
                        </button>
                    </div>
                    <svg className='h-[8vh] w-[8vw] mx-auto mt-3' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#72d73e" d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703a2.707 2.707 0 0 1-2.704 2.702m0-8.14c-2.539 0-4.51 1.649-5.31 4.366c-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.55 2.55 0 0 1-2.547 2.548a2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303c2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109c3 0 5.439-2.452 5.439-5.45c0-3-2.439-5.439-5.439-5.439" /></svg>
                    <div className='text-center'>
                        <p className='text-[#555555] font-bold text-xl'>Account Title</p>
                    </div>
                </div>

                <div className='h-[18vh] w-[15vw] bg-[#FDFAFA] mb-2 rounded-lg'>
                    <div className='flex'>
                        <div className='flex h-6 w-[6vw] mt-2'>
                            <svg className='m-1' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#54ff5b" d="M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709" /></svg>
                            <p className='text-sm font-medium'>Connected</p>
                        </div>
                        <button className='flex mt-2 ml-12' onClick={UpdateAccTapped}>
                            <p className='text-[#959595] text-xs'>Click To Update</p>
                            <svg className='mt-' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="#959595" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0" /><path d="M2 12c1.6-4.097 5.336-7 10-7s8.4 2.903 10 7c-1.6 4.097-5.336 7-10 7s-8.4-2.903-10-7" /></g></svg>
                        </button>
                    </div>
                    <svg className='h-[8vh] w-[8vw] mx-auto mt-3' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#72d73e" d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703a2.707 2.707 0 0 1-2.704 2.702m0-8.14c-2.539 0-4.51 1.649-5.31 4.366c-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.55 2.55 0 0 1-2.547 2.548a2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303c2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109c3 0 5.439-2.452 5.439-5.45c0-3-2.439-5.439-5.439-5.439" /></svg>
                    <div className='text-center'>
                        <p className='text-[#555555] font-bold text-xl'>Account Title</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default accounts;