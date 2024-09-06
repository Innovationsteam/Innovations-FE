interface ContainerProps {
	children: React.ReactNode[] | React.ReactNode;
	className?: string;
	id?: string;
}

const Container: React.FC<ContainerProps> = ({ className, children, id }) => {
	return (
		<div
			id={id}
			className={`mx-auto min-h-full w-full max-w-7xl px-5 md:px-[40px] ${className}`}
		>
			{children}
		</div>
	);
};

export default Container;
