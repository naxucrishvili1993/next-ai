import { getHoursAndMinutesFromMessage } from "@/lib/utils";
import { Message } from "ai";
import { Bot, CircleUserRound } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function MessageBox({ message }: { message: Message }) {
	let timeStr = "";

	if (message && message.createdAt) {
		timeStr = getHoursAndMinutesFromMessage(message?.createdAt);
	}

	return (
		<div
			className={`flex items-start justify-start gap-2 ${
				message.role === "user" ? "flex-row-reverse" : ""
			}`}>
			{message.role === "user" ? (
				<Avatar>
					<AvatarImage
						src={"/circle-user-round.svg"}
						alt="user"
						className="w-8 dark:invert"
					/>
					<AvatarFallback>User</AvatarFallback>
					{/* <CircleUserRound size={30} className="mt-1" /> */}
				</Avatar>
			) : (
				<Avatar>
					<AvatarImage src={"/bot.svg"} alt="bot" className="w-8 dark:invert" />
					<AvatarFallback>Bot</AvatarFallback>
					{/* <Bot size={30} className="mt-1" /> */}
				</Avatar>
			)}
			<div
				className={`flex flex-col whitespace-pre-wrap bg-slate-100 dark:bg-zinc-700 py-2 px-4 w-fit max-w-80 rounded-xl shadow-lg ${
					message.role === "user"
						? "dark:text-black text-white bg-blue-600 dark:bg-blue-50"
						: ""
				}`}>
				{message.content}
				<span className="text-[10px] tracking-wider text-right">
					{timeStr || ""}
				</span>
			</div>
		</div>
	);
}
