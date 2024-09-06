import { BubbleMenu, Editor } from "@tiptap/react";
import classNames from "classnames";

const CustomMenu = ({ editor }: { editor: Editor | null }) => {
	if (!editor) return null;

	return (
		<BubbleMenu
			tippyOptions={{ duration: 100 }}
			editor={editor}
			className="flex w-full items-center gap-x-4 rounded-lg border border-[#3d25140d] bg-[#F2F4F7] px-3 py-2 font-roboto shadow-[var(--shadow)]"
		>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
				className={classNames("flex size-8 items-center justify-center rounded-md p-1 hover:bg-slate-300", {
					"bg-[#349869] text-white hover:!bg-[#1C4532]": editor.isActive("heading", { level: 1 }),
				})}
			>
				<span className="font-manrope text-sm font-semibold">H1</span>
			</button>
			<button
				onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
				className={classNames("flex size-8 items-center justify-center rounded-md p-1 hover:bg-slate-300", {
					"bg-[#349869] text-white hover:!bg-[#1C4532]": editor.isActive("heading", { level: 2 }),
				})}
			>
				<span className="font-manrope text-sm font-semibold">H2</span>
			</button>
			<button
				onClick={() => editor.chain().focus().toggleBulletList().run()}
				className={classNames("flex size-8 items-center justify-center rounded-md p-1 hover:bg-slate-300 [&>svg]:stroke-black", {
					"bg-[#349869] hover:!bg-[#1C4532] [&>svg]:stroke-white": editor.isActive("bulletList"),
				})}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
					/>
				</svg>
			</button>
			<button
				onClick={() => editor.chain().focus().toggleOrderedList().run()}
				className={classNames("flex size-8 items-center justify-center rounded-md p-1 hover:bg-slate-300 [&>svg]:fill-black", {
					"bg-[#349869] hover:!bg-[#1C4532] [&>svg]:fill-white": editor.isActive("orderedList"),
				})}
			>
				<svg
					width="28"
					height="28"
					viewBox="0 0 28 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						stroke-width="1.5"
						d="M7.61361 4.25757C7.95756 4.47014 8.16692 4.84566 8.16692 5.25L8.16667 10.5C8.16667 11.1443 7.64433 11.6667 7 11.6667C6.35567 11.6667 5.83333 11.1443 5.83333 10.5L5.83359 7.1377L5.18867 7.46016C4.61236 7.74832 3.91158 7.51472 3.62342 6.93841C3.33527 6.3621 3.56886 5.66132 4.14517 5.37316L6.47851 4.2065C6.84016 4.02567 7.26966 4.045 7.61361 4.25757ZM14.0003 6.99999C13.356 6.99999 12.8336 7.52233 12.8336 8.16666C12.8336 8.81099 13.356 9.33333 14.0003 9.33333H23.3336C23.9779 9.33333 24.5003 8.81099 24.5003 8.16666C24.5003 7.52233 23.9779 6.99999 23.3336 6.99999H14.0003ZM14 18.0833C13.3557 18.0833 12.8333 18.6057 12.8333 19.25C12.8333 19.8943 13.3557 20.4167 14 20.4167H23.3333C23.9777 20.4167 24.5 19.8943 24.5 19.25C24.5 18.6057 23.9777 18.0833 23.3333 18.0833H14Z"
					/>
					<path
						stroke-width="1.5"
						d="M5.66919 17.8418L5.66788 17.8428L5.66635 17.8439L5.66404 17.8457L5.66287 17.8466C5.15248 18.2334 4.42472 18.1364 4.03361 17.628C3.64075 17.1173 3.73629 16.3848 4.247 15.9919L4.31493 15.9419C4.34961 15.9171 4.39628 15.8849 4.45354 15.8476C4.56721 15.7737 4.72719 15.6771 4.92173 15.5804C5.29255 15.396 5.87642 15.1667 6.54619 15.1667C8.08548 15.1667 9.33333 16.4145 9.33333 17.9538C9.33333 18.8467 8.81013 19.5324 8.34167 20.0416C7.98463 20.4297 7.55355 20.7458 7.175 21H8.45833C9.10267 21 9.625 21.5223 9.625 22.1667C9.625 22.811 9.10267 23.3333 8.45833 23.3333H4.66667C4.02233 23.3333 3.5 22.811 3.5 22.1667C3.5 21.2867 3.98237 20.6513 4.43333 20.2211C4.81543 19.8567 5.27422 19.5424 5.65458 19.2953L5.77827 19.2148C6.22708 18.9214 6.5452 18.6966 6.76122 18.4618C6.949 18.2577 7 18.1106 7 17.9538C7 17.7032 6.79682 17.5 6.54619 17.5C6.38643 17.5 6.17637 17.5624 5.96065 17.6696C5.86192 17.7187 5.78047 17.768 5.72603 17.8034C5.69923 17.8209 5.67923 17.8346 5.66919 17.8418Z"
					/>
				</svg>
			</button>
			<button
				onClick={() => editor.chain().focus().toggleBold().run()}
				className={classNames("flex size-8 items-center justify-center rounded-md p-1 hover:bg-slate-300 [&>svg]:stroke-black", {
					"bg-[#349869] hover:!bg-[#1C4532] [&>svg]:stroke-white": editor.isActive("bold"),
				})}
			>
				<svg
					width="17"
					height="16"
					viewBox="0 0 17 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5 3.16666H8.83333C10.214 3.16666 11.3333 4.28594 11.3333 5.66666C11.3333 7.04737 10.214 8.16666 8.83333 8.16666H5V3.16666Z"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M5 8.16666H9.66667C10.9553 8.16666 12 9.21133 12 10.5C12 11.7887 10.9553 12.8333 9.66667 12.8333H5V8.16666Z"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
			<button
				onClick={() => editor.chain().focus().toggleItalic().run()}
				className={classNames("flex size-8 items-center justify-center rounded-md p-1 hover:bg-slate-300 [&>svg]:stroke-black", {
					"bg-[#349869] hover:!bg-[#1C4532] [&>svg]:stroke-white": editor.isActive("italic"),
				})}
			>
				<svg
					width="17"
					height="16"
					viewBox="0 0 17 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M9.83329 3.16666H8.33329M9.83329 3.16666H11.3333M9.83329 3.16666L7.16663 12.8333M7.16663 12.8333H5.66663M7.16663 12.8333H8.66663"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
			<button
				onClick={() => editor.chain().focus().toggleStrike().run()}
				className={classNames("flex size-8 items-center justify-center rounded-md p-1 hover:bg-slate-300 [&>svg]:stroke-black", {
					"bg-[#349869] hover:!bg-[#1C4532] [&>svg]:stroke-white": editor.isActive("strike"),
				})}
			>
				<svg
					width="17"
					height="16"
					viewBox="0 0 17 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3.66663 8.16668H13.3333M12.6666 5.50001V5.33334C12.6666 4.22877 11.7712 3.33334 10.6666 3.33334H6.33329C5.22872 3.33334 4.33329 4.22877 4.33329 5.33334V6.16668C4.33329 7.27125 5.22872 8.16668 6.33329 8.16668H10.5M4.33329 10.5V10.8333C4.33329 11.9379 5.22872 12.8333 6.33329 12.8333H10.6666C11.7712 12.8333 12.6666 11.9379 12.6666 10.8333V9.83334"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
			<button
				onClick={() => editor.chain().focus().toggleUnderline().run()}
				className={classNames("flex size-8 items-center justify-center rounded-md p-1 hover:bg-slate-300 [&>svg]:stroke-black", {
					"bg-[#349869] hover:!bg-[#1C4532] [&>svg]:stroke-white": editor.isActive("underline"),
				})}
			>
				<svg
					width="17"
					height="16"
					viewBox="0 0 17 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3.66663 12.8333H13.3333"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M11.3333 3.16666V7.33332C11.3333 8.89813 10.0648 10.1667 8.49996 10.1667C6.93515 10.1667 5.66663 8.89813 5.66663 7.33332V3.16666"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</BubbleMenu>
	);
};

export default CustomMenu;
