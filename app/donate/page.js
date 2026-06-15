// @flow strict

"use client";

import { useState } from "react";

function DonatePage() {
    const [amount, setAmount] = useState("");

    const quickAmounts = [2, 5, 10];

    return (
        <div id="donate" className="my-12 lg:my-16 relative">
            <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
                <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">DONATE</span>
                <span className="h-36 w-[2px] bg-[#1a1443]"></span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left side - Message */}
                <div className="order-2 lg:order-1">
                    <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">About NelsonDJCR</p>
                    <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Support My Work</p>
                    <p className="text-gray-200 text-sm lg:text-lg mb-6 leading-relaxed">
                        Hey! I'm Nelson, a Colombian full-stack dev on a big journey, in code, in life, and on the road.
                        I left my comfort zone chasing goals, learning languages, exploring the world, Every coffee helps me stay focused, keep learning, and get closer to my dreams.
                    </p>
                    <p className="text-gray-200 text-sm lg:text-lg mb-6 leading-relaxed">
                        If you believe in small steps making big things, you're already part of my journey.
                    </p>
                </div>

                {/* Right side - Form */}
                <div className="order-1 lg:order-2">
                    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] p-6 lg:p-8">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent mt-0"></div>
                        <div className="px-4 lg:px-8 py-5">
                            <div className="flex flex-row space-x-2">
                                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                                <div className="h-3 w-3 rounded-full bg-green-200"></div>
                            </div>
                        </div>
                        <form className="space-y-5 mt-4">
                            <div>
                                <label htmlFor="amount" className="block text-sm font-medium text-gray-200 mb-2">
                                    Amount
                                </label>
                                <div className="relative flex items-center">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-500">$</span>
                                    <input
                                        type="text"
                                        id="amount"
                                        name="amount"
                                        min="1"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        placeholder="5"
                                        className="w-full bg-[#0a0d37] border border-[#1b2c68a0] rounded-lg py-3 pl-8 pr-[140px] text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                                    />
                                    <div className="absolute right-2 flex gap-2">
                                        {quickAmounts.map((val) => (
                                            <button
                                                key={val}
                                                type="button"
                                                onClick={() => setAmount(val.toString())}
                                                className="bg-[#1b2c68a0] hover:bg-pink-500 rounded-md py-1 px-2 text-white text-sm transition-colors"
                                            >
                                                ${val}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                                    Name or Tag
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="@your_username"
                                    className="w-full bg-[#0a0d37] border border-[#1b2c68a0] rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="3"
                                    placeholder="Write a support message..."
                                    className="w-full bg-[#0a0d37] border border-[#1b2c68a0] rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-pink-500 to-violet-600 rounded-lg py-3 px-4 text-white font-medium uppercase tracking-wider transition-all duration-300 hover:from-pink-500 hover:to-violet-600 hover:scale-105"
                            >
                                Support
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonatePage;
