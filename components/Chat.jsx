'use client'

import { useState, useEffect } from "react";
import Messages from "./Messages";
import TextareaAutosize from 'react-textarea-autosize';

function Chat({window, cookieValue}) {
    const _domain = window.replace('www.', '');
    const greetings = [
        "How's your day going?",
        "How are you today?",
        "How's it going?",
        "How's everything going for you?",
        "What do you like to do in your free time?",
        "What's up?",
        "How have you been?",
        "How's your day been so far?",
        "How are you doing today?",
        "How's everything going?",
        "What's new with you?",
        "How's life treating you?"
    ];

    const greet = greetings[Math.floor(Math.random() * greetings.length)];

    const initialState = {
        id: 1,
        rec_id: '',
        cookieValue: cookieValue,
        isLoading: true,
        error: null,
        userChat: '',
        response: greet,
        waiting: false,
        typing: false,
        allMessages: null,
        updatingMsg: false,
        deletingMsg: false,
        editing: false,
        newMessage: ''
    }

    const [data, setData] = useState(initialState);

    const onTyping = (nVal) => {
        setData({ ...data, ['typing']: nVal });
		setTimeout(function () {
			try {
				const txt = document.getElementById('userChat');
				txt.focus();
			} catch (e) {

			}
		}, 500)
	};

    const onNewMessageChange = (msg) => {
        setData({ ...data, ['newMessage']: msg });
	}
	
	const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value });
	};

	const send = async(e) => {
		if (data.userChat === '') return;
        const param = {
            'uid': data.cookieValue,
		    'q': data.userChat,
		    'prev': data.response,
		    'domain': _domain,
		    'ref': btoa(window).split("").reverse().join("")
        }
        fetch('/api/ask', {
            method: "POST",
            body: JSON.stringify(param),
          })
        .then((res) => res.json())
        .then((response) => {
            if (response.message) {
                const updatedAllMessages = [...data.allMessages];
                const mid = response.mid;
                updatedAllMessages[updatedAllMessages.length - 1].rec_id = mid;
                
                const msg = response.message.replace(/\n/g, ' ');
                //add guest msg
                updatedAllMessages.push({ id: data.id, typing: false, user: 'guest', message: data.userChat })

                const ID = data.id + 1;
                //add bot msg
                updatedAllMessages.push({ id: ID, typing: true, user: 'Bot', message: msg })
                setData(prevData => {
                    return {...prevData, ...{
                        'ID': ID,
                        'waiting': false,
                        'allMessages' : updatedAllMessages,
                        'response': msg
                    }};
                });

            }
        });


        const ID = data.id + 1;
        
        const updatedAllMessages = [...data.allMessages];
       
        updatedAllMessages.push({ id: ID, typing: true, user: 'guest', message: data.userChat })
       
        setData(prevData => {
            return {...prevData, ...{
                'id' : ID,
                'waiting' : true,
                'typing' : true,
                'userChat': "",
                'allMessages' : updatedAllMessages,
                // allMessages: [
                //     ...prevData.allMessages,
                //     { id: ID, typing: true, user: 'guest', message: prevData.userChat },
                // ],
            }};
        });

	};

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			send();
            setTimeout(function () {
            var element = document.getElementById("bottom-msg");
			element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            }, 300);
			return false;
		}
	}


    useEffect(() => {
        const data = {
            uid: cookieValue,
            domain: _domain
        }
        fetch('/api/history', {
            method: "POST",
            body: JSON.stringify(data),
          })
        .then((res) => res.json())
        .then((data) => {
            var intro = data.intro.replace('CAI, your personal Contrib AI.\nMy', "Ronan, my") + " " + greet;
            if (data.messages.length > 0) {
                let y = 2;
                let arr_chat = [{ id: 1, rec_id: 0, typing: false, user: 'Bot', message: intro }];

                for (var x = 0; x < data.messages.length; x++) {
                    const record = data.messages[x];
                    arr_chat.push({ id: y, rec_id: record.rec_id, typing: false, user: 'guest', message: record.user_chat });
                    y++;
                    arr_chat.push({ id: y, rec_id: record.rec_id, typing: false, user: 'Bot', message: record.ai_answer });
                    y++;
                }
                
                setData(prevData => {
                    return {...prevData, ...{
                        'id' : y,
                        'isLoading' : false,
                        'allMessages': arr_chat
                    }};
                });

                setTimeout(function(){
                    var element = document.getElementById("bottom-msg");
                    element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
                },100)
                
            } else {
                setData(prevData => {
                    return {...prevData, ...{
                        'isLoading' : false,
                        'allMessages': [{ id: 1, typing: true, user: 'Bot', message: intro }]
                    }};
                });
            }
        })
    }, [])
    
    
    // useEffect(() => {
    //     try{
    //         if(!data.typing){
    //             var element = document.getElementById("top-container");
    //             element.scrollTop = element.scrollHeight;
	// 	        element.scrollIntoView({ block: "end" });
    //             const txt = document.getElementById('userChat');
    //             txt.focus();
    //         }
    //     }catch(e){
    //     }
        
    // }, [data.typing]);
    return (
		<>
            {
                (data.isLoading)?
                     (
                        <div className="min-h-[100vh] pt-[120px] pb-[88px] flex flex-col">
                            <div className="flex w-full">
                                <div className="container lg:w-[1024px] mx-auto flex px-4 flex-wrap align-items-center justify-center">
                                    <div>
                                        <svg className="loading-svg" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            viewBox="0 0 100 100" enableBackground="new 0 0 0 0">
                                            <path fill="#39B54A" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                                                <animateTransform
                                                    attributeName="transform"
                                                    attributeType="XML"
                                                    type="rotate"
                                                    dur="1s"
                                                    from="0 50 50"
                                                    to="360 50 50"
                                                    repeatCount="indefinite" />
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ):null
            }
            <div className="pb-[6px] flex flex-col">
                <Messages
                    // onSave={saveMsg}
                    onTyping={onTyping}
                    onNewMessageChange={onNewMessageChange}
                    newMessage={data.newMessage}
                    waiting={data.waiting}
                    cookieValue={data.cookieValue}
                    msg={data.allMessages} />
            </div>
            
            <div className="relative">
                <div className="container lg:w-[768px] mx-auto flex flex-col justify-center pb-2 pt-2 px-4 relative flex-wrap">
                    {
                        !data.typing ? (
                            <div className="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)] mb-2">
                                <div>
                                    <TextareaAutosize
                                        maxRows={6}
                                        onKeyPress={handleKeyPress}
                                        id="userChat" name="userChat" onChange={handleChange} value={data.userChat}
                                        className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-14 focus:ring-0 focus-visible:ring-0 pl-2 md:pl-0 outline-none"
                                        placeholder='Send a message...'
                                    />
                                    <button id="send" onClick={() => send()} className='absolute right-3 bottom-2 rounded inline-flex items-center justify-center hover:bg-gray-100 w-8 h-8 text-gray-500 disabled:opacity-50 disabled:hover:bg-transparent'>
                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                    </button>
                                </div>
                            </div>
                        ) : ''
                    }

                </div>
            </div>
            <div id="bottom-msg"></div>
		</>
  )

}

export default Chat
