export function WebNest(...components) {
    const app = document.body; // Get the body element
    app.innerHTML = ''; // Clear existing content
    components.forEach(component => app.appendChild(component));
}

export function applyClassNames(element, className) {
    if (className) {
        className.split(' ').forEach(cls => element.classList.add(cls));
    }
}

const useState = initialValue => {
    let state = initialValue;
    const subscribers = [];

    const setState = newState => {
        state = newState;
        subscribers.forEach(subscriber => subscriber(state));
    };

    const getState = () => state;

    const subscribe = subscriber => {
        subscribers.push(subscriber);
    };

    return [getState, setState, subscribe];
};

export function createComponent(tag, { children = [], className = '', style = '', ...props }) {
    const element = document.createElement(tag);
    applyClassNames(element, className);

    Object.keys(props).forEach(key => {
        element[key] = props[key];
    });

    element.setAttribute('style', style.trim());

    if (!Array.isArray(children)) {
        children = [children];
    }

    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });

    return element;
}

export function Text({ text, className, style, ...props }) {
    return createComponent('p', { children: [text], className, style, ...props });
}

export function Container({ children, className, style, ...props }) {
    return createComponent('div', { children, className, style, ...props });
}

export function Row({ children, className, style, ...props }) {
    return createComponent('div', { children, className: `flex ${className}`, style, ...props });
}

export function Column({ children, className, style, ...props }) {
    return createComponent('div', { children, className: `flex flex-col ${className}`, style, ...props });
}

export function Image({ src, alt, className, style, ...props }) {
    return createComponent('img', { className, style, src, alt, ...props });
}

export function Button({ text, onClick, className, style, ...props }) {
    return createComponent('button', { children: [text], className, style, onclick: onClick, ...props });
}

export function Navigation({ brandName, links }) {
    const [getDrawerOpen, setDrawerOpen, subscribeDrawerOpen] = useState(false); // State to manage drawer visibility

    // Toggle function for drawer visibility
    const toggleDrawer = () => {
        setDrawerOpen(!getDrawerOpen());
    };

    const nav = Container({ className: 'bg-teal-900 flex justify-between text-white p-4' });

    // Brand Name
    const brand = Text({
        text: brandName,
        className: 'text-4xl font-bold mr-auto animate-pulse',
        style: 'font-family: "Zhi Mang Xing", cursive'
    });
    nav.appendChild(brand);

    // Links for larger screens
    const linkButtons = links.map(link => {
        return Button({
            text: link.text,
            className: 'mr-4 hover:text-teal-300 hover:shadow-xl',
            onClick: () => {
                navigate(link.path);
                setDrawerOpen(false); // Close drawer when a link is clicked
            }
        });
    });

    const linkContainer = Row({ className: 'hidden md:flex', children: linkButtons });
    nav.appendChild(linkContainer);

    // Drawer for smaller screens
    const drawerContainer = Container({
        className: 'fixed inset-y-0 left-0 bg-teal-900 text-white transform -translate-x-full transition-transform duration-300 md:hidden',
        style: 'width: 70vw; height: 100vh;', // 70% width, 100% height
        children: Column({
            children: links.map(link => {
                return Button({
                    text: link.text,
                    className: 'block py-2 px-4 hover:text-teal-300',
                    onClick: () => {
                        navigate(link.path);
                        toggleDrawer(); // Close drawer when a link is clicked
                    }
                });
            })
        })
    });

    // Subscribe to drawer state changes
    subscribeDrawerOpen(isOpen => {
        if (isOpen) {
            drawerContainer.classList.remove('-translate-x-full');
        } else {
            drawerContainer.classList.add('-translate-x-full');
        }
    });

    // Hamburger button
    const hamburgerButton = Button({
        text: '☰',
        className: 'md:hidden block',
        onClick: toggleDrawer
    });

    nav.appendChild(hamburgerButton);

    return Container({
        children: [nav, drawerContainer],
        className: ''
    });
}
