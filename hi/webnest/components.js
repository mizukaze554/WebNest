export function WebNest(...components) {
	document.addEventListener('DOMContentLoaded', async () => {
		await WebNestComponents(...components);
	});
}

export async function WebNestComponents(...components) {
	// Add components to the DOM (dummy implementation)
	components.forEach(component => document.body.appendChild(component));
}


export function Text({text, className}) {
	const textParagraph = document.createElement('p');
	textParagraph.textContent = text;
	if (className != null) {
		className.split(' ').forEach(cls => textParagraph.classList.add(cls));
	} else {
		textParagraph.classList.add('px-3','py-2','text-lg','md:text-xl','font-bold');
	}

	return textParagraph;
}

export function CustomTag({tag, text, className, child}) {
	const customTag = document.createElement(tag);
	if (text != null) {	customTag.textContent = text;}
	if (className != null) {
		className.split(' ').forEach(cls => customTag.classList.add(cls));
	} else {
		customTag.classList.add('px-3','py-2','text-lg','md:text-xl','font-bold');
	}
	if (child != null) {
		customTag.appendChild(child);
	}
	return customTag;
}

