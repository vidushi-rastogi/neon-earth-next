import Image from "next/image"

const sideImages = [
    {
        src: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Personalized_curtains_1704975954784.jpg",
        label: "Custom Drapes"
    },
    {
        src: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Custom_Drapes_1704975983508.jpg",
        label: "Blackout Curtains"
    },
    {
        src: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/ShowerCurtains_1704957410818.jpg",
        label: "Shower Curtains"
    },
    {
        src: "https://ds5e5and3r3r0.cloudfront.net/neonearth/images/product/Custom_Sheer_Curtains_1704957381024.jpg",
        label: "Sheer Curtains"
    },
]

const DisplayPatterns = () => {
    return (
        <div className="hidden lg:flex lg:flex-col py-10 ml-[110px] mr-[50px] gap-10">
            <div className="border rounded-lg px-6 py-[70px] flex flex-col lg:flex-row gap-10 items-center lg:items-start">
                {/* Left side image */}
                <div className="w-full lg:w-[35%] ml-[-100px]">
                    <Image
                        alt="main image"
                        src="https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/contentimages/ne_custom/Hero_1704957564105.png.webp?v=2466"
                        width={500}
                        height={300}
                        className="object-cover w-full h-auto"
                    />
                </div>

                {/* Right side content */}
                <div className="w-full lg:w-[65%] flex flex-col justify-between gap-6">
                    {/* Heading */}
                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl">Curtain Creations</h2>
                        <p className="text-gray-800 text-[15px]">Personalized Drapes to Set the Ambience</p>
                    </div>

                    {/* Grid of side images */}
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {sideImages.map(({ src, label }) => (
                            <div className="flex flex-col justify-center gap-4 max-w-[160px]" key={label}>
                                <div className="w-[160px] h-[160px] bg-gray-100 flex overflow-hidden cursor-pointer">
                                    <Image
                                        src={src}
                                        alt={label}
                                        width={140}
                                        height={140}
                                        className="m-auto transition-transform duration-500 hover:scale-125"
                                    />
                                </div>
                                <div className="text-center text-sm">{label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="w-full flex justify-center">
                        <button className="px-6 py-2 rounded-md bg-primary text-white hover:bg-primary/70 transition">
                            Show Me More
                        </button>
                    </div>
                </div>
            </div>
            <div className="border rounded-lg px-6 py-[70px] flex flex-col lg:flex-row gap-10 items-center lg:items-start">
                {/* Left side image */}
                <div className="w-full lg:w-[35%] ml-[-100px]">
                    <Image
                        alt="main image"
                        src="https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/contentimages/ne_custom/Hero_1704957103480.jpg.webp?v=2466"
                        width={500}
                        height={300}
                        className="object-cover w-full h-auto"
                    />
                </div>

                {/* Right side content */}
                <div className="w-full lg:w-[65%] flex flex-col justify-between gap-6">
                    {/* Heading */}
                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl">Curtain Creations</h2>
                        <p className="text-gray-800 text-[15px]">Personalized Drapes to Set the Ambience</p>
                    </div>

                    {/* Grid of side images */}
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {sideImages.map(({ src, label }) => (
                            <div className="flex flex-col justify-center gap-4 max-w-[160px]" key={label}>
                                <div className="w-[160px] h-[160px] bg-gray-100 flex overflow-hidden cursor-pointer">
                                    <Image
                                        src={src}
                                        alt={label}
                                        width={140}
                                        height={140}
                                        className="m-auto transition-transform duration-500 hover:scale-125"
                                    />
                                </div>
                                <div className="text-center text-sm">{label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="w-full flex justify-center">
                        <button className="px-6 py-2 rounded-md bg-primary text-white hover:bg-primary/70 transition">
                            Show Me More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayPatterns;
