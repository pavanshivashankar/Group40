import React from 'react';
import { IoIosSend } from "react-icons/io";

function ChatBox() {

    const messages = [
        { sender: 'sender', text: 'Can you help me?' },
        { sender: 'receiver', text: 'Yes, I can.' },
        { sender: 'sender', text: 'Thank you!' },
        { sender: 'receiver', text: 'You\'re welcome!' },
        { sender: 'sender', text: 'How are you?' },
        { sender: 'receiver', text: 'I\'m fine, thanks.' },
        { sender: 'sender', text: 'What are you doing?' },
        { sender: 'receiver', text: 'Just working on some stuff.' },
        { sender: 'sender', text: 'Okay, let me know if you need help.' },
        { sender: 'receiver', text: 'Sure, thanks.' },
        { sender: 'sender', text: 'I have another question.' },
        { sender: 'receiver', text: 'Go ahead, ask.' },
        { sender: 'sender', text: 'Do you know how to do X?' },
        { sender: 'receiver', text: 'Yes, I have some experience with hello hwoij kljjohf kjnkjnkjsdc hjnj nhkjnkjnd juhihd uhhd kjbkbdf  it lorem10 thello worjknjlkn jitjendr ejiterndrfkjn jekloi apple vsll vvdtern  jkjnjfdvg.' },
        { sender: 'sender', text: 'Great! Can you explain?' },
        { sender: 'receiver', text: 'Sure, it\'s like this...' },
        { sender: 'sender', text: 'Got it, thanks for the explanation.' },
        { sender: 'receiver', text: 'No problem.' }
    ];

  return (
    <>
        {/* <div className="chat-container shadow" style={{ padding: '20px', maxWidth: '800px', margin: '20px auto' }}>
            <h4 className='text-muted border-bottom mb-4'>Start conversation...</h4>
            <div className="message-container" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {messages.map((message, index) => (
                    <div key={index} style={{ textAlign: message.sender === 'sender' ? 'right' : 'left', marginBottom: '10px' }}>
                        <div className={message.sender === 'sender' ? 'SenderMessage' : 'ReceiverMessage'} style={{ display: 'inline-block', padding: '8px', borderRadius: '8px', backgroundColor: message.sender === 'sender' ? '#DCF8C6' : '#C2DFFF', maxWidth: '70%' }}>
                            {message.text}
                        </div>
                    </div>
                ))}
            </div>
        </div> */}

            <div className="chat-container shadow" style={{ padding: '20px', maxWidth: '800px', margin: '20px auto', position: 'relative' }}>
            <h4 className='text-muted border-bottom mb-4'>Enquiry? <span className='fs-6'> message now!</span> </h4>
                <div className="message-container px-2" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    {messages.map((message, index) => (
                        <div key={index} style={{ textAlign: message.sender === 'sender' ? 'right' : 'left', marginBottom: '10px' }}>
                            <div className={message.sender === 'sender' ? 'SenderMessage' : 'ReceiverMessage'} style={{ display: 'inline-block', padding: '8px', borderRadius: '8px', backgroundColor: message.sender === 'sender' ? '#DCF8C6' : '#C2DFFF', maxWidth: '70%' }}>
                                {message.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='d-flex inputDiv'>
                    <input className='rounded border-1 px-2 ChatInput' type="text" placeholder="Type your message..."/>
                    <button className='SendBtn'><IoIosSend title='send' className='fs-2'/></button>
                </div>
            </div>
        {/* <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card border-0 mt-4">
                        <div className="card-body shadow ">
                        <h4 className='border-bottom mb-4'>  Start a conversation</h4>
                        <div className="">

                            <div className="" style={{textAlign:'right'}} >
                                <div className=" px-3 SenderMessage mb-2">
                                    can you help me?
                                </div> <br />
                                <div className=" px-3 ReceiverMessage mb-2">
                                    yes i can
                                </div> <br />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div> */}
    </>
  )
}

export default ChatBox