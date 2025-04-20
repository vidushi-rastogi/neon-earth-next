import { TruckElectric, Scissors, Stamp, Image as ImageIcon, Star, StarHalf } from "lucide-react"
import Image from "next/image"

const Features = () => {
    return (
        <div className="shadow-md py-3 mt-2 flex w-full">
            <div className="container m-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-4 flex justify-center border-r">
                        <div className="me-3">
                            <Image
                                src="https://ds5e5and3r3r0.cloudfront.net/neonearth/images/opt/contentimages/images/sitejabber.png.webp?v=2466"
                                alt="site jabber"
                                width={64}
                                height={58}
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex gap-3">
                                <p>4.5</p>
                                <div className="flex">
                                    {[1,2,3,4].map((el) => (
                                        <Star 
                                            key={el} 
                                            className="w-5 h-5 fill-primary text-primary"
                                        />
                                    ))}
                                    <StarHalf className="w-5 h-5 fill-primary text-primary"/>
                                </div>
                            </div>
                            <p>Overall Satisfaction Rating</p>
                        </div>
                    </div>
                    <div className="col-span-8 mx-8 grid grid-cols-4 gap-4">
                        <div className="flex gap-2 max-w-[150px] justify-center">
                            <Scissors className="text-primary stroke-1 w-10 h-10 my-auto"/>
                            <p className="my-auto font-medium">Tailored Creation</p>
                        </div>
                        <div className="flex gap-2 max-w-[150px] justify-center">
                            <Stamp className="text-primary stroke-1 w-10 h-10 my-auto"/>
                            <p className="my-auto font-medium">Best-in-Class Printing</p>
                        </div>
                        <div className="flex gap-2 max-w-[150px] justify-center">
                            <ImageIcon className="text-primary stroke-1 w-10 h-10 my-auto"/>
                            <p className="my-auto font-medium">Diverse Design Library</p>
                        </div>
                        <div className="flex gap-2 max-w-[150px] justify-center">
                            <TruckElectric className="text-primary stroke-1 w-10 h-10 my-auto"/>
                            <p className="my-auto font-medium">Prompt Delivery</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
