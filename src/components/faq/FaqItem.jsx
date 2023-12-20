"use client"
import React from 'react';

const FaqItem = (faq, index, activeIndex, toggleFaq) => {
    return (
        <div className='w-full mb-4'>
        <div className='cursor-pointer flex items-center py-3' onClick={() => toggleFaq(index)}>
            <span className="text-2xl font-semibold w-full mb-1">{faq.question}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className={`w-6 h-6 ${activeIndex === index ? "rotate-180" : "rotate-0"}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
        <div className={`py-2 text-lg ${activeIndex === index ? "block" : "hidden"}`}>{faq.answer}</div>
    </div>
    );
};

export default FaqItem;