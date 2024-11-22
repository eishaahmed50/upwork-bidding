import React from 'react';

const dashboard = () => {
    return (
        <div>
            <h1 className="text-[#555555] text-[3vw] font-semibold py-5 pl-6">Dashboard</h1>
            <div className='h-[70vh] w-fit ml-[3vw] -mt-2 grid grid-cols-4 gap-[4vh] p-4 hide-scrollbar overflow-y-scroll'>
                <a href="" className='h-[22vh] w-[14vw] bg-[#FDFAFA] ml-5 mb-2 rounded-lg relative'>
                    <svg className='h-12 w-12 ml-4 mt-2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#555555" d="m3 14l.5.07L8.07 9.5a1.95 1.95 0 0 1 .52-1.91c.78-.79 2.04-.79 2.82 0c.53.52.7 1.26.52 1.91l2.57 2.57l.5-.07c.18 0 .35 0 .5.07l3.57-3.57C19 8.35 19 8.18 19 8a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2c-.18 0-.35 0-.5-.07l-3.57 3.57c.07.15.07.32.07.5a2 2 0 0 1-2 2a2 2 0 0 1-2-2l.07-.5l-2.57-2.57c-.32.07-.68.07-1 0L4.93 15.5L5 16a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2" /></svg>
                    <h1 className='text-[#FFC107] font-bold text-8xl text-center'>3</h1>
                    <p className='text-[#4CAF50] absolute bottom-[3.5vh] font-semibold text-lg ml-6 mt-1'>Active</p>
                    <p className='text-[#555555] absolute bottom-[1.5vh] font-semibold text-lg ml-6'>Campaigns</p>
                </a>
                <a href="" className='h-[22vh] w-[14vw] bg-[#FDFAFA] ml-5 mb-2 rounded-lg relative'>
                    <svg className='h-12 w-12 ml-4 mt-2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#555555" d="M21.66 4.25a1 1 0 0 0-1.41.09l-1.87 2.15l-.63-.71a1 1 0 0 0-1.5 1.33l1.39 1.56a1 1 0 0 0 .75.33a1 1 0 0 0 .74-.34l2.61-3a1 1 0 0 0-.08-1.41M10 11a4 4 0 1 0-4-4a4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2m0 8a7 7 0 0 0-7 7a1 1 0 0 0 2 0a5 5 0 0 1 10 0a1 1 0 0 0 2 0a7 7 0 0 0-7-7" /></svg>
                    <h1 className='text-[#FFC107] font-bold text-8xl text-center'>10</h1>
                    <p className='text-[#4CAF50] absolute bottom-[3.5vh] font-semibold text-lg ml-6 mt-1'>Active</p>
                    <p className='text-[#555555] absolute bottom-[1.5vh] font-semibold text-lg ml-6'>Accounts</p>
                </a>
                <a href="" className='h-[22vh] w-[14vw] bg-[#FDFAFA] ml-5 mb-2 rounded-lg relative'>
                    <svg className='h-12 w-12 ml-4 mt-2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#555555" d="M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" /></svg>
                    <h1 className='text-[#FFC107] font-bold text-8xl text-center'>12</h1>
                    <p className='text-[#4CAF50] absolute bottom-[3.5vh] font-semibold text-lg ml-6 mt-1'>Message</p>
                    <p className='text-[#555555] absolute bottom-[1.5vh] font-semibold text-lg ml-6'>Templates</p>
                </a>
                <a href="" className='h-[22vh] w-[14vw] bg-[#FDFAFA] ml-5 mb-2 rounded-lg relative'>
                    <svg className='h-12 w-12 ml-4 mt-2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#555555" d="M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" /></svg>
                    <h1 className='text-[#FFC107] font-bold text-8xl text-center'>12</h1>
                    <p className='text-[#4CAF50] absolute bottom-[3.5vh] font-semibold text-lg ml-6 mt-1'>Message</p>
                    <p className='text-[#555555] absolute bottom-[1.5vh] font-semibold text-lg ml-6'>Templates</p>
                </a>
                <a href="" className='h-[22vh] w-[14vw] bg-[#FDFAFA] ml-5 mb-2 rounded-lg relative'>
                    <svg className='h-12 w-12 ml-4 mt-2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#555555" d="M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" /></svg>
                    <h1 className='text-[#FFC107] font-bold text-8xl text-center'>12</h1>
                    <p className='text-[#4CAF50] absolute bottom-[3.5vh] font-semibold text-lg ml-6 mt-1'>Message</p>
                    <p className='text-[#555555] absolute bottom-[1.5vh] font-semibold text-lg ml-6'>Templates</p>
                </a>
                <a href="" className='h-[22vh] w-[14vw] bg-[#FDFAFA] ml-5 mb-2 rounded-lg relative'>
                    <svg className='h-12 w-12 ml-4 mt-2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#555555" d="m3 14l.5.07L8.07 9.5a1.95 1.95 0 0 1 .52-1.91c.78-.79 2.04-.79 2.82 0c.53.52.7 1.26.52 1.91l2.57 2.57l.5-.07c.18 0 .35 0 .5.07l3.57-3.57C19 8.35 19 8.18 19 8a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2c-.18 0-.35 0-.5-.07l-3.57 3.57c.07.15.07.32.07.5a2 2 0 0 1-2 2a2 2 0 0 1-2-2l.07-.5l-2.57-2.57c-.32.07-.68.07-1 0L4.93 15.5L5 16a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2" /></svg>
                    <h1 className='text-[#FFC107] font-bold text-8xl text-center'>3</h1>
                    <p className='text-[#4CAF50] absolute bottom-[3.5vh] font-semibold text-lg ml-6 mt-1'>Active</p>
                    <p className='text-[#555555] absolute bottom-[1.5vh] font-semibold text-lg ml-6'>Campaigns</p>
                </a>
                <a href="" className='h-[22vh] w-[14vw] bg-[#FDFAFA] ml-5 mb-2 rounded-lg relative'>
                    <svg className='h-12 w-12 ml-4 mt-2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#555555" d="M21.66 4.25a1 1 0 0 0-1.41.09l-1.87 2.15l-.63-.71a1 1 0 0 0-1.5 1.33l1.39 1.56a1 1 0 0 0 .75.33a1 1 0 0 0 .74-.34l2.61-3a1 1 0 0 0-.08-1.41M10 11a4 4 0 1 0-4-4a4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2m0 8a7 7 0 0 0-7 7a1 1 0 0 0 2 0a5 5 0 0 1 10 0a1 1 0 0 0 2 0a7 7 0 0 0-7-7" /></svg>
                    <h1 className='text-[#FFC107] font-bold text-8xl text-center'>10</h1>
                    <p className='text-[#4CAF50] absolute bottom-[3.5vh] font-semibold text-lg ml-6 mt-1'>Active</p>
                    <p className='text-[#555555] absolute bottom-[1.5vh] font-semibold text-lg ml-6'>Accounts</p>
                </a>
                <a href="" className='h-[22vh] w-[14vw] bg-[#FDFAFA] ml-5 mb-2 rounded-lg relative'>
                    <svg className='h-12 w-12 ml-4 mt-2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#555555" d="M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" /></svg>
                    <h1 className='text-[#FFC107] font-bold text-8xl text-center'>12</h1>
                    <p className='text-[#4CAF50] absolute bottom-[3.5vh] font-semibold text-lg ml-6 mt-1'>Message</p>
                    <p className='text-[#555555] absolute bottom-[1.5vh] font-semibold text-lg ml-6'>Templates</p>
                </a>
                <a href="" className='h-[22vh] w-[14vw] bg-[#FDFAFA] ml-5 mb-2 rounded-lg relative'>
                    <svg className='h-12 w-12 ml-4 mt-2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#555555" d="M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" /></svg>
                    <h1 className='text-[#FFC107] font-bold text-8xl text-center'>12</h1>
                    <p className='text-[#4CAF50] absolute bottom-[3.5vh] font-semibold text-lg ml-6 mt-1'>Message</p>
                    <p className='text-[#555555] absolute bottom-[1.5vh] font-semibold text-lg ml-6'>Templates</p>
                </a>
                <a href="" className='h-[22vh] w-[14vw] bg-[#FDFAFA] ml-5 mb-2 rounded-lg relative'>
                    <svg className='h-12 w-12 ml-4 mt-2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#555555" d="M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" /></svg>
                    <h1 className='text-[#FFC107] font-bold text-8xl text-center'>12</h1>
                    <p className='text-[#4CAF50] absolute bottom-[3.5vh] font-semibold text-lg ml-6 mt-1'>Message</p>
                    <p className='text-[#555555] absolute bottom-[1.5vh] font-semibold text-lg ml-6'>Templates</p>
                </a>
                <a href="" className='h-[22vh] w-[14vw] bg-[#FDFAFA] ml-5 mb-2 rounded-lg relative'>
                    <svg className='h-12 w-12 ml-4 mt-2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#555555" d="m3 14l.5.07L8.07 9.5a1.95 1.95 0 0 1 .52-1.91c.78-.79 2.04-.79 2.82 0c.53.52.7 1.26.52 1.91l2.57 2.57l.5-.07c.18 0 .35 0 .5.07l3.57-3.57C19 8.35 19 8.18 19 8a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2c-.18 0-.35 0-.5-.07l-3.57 3.57c.07.15.07.32.07.5a2 2 0 0 1-2 2a2 2 0 0 1-2-2l.07-.5l-2.57-2.57c-.32.07-.68.07-1 0L4.93 15.5L5 16a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2" /></svg>
                    <h1 className='text-[#FFC107] font-bold text-8xl text-center'>3</h1>
                    <p className='text-[#4CAF50] absolute bottom-[3.5vh] font-semibold text-lg ml-6 mt-1'>Active</p>
                    <p className='text-[#555555] absolute bottom-[1.5vh] font-semibold text-lg ml-6'>Campaigns</p>
                </a>
                <a href="" className='h-[22vh] w-[14vw] bg-[#FDFAFA] ml-5 mb-2 rounded-lg relative'>
                    <svg className='h-12 w-12 ml-4 mt-2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#555555" d="M21.66 4.25a1 1 0 0 0-1.41.09l-1.87 2.15l-.63-.71a1 1 0 0 0-1.5 1.33l1.39 1.56a1 1 0 0 0 .75.33a1 1 0 0 0 .74-.34l2.61-3a1 1 0 0 0-.08-1.41M10 11a4 4 0 1 0-4-4a4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2m0 8a7 7 0 0 0-7 7a1 1 0 0 0 2 0a5 5 0 0 1 10 0a1 1 0 0 0 2 0a7 7 0 0 0-7-7" /></svg>
                    <h1 className='text-[#FFC107] font-bold text-8xl text-center'>10</h1>
                    <p className='text-[#4CAF50] absolute bottom-[3.5vh] font-semibold text-lg ml-6 mt-1'>Active</p>
                    <p className='text-[#555555] absolute bottom-[1.5vh] font-semibold text-lg ml-6'>Accounts</p>
                </a>
                <a href="" className='h-[22vh] w-[14vw] bg-[#FDFAFA] ml-5 mb-2 rounded-lg relative'>
                    <svg className='h-12 w-12 ml-4 mt-2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#555555" d="M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" /></svg>
                    <h1 className='text-[#FFC107] font-bold text-8xl text-center'>12</h1>
                    <p className='text-[#4CAF50] absolute bottom-[3.5vh] font-semibold text-lg ml-6 mt-1'>Message</p>
                    <p className='text-[#555555] absolute bottom-[1.5vh] font-semibold text-lg ml-6'>Templates</p>
                </a>
                <a href="" className='h-[22vh] w-[14vw] bg-[#FDFAFA] ml-5 mb-2 rounded-lg relative'>
                    <svg className='h-12 w-12 ml-4 mt-2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#555555" d="M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" /></svg>
                    <h1 className='text-[#FFC107] font-bold text-8xl text-center'>12</h1>
                    <p className='text-[#4CAF50] absolute bottom-[3.5vh] font-semibold text-lg ml-6 mt-1'>Message</p>
                    <p className='text-[#555555] absolute bottom-[1.5vh] font-semibold text-lg ml-6'>Templates</p>
                </a>
                <a href="" className='h-[22vh] w-[14vw] bg-[#FDFAFA] ml-5 mb-2 rounded-lg relative'>
                    <svg className='h-12 w-12 ml-4 mt-2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#555555" d="M4 4h16v12H5.17L4 17.17zm0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm2 10h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" /></svg>
                    <h1 className='text-[#FFC107] font-bold text-8xl text-center'>12</h1>
                    <p className='text-[#4CAF50] absolute bottom-[3.5vh] font-semibold text-lg ml-6 mt-1'>Message</p>
                    <p className='text-[#555555] absolute bottom-[1.5vh] font-semibold text-lg ml-6'>Templates</p>
                </a>
            </div>
        </div>
    )
}
export default dashboard;