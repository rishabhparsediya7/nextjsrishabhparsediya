'use client'
import React, { useEffect, useState } from 'react'
import { SparklesPreview } from './SparklesPreview'

function ProfileSection() {
    // const [positions, setPositions] = useState([{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]);

    // useEffect(() => {
    //     const handleMouseMove = (e: MouseEvent) => {
    //         const { clientX, clientY } = e;
    //         const newPos = [{ x: clientX, y: clientY }, positions[0], positions[1]];
    //         setPositions(newPos);
    //     };
    //     document.addEventListener('mousemove', handleMouseMove);

    //     return () => {
    //         document.removeEventListener('mousemove', handleMouseMove);
    //     };
    // }, [positions]);
    return (
        <div className='flex flex-col-reverse h-full sm:flex-row w-full'>
            <div className='flex-1'>
                <SparklesPreview />
            </div>
            {/* {positions.map((position, index) => (
                <div
                    key={index}
                    className="custom-cursor"
                    style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
                ></div>
            ))} */}
        </div>
    )
}

export default ProfileSection
