'use client'
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Faq = () => {
    const [openItems, setOpenItems] = useState({});

    const faqData = {
        'Features and Support': [
            {
                question: 'What are the key features of your printers?',
                answer: (
                    <ul className="list-disc pl-4">
                        <li>High-resolution printing capabilities</li>
                        <li>Eco-friendly and cost-efficient designs</li>
                        <li>Wireless connectivity (Wi-Fi and Bluetooth)</li>
                    </ul>
                )
            },
            {
                question: 'Do your card printers support dual-sided printing?',
                answer: 'Yes, many of our card printers support single-sided and dual-sided printing.'
            }
        ],
        'Warranty and Repairs': [
            {
                question: 'Do the printers come with a warranty?',
                answer: 'Yes, all our new printers come with a manufacturer’s warranty, and refurbished models include a limited warranty for peace of mind.'
            },
            {
                question: 'What should I do if my printer needs repair?',
                answer: "We offer in-house repair services. You can bring your printer to our service center, or request on-site support for eligible models."
            }
        ],


    };

    const toggleItem = (category, index) => {
        setOpenItems(prev => ({
            ...prev,
            [`${category}-${index}`]: !prev[`${category}-${index}`]
        }));
    };

    return (
        <div className="max-w-screen-lg md:max-w-screen-xl px-8 lg:px-0 mx-auto p-6">
            <div className='w-full flex flex-col justify-center items-center mb-8 '>
                <h1 className='text-4xl md:text-5xl '>Frequently Asked Questions</h1>
                <span className='bg-[var(--maincolor)] w-40 h-1 rounded-full mt-2 '></span>
                </div>

            {Object.entries(faqData).map(([category, items]) => (
                <div key={category} className="mb-8">
                    <h2 className="text-xl font-semibold  mb-4">{category}</h2>

                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggleItem(category, index)}
                                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors duration-200"
                            >
                                <span className="font-medium ">{item.question}</span>
                                <ChevronDown
                                    className={`transform transition-transform duration-200 ${openItems[`${category}-${index}`] ? 'rotate-180' : ''
                                        }`}
                                    size={20}
                                />
                            </button>

                            <div
                                className={`transition-all duration-200 ease-in-out ${openItems[`${category}-${index}`]
                                        ? 'max-h-96 opacity-100'
                                        : 'max-h-0 opacity-0'
                                    } overflow-hidden`}
                            >
                                <div className="p-4 ">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Faq;