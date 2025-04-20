"use client";

import Image from "next/image";
import Dropdown from "./ui/dropdown";

const menuItems = [
    "Custom Wall Paper",
    "Custom Wall Murals",
    "Photo and Art Prints",
    "Poster Prints",
    "Canvas Prints",
    "Acrylic Prints",
    "Hanging Canvas"
];

const subMenuItems = [
    "Wallpaper - Stone Grain",
    "Wallpaper - Canvas Grain",
    "Wallpaper - Timber Grain"
]

// Sample dropdown items - you can customize these based on your needs
const DropdownContent = () => (
    <div className="grid grid-cols-3 w-[800px] h-[500px]">
        <div className="flex flex-col px-6 bg-gray-100">
            {menuItems.map(item => (
                <div key={item} className="flex justify-between py-3 hover:text-primary cursor-pointer">
                    <p className="my-auto font-medium">{item}</p>
                    <svg
                        className="w-4 h-4 my-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
            ))}
        </div>
        <div className="flex flex-col px-6 py-3">
            {subMenuItems.map(item => (
                <div key={item} className="py-1 text-sm">{item}</div>
            ))}
        </div>
        <div>
            <Image
                alt="dropdown menu image"
                src="https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Throw_Pillows___Covers_1704884358293.jpg"
                width={400}
                height={700}
                className="object-cover"
            />
        </div>
    </div>
)

const Categories = () => {
    const categoriesArray = [
        {
            label: "All",
            image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/contentimages/ne_custom/Frame_1_1714460169195.png.webp?v=2466",
            showDropdown: false,
            isNewFeature: false
        },
        {
            label: "Wall Arts",
            image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Frame_9_1714459571675.png",
            showDropdown: true,
            isNewFeature: false
        },
        {
            label: "Tapestries",
            image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Frame_2_1714459625926.png",
            showDropdown: true,
            isNewFeature: false
        },
        {
            label: "Rugs & Mats",
            image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/rug_1715926425323_1724912019890.png",
            showDropdown: true,
            isNewFeature: true
        },
        {
            label: "Pillows",
            image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Frame_3_1714459951804.png",
            showDropdown: true,
            isNewFeature: false
        },
        {
            label: "Curtains",
            image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Frame_4_1714460007048.png",
            showDropdown: true,
            isNewFeature: false
        },
        {
            label: "Custom Fabic",
            image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Custom-fabric_Icon_1730199405715.png",
            showDropdown: true,
            isNewFeature: false
        },
        {
            label: "Pet Zone",
            image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Frame_11_1714460067233.png",
            showDropdown: true,
            isNewFeature: false
        },
        {
            label: "Clothing",
            image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Clothing_1715942618433.png",
            showDropdown: true,
            isNewFeature: false
        },
        {
            label: "More",
            image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Frame_8_1714460140703.png",
            showDropdown: true,
            isNewFeature: false
        },
        {
            label: "Theme",
            image: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/contentimages/ne_custom/09-Theme_1__1__1714460180483.png.webp?v=2466",
            showDropdown: true,
            isNewFeature: false
        }
    ]


    return (
        <div className="w-full flex justify-center item-center relative">
            <div className="mx-auto overflow-x-auto scrollbar-hide">
                <div className="flex space-x-8 px-8 min-w-max">
                    {categoriesArray.map((category) => (
                        category.showDropdown ? (
                            <Dropdown
                                key={category.label}
                                trigger={
                                    <div className="cursor-pointer flex flex-col items-center py-5 border-b-[3px] border-secondary hover:border-primary">
                                        <div className="w-[60px] h-[60px] relative">
                                            <Image
                                                src={category.image}
                                                alt={category.label}
                                                className="w-full h-full object-cover rounded-lg"
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <div className="flex items-center cursor-pointer">
                                                <span className="text-sm font-medium">{category.label}</span>
                                                <svg
                                                    className="w-3 h-3 ml-1"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                }
                            >
                                <DropdownContent />
                            </Dropdown>
                        ) : (
                            <div key={category.label} className="cursor-pointer flex flex-col items-center py-5 border-b-[3px] border-secondary">
                                <div className="w-[60px] h-[60px] relative">
                                    <Image
                                        src={category.image}
                                        alt={category.label}
                                        className="w-full h-full object-cover rounded-lg"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="flex items-center mt-2">
                                    <span className="text-sm font-medium">{category.label}</span>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Categories;