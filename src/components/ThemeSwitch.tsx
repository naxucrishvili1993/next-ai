"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import Dropdown from "./Dropdown";

export default function ThemeSwitch({
	children,
}: {
	children: React.ReactNode;
}) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return (
			<div className="flex justify-center items-center h-[100dvh]">
				<AiOutlineLoading className="animate-spin" size={48} />
			</div>
		);
	}

	return (
		<>
			<div className="px-4 flex items-center justify-between w-screen shadow-2xl h-12 bg-white/45 dark:bg-gray-900">
				<Avatar className="w-7 h-7">
					<AvatarImage src="/google-account.jpg" />
					<AvatarFallback>User</AvatarFallback>
				</Avatar>
				<Dropdown />
			</div>
			{children}
		</>
	);
}
