"use client";

import Image from "next/image"

const designs = [
    {
        name: "Vintage",
        image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/design_theme/Vintage.png"
    },
    {
        name: "Design",
        image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/design_theme/Design.png"
    },
    {
        name: "Wilderness Dreams",
        image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/design_theme/Wilderness_Dreams_1743768078962.png"
    },
    {
        name: "Abstract",
        image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/design_theme/Abstract.png"
    },
    {
        name: "Astronomy",
        image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/design_theme/Space_and_Astronomy.png"
    },
    {
        name: "Nature",
        image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/design_theme/Nature_07021106202401.png"
    },
    {
        name: "Kids",
        image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/design_theme/Kids.png"
    },
    {
        name: "Geometric",
        image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/design_theme/Geometric.png"
    },
    {
        name: "Minimalist",
        image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/design_theme/Minimalist.png"
    },
    {
        name: "Botanical",
        image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/design_theme/Botanical.png"
    }
]

const Designs = () => {
    return (
        <div className="flex flex-col gap-8 p-10 justify-center">
            <div className="text-base md:text-lg lg:text-2xl text-center">We Curate, You Create - Explore 60K+ Designs</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto">
                {designs.map(design => (
                    <div className="flex flex-col justify-center gap-4 max-w-[230px]" key={design.name}>
                        <div className="w-[230px] h-[230px] border rounded-lg flex overflow-hidden cursor-pointer">
                            <Image
                                src={design.image}
                                alt={design.name}
                                width={195}
                                height={195}
                                className="m-auto transition-transform duration-500 hover:scale-125"
                            />
                        </div>
                        <div className="text-center">{design.name}</div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <button
                    className="bg-primary text-secondary hover:bg-primary/70 rounded-md px-6 py-2 cursor-pointer">
                    Explore More Designs
                </button>
            </div>
        </div>
    )
}

export default Designs;
