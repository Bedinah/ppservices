"use client"; // This is a client component 

import React, { useState } from 'react'

const AboutMe = () => {
    const [tab, setTab] = useState(1);

    const handleclick = (index: any) => {
        setTab(index)
        console.log(index, 123456789)
    }

    return (
        <div className='w-full h-full '>
            <div className='container mx-auto'>
                <div className=" w-full font-bold text-[2rem] xl:text-[3rem] text-[#8a7962] py-10">
                    <div className="animate__animated animate__fadeInUp  animate__delay-3s">
                        About Me
                    </div>
                </div>
                <div className="w-full text-xl font-light p-4 lg:p-0 text-center">
                    I am a passionate Software Engineer excited about creating awesome
                    digital solutions. Whether it's building apps, fixing bugs, or making
                    existing systems run smoother, I love pushing the boundaries of
                    technology and innovating to solve problems.
                </div>
                <div className='flex gap-4 my-8 justify-center text-3xl font-medium'>
                    <div className='bg-white px-16 py-3 rounded-md' >Education</div>
                    <div className='bg-gray-600 px-14 py-3 rounded-md'> Experience</div>
                </div>
                <div className="w-full h-[.5px] bg-[#3f2202] mt-14"></div>
            </div>
        </div>
    )
}

export default AboutMe;
