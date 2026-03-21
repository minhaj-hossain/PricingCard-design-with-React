import React from 'react';

const Pro = () => {
    return (
        <div>
            <div className="relative rounded-2xl shadow-xl p-8 bg-white border-2 border-green-500 hover:scale-105 transition">
                <span className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                </span>

                <h2 className="text-2xl font-semibold mb-2">Pro</h2>
                <p className="text-gray-500 mb-6">Best for growing businesses and teams</p>

                <div className="mb-6">
                    <span className="text-4xl font-bold text-black">$79</span>
                    <span className="text-gray-500 ml-1">/monthly</span>
                </div>

                <ul className="space-y-3 mb-8 text-gray-400">
                    <li className="flex gap-2"><span className="text-green-500">✔</span>Unlimited Projects</li>
                    <li className="flex gap-2"><span className="text-green-500">✔</span>100GB Storage</li>
                    <li className="flex gap-2"><span className="text-green-500">✔</span>Priority Support</li>
                    <li className="flex gap-2"><span className="text-green-500">✔</span>Full API Access</li>
                    <li className="flex gap-2"><span className="text-green-500">✔</span>Advanced Analytics</li>
                    <li className="flex gap-2"><span className="text-green-500">✔</span>Custom Domain</li>
                </ul>

                <button className="w-full py-3 rounded-xl text-white font-semibold bg-green-500 hover:opacity-90">
                    Start Free Trial
                </button>
            </div>
        </div>
    );
};

export default Pro;