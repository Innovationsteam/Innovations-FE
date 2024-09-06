import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import { useEffect } from "react";

const Loader = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const id = setTimeout(() => {
			// navigate("/home");
		}, 3000);
		return () => {
			clearTimeout(id);
		};
	}, [navigate]);

	return (
		<section className="flex h-screen w-full items-center justify-center bg-black">
			<Container className="my-auto min-h-fit text-center text-white">
				<h1 className="text-[85px] font-extrabold leading-[100px] sm:text-[100px] sm:leading-[136px]">
					INNOV <br />
					ATION
				</h1>
				<p className="text-sm sm:text-lg">Illuminate Your Ideas - Unleash Your Voice</p>
			</Container>
		</section>
	);
};

export default Loader;
