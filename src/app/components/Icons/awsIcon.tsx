"use server";

import Image from "next/image";

interface Props {
    width: number,
    height: number
}

export const AwsIcon = ({width, height}: Props) => {
    return (
        <>
            <Image
                src="./images/aws_icon.png"
                alt="Blur"
                className="absolute -right-20 bottom-32 z-0 w-24 md:bottom-32 md:right-16 "
                width={width}
                height={height}
            />
        </>
    );
}