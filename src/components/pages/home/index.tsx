import React from 'react'
import ContactList from './contacts'
import Conversation from './conversation'

const Container = () => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='flex'>
                <div>
                    <ContactList />
                </div>

                <div>
                    <Conversation />
                </div>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <div className='w-full h-full'>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>

            <Container />
        </div>
    )
}

export default Home