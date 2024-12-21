///////Worked On
import { getBlogs, getAbout, getDrafts } from "@/queries/profile.queries";
import { useQuery } from "@tanstack/react-query";
import { token } from "@/libs/axios";
export const useBlogs = () => {
	return useQuery({
		queryFn: () => getBlogs(),
		queryKey: ["blogs", token],
		staleTime: 100 * 60 * 3,
	});
};

export const useAbout = () => {
	return useQuery({
		queryFn: () => getAbout(),
		queryKey: ["about", token],
		staleTime: 100 * 60 * 3,
	});
};

export const useDrafts = () => {
	return useQuery({
		queryFn: () => getDrafts(),
		queryKey: ["drafts", token],
		staleTime: 100 * 60 * 5,
	});
};
