import * as components from '../webnest/components.js';
import { RoutePath } from '../webnest/routes.js';

Object.assign(window, components);

RoutePath({
    '/': 'Home'
});

export function Home() {
    WebNest(
        CustomTag({
            tag: 'header',
            className: 'bg-white shadow',
            child: CustomTag({
                tag: 'div',
                className: 'container mx-auto px-6 py-3',
                child: Text({
                    text: 'Chinese Language Learning',
                    className: 'text-3xl font-bold text-gray-800'
                })
            })
        }),

        CustomTag({
            tag: 'main',
            className: 'container mx-auto px-6 py-8',
            child: CustomTag({
                tag: 'div',
                child: [
                    CustomTag({
                        tag: 'section',
                        className: 'mb-8',
                        child: [
                            Text({
                                text: 'Welcome to Chinese Language Learning',
                                className: 'text-2xl font-bold text-gray-800 mb-4'
                            }),
                            Text({
                                text: 'Start your journey to learn Chinese with our comprehensive and interactive lessons.',
                                className: 'text-lg text-gray-700'
                            })
                        ]
                    }),

                    CustomTag({
                        tag: 'section',
                        className: 'mb-8',
                        child: [
                            Text({
                                text: 'Featured Lessons',
                                className: 'text-xl font-bold text-gray-800 mb-4'
                            }),
                            CustomTag({
                                tag: 'div',
                                className: 'grid grid-cols-1 md:grid-cols-3 gap-6',
                                child: [
                                    CustomTag({
                                        tag: 'div',
                                        className: 'bg-white p-4 rounded-lg shadow-md',
                                        child: [
                                            CustomTag({
                                                tag: 'img',
                                                className: 'mb-2 rounded',
                                                attributes: { src: 'lesson1.jpg', alt: 'Lesson 1' }
                                            }),
                                            Text({
                                                text: 'Lesson 1: Introduction to Chinese',
                                                className: 'text-md font-semibold text-gray-800'
                                            })
                                        ]
                                    }),
                                    CustomTag({
                                        tag: 'div',
                                        className: 'bg-white p-4 rounded-lg shadow-md',
                                        child: [
                                            CustomTag({
                                                tag: 'img',
                                                className: 'mb-2 rounded',
                                                attributes: { src: 'lesson2.jpg', alt: 'Lesson 2' }
                                            }),
                                            Text({
                                                text: 'Lesson 2: Basic Phrases',
                                                className: 'text-md font-semibold text-gray-800'
                                            })
                                        ]
                                    }),
                                    CustomTag({
                                        tag: 'div',
                                        className: 'bg-white p-4 rounded-lg shadow-md',
                                        child: [
                                            CustomTag({
                                                tag: 'img',
                                                className: 'mb-2 rounded',
                                                attributes: { src: 'lesson3.jpg', alt: 'Lesson 3' }
                                            }),
                                            Text({
                                                text: 'Lesson 3: Numbers and Colors',
                                                className: 'text-md font-semibold text-gray-800'
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),

                    CustomTag({
                        tag: 'section',
                        className: 'text-center',
                        child: CustomTag({
                            tag: 'button',
                            text: 'Get Started',
                            className: 'bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline',
                            attributes: {
                                onclick: 'alert("Starting your Chinese learning journey!");'
                            }
                        })
                    })
                ]
            })
        }),

        CustomTag({
            tag: 'footer',
            className: 'bg-white shadow mt-8',
            child: CustomTag({
                tag: 'div',
                className: 'container mx-auto px-6 py-4',
                child: Text({
                    text: '© 2023 Chinese Language Learning. All rights reserved.',
                    className: 'text-gray-700 text-center'
                })
            })
        })
    );
}
