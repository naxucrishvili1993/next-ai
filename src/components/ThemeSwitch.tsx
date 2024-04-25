"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { FiMoon, FiSun } from "react-icons/fi";
import LightButton from "./LightButton";
import DarkButton from "./DarkButton";

export default function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return (
			<div className="flex justify-center items-center h-[100dvh]">
				<AiOutlineLoading className="animate-spin" size={48} />
			</div>
		);
	}

	return (
		<div className="px-4 flex items-center justify-end w-screen shadow-2xl h-12 bg-white/40 dark:bg-gray-900">
			{resolvedTheme === "dark" && (
				<LightButton onClick={() => setTheme("light")} />
			)}
			{resolvedTheme === "light" && (
				<DarkButton onClick={() => setTheme("dark")} />
			)}
		</div>
	);
}
