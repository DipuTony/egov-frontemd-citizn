import React from 'react'
import avatar from './user-avatar.jpg'

function Sidebar() {
    return (
        <>
            <div className='h-screen bg-black'>

                <div className='text-white'>Johar</div>
                <div className='text-white text-center'>
                    <div className='grid place-items-center'>
                        <img className='rounded-full h-10 w-10' src={avatar} alt="user image" />
                    </div>
                    <p> Happy User</p>
                    <p>mail@gmail.com</p>
                </div>




            </div>
        </>
    )
}

export default Sidebar