import { MutationCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AxiosError } from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import toast, { Toaster } from "react-hot-toast";
import "./index.css";
import AppRouter from "./router.tsx";
import { IError } from "./types/auth.types.ts";

// TODOS
//  1. CHANGE NAMING CONVENTION OF ARTICLE & POSTS => THEY ARE THE SAME THING
//  2. TRY USING SUSPENSE QUERY TO HANDLE LOADING STATES WHILE FETCHING

declare module "@tanstack/react-query" {
	interface Register {
		defaultError: AxiosError<IError>;
	}
}

const handleErrors = async ({ response }: AxiosError<IError>) => {
	console.log(response);

	// Handle network errors
	if (!response) {
		toast.error("Network Error");
		return;
	}

	const errors = Array.isArray(response.data.error) ? response.data.error.map((error) => error.message) : [response.data.error.message];

	// Display each error message with a delay
	for (const error of errors) {
		toast.error(error);
		// Wait for 300ms before showing the next toast
		await new Promise((resolve) => setTimeout(resolve, 300));
	}
};

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 0,
			refetchOnWindowFocus: false,
		},
	},
	mutationCache: new MutationCache({
		onError: (error) => handleErrors(error),
	}),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Toaster />
			<AppRouter />
			<ReactQueryDevtools />
		</QueryClientProvider>
	</React.StrictMode>
);
