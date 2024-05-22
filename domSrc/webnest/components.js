export function WebNest(...components) {
    document.body.innerHTML = ''; // Clear existing content
    components.forEach(component => document.body.appendChild(component));
}

export function applyClassNames(element, className) {
    if (className) {
        className.split(' ').forEach(cls => element.classList.add(cls));
    }
}

export function Text({ text, className }) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    applyClassNames(paragraph, className);
    return paragraph;
}

export function CustomTag({ tag, text, className, child, attributes }) {
    const element = document.createElement(tag);
    if (text) {
        element.textContent = text;
    }
    applyClassNames(element, className);
    if (child) {
        if (Array.isArray(child)) {
            child.forEach(c => element.appendChild(c));
        } else {
            element.appendChild(child);
        }
    }
    if (attributes) {
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        });
    }
    return element;
}

export function Container({ child, className }) {
    const div = document.createElement('div');
    applyClassNames(div, className);
    if (child) {
        div.appendChild(child);
    }
    return div;
}

export function Row({ children, className }) {
    const div = document.createElement('div');
    applyClassNames(div, className);
    div.style.display = 'flex';
    div.style.flexDirection = 'row';
    children.forEach(child => div.appendChild(child));
    return div;
}

export function Column({ children, className }) {
    const div = document.createElement('div');
    applyClassNames(div, className);
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    children.forEach(child => div.appendChild(child));
    return div;
}

export function Image({ src, alt, className }) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    applyClassNames(img, className);
    return img;
}

export function Button({ text, onClick, className }) {
    const button = document.createElement('button');
    button.textContent = text;
    applyClassNames(button, className);
    button.addEventListener('click', onClick);
    return button;
}
