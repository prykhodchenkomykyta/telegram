import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
	return (
		<div
			className="flex justify-center items-center w-full h-screen overflow-hidden
		bg-[#161621]"
		>
			<RotatingLines
				strokeColor="grey"
				strokeWidth="5"
				animationDuration="0.75"
				width="96"
				visible={true}
			/>
		</div>
	);
};

export default Loading;
