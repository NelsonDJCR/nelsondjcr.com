// @flow strict

import Image from "next/image";
import Link from "next/link";

function DonatePage() {
    return (
        <div id="donate" className="my-12 lg:my-16 relative">
            <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
                <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">DONATE</span>
                <span className="h-36 w-[2px] bg-[#1a1443]"></span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left side - Message */}
                <div className="order-2 lg:order-1">
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
                                    Cantidad
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-500">$</span>
                                    <input
                                        type="number"
                                        id="amount"
                                        name="amount"
                                        min="1"
                                        placeholder="5"
                                        className="w-full bg-[#0a0d37] border border-[#1b2c68a0] rounded-lg py-3 pl-8 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                                    Nombre o Tag
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="@tu_usuario"
                                    className="w-full bg-[#0a0d37] border border-[#1b2c68a0] rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="3"
                                    placeholder="Escribe un mensaje de apoyo..."
                                    className="w-full bg-[#0a0d37] border border-[#1b2c68a0] rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition-colors resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-pink-500 to-violet-600 rounded-lg py-3 px-4 text-white font-medium uppercase tracking-wider transition-all duration-300 hover:from-pink-500 hover:to-violet-600 hover:scale-105"
                            >
                                Soporte
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DonatePage;
