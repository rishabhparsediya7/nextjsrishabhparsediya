import React from 'react'
import { SparklesPreview } from './SparklesPreview'

function ProfileSection() {
    return (
        <div className='flex flex-col-reverse h-full sm:flex-row w-full'>
            <div className='flex-1'>
                <SparklesPreview />
            </div>
        </div>
    )
}

export default ProfileSection
