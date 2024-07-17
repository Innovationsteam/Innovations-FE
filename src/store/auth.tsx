import { create } from "zustand";

interface AuthStoreType {
	user: string | null;
	setUser: (user: string | null) => void;
}

export const useAuthStore = create<AuthStoreType>((set) => ({
	user: null,
	setUser: (user: string | null) => set({ user }),
}));
