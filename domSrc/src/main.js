import * as components from '../webnest/components.js';
import * as configs from './config.js';
import { RoutePath } from '../webnest/routes.js';

Object.assign(window, components);

RoutePath({
    '/': 'Home',
    '/about': 'About'
});

export function Home() {
    WebNest(
        Navigation({
            brandName: configs.BrandName,
            links: [
                { text: 'Home', path: '/' },
                { text: 'About', path: '/about' }
            ],
            className: 'bg-cyan-900 flex justify-between text-white p-4'
        }),
        Container({
            className: 'relative h-screen flex flex-col items-center justify-center bg-white',
            children: [
                Row({
                    className: 'flex items-center justify-around', // Centering the column content
                    children: [
                        Image({
                            src: '../icons/icon.png',
                            className: 'text-9xl font-extrabold text-teal-900 z-10' // Centering horizontally
                        }),
                        Text({
                            text: configs.BrandName,
                            className: 'font-extrabold text-black opacity-20',
                            style: 'font-family: "Zhi Mang Xing", cursive; font-size: 15em; text-align: center;' // Centering horizontally
                        })
                    ]
                })
            ]
        })
    );
}

export function About() {
    WebNest(
        Navigation({
            brandName: configs.BrandName,
            links: [
                { text: 'Home', path: '/' },
                { text: 'About', path: '/about' }
            ],
            className: 'bg-cyan-900 flex justify-between text-white p-4'
        }),
        Container({
            className: 'container mx-auto px-6 py-12',
            children: [
                Text({
                    text: 'About Page',
                    className: 'text-3xl font-bold text-gray-800',
                    style: 'font-family: "Zhi Mang Xing", cursive'
                })
            ]
        })
    );
}
