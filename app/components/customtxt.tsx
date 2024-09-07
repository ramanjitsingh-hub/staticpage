import React from 'react';

export default function CustomTxt() {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-[#e78895] text-2xl font-bold mb-8">
                Want to create a custom basket?
            </h1>
            <a href="https://wa.link/safcbi">
                <button className="rounded-md w-64 h-16 bg-red-400 text-white text-lg mb-6">
                    Order Custom Basket
                </button>
            </a>
        </div>
    );
}