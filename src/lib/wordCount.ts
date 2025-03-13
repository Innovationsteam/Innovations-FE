import { Plugin } from "prosemirror-state";
import { MAX_WORD_COUNT } from "@/utils/constants";
import { Extension } from "@tiptap/core";
import toast from "react-hot-toast";

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
