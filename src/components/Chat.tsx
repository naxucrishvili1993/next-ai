"use client";

import { Message, useChat } from "ai/react";
import { useEffect, useRef } from "react";
import MessageBox from "./MessageBox";
import SendButton from "./SendButton";

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit, isLoading } =
		useChat();

	const formRef = useRef<HTMLFormElement>(null);
	const boxRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (boxRef.current) {
			boxRef.current.scrollTop = boxRef.current.scrollHeight;
		}
	});

	return (
		<div className="flex flex-col w-full px-3 py-1 mx-auto stretch max-h-[93dvh] bg-slate-200 dark:bg-zinc-800">
			<div
				ref={boxRef}
				id="chat"
				className="flex h-[90dvh] flex-9 max-h-[90dvh] px-2 flex-col gap-2 overflow-y-auto pb-5 mt-2">
				{messages.map((m) => (
					<MessageBox message={m} key={m.id} />
				))}
			</div>

			<form
				onSubmit={handleSubmit}
				ref={formRef}
				className="flex flex-1 items-center max-w-lg shadow-lg mx-auto py-1 px-2 border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-700 rounded-lg dark:placeholder:text-black min-w-52 w-full mb-1">
				<div className="w-full flex justify-center items-center">
					<input
						className="dark:bg-gray-700 border-none w-full max-w-md min-w-10 p-2   rounded  outline-none disabled:cursor-not-allowed"
						value={input}
						placeholder="Say something..."
						onChange={handleInputChange}
						disabled={isLoading}
					/>
					<SendButton
						color={isLoading ? "gray" : "blue"}
						className={`${isLoading ? "cursor-not-allowed" : ""}`}
					/>
				</div>
			</form>
		</div>
	);
}
