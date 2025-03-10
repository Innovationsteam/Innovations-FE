import { useContext, useEffect } from "react";
import { SocketContext } from "./SocketProvider";
import toast from "react-hot-toast";

const Notifications = () => {
	const { socket } = useContext(SocketContext);

	useEffect(() => {
		socket.on("new_comment", (error) => {
			toast.error(error?.message);
		});

		return () => {
			socket.off("new_comment", () => {
				console.log("Disconnected from Notifications");
			});
		};
	}, []);

	return <div>
    </div>;
};

export default Notifications;
