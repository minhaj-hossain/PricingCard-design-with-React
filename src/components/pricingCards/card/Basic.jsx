import React from 'react';

const Basic = ({ data }) => {

    const { name, price, description, buttonText, billingPeriod, features } = data;

    // console.log(color)


    return (
        <div>
            <div className="rounded-2xl shadow-lg p-8 bg-white border hover:scale-105 transition">

                {name.toLowerCase() == 'pro' ? <span className=" bg-green-500 text-white text-xs px-3 py-1 ml-[50%] hover:opacity-90 rounded-full cursor-pointer">
                    Most Popular
                </span> : null}

                <h2 className="text-2xl text-black font-semibold mb-2">{name}</h2>
                <p className="text-gray-500 mb-6">{description}</p>

                <div className="mb-6">
                    <span className="text-4xl text-black font-bold">${price}</span>
                    <span className="text-gray-500 ml-1">/{billingPeriod}</span>
                </div>

                <ul className="space-y-3 text-gray-400 mb-8">


                    {features.map(feature => (



                        < li className="flex gap-2" > <span className={`${feature.included ? 'text-green-500' : 'text-red'}`}>{feature.included ? '✔' : '✖'}</span>{feature.name}</li >

                    ))}


                    {/* <li className="flex gap-2"><span className="text-green-500">✔</span>5 Projects</li>
                    <li className="flex gap-2"><span className="text-green-500">✔</span>10GB Storage</li>
                    <li className="flex gap-2"><span className="text-green-500">✔</span>Basic Support</li>
                    <li className="flex gap-2 text-gray-400"><span>✖</span>API Access</li>
                    <li className="flex gap-2 text-gray-400"><span>✖</span>Advanced Analytics</li>
                    <li className="flex gap-2 text-gray-400"><span>✖</span>Custom Domain</li> */}
                </ul>

                <button className={`w-full py-3 rounded-xl text-white font-semibold 
                
                ${name == 'Basic' && 'bg-indigo-600'}
                
                ${name == 'Enterprise' && 'bg-amber-500'}
                
                ${name == 'Pro' && 'bg-green-500'}
                
                hover:opacity-90 cursor-pointer `}>
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default Basic;