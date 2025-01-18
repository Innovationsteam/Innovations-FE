import { clsx, type sClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: sClassValue[]) {
	return twMerge(clsx(inputs));
}
