const Footer = () => {
    return <div className="p-10 bg-black text-secondary">
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-5">
                <div className="text-lg font-semibold">Designs Come True!</div>
                <div className="font-light leading-8">
                    At the heart of Neon Earth lies the belief that your home is more than just a physical space; it's a canvas for self-expression. Neon Earth acts as an enabler, providing comfort, and the freedom to ‘Create Your New’. Visualize It - Design it - Bring It to life: because the final product belongs to you.
                </div>
            </div>
            <div className="col-span-12 lg:col-span-8 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0">
                <div className="flex flex-col gap-4">
                    <p className="text-lg text-gray-500 font-medium">Quick Link</p>
                    <div className="flex flex-col gap-2">
                        <p>Order a Swatch Kit</p>
                        <p>Bulk Quote</p>
                        <p>Track Your Order</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-lg text-gray-500 font-medium">Help</p>
                    <div className="flex flex-col gap-2">
                        <p>FAQ</p>
                        <p>Refund</p>
                        <p>Sipping</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-lg text-gray-500 font-medium">Your Account</p>
                    <div className="flex flex-col gap-2">
                        <p>Your Orders</p>
                        <p>Your Wallet</p>
                        <p>Saved Designs</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-lg text-gray-500 font-medium">The Company</p>
                    <div className="flex flex-col gap-2">
                        <p>About Us</p>
                        <p>User Agreement</p>
                        <p>Blog</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-lg text-gray-500 font-medium">Get in touch</p>
                    <div className="flex flex-col gap-2">
                        <p>wecare@neonearth.com</p>
                        <p>(855) 349-6366</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;