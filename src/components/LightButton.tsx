import { FiSun } from "react-icons/fi";
import { Button } from "./ui/button";

type Props = {
	onClick: () => void;
};

export default function LightButton({ onClick }: Props) {
	return (
		<Button
			variant={"ghost"}
			size={"icon"}
			onClick={onClick}
			className="rounded-full">
			<FiSun className="cursor-pointer" size={24} />
		</Button>
	);
}
