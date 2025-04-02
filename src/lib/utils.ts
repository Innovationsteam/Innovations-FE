import { Extension } from "@tiptap/core";
import { clsx, type ClassValue } from "clsx";
import { Plugin } from "prosemirror-state";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import { MAX_WORD_COUNT } from "./constants";

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function extractPContent(html: string): any {
	const paragraphRegex = /<[^>]+>.*?<\/[^>]+>/g;
	const paragraphs = html.match(paragraphRegex);
	return paragraphs || [];
}

export function formatDate(timestamp: string): string {
	const date = new Date(timestamp);
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	return date.toLocaleDateString("en-US", options);
}

export function truncateText(text: string, maxLength: number): string {
	if (text.length <= maxLength) return text;
	return text.slice(0, maxLength) + "...";
}

export function convertToOriginalFormat(htmlString: string) {
	const tempDiv = document.createElement("div");
	tempDiv.innerHTML = htmlString;

	const h1 = tempDiv.querySelector("h1");
	if (h1) {
		h1.remove();
	}
	let htmlContent = tempDiv.innerHTML;
	htmlContent = htmlContent.replace(/<\/(h1|p|div|ol|li)>/g, " </$1>");
	htmlContent = htmlContent.replace(/<(h1|p|div|ol|li)>/g, "<$1> ");

	htmlContent = htmlContent.replace(/<\/(strong|em|u|span|b|i)>/g, " </$1>");
	htmlContent = htmlContent.replace(/<(strong|em|u|span|b|i)>/g, "<$1> ");
	return htmlContent.trim();
}

export function convertComment(htmlString: string) {
	const tempDiv = document.createElement("div");
	tempDiv.innerHTML = htmlString;
	let htmlContent = tempDiv.innerHTML;
	htmlContent = htmlContent.replace(/<\/(h1|p|div|ol|li)>/g, " </$1>");
	htmlContent = htmlContent.replace(/<(h1|p|div|ol|li)>/g, "<$1> ");

	htmlContent = htmlContent.replace(/<\/(strong|em|u|span|b|i)>/g, " </$1>");
	htmlContent = htmlContent.replace(/<(strong|em|u|span|b|i)>/g, "<$1> ");
	return htmlContent.trim();
}

export function formatSplit(htmlString: string) {
	const parser = new DOMParser();
	const doc = parser.parseFromString(htmlString, "text/html");

	const titleElement = doc.querySelector("h1");
	const contentElements = doc.querySelectorAll("p");

	const result = {
		title: titleElement ? titleElement.outerHTML : "",
		content: Array.from(contentElements)
			.map((p) => p.outerHTML)
			.join(""),
	};
	return result;
}

type OnWordCountExceeded = (exceeded: boolean) => void;

export const WordCountExtension = (onWordCountExceeded: OnWordCountExceeded) =>
	Extension.create({
		name: "wordCount",
		addProseMirrorPlugins() {
			let notificationShown = false;
			return [
				new Plugin({
					view: () => {
						return {
							update: (view) => {
								const text = view.state.doc.textContent;
								const wordCount = text.trim().split(/\s+/).length;

								if (wordCount > MAX_WORD_COUNT) {
									if (!notificationShown) {
										toast.error(`Maximum word count of ${MAX_WORD_COUNT} exceeded!`);
										notificationShown = true;
									}
									onWordCountExceeded(true);
								} else {
									notificationShown = false;
									onWordCountExceeded(false);
								}
							},
						};
					},
				}),
			];
		},
	});
