export const WebsiteName = 'Frontend Framework like Flutter';
export const BrandName = 'WebNest';

// Add fonts and styles dynamically
export const FontsList = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Zhi+Mang+Xing&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
`;

export const Logo = `
    <link rel="icon" href="../icons/titleIcon.png" type="image/x-icon">
`;

export const CssStyle = `
    https://cdn.tailwindcss.com
`;

export function addHTML_Heads() {
    const head = document.head;
    head.innerHTML += FontsList;
    head.innerHTML += Logo;

    const script = document.createElement('script');
    script.src = CssStyle;
    script.async = true;
    head.appendChild(script);

    const title = document.createElement('title');
    title.textContent = BrandName;
    head.appendChild(title);
}

// Call the function to add fonts and style
addHTML_Heads();
