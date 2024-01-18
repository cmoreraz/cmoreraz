import Image from "next/image";

interface Props {
    width: number,
    height: number
}

export const NextIcon = ({width, height}: Props) => {
    return (
            <Image
                src="./images/next_icon.png"
                alt="Blur"
                className="absolute -left-32 bottom-32 z-0 w-32 md:bottom-32 md:left-0"
                width={width}
                height={height}
            />
    );
}