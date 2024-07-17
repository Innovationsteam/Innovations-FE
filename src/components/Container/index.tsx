interface ContainerProps {
	children: React.ReactNode[] | React.ReactNode;
	className?: string;
	id?: string;
}

const Container: React.FC<ContainerProps> = ({ className, children, id }) => {
	return (
		<div
			id={id}
			className={`mx-auto w-full max-w-[1280px] px-5 md:px-[40px] ${className}`}
		>
			{children}
		</div>
	);
};

export default Container;
