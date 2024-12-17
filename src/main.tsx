import { MutationCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AxiosError } from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import toast, { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./router.tsx";
import { IError } from "./types/auth.types.ts";

declare module "@tanstack/react-query" {
	interface Register {
		defaultError: AxiosError<IError>;
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleErrors = async (response: any) => {
	console.log(response);

	// Handle network errors
	if (!response) {
		toast.error("Network Error");
		return;
	}

	// const errors = Array.isArray(response.data.error) ? response.data.error : [response.data.error];

	// // Display each error message with a delay
	// for (const error of errors) {
	// 	toast({
	// 		title: error,
	// 		variant: "destructive",
	// 	});

	// 	// Wait for 300ms before showing the next toast
	// 	await new Promise((resolve) => setTimeout(resolve, 300));
	// }

	const error = response.data.error.message;

	toast.error(error);
};

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
	mutationCache: new MutationCache({
		onError: (error) => handleErrors(error.response),
	}),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Toaster />
			<RouterProvider router={router} />
			<ReactQueryDevtools />
		</QueryClientProvider>
	</React.StrictMode>
);
