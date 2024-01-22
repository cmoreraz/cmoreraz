"use client";

import Link from "next/link";
import HeaderImage from "../../components/home/HeaderImage";
import { siteConfig } from "../../config/site";
import {
  CiscoIcon,
  GoogleIcon,
  HackerRankIcon,
  HarvardIcon,
} from "../../components/Icons/IconsBusiness";
import { TypeAnimation } from "react-type-animation";
import {
  FigmaSvg,
  TwitterIcon,
  GithubSvg,
  GithubLink,
  ArrowFigma,
  AWSIconSvg,
  LinkedinIcon,
  LinkedinSvg,
  Dribbblevg,
  LinkedinLink
} from "../../components/Icons";
import SectionBento from "../../components/home/SectionBento";

export default function Home() {
  return (

    <div className="container-body">

      <section id="header"
        className="container flex h-screen max-w-[64rem] flex-col items-center justify-center gap-4 text-center"
      >
        <div className="z-10  w-full max-w-5xl">
          <div className="relative z-20 flex w-full flex-col  items-center justify-center gap-4">

            <h2 className="relative rounded-md bg-gray-50 px-4 py-2 text-center font-semibold text-black">
              <ArrowFigma className="absolute -left-8 -top-6" />
              <span className="bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Hello, I&apos;m Cristian Andres Morera
              </span>
            </h2>

            <h1 className={
              " z-10 flex max-w-3xl flex-col text-center text-6xl  font-extrabold  md:text-10xl "
            }
            >

              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1000,
                  "Backend Developer",
                  1000,
                  "Test Automation",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />

            </h1>
            <br />
            <br />

            <h3 className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              Over the last 5 years, I've empowered 6+ companies.
              <span className="hidden max-w-[39rem] leading-normal text-muted-foreground sm:text-xl sm:leading-10 md:block">
                Developing user-centric interfaces, creating REST services, process automation and software testing.
              </span>
            </h3>

            <div className="mt-8 flex gap-4">
              <FigmaSvg />
              <TwitterIcon />
              <GithubSvg />
            </div>

            <div className="flex gap-4">
              <LinkedinSvg />
              <Dribbblevg />
            </div>

          </div>
          <HeaderImage />
        </div>
      </section>
      <section
        id="info"
        className="flex flex-col items-center justify-center space-y-6 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-32"
      >
        <Link
          href={siteConfig.links.twitter}
          className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
          target="_blank"
        >
          Follow along on Twitter
        </Link>
        <h3
          className={
            // barlow.className +
            " font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          }
        >
          {'"To teach is to learn twice"'}
          {/* SOFTWARE ENGINEER */}
        </h3>
        <h4>Who am I?</h4>
        <h4 className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          SOFTWARE ENGINEER with several years of experience as a Freelancer.
          Multiple certifications. Passionate about traveling and naturally
          curious. Currently, I am focused on becoming a great leader and
          continuing to share.
        </h4>
        <h3 className="py-1.5 pt-12 text-sm font-medium">CERTIFICATIONS</h3>
        <div className="flex justify-center gap-24 pt-8 text-white">
          {/* TODO: Create a component each SVG */}
          <GoogleIcon width="50" height="50" />
          <AWSIconSvg width="50" height="50" />
          <HarvardIcon width="50" height="50" />
          <HackerRankIcon width="50" height="50" />
          <CiscoIcon />
          <LinkedinIcon />
        </div>

        <div className="space-x-4 pt-8">
          <LinkedinLink />
          <GithubLink />
        </div>

      </section>

      <SectionBento />

    </div>
  );
}
