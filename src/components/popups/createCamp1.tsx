import { useState } from 'react';
import React from 'react';



const createCamp1 = ({ onClose }: { onClose: () => void }) => {
    

    const [popupindex, setpopupindex] = useState(0);
    const [value, setValue] = useState(1000);
    
    const [popupindex1, setpopupindex1] = useState(0);
    const [value1, setValue1] = useState(100);

    const [popupindex2, setpopupindex2] = useState(0);
    const [value2, setValue2] = useState(100);

    const [popupindex3, setpopupindex3] = useState(0);
    const [value3, setValue3] = useState(20);

    const nextHandler = (index: number) => {
        setpopupindex(index)
    }

    

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value));
    };
    const handleSlider1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue1(Number(event.target.value));
    };
    const handleSlider2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue2(Number(event.target.value));
    };
    const handleSlider3Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue3(Number(event.target.value));
    };
    return (

        <div className='fixed top-0 left-0 h-screen w-screen bg-[#00000066] z-10'>
            <div className='h-[80vh] w-[90vw] bg-white rounded-xl mt-[10vh] ml-[5vw] flex justify-between items-center px-16'>

                {/* popup one  */}
                <div className={`h-full w-full ${(popupindex == 0) ? '' : 'hidden'}`}>
                    <button onClick={onClose} className='h-8 w-8 bg-[#FB4A4A] absolute top-[11.5vh] right-[6vw] rounded-full'>
                        <svg className='h-full w-full' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M16.066 8.995a.75.75 0 1 0-1.06-1.061L12 10.939L8.995 7.934a.75.75 0 1 0-1.06 1.06L10.938 12l-3.005 3.005a.75.75 0 0 0 1.06 1.06L12 13.06l3.005 3.006a.75.75 0 0 0 1.06-1.06L13.062 12z" /></svg>
                    </button>
                    <div className='h-[88%] w-full relative pt-20'>
                        <h1 className='font-bold text-5xl m-6'>Create New Campaign</h1>
                        <p className='font-medium text-2xl ml-8'>Step 1-Account Details</p>
                        <input type="text"
                            placeholder="Enter Campaign Title"
                            className="h-[6vh] w-[45vw] bg-gray-50 border border-gray-200 rounded-lg pl-4 mt-[4vh] ml-3 font-medium text-[#878787]" />
                        <div className="relative w-[45vw] mt-[4vh] ml-3">
                           {/* drop down */}
                            <select
                                className="h-[6vh] w-full bg-gray-50 border border-gray-200 rounded-lg pl-4 pr-10 font-medium text-[#878787] appearance-none  cursor-pointer"
                                defaultValue="Freelance Account"
                            >
                                <option value="Freelance Account">Freelance Account</option>
                                <option value="Business Account">Business Account</option>
                                <option value="Personal Account">Personal Account</option>
                            </select>
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-[#878787] text-3xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="none" stroke="#878787" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 18L24 30L12 18" /></svg>
                            </span>
                        </div>
                        <input type="text"
                            placeholder="Enter Search Phase...Separates By Coma"
                            className="h-[6vh] w-[45vw] bg-gray-50 border border-gray-200 rounded-lg pl-4 mt-[4vh] ml-3 font-medium text-[#878787]" />
                        <p className='text-[#878787] font-medium text-xl mt-[4vh] ml-3'>Exatch Match</p>
                        {/* toggle button  */}
                        <div>
                            <label className="relative inline-flex items-center cursor-pointer pl-4 mt-6">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-[5.5vw] h-[3.5vh] bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-[#FFC105] relative transition-colors">
                                    <span className="absolute left-0 bg-[#FFC105] w-[2.5vw] h-[3.5vh] rounded-full transition-transform peer-checked:translate-x-8"></span>
                                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm font-medium peer-checked:text-white">Off</span>
                                </div>
                            </label>
                        </div>
                        {/* next button  */}
                        <div className='bg-[#002F53] h-[4vh] w-[5vw] rounded-lg absolute bottom-0 right-0 cursor-pointer'>
                            <p className=' text-white text-lg text-center p-1.5' onClick={() => nextHandler(1)}>Next</p>
                        </div>
                    </div>
                </div>

                {/* popup two  */}
                <div className={`h-full w-full ${(popupindex == 1) ? '' : 'hidden'}`}>
                    <button onClick={onClose} className='h-8 w-8 bg-[#FB4A4A] absolute top-[11.5vh] right-[6vw] rounded-full'>
                        <svg className='h-full w-full' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M16.066 8.995a.75.75 0 1 0-1.06-1.061L12 10.939L8.995 7.934a.75.75 0 1 0-1.06 1.06L10.938 12l-3.005 3.005a.75.75 0 0 0 1.06 1.06L12 13.06l3.005 3.006a.75.75 0 0 0 1.06-1.06L13.062 12z" /></svg>
                    </button>
                    <div className='h-[88%] w-full relative pt-20'>
                        <h1 className='font-bold text-5xl m-6'>Create New Campaign</h1>
                        <p className='font-medium text-2xl ml-8'>Step 2-Project Search Criteria</p>
                        <input type="text"
                            placeholder="Enter Campaign Title"
                            className="h-[6vh] w-[45vw] bg-gray-50 border border-gray-200 rounded-lg pl-4 mt-[4vh] ml-3 font-medium text-[#878787]" />

                        <div className='flex flex-row text-[#878787] h-[6vh] w-[45vw] text-lg mt-4'>
                            <p className='pl-[2vw] font-medium'>Minimun Fixed Bid Amount</p>
                            <p className='pl-[12vw] font-medium'>Minimum Hourly Rate</p>
                        </div>
                        {/* toggle button  */}
                        <div className='flex flex-row'>
                            <div>
                                <label className="relative inline-flex items-center cursor-pointer pl-[2vw]">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-[5.5vw] h-[3.5vh] bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-[#FFC105] relative transition-colors">
                                        <span className="absolute left-0 bg-[#FFC105] w-[2.5vw] h-[3.5vh] rounded-full transition-transform peer-checked:translate-x-8"></span>
                                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm font-medium peer-checked:text-white">Off</span>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label className="relative inline-flex items-center cursor-pointer pl-[19vw]">
                                    <input type="checkbox" className="sr-only peer" />
                                    <div className="w-[5.5vw] h-[3.5vh] bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-[#FFC105] relative transition-colors">
                                        <span className="absolute left-0 bg-[#FFC105] w-[2.5vw] h-[3.5vh] rounded-full transition-transform peer-checked:translate-x-8"></span>
                                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm font-medium peer-checked:text-white">Off</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        {/* sliders */}
                        <div className='grid grid-cols-2 w-[50vw]'>

                            {/* slider one  */}
                            <div className="slidecontainer w-[20vw] px-4 relative mt-[2vh]">
                                <div
                                    className="absolute text-center text-gray-700"
                                    style={{
                                        left: `calc(${(value / 1200) * 100}% - 16px)`, // Adjust -16px for centering
                                        bottom: '24px', // Position above the slider
                                    }}
                                >
                                    {value}
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="1200"
                                    value={value}
                                    onChange={handleSliderChange}
                                    className="w-full h-2 bg-gray-200 rounded appearance-none focus:outline-none focus:ring-0 focus:shadow-none"
                                />
                            </div>

                            {/* slider two  */}
                            <div className="slidecontainer w-[20vw] px-4 relative mt-[2vh]">
                                <div
                                    className="absolute text-center text-gray-700"
                                    style={{
                                        left: `calc(${(value1 / 100) * 100}% - 16px)`, // Adjust -16px for centering
                                        bottom: '24px', // Position above the slider
                                    }}
                                >
                                    {value1}
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={value1}
                                    onChange={handleSlider1Change}
                                    className="w-full h-2 bg-gray-200 rounded appearance-none focus:outline-none focus:ring-0 focus:shadow-none"
                                />
                            </div>

                            {/* slider three  */}
                            <div className="slidecontainer w-[20vw] relative mt-[3.5vh]">
                                <p className='text-lg font-medium text-[#878787] pb-[2.5vh]'>Job Posted(Days ago)</p>
                                <div
                                    className="absolute text-center text-gray-700"
                                    style={{
                                        left: `calc(${(value2 / 100) * 10}% - 16px)`, // Adjust -16px for centering
                                        bottom: '24px', // Position above the slider
                                    }}
                                >
                                    {value2}
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={value2}
                                    onChange={handleSlider2Change}
                                    className="w-full h-2 bg-gray-200 rounded appearance-none focus:outline-none focus:ring-0 focus:shadow-none"
                                />
                            </div>

                            {/* slider four  */}
                            <div className="slidecontainer w-[20vw] relative mt-[3.5vh]">
                                <p className='text-lg font-medium text-[#878787] pb-[2.5vh]'>Maximum Daily Bids</p>
                                <div
                                    className="absolute text-center text-gray-700"
                                    style={{
                                        left: `calc(${(value3 / 20) * 100}% - 16px)`, // Adjust -16px for centering
                                        bottom: '24px', // Position above the slider
                                    }}
                                >
                                    {value3}
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="20"
                                    value={value3}
                                    onChange={handleSlider3Change}
                                    className="w-full h-2 bg-gray-200 rounded appearance-none focus:outline-none focus:ring-0 focus:shadow-none"
                                />
                            </div>

                        </div>


                        {/* next button  */}
                        <div className='bg-[#002F53] h-[4vh] w-[5vw] rounded-lg absolute bottom-0 right-0 cursor-pointer'>
                            <p className=' text-white text-lg text-center p-1.5' onClick={() => nextHandler(2)}>Next</p>
                        </div>
                    </div>
                </div>


                {/* popup three  */}
                <div className={`h-full w-full ${(popupindex == 2) ? '' : 'hidden'}`}>
                    <button  onClick={onClose} className='h-8 w-8 bg-[#FB4A4A] absolute top-[11.5vh] right-[6vw] rounded-full'>
                        <svg className='h-full w-full' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M16.066 8.995a.75.75 0 1 0-1.06-1.061L12 10.939L8.995 7.934a.75.75 0 1 0-1.06 1.06L10.938 12l-3.005 3.005a.75.75 0 0 0 1.06 1.06L12 13.06l3.005 3.006a.75.75 0 0 0 1.06-1.06L13.062 12z" /></svg>
                    </button>
                    <div className='h-[88%] w-full relative pt-20'>
                        <h1 className='font-bold text-5xl m-6'>Create New Campaign</h1>
                        <p className='font-medium text-2xl ml-8'>Step 3-Write Proposal</p>
                        <div className='grid grid-cols-3 h-[5vh] w-[30vw] mt-8 ml-10'>
                            <div className='h-[5vh] w-[8vw] bg-[#002f53] rounded-lg text-white text-xl text-center p-3'>Greeting</div>
                            <div className='h-[5vh] w-[8vw] bg-[#002f53] rounded-lg text-white text-xl text-center p-3'>Full Name</div>
                            <div className='h-[5vh] w-[8vw] bg-[#002f53] rounded-lg text-white text-xl text-center p-3'>First Name</div>
                        </div>
                        <input type="text"
                            placeholder="Write Proposal..."
                            className="h-[15vh] w-full bg-gray-50 border border-gray-200 rounded-lg pl-4 mt-[2vh] ml-3 font-medium text-lg text-[#878787]" />
                    </div>
                    {/* save button  */}
                    <div className='absolute bottom-[18vh] right-[6vw] mb-4 mr-4 cursor-pointer flex items-center bg-[#002F53] h-[4vh] w-[9vw] rounded-lg'>
                        <svg className='h-[2vh] w-[1vw] ml-3' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                            <path fill="white" d="M231.4 44.34v.15l-58.2 191.94a15.88 15.88 0 0 1-14 11.51q-.69.06-1.38.06a15.86 15.86 0 0 1-14.42-9.15l-36.4-74.7a4 4 0 0 1 .77-4.58l57.92-57.92a8 8 0 0 0-11.31-11.31l-57.95 57.92a4 4 0 0 1-4.58.77l-74.77-36.39a16 16 0 0 1 2.49-29.8l191.94-58.2h.15a16 16 0 0 1 19.74 19.7" />
                        </svg>
                        <p className='text-white text-center p-1.5' onClick={onClose}>Save and Run</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default createCamp1;