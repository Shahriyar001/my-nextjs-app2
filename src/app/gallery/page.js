import Image from "next/image";
import nextImage from "@/accets/464680936_122184249902222561_3179931177788976430_n.jpg";

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Imahe optimizations</h1>
      <h2 className="text-center text-2xl">Regular Image Tag</h2>

      <Image
        src="https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg"
        alt="next-img"
        className="mx-auto"
        width={500}
        height={500}
      />
      <h1 className="text-4xl text-center">Local Image</h1>
      <h2 className="text-center text-2xl">Regular Image Tag</h2>

      <Image
        src={nextImage}
        alt="next-img"
        className="mx-auto"
        width={500}
        height={500}
      />
    </div>
  );
};

export default GalleryPage;
