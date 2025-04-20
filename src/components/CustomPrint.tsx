"use client";

import Image from "next/image"
import { useState } from "react"

const printableItems = [
    {
        type: "tote_bag",
        label: "Custom Tote Bag - Jute",
        image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/ne_personalise_product/component_preview_1715723139.png?v=2466",
        printPos: "w-12 h-12 bottom-[70px] left-[100px]",
        price: "$17.96"
    },
    {
        type: "wall_tapestry",
        label: "Custom Wall Tapestry - Valvet Satin",
        image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product_variants/Custom_Hanging_Tapestry-_Satin.png",
        printPos: "w-32 h-32 top-[80px] right-[65px]",
        price: "$20.01"
    },
    {
        type: "pillow",
        label: "Custom Square Pillow Throw - Valvet Satin",
        image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product_variants/Square_Throw_Pillow_Canvas_Lifestyle.png",
        printPos: "w-32 h-32 top-[70px] right-[65px]",
        price: "$16.77"
    },
    {
        type: "hoodie",
        label: "Custom Hoodies - Premium Sheep Wool",
        image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/product/ne_personalise_product/component_preview_2037194457.png?v=2466",
        printPos: "w-20 h-20 top-[55px] left-[95px]",
        price: "$22.06"
    },
]

const CustomPrint = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    return (
        <div className="py-10 flex flex-col gap-8">
            <div className="text-base md:text-lg lg:text-2xl text-center">Personalized Living Starts Here</div>
            <div className="w-full overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 w-max sm:w-[250px] md:w-[500px] lg:w-full lg:justify-center">
                    {printableItems.map(({ type, label, image, printPos, price }) => (
                        <div className="flex flex-col gap-4 justify-center w-[250px] flex-shrink-0" key={type}>
                            <div className="relative">
                                <Image
                                    src={image}
                                    alt="printable image"
                                    width={250}
                                    height={250}
                                    className="rounded-lg border"
                                />
                                <div className={`absolute overflow-hidden ${printPos}`}>
                                    {selectedImage && (
                                        <Image
                                            src={selectedImage}
                                            alt="uploaded print"
                                            width={112}
                                            height={112}
                                            className="object-cover w-full h-full"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="text-center font-semibold">
                                {label}
                            </div>
                            <div className="bg-gray-100 p-2 mx-auto rounded-md text-sm mt-auto">
                                <span className="text-gray-500">Starting at </span><span className="font-semibold">{price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center">
                <label className="bg-primary text-secondary hover:bg-primary/70 rounded-md px-6 py-2 cursor-pointer">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                    />
                    Upload Print
                </label>
            </div>
        </div>
    )
}

export default CustomPrint;
