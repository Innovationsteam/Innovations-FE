import {  useNavigate } from "react-router-dom";

interface MiniPostProps {
	image: string;
	content: string; 
	// author: string; 
	id:string
	title:string
}
function convertToOriginalFormat(htmlString: string) {
	const tempDiv = document.createElement('div');
	tempDiv.innerHTML = htmlString;
	
	const h1 = tempDiv.querySelector('h1');
	if (h1) {
		h1.remove();
	}
	
	const firstParagraph = tempDiv.querySelector('p');
	
	if (firstParagraph) {
		let htmlContent = firstParagraph.innerHTML;
		
		htmlContent = htmlContent.replace(/<\/(h1|p|div|ol|li)>/g, ' </$1>');
		htmlContent = htmlContent.replace(/<(h1|p|div|ol|li)>/g, '<$1> ');

		htmlContent = htmlContent.replace(/<\/(strong|em|u|span|b|i)>/g, ' </$1>');
		htmlContent = htmlContent.replace(/<(strong|em|u|span|b|i)>/g, '<$1> ');

		return htmlContent.trim(); 
	}
	
	return '';
}
export const MiniPost = ({  content, title,id }: MiniPostProps) => {
	const navigate = useNavigate()
	const toArticle=()=>{
		navigate("/article",{
			state:id
		})
	}
	return (
		<div onClick={toArticle}>
			<li className="font-roboto">
				{/* <div className="mb-1 flex items-center gap-x-2">
					<img
						src={image}
						alt=""
					/>
					<div className="flex gap-x-2">
						<span className="text-[#141414E5]">Jason</span> 
						<span className="text-[#5B7083]">·</span>
						<span className="text-[#5B7083]">20 min</span>
					</div>
				</div> */}
				<div>
					<span className="font-semibold text-[#141414CC]">{title}</span>
					<p className="max-w-[273px] text-xs leading-5 text-[#14141499]"
						dangerouslySetInnerHTML={{ __html: convertToOriginalFormat(content) }}
					/>
				</div>
			</li>
		</div>
	);
};