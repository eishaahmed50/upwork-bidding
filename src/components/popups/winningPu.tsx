import React, { useState } from 'react';


const copyBtn = () => {
    const copyText = document.getElementById("myInput") as HTMLInputElement;
    if (copyText) {
        navigator.clipboard.writeText(copyText.value)
            .then(() => alert("Copied the text: " + copyText.value))
            .catch((err) => console.error("Failed to copy text: ", err));
    }
};


const PopupComponent = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className='fixed top-0 left-0 h-screen w-screen bg-[#00000066] z-10'>
            <div className='h-[80vh] w-[90vw] bg-white rounded-xl mt-[10vh] ml-[5vw] flex justify-between items-center px-16 relative'>
                {/* Copy Button */}
                <button
                    className="h-8 w-8 bg-[#4FC854] absolute top-[1.5vh] right-[3.5vw] rounded-lg"
                    onClick={copyBtn}
                >
                    <input
                        type="text"
                        value={`Hi {client_name},

Your job caught my attention - and I’d like to help you out with the project.

Over the past 4 years, I have served over 300 clients and completed over 700 projects.

I can design you STUNNING Social Media Posts for your Instagram account.
You will also get:
=> Unlimited Revisions

If interested, get in touch by replying to this offer.

Best,
{Your_name}`}
                        id="myInput"
                        className="hidden"
                    />
                    <svg className="h-[2.5vh] w-[1.5vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                        <path fill="white" d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32M704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32M350 856.2L263.9 770H350zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432z" />
                    </svg>
                </button>

                {/* Close Button */}
                <button
                    className="h-8 w-8 bg-[#FB4A4A] absolute top-4 right-4 rounded-full"
                    onClick={onClose}
                >
                    <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="white" d="M16.066 8.995a.75.75 0 1 0-1.06-1.061L12 10.939L8.995 7.934a.75.75 0 1 0-1.06 1.06L10.938 12l-3.005 3.005a.75.75 0 0 0 1.06 1.06L12 13.06l3.005 3.006a.75.75 0 0 0 1.06-1.06L13.062 12z" />
                    </svg>
                </button>

                {/* Content */}
                <div className="h-[90%] w-full">
                    {/* Heading */}
                    <h1 className='font-bold text-5xl p-12'>Winning Proposal!</h1>
                    {/* Letter */}
                    <div className='flex flex-col pl-[3vw]'>
                        <p className='text-2xl font-light mt-4'>Hi &#123;client_name&#125;,</p>
                        <p className='text-2xl font-light mt-8'>Your job posting caught my attention, and I'd love to help you with your project.</p>
                        <p className='text-2xl font-light mt-8'>Over the past four years, I've served over 300 clients and completed more than 700 projects.</p>
                        <p className='text-2xl font-light mt-8'>I can create STUNNING social media posts for your Instagram account, including:</p>
                        <ul className='text-2xl font-light mt-4'>
                            <li>=&gt; Unlimited Revisions</li>
                        </ul>
                        <p className='text-2xl font-light mt-8'>If you're interested, please feel free to reply to this offer to discuss further.</p>
                        <p className='text-2xl font-light mt-8'>Best regards,
                            <p className='text-2xl font-light mt-8'>&#123;Your_name&#125;</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


const WinningPu = () => {
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

export default WinningPu;
