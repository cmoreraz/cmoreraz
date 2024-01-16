import Image from "next/image";

interface Props {
    width: number,
    height: number
}

export const VercelIcon = ({width, height}: Props) => {
    return (
        <>
            <Image
                src="./images/vercel_icon.png"
                alt="Blur"
                className="absolute -left-8 top-16 z-0 w-16 md:left-32 md:top-16 "
                width={width}
                height={height}
              />
        </>
    );
}