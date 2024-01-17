import Image from "next/image";

interface Props {
    width: number,
    height: number
}

export const VercelIcon = ({ width, height }: Props) => {
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

export function VercelColorIcon(props: any) {
    return (
        <svg
            viewBox="0 0 256 222"
            width="256"
            height="222"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            {...props}
        >
            <path fill="#fff" d="m128 0 128 221.705H0z" />
        </svg>
    )
}