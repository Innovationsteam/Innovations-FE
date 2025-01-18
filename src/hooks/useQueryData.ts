import { type QueryKey, useQueryClient } from "@tanstack/react-query";

export const useQueryData = <T>(queryKey: QueryKey) => {
	const queryClient = useQueryClient();
	return queryClient.getQueryData<T>(queryKey) ?? null;
};
