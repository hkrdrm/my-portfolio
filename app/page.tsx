import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, InstagramIcon, FacebookIcon } from "@/components/icons";
import {Image} from "@heroui/image";
import {Card, CardHeader, CardBody, CardFooter} from "@heroui/card";

export default function Home() {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl">Matt Spiers</h2>
        <h3 className="text-xl">tspiers84@gmail.com</h3>
      </div>

      <span className={title()}>Live Events with MOCInk and Mr Klink</span>
      <div className="ml-4">
        <Link isExternal aria-label="Instagram" href="https://www.facebook.com/theshopdowntownhattiesburg">
          <div className="flex flex-row items-center gap-2">
            <FacebookIcon size={32} className="text-default-500" />
            <span className="text-xl"> MOCInk </span>
          </div>
        </Link>
        <br />

        <Link isExternal aria-label="MOCInk" href="https://www.instagram.com/mrklink13/">
          <div className="flex flex-row items-center gap-2">
            <InstagramIcon size={32} className="text-default-500" />
            <span className="text-xl"> @mrklink13 </span>
          </div>
        </Link>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-around gap-24 py-8 md:py-10">
        <Card className="w-320" isPressable shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              alt="Spiral Light"
              className="object-cover"
              radius="lg"
              shadow="sm"
              src="/images/spiral-light-tshirt.jpg"
              width="320"
            />
          </CardBody>
          <CardFooter className="flex flex-col text-small justify-between">
            <span> Spiral Light </span>
            <span> Keg and Barrel </span>
          </CardFooter>
        </Card>

        <Card className="w-320" isPressable shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              alt="Cardboard Cowboy"
              className="object-cover"
              radius="lg"
              shadow="sm"
              src="/images/cardboardcowboy.jpg"
              width="320"
            />
          </CardBody>
          <CardFooter className="flex flex-col text-small justify-between">
            <span> Cardboard Cowboy </span>
            <span> Tuxachanie Creek  </span>
          </CardFooter>
        </Card>

        <Card className="w-320" isPressable shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              alt="Cardboard Cowboy"
              className="object-cover"
              radius="lg"
              shadow="sm"
              src="/images/sc-better-half2.jpg"
              width="320"
            />
          </CardBody>
          <CardFooter className="flex flex-col text-small justify-between">
            <span> Schott Chism and the Better Half </span>
            <span> Tuxachanie Creek  </span>
          </CardFooter>
        </Card>

        <Card className="w-320" isPressable shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              alt="Billy Strings"
              className="object-cover"
              radius="lg"
              shadow="sm"
              src="/images/bmfs2.jpg"
              width="320"
            />
          </CardBody>
          <CardFooter className="flex flex-col text-small justify-between">
            <span> Billy Strings </span>
            <span> UNO Lakefront Areana </span>
            <span> NYE 2024 </span>
          </CardFooter>
        </Card>

        <Card className="w-320" isPressable shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              alt="Red and the Revelers"
              className="object-cover"
              radius="lg"
              shadow="sm"
              src="/images/rr3.jpg"
              width="320"
            />
          </CardBody>
          <CardFooter className="flex flex-col text-small justify-between">
            <div>
              Red and the Revelers <br />
              Keg and Barrel
            </div>
          </CardFooter>
        </Card>
      </div>

      <span className={title()}>Art and T-Shirts</span>
      <div className="flex flex-row flex-wrap items-center justify-around gap-4 py-8 md:py-10">
        <div>
          <Image
            alt="wanted poster smiling on a cloudy day"
            className="object-cover"
            radius="lg"
            shadow="sm"
            src="/images/cloudyday.png"
            width="320"
          />
        </div>

        <div>
          <Image
            alt="lazy lightning"
            className="object-cover"
            radius="lg"
            shadow="sm"
            src="/images/lazy_lightning.png"
            width="320"
          />
        </div>

        <div className="bg-white rounded">
          <Image
            alt="busted plank co"
            className="object-cover"
            radius="lg"
            shadow="sm"
            src="/images/woodgrain.png"
            width="320"
          />
        </div>

        <div className="bg-white rounded">
          <Image
            alt="chilling peeps"
            className="object-cover"
            radius="lg"
            shadow="sm"
            src="/images/peeps3.png"
            width="320"
          />
        </div>

        <div className="rounded">
          <Image
            alt=""
            className="object-cover"
            radius="lg"
            shadow="sm"
            src="/images/yeettone.png"
            width="320"
          />
        </div>

        <div className="rounded">
          <Image
            alt="badfish on woodgrain"
            className="object-cover"
            radius="lg"
            shadow="sm"
            src="/images/badfish-on-wood.jpg"
            width="320"
          />
        </div>

        <div className="rounded">
          <Image
            alt="badfish on woodgrain"
            className="object-cover"
            radius="lg"
            shadow="sm"
            src="/images/badfish2.jpg"
            width="320"
          />
        </div>

        <div className="rounded">
          <Image
            alt="badfish tshirt"
            className="object-cover"
            radius="lg"
            shadow="sm"
            src="/images/badfish.jpg"
            width="320"
          />
        </div>

        <div className="rounded">
          <Image
            alt="badfish tshirt"
            className="object-cover"
            radius="lg"
            shadow="sm"
            src="/images/badfish-shirt-only.jpg"
            width="320"
          />
        </div>

        <div className="rounded">
          <Image
            alt="mexican af"
            className="object-cover"
            radius="lg"
            shadow="sm"
            src="/images/mexican-af-shirts.jpg"
            width="320"
          />
        </div>

        <div className="rounded">
          <Image
            alt="mexican af"
            className="object-cover"
            radius="lg"
            shadow="sm"
            src="/images/sexyback.jpg"
            width="320"
          />
        </div>
      </div>

      <span className={title()}>Web Design</span>
      <div className="flex flex-row items-center justify-around gap-4 py-8 md:py-10">
        <div>
          <a href="https://msbjj.org" target="_blank" rel="noopener noreferrer">
            <Image
              alt="Epic"
              className="object-cover"
              radius="lg"
              shadow="sm"
              src="/images/epic.png"
              width="320"
            />
            <span className="text-2xl">Epic Martial Arts</span>
          </a>
        </div>

        <div>
          <a href="https://www.franklintelephone.com/" target="_blank" rel="noopener noreferrer">
            <Image
              className="object-cover"
              radius="lg"
              shadow="sm"
              src="/images/franklin.png"
              width="320"
            />
            <span className="text-2xl"> Franklin Telephone Company </span>
          </a>
        </div>
      </div>

    </section>
  );
}

      // <div className="inline-block max-w-xl text-center justify-center">
      //   <span className={title()}>Make&nbsp;</span>
      //   <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
      //   <br />
      //   <span className={title()}>
      //     websites regardless of your design experience.
      //   </span>
      //   <div className={subtitle({ class: "mt-4" })}>
      //     Beautiful, fast and modern React UI library.
      //   </div>
      // </div>
