import React from "react";
import image from "../chris-dickens-b9cRz523N9c-unsplash.jpg"

export default function Home() {
    return(
        <main>
            <img 
                src={image} 
                alt="Chicago skyline" 
                className="absolute object-cover w-full h-full" 
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-white cursive loading-none lg:loading-sung home-name">Hi. I'm Kyle.</h1>
            </section>
        </main>
    )
};