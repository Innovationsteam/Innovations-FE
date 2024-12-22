///////Worked On
import { getBlogs, getAbout, getDrafts } from "@/queries/profile.queries";
import { useQuery } from "@tanstack/react-query";


export const useBlogs = () => {
	return useQuery({
		queryFn: () => getBlogs(),
		queryKey: ["blogs"],
		staleTime: 100 * 60 * 3,
	});
};

export const useAbout = () => {
	return useQuery({
		queryFn: () => getAbout(),
		queryKey: ["about"],
		staleTime: 100 * 60 * 3,
	});
};

export const useDrafts = () => {
	return useQuery({
		queryFn: () => getDrafts(),
		queryKey: ["drafts"],
		staleTime: 100 * 60 * 3,
	});
};
