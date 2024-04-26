"use client";

import { FiEdit, FiChevronDown, FiTrash, FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { IconType } from "react-icons";
import { useTheme } from "next-themes";
import { HiDotsVertical } from "react-icons/hi";
import { clearChat } from "@/lib/utils";

export default function Dropdown() {
	const [open, setOpen] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	return (
		<div className="flex items-center justify-center">
			<motion.div animate={open ? "open" : "closed"} className="relative">
				<button
					onClick={() => setOpen((pv) => !pv)}
					className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-blue-600 dark:bg-gray-800 hover:bg-indigo-700 transition-colors z-50">
					<motion.span variants={iconVariants}>
						<HiDotsVertical />
					</motion.span>
				</button>

				<motion.ul
					initial={wrapperVariants.closed}
					variants={wrapperVariants}
					style={{ originY: "top", translateX: "-50%" }}
					className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] -left-14 w-48 overflow-hidden dark:bg-gray-800 z-50">
					{resolvedTheme === "light" && (
						<Option
							setOpen={setOpen}
							Icon={FiMoon}
							onClick={() => setTheme("dark")}
							text="Dark mode"
						/>
					)}
					{resolvedTheme === "dark" && (
						<Option
							setOpen={setOpen}
							Icon={FiSun}
							onClick={() => setTheme("light")}
							text="Light mode"
						/>
					)}
					<Option
						setOpen={setOpen}
						Icon={FiTrash}
						onClick={clearChat}
						text="Clear chat"
					/>
				</motion.ul>
			</motion.div>
		</div>
	);
}

const Option = ({
	text,
	Icon,
	setOpen,
	onClick,
}: {
	text: string;
	Icon: IconType;
	setOpen: Dispatch<SetStateAction<boolean>>;
	onClick?: () => void;
}) => {
	return (
		<motion.li
			variants={itemVariants}
			onClick={() => {
				setOpen(false);
				onClick?.();
			}}
			className="flex items-center gap-2 w-full p-2 text-xs font-medium dark:font-normal whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 tracking-wider hover:text-indigo-500 dark:hover:bg-slate-700 transition-colors cursor-pointer dark:text-slate-200">
			<motion.span variants={actionIconVariants}>
				<Icon />
			</motion.span>
			<span>{text}</span>
		</motion.li>
	);
};

const wrapperVariants = {
	open: {
		scaleY: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.01,
		},
	},
	closed: {
		scaleY: 0,
		transition: {
			when: "afterChildren",
			staggerChildren: 0.01,
		},
	},
};

const iconVariants = {
	open: { rotate: 180 },
	closed: { rotate: 0 },
};

const itemVariants = {
	open: {
		opacity: 1,
		y: 0,
		transition: {
			when: "beforeChildren",
		},
	},
	closed: {
		opacity: 0,
		y: -15,
		transition: {
			when: "afterChildren",
		},
	},
};

const actionIconVariants = {
	open: { scale: 1, y: 0 },
	closed: { scale: 0, y: -7 },
};
