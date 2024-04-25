import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { SendHorizonal } from "lucide-react";

type Props = {
	onClick?: () => void;
	color: string;
	className: string;
};

export default function SendButton({ onClick, color, className }: Props) {
	return (
		<Button
			color={color}
			variant={"ghost"}
			size={"icon"}
			className="rotate-[270deg] cursor-pointer  transition-all me-2"
			type="submit"
			onClick={onClick}>
			<SendHorizonal
				className={cn("cursor-pointer rounded-full", className)}
				size={26}
			/>
		</Button>
	);
}
