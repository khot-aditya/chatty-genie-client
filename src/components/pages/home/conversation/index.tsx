import React from 'react'


const InputField = () => {
    return (
        <>
            <div className="form-control">
                <div className="input-group">
                    <input type="text" placeholder="Type message..." className="input input-bordered w-full" />
                    <button className="btn px-5">
                        Send
                    </button>
                </div>
            </div>
        </>
    )
}

const ChatBubble = () => {
    return (
        <>
            <div className="chat chat-start">
                <div className="chat-bubble ">It's over Anakin, <br />I have the high ground.</div>
            </div>
            <div className="chat chat-end">
                <div className="chat-bubble ">You underestimate my power!</div>
            </div>
        </>
    )
}

const InstructionsInputField = () => {
    return (
        <>
            <textarea className="textarea w-full textarea-bordered " placeholder="Instructions"></textarea>
        </>
    )
}

const Conversation = () => {
    return (
        <div className='w-screen max-w-2xl h-full mx-3 relative'>


            {/* <div className='w-full mt-20'>
                <InstructionsInputField />
            </div> */}

            <div className='overflow-y-auto h-full max-h-screen hide-scrollbar py-20'>
                <ChatBubble />
                <ChatBubble />
                <ChatBubble />
                <ChatBubble />
                <ChatBubble />
                <ChatBubble />
                <ChatBubble />
                <ChatBubble />
                <ChatBubble />
                <ChatBubble />
                <ChatBubble />
            </div>

            <div className='w-full absolute bottom-10 z-20'>
                <InputField />
            </div>

            <div className="w-full h-28 z-10 absolute bottom-0 bg-gradient-to-b from-transparent via-white to-white"></div>

        </div>
    )
}

export default Conversation