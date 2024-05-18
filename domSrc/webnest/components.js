export function WebNest(...components) {
	document.addEventListener('DOMContentLoaded', async () => {
		await WebNestComponents(...components);
	});
}

export async function WebNestComponents(...components) {
	// Add components to the DOM
	components.forEach(component => document.body.appendChild(component));
}

function applyClassNames(element, className) {
	if (className) {
		className.split(' ').forEach(cls => element.classList.add(cls));
	} else {
		element.classList.add('px-3', 'py-2', 'text-lg', 'md:text-xl', 'font-bold');
	}
}

export function Text({ text, className }) {
	const paragraph = document.createElement('p');
	paragraph.textContent = text;
	applyClassNames(paragraph, className);
	return paragraph;
}

export function CustomTag({ tag, text, className, child }) {
	const element = document.createElement(tag);
	if (text) {
		element.textContent = text;
	}
	applyClassNames(element, className);
	if (child) {
		element.appendChild(child);
	}
	return element;
}
