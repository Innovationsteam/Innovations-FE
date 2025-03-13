const removeFirstH1 = (content: string): string => {
	return content.replace(/<h1>.*?<\/h1>/i, "").trim();
};
export const generateDescription = (content: string): string => {
	const cleanedContent = removeFirstH1(content);
	const sentences = cleanedContent
		.replace(/<\/?[^>]+(>|$)/g, "") 
		.split(/(?<=[.!?])\s+/); 

	const description = sentences.slice(0, 3).join(" ").trim();
	return description.length > 160 ? description.substring(0, 157) + "..." : description;
};
