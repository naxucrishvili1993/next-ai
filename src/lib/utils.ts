import { Message } from "ai";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getHoursAndMinutesFromMessage(date: Date): string {
	let timeStr = "";

	if (date) {
		if (date.getHours() > 9) {
			timeStr += `${date.getHours()}:`;
		} else {
			timeStr += `0${date.getHours()}:`;
		}
		if (date.getMinutes() > 9) {
			timeStr += date.getMinutes();
		} else {
			timeStr += `0${date.getMinutes()}`;
		}
	}

	return timeStr;
}
