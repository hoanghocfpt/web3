"use client"

import FaqItem from "@/components/faq/FaqItem";
import React, { useState } from "react";

const FAQPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }
    const faqs = [
        {
            question: "What is LandX?",
            answer: "LandX is the perpetual commodity vaults protocol providing real-world farmers access to capital and offering investors exposure to farmland crop share in the form of a liquid token."
        },
        {
            question: "What problem does LandX solve for farmers?",
            answer: "Farmers need capital for equipment upgrades, storage updates, and to expand their operation. Access to financing for farmers is logistically difficult and unavailable in many parts of the world."
        },
        {
            question: "What problem does LandX solve for investors?",
            answer: "xTokens offer a sustainable daily yield and long-term inflation hedge."
        },
        // More FAQ items...
    ];
    return (
        <div className='border-b border-gray-300 p-5 sm:p-7 md:p-24'>
            <div className="mx-auto max-w-3xl ">
                <h2 className='text-white font-bold text-5xl mb-3'>FAQ</h2>
                <span className='text-white text-base'>FAQ Top 10</span>
                <div className='text-white py-8'>
                    {/* Lặp qua một mảng các câu hỏi và hiển thị chúng */}
                    {faqs.map((faq, index) => (
                        FaqItem(faq, index, activeIndex, toggleFaq)
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQPage;