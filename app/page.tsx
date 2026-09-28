import NextImage from "next/image";

import { FacebookIcon, InstagramIcon } from "@/components/icons";
import { SectionHeader, WorkCard, WorkItem } from "@/components/work-card";

const webDesign: WorkItem[] = [
  { src: "/images/epic.png", title: "Epic Martial Arts", category: "Website Design", href: "https://msbjj.org" },
  { src: "/images/franklin.png", title: "Franklin Telephone Company", category: "Website Design", href: "https://www.franklintelephone.com/" },
  { src: "/images/americanstripes.png", title: "American Stripes", category: "Website Design", href: "https://www.americanstripes.llc" },
  { src: "/images/bitspace.png", title: "Bitspace", category: "Website Design", href: "https://bitspace.ink" },
];

const artWork: WorkItem[] = [
  { src: "/images/stealie_tshirt.jpg", title: "Stealie T-Shirts", category: "Apparel" },
  { src: "/images/stealie_prints.jpg", title: "Stealie Prints", category: "Prints" },
  { src: "/images/stealie_screen.jpg", title: "Stealie Screen", category: "Process" },
  { src: "/images/multi_prints.jpg", title: "Original Art", category: "Illustration" },
  { src: "/images/strawhat_tshirt.jpg", title: "Straw Hat T-Shirt", category: "Apparel" },
  { src: "/images/limited_time_small_batch.png", title: "Small Batch Poster", category: "Prints" },
  { src: "/images/poziscienze_alt.jpg", title: "Poziscienze Owl", category: "Apparel" },
  { src: "/images/poziscienze_shirts.jpg", title: "Poziscienze T-Shirts", category: "Apparel" },
  { src: "/images/cloudyday.png", title: "Wanted Poster", category: "Prints" },
  { src: "/images/lazy_lightning.png", title: "Lazy Lightning", category: "Illustration" },
  { src: "/images/woodgrain.png", title: "The Busted Plank Co.", category: "Branding", contain: true },
  { src: "/images/peeps3.png", title: "Chillin' With My Peeps", category: "Branding", contain: true },
  { src: "/images/yeettone.png", title: "Yeet", category: "Illustration", contain: true },
  { src: "/images/skrrtcolors.png", title: "Skrrt", category: "Illustration" },
  { src: "/images/badfish-on-wood.jpg", title: "Badfish on Woodgrain", category: "Illustration" },
  { src: "/images/badfish2.jpg", title: "Badfish", category: "Illustration" },
  { src: "/images/badfish.jpg", title: "Badfish T-Shirt", category: "Apparel" },
  { src: "/images/badfish-shirt-only.jpg", title: "Badfish T-Shirt", category: "Apparel" },
  { src: "/images/mexican-af-shirts.jpg", title: "Mexican AF T-Shirts", category: "Apparel" },
  { src: "/images/sexyback.jpg", title: "Mexican AF Back Print", category: "Apparel" },
  { src: "/images/art/art-01.jpg", title: "PSA Mississippi", category: "Apparel" },
  { src: "/images/art/art-02.jpg", title: "PSA Mississippi", category: "Process" },
  { src: "/images/art/art-03.jpg", title: "PSA Mississippi", category: "Process" },
  { src: "/images/art/art-04.jpg", title: "McComb Made & PSA", category: "Apparel" },
  { src: "/images/art/art-05.jpg", title: "McComb Made & PSA", category: "Apparel" },
  { src: "/images/art/art-06.jpg", title: "Halftone Bo Diddley", category: "Prints" },
  { src: "/images/art/art-07.jpg", title: "Halftone Brandy", category: "Prints" },
  { src: "/images/art/art-08.jpg", title: "Halftone Bo Diddley", category: "Process" },
  { src: "/images/art/art-09.jpg", title: "Our Roots Run Deep", category: "Apparel" },
  { src: "/images/art/art-10.jpg", title: "Halftone Michael Jackson", category: "Apparel" },
  { src: "/images/art/art-11.jpg", title: "Halftone Michael Jackson", category: "Process" },
  { src: "/images/art/art-12.jpg", title: "Red Line Art", category: "Apparel" },
  { src: "/images/art/art-13.jpg", title: "Anime Line Art", category: "Prints" },
  { src: "/images/art/art-14.jpg", title: "Anime Poster", category: "Prints" },
  { src: "/images/art/art-15.jpg", title: "Multicolor Print", category: "Process" },
  { src: "/images/art/art-16.jpg", title: "Multicolor Print", category: "Process" },
  { src: "/images/art/art-17.jpg", title: "Busted Down on Bourbon Street", category: "Apparel" },
  { src: "/images/art/art-18.jpg", title: "Busted Down on Bourbon Street", category: "Apparel" },
  { src: "/images/art/art-19.jpg", title: "Busted Down on Bourbon Street", category: "Process" },
  { src: "/images/art/art-20.jpg", title: "Anime Multicolor Print", category: "Prints" },
  { src: "/images/art/art-21.jpg", title: "Anime Halftone Print", category: "Prints" },
  { src: "/images/art/art-22.jpg", title: "Da Daiquiri Factory", category: "Apparel" },
  { src: "/images/art/art-23.jpg", title: "Da Daiquiri Factory", category: "Apparel" },
  { src: "/images/art/art-24.jpg", title: "Stealie on Heather", category: "Apparel" },
  { src: "/images/art/art-25.jpg", title: "Boys & Girls Club Sponsors", category: "Apparel" },
  { src: "/images/art/art-26.jpg", title: "Sleepy Hollow RV Park", category: "Process" },
  { src: "/images/art/art-27.jpg", title: "Sleepy Hollow RV Park", category: "Process" },
  { src: "/images/art/art-28.jpg", title: "Straw Hat Jolly Roger", category: "Apparel" },
  { src: "/images/art/art-29.jpg", title: "Tortilla Soup", category: "Apparel" },
  { src: "/images/art/art-30.jpg", title: "Save Water Drink Tequila", category: "Process" },
  { src: "/images/art/art-31.jpg", title: "Save Water Drink Tequila", category: "Apparel" },
  { src: "/images/art/art-32.jpg", title: "I Love Soup", category: "Process" },
  { src: "/images/art/art-33.jpg", title: "The Press", category: "Process" },
  { src: "/images/art/art-34.jpg", title: "I Love Soup", category: "Process" },
  { src: "/images/art/art-35.jpg", title: "Playing Cards", category: "Prints" },
  { src: "/images/art/art-36.jpg", title: "Let There Be Songs", category: "Apparel" },
  { src: "/images/art/art-37.jpg", title: "Get Me Back To New Orleans", category: "Apparel" },
  { src: "/images/art/art-38.jpg", title: "Get Me Back To New Orleans", category: "Apparel" },
  { src: "/images/art/art-39.jpg", title: "Get Me Back To New Orleans", category: "Apparel" },
  { src: "/images/art/art-40.jpg", title: "Let There Be Songs", category: "Apparel" },
  { src: "/images/art/art-41.jpg", title: "Let There Be Songs", category: "Apparel" },
  { src: "/images/art/art-42.jpg", title: "Let There Be Songs", category: "Apparel" },
  { src: "/images/art/art-43.jpg", title: "Let There Be Songs", category: "Process" },
  { src: "/images/art/art-44.jpg", title: "Get Me Back To New Orleans", category: "Apparel" },
  { src: "/images/art/art-45.jpg", title: "New Orleans & Fishwater", category: "Apparel" },
  { src: "/images/art/art-46.jpg", title: "Drink More Fishwater", category: "Apparel" },
  { src: "/images/art/art-47.jpg", title: "Tie-Dye", category: "Apparel" },
  { src: "/images/art/art-48.png", title: "Anime Print Sheet", category: "Prints" },
  { src: "/images/art/art-49.png", title: "Anime Print Cards", category: "Prints" },
  { src: "/images/art/art-50.png", title: "Print Sheets", category: "Prints" },
  { src: "/images/art/art-51.png", title: "Anime Print Cards", category: "Prints" },
  { src: "/images/art/art-52.png", title: "Print Sheet", category: "Prints" },
];

