import { User } from "@/types/user.types";
import { create } from "zustand";

interface UserStoreType {
	user: User | null;
	setUser: (user: User | null) => void;
}

export const useUserStore = create<UserStoreType>((set) => ({
	user: null,
	setUser: (user) => set({ user }),
}));
