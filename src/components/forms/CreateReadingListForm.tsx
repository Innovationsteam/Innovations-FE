import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { READING_LIST_VISIBILITY } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useCreateReadingList } from "@/hooks/readingList/useCreateReadingList";

const schema = z.object({
	name: z.string().min(2, { message: "Must be at least 2 characters" }).max(50, { message: "Cannot exceed 50 characters" }),
	description: z.string().max(100, { message: "Cannot exceed 100 characters" }).optional(),
	visibility: z.enum(READING_LIST_VISIBILITY),
});

export type CreateReadingListData = z.infer<typeof schema>;

const CreateReadingListForm = () => {
	const {
		register,
		control,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<CreateReadingListData>({
		mode: "onChange",
		resolver: zodResolver(schema),
		defaultValues: {
			visibility: READING_LIST_VISIBILITY[0],
		},
	});

	const { mutate: createReadingList, isPending } = useCreateReadingList();

	const onSubmit = (data: CreateReadingListData) => createReadingList(data);
	return (
		<form
			className="grid gap-y-4"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="space-y-1 text-left">
				<Label
					htmlFor="name"
					className="text-base"
				>
					List Name
				</Label>
				<Input
					{...register("name")}
					id="name"
					type="text"
					placeholder="Enter your name"
				/>
				{errors.name && <p className="font-poppins mt-1 inline-block text-left text-sm text-red-500">{errors.name?.message}</p>}
			</div>
			<div className="space-y-1 text-left">
				<Label
					htmlFor="description"
					className="text-base"
				>
					Description (Optional)
				</Label>
				<Input
					{...register("description")}
					id="description"
					type="text"
					placeholder="Enter the Description"
				/>
				{errors.description && <p className="font-poppins mt-1 inline-block text-left text-sm text-red-500">{errors.description?.message}</p>}
			</div>
			<div className="space-y-1 text-left">
				<Label
					htmlFor="visibility"
					className="text-base"
				>
					Visibility
				</Label>
				<Controller
					name="visibility"
					control={control}
					render={({ field }) => (
						<Select
							onValueChange={field.onChange}
							value={field.value}
						>
							<SelectTrigger
								defaultValue={READING_LIST_VISIBILITY[0]}
								className="w-full"
							>
								<SelectValue placeholder="Select Visibiity" />
							</SelectTrigger>
							<SelectContent>
								{READING_LIST_VISIBILITY.map((value) => (
									<SelectItem
										key={value}
										value={value}
									>
										{value}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					)}
				/>
			</div>
			<Button
				type="submit"
				disabled={isPending || !isValid}
				className="mt-3"
			>
				{isPending ? (
					<img
						className="h-full object-cover"
						src="/assets/icons/loader.svg"
					/>
				) : (
					"Update Profile"
				)}
			</Button>
		</form>
	);
};

export default CreateReadingListForm;
