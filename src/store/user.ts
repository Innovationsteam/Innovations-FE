import { IUser } from "@/types/user.types";
import { create } from "zustand";

interface UserStoreType {
	user: IUser | null;
	setUser: (user?: IUser) => void;
}

export const useUserStore = create<UserStoreType>((set) => ({
	user: null,
	setUser: (user) => {
		return set({ user });
	},
}));
