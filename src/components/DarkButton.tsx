import { FiMoon } from "react-icons/fi";
import { Button } from "./ui/button";

type Props = {
	onClick: () => void;
};

export default function DarkButton({ onClick }: Props) {
	return (
		<Button
			variant={"ghost"}
			size={"icon"}
			className="rounded-full"
			onClick={onClick}>
			<FiMoon className="cursor-pointer rounded-full" size={24} />
		</Button>
	);
}
