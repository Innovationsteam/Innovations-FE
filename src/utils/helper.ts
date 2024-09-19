import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const units = ["bytes", "Kb", "Mb", "Gb", "Tb"];

export function convertBytes(n: number) {
	let l = 0;

	while (n >= 1024 && ++l) {
		n = n / 1024;
	}

	return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
}

export function extractH1Content(html: string): string {
	const h1Match = html.match(/<h1>(.*?)<\/h1>/);
	return h1Match ? h1Match[1] : "";
}
