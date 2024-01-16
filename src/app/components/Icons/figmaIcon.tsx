import Image from "next/image";

interface Props {
    width: number,
    height: number
}

export const FigmaIcon = ({width, height}: Props) => {
    return (
        <>
            <Image
                src="./images/figma_icon.png"
                alt="Blur"
                className="absolute -right-20 top-16 z-0 w-24 md:right-0 md:top-16 "
                width={width}
                height={height}
              />
        </>
    );
}