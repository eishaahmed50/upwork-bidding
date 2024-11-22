import React, { useState } from 'react';
import Popup from "@components/popups/winningPu"

const templates = () => {

    const [isPopupOpened, setisPopupOpened] = useState(false)

    const WinningPuTapped = () => {
        setisPopupOpened(!isPopupOpened)
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

            <h1 className="text-[#555555] text-[3vw] font-semibold py-5 pl-6">Templates</h1>
            {/* drop down */}
            <div className="h-[3.5vw] w-[14vw] bg-[#fdfdfd] absolute top-[15vh] right-[4vw] rounded-xl border-1 border-[#ececec] flex items-center justify-evenly">
                <select
                    name=""
                    id=""
                    className="appearance-none cursor-pointer outline-none h-full w-full bg-[#fdfdfd] border rounded-lg pl-4 pr-10 font-medium text-[#878787] text-xl"
                    defaultValue="Select Category"
                >
                    <option value="">Select Category</option>
                    <option value="beginners">Beginners Graphic Designs</option>
                    <option value="professional">Professional Graphic Designs</option>
                </select>
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#878787] text-3xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" className="h-5 w-5">
                        <path fill="none" stroke="#878787" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 18L24 30L12 18" />
                    </svg>
                </span>
            </div>

            {/* table */}
            <div className="h-[60vh] w-[95%] bg-[#FDFAFA] ml-[2vw] mt-10 rounded-xl shadow-lg hide-scrollbar overflow-y-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th className="bg-[#002F53] sticky top-0 text-white py-7 px-4 font-normal text-3xl rounded-tl-xl rounded-bl-xl">
                                #
                            </th>
                            <th className="bg-[#002F53] sticky top-0 text-white py-7 px-4 font-normal text-2xl">
                                Title
                            </th>
                            <th className="bg-[#002F53] sticky top-0 text-white py-7 px-4 font-normal text-2xl rounded-tr-xl rounded-br-xl text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array(8).fill(null).map((_, index) => (
                            <tr key={index}>
                                <td className="py-3 px-4  text-lg border-none">{index + 1}</td>
                                <td className="py-3 px-4 text-lg border-none">Begginers Graphic Design</td>
                                <td className="py-3 px-4 text-center border-none flex justify-center cursor-pointer">
                                    <div className="bg-[#002F53] text-white p-2 rounded w-fit" onClick={WinningPuTapped}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 4.5c4.694 0 8.2 3.306 9.84 6.372a.866.866 0 010 .756C20.2 14.193 16.694 17.5 12 17.5s-8.2-3.307-9.84-6.372a.866.866 0 010-.756C3.8 7.806 7.306 4.5 12 4.5z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                                            />
                                        </svg>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



        </div>
    )
}
export default templates;