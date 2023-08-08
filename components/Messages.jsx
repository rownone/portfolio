'use client'

import React from 'react'
import Jdenticon from 'react-jdenticon';
// Docs:: https://react-type-animation.netlify.app/
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from "react";

function Messages({onTyping, onNewMessageChange, newMessage, waiting, cookieValue, msg}) {
	const [scroll, setScroll] = useState();

	useEffect(() => {
		// setTimeout(function(){
			var element = document.getElementById("bottom-msg");
			element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
		// },500)
		
	}, [scroll]);

	var intervalId;

	const start = (el, total_msg) => {
		if (total_msg > 1)
			handleScrollToBottom();
		intervalId = setInterval(function(){
			handleScrollToBottom()
		}, 500);
		onTyping(true);
	}

	const end = (el, total_msg) => {
		el.classList.remove('index-module_type__E-SaG');
		clearInterval(intervalId);
		if (total_msg > 1)
			handleScrollToBottom();
		onTyping(false);
	}

	const handleScrollToBottom = () => {
		var element = document.getElementById("top-container");
		setScroll(element.scrollHeight)
	};

	const cancelClick = (id, index) => {
		onCancel(id, index);
	}

	const onChange = event => {
		onNewMessageChange(event.target.value);
	};

	const items = msg;
	if (items === null) return '';
	const total_msg = items.length;
	const listItems = items.map(
		(item, index) => {
			return item.user === 'Bot' ? (

				<div data-itemkey={item.id.toString()} key={/*item.id.toString()*/index.toString()} className="flex w-full mt-4">
					<div className="container lg:w-[1024px] mx-auto flex px-4 flex-wrap">
						<div className="text-2xl">
							<div className="flex">
								<div className="w-10 h-10 me-4">
									<div className="rounded bg-gray-300 w-10 h-10 items-center justify-center flex  overflow-hidden mb-1">
										<img className="max-w-full object-cover h-10 w-10" src="/nan.png" alt="" />
									</div>
									<div className='text-xs text-center text-black'>
										RONAN
									</div>
								</div>
								<div className='bg-gray-100/50 rounded-lg px-8 py-6 break-words'>
									{
										item.typing ? <TypeAnimation sequence={[(e) => start(e, total_msg), item.message, 10, (el) => end(el, total_msg)]} speed={75} />
											: item.message
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div data-itemkey={item.id.toString()} key={/*item.id.toString()*/index.toString()} className="flex w-full mt-4">
					<div className="container lg:w-[1024px] mx-auto flex px-4 flex-wrap">
						<div className="w-full">
							<div className="flex w-full">
								<div className="w-10 h-10 me-4">
									<div className="rounded bg-gray-300 w-10 h-10 overflow-hidden d-flex justify-center items-center custom-icon-avatar">
										<Jdenticon size="30" value={cookieValue} />
									</div>
								</div>
								<div className="relative bg-gray-100/50 rounded-lg px-8 py-6 pe-20 break-words">
									<div className="text-2xl">{item.message}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}
	);

	return (
		<>
			{listItems}
			{
				waiting ? (
					<div className="flex w-full py-8">
						<div className="container lg:w-[1024px] mx-auto flex px-4 flex-wrap">
							<div className="text-2xl">
								<div className="flex">
									<div className="w-10 h-10 me-4">
										<div className="rounded bg-gray-300 w-10 h-10 items-center justify-center flex  overflow-hidden mb-1">
											<img className="max-w-full object-cover h-10 w-10" src="/nan.png" alt="" />
										</div>
										<div className='text-xs text-center text-black'>
											RONAN
										</div>
									</div>
									<div>
										<TypeAnimation sequence={['', 10]} speed={40} />
									</div>
								</div>
							</div>
						</div>
					</div>
				) : ''
			}
		</>
	)
}

export default Messages