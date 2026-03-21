import React from 'react';

const Enterprise = () => {
    return (
        <div>
            <div className="rounded-2xl shadow-lg p-8 bg-white border hover:scale-105 transition">
                <h2 className="text-2xl font-semibold mb-2">Enterprise</h2>
                <p className="text-gray-500 mb-6">For large organizations with advanced needs</p>

                <div className="mb-6">
                    <span className="text-4xl font-bold text-black">$199</ span>
                    <span className="text-gray-500 ml-1">/monthly</span>
                </div>

                <ul className="space-y-3  text-gray-400  mb-8">
                    <li className="flex gap-2"><span className="text-green-500">✔</span>Unlimited Projects</li>
                    <li className="flex gap-2"><span className="text-green-500">✔</span>Unlimited Storage</li>
                    <li className="flex gap-2"><span className="text-green-500">✔</span>24/7 Dedicated Support</li>
                    <li className="flex gap-2"><span className="text-green-500">✔</span>Full API Access</li>
                    <li className="flex gap-2"><span className="text-green-500">✔</span>Advanced Analytics + AI</li>
                    <li className="flex gap-2"><span className="text-green-500">✔</span>Multiple Custom Domains</li>
                </ul>

                <button className="w-full py-3 rounded-xl text-white font-semibold bg-amber-500 hover:opacity-90">
                    Contact Sales
                </button>
            </div>
        </div>
    );
};

export default Enterprise;