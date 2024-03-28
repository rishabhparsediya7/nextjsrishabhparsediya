import React from 'react'
import Image from 'next/image'
function ImageSection() {
    return (
        <div className='flex items-center justify-center h-[44rem] rounded-2xl w-full'>
            <Image className='rounded-xl' src='/profile3.jpg' alt='Profile' width={400} height={400} ></Image>
        </div>
    )
}

export default ImageSection