const liveEvents: WorkItem[] = [
  { src: "/images/spiral-light-tshirt.jpg", title: "Spiral Light", category: "Keg and Barrel" },
  { src: "/images/cardboardcowboy.jpg", title: "Cardboard Cowboy", category: "Tuxachanie Creek" },
  { src: "/images/sc-better-half2.jpg", title: "Schott Chism and the Better Half", category: "Tuxachanie Creek" },
  { src: "/images/bmfs2.jpg", title: "Billy Strings", category: "UNO Lakefront Arena · NYE 2024" },
  { src: "/images/rr3.jpg", title: "Red and the Revelers", category: "Keg and Barrel" },
];

export default function Home() {
  return (
    <>
      <section className="relative -mx-6 mb-12 flex min-h-[280px] items-center overflow-hidden bg-ink px-6 py-8 md:mx-0 md:px-10">
        <div className="absolute inset-y-0 right-0 w-full md:w-[72%]">
          <NextImage
            fill
            priority
            alt=""
            className="object-cover object-center"
            sizes="(min-width: 768px) 72vw, 100vw"
            src="/images/site/hero-art.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent md:via-transparent" />
        </div>

        <div className="relative">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-olive">
            Portfolio
          </div>
          <h1 className="mt-1">
            <NextImage
              priority
              alt="Design Print Build"
              className="h-auto w-[240px] md:w-[270px]"
              height={308}
              src="/images/site/hero-title.png"
              width={520}
            />
          </h1>
          <div className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-cream">
            Web Design <span className="mx-2 text-ember">/</span> Art{" "}
            <span className="mx-2 text-ember">/</span> T-Shirts
          </div>
        </div>
      </section>

      <SectionHeader id="work" title="Web Design" />
      <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {webDesign.map((item) => (
          <WorkCard
            key={item.src}
            {...item}
            aspect="aspect-[16/10]"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          />
        ))}
      </div>

      <SectionHeader title="Art and T-Shirts" />
      <div className="mb-14 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
        {artWork.map((item) => (
          <WorkCard
            key={item.src}
            {...item}
            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
          />
        ))}
      </div>

      <SectionHeader id="events" title="Live Events with MOCInk and Mr Klink" />
      <div className="mb-6 flex flex-wrap gap-6">
        <a
          className="flex items-center gap-2 text-cream/80 hover:text-cream"
          href="https://www.facebook.com/theshopdowntownhattiesburg"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FacebookIcon className="text-ember" size={24} />
          MOCInk
        </a>
        <a
          className="flex items-center gap-2 text-cream/80 hover:text-cream"
          href="https://www.instagram.com/mrklink13/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <InstagramIcon className="text-ember" size={24} />
          @mrklink13
        </a>
      </div>
      <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
        {liveEvents.map((item) => (
          <WorkCard
            key={item.src}
            {...item}
            aspect="aspect-[4/5]"
            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
          />
        ))}
      </div>
    </>
  );
}
