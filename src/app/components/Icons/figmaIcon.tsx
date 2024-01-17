import Image from "next/image";

interface Props {
    width: number,
    height: number
}

export const FigmaIcon = ({ width, height }: Props) => {
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

export const FigmaSvg = () => {
    return (
        <a
            className="rounded-lg p-2 hover:bg-white/25"
            href="https://www.figma.com/@cmoreraz"
            target="_blank"
            rel="noreferrer"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
            >
                <title>Figma</title>
                <path
                    d="M13 1.625H9.20829C7.11421 1.625 5.41663 3.32259 5.41663 5.41667C5.41663 7.51075 7.11421 9.20833 9.20829 9.20833M13 1.625V9.20833M13 1.625H16.7916C18.8857 1.625 20.5833 3.32259 20.5833 5.41667C20.5833 7.51075 18.8857 9.20833 16.7916 9.20833M13 9.20833H9.20829M13 9.20833V16.7917M13 9.20833H16.7916M9.20829 9.20833C7.11421 9.20833 5.41663 10.9059 5.41663 13C5.41663 15.0941 7.11421 16.7917 9.20829 16.7917M13 16.7917H9.20829M13 16.7917V20.5833C13 22.6774 11.3024 24.375 9.20829 24.375C7.11421 24.375 5.41663 22.6774 5.41663 20.5833C5.41663 18.4893 7.11421 16.7917 9.20829 16.7917M16.7916 9.20833C18.8857 9.20833 20.5833 10.9059 20.5833 13C20.5833 15.0941 18.8857 16.7917 16.7916 16.7917C14.6975 16.7917 13 15.0941 13 13C13 10.9059 14.6975 9.20833 16.7916 9.20833Z"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </a>
    );

}