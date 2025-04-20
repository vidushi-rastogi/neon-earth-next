import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <Image
        src="/banner-large.png" // You'll need to provide this image
        alt="Hero Background"
        className="object-cover hidden md:flex"
        priority
        width={1920}
        height={1080}
      />
      <Image
        src="/banner-small.png" // You'll need to provide this image
        alt="Hero Background"
        className="object-cover flex md:hidden"
        priority
        width={1920}
        height={1080}
      />
    </>
  );
};

export default Hero; 