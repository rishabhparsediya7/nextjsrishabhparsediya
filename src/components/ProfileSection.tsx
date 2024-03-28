import React from 'react'
import ProfileHeading from './ProfileHeading'
import ImageSection from './ImageSection'
import { SparklesPreview } from './SparklesPreview'

function ProfileSection() {
    return (
        <div className='flex flex-col-reverse h-full sm:flex-row w-full'>
            <div className='flex-1'>
                <SparklesPreview />
            </div>
            {/* <div className='flex-1'>
                <ImageSection />
            </div> */}
        </div>
    )
}

export default ProfileSection
