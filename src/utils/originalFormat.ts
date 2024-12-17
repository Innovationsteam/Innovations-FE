export  function convertToOriginalFormat(htmlString: string) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;

    const h1 = tempDiv.querySelector('h1');
    if (h1) {
        h1.remove();
    }
    let htmlContent = tempDiv.innerHTML;
    htmlContent = htmlContent.replace(/<\/(h1|p|div|ol|li)>/g, ' </$1>');
    htmlContent = htmlContent.replace(/<(h1|p|div|ol|li)>/g, '<$1> ');

    htmlContent = htmlContent.replace(/<\/(strong|em|u|span|b|i)>/g, ' </$1>');
    htmlContent = htmlContent.replace(/<(strong|em|u|span|b|i)>/g, '<$1> ');
    return htmlContent.trim();
}

export interface PostItem {
    author: {
        name: string;
    };
    id: string;
    publishedDate: string;
    image: string;
    title: string;
    content: string;
    likes: number;
    views: number;
    category: string;
    socialMediaShares: number;
}

export function formatDate(timestamp: string): string {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    return date.toLocaleDateString("en-US", options);
}
