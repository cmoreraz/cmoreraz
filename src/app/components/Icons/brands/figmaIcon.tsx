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

export function FigmaColorIcon(props: any) {
    return (
        <svg
            width="54"
            height="80"
            viewBox="0 0 54 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clip-path="url(#clip0_912_3)">
                <path
                    d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z"
                    fill="#0ACF83"
                />
                <path
                    d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z"
                    fill="#A259FF"
                />
                <path
                    d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z"
                    fill="#F24E1E"
                />
                <path
                    d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z"
                    fill="#FF7262"
                />
                <path
                    d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z"
                    fill="#1ABCFE"
                />
            </g>
            <defs>
                <clipPath id="clip0_912_3">
                    <rect width="53.3333" height="80" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export function ArrowFigma(props: any) {
    return (
        <svg
            width="37"
            height="36"
            viewBox="0 0 37 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g filter="url(#filter0_d_107_3640)">
                <path
                    d="M31.1659 6.18824L6.96703 0.92436C5.39894 0.58326 4.08791 2.13497 4.68603 3.6241L13.7363 26.1561C14.4843 28.0185 17.2029 27.7416 17.5602 25.7667L19.4305 15.4285C19.5573 14.7276 20.0472 14.1471 20.7168 13.9043L31.4225 10.0228C33.3082 9.33909 33.1259 6.61459 31.1659 6.18824Z"
                    fill="#F1F1F1"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_107_3640"
                    x="0.538574"
                    y="0.876709"
                    width="36.2026"
                    height="34.5345"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_107_3640"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_107_3640"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    )
}
