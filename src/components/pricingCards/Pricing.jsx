import React, { use } from "react";
import Basic from './card/Basic'
import Enterprise from "./card/Enterprise";
import Pro from "./card/Pro";

export default function Pricing({ pricingData }) {

    const data = use(pricingData);

    const { pricingCards, settings } = data;

    // console.log(pricingCards, settings)

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Pricing Plans
            </h1>
            <p className="text-gray-500 mb-10">
                Choose a plan that fits your needs
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">



                {/* Basic */}

                {
                    pricingCards.map((elem, index) => {
                        return (
                            <>
                                {/* {basic} */}
                                {elem.name === 'Basic' && <Basic key={elem.id} data={elem} />}

                                {/* {pro } */}
                                {elem.name === 'Pro' && <Basic key={elem.id} data={elem} />}

                                {/* {pro } */}
                                {elem.name === 'Enterprise' && <Basic key={elem.id} data={elem} />}


                            </>
                        )
                    })
                }


                {/* Pro */}


                {/* Enterprise */}


            </div>
        </div>
    );
}
