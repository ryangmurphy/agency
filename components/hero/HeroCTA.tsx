import { Button } from "../ui/button";
import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="cta"
      className="border-t border-b py-16 my-16 rounded-xl mx-2 md:mx-auto lg:mx-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1 px-24">
          <h2 className=" text-foreground text-3xl text-center md:text-4xl font-bold text-cream">
            All the
            <span className="bg-gradient-to-b from-green-500 to-green-600 text-transparent bg-clip-text">
              {" "}
              Bells & Whistles{" "}
            </span>{" "}
          </h2>
          <p className="text-foreground text-center font-bold text-xl mt-4 mb-8 lg:mb-0">
            Whether you are a startup looking to make a bold first impression or
            an established brand aiming to elevate your presence. We bring your
            vision to life with innovative solutions tailored to your brand.
          </p>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          <Link href="/#contact">
            <Button
              variant="default"
              className="font-semibold flex-row flex text-white justify-center transition duration-200 ease-in-out transform px-4 py-4 border-b-4 border-emerald-800 hover:border-b-2 bg-gradient-to-t from-emerald-700 via-emerald-900 to-emerald-600 rounded-xl hover:translate-y-px"
            >
              Book a Free Consultation
            </Button>
          </Link>

          <Link href="/#services">
            <Button
              variant="secondary"
              className="font-semibold flex-row flex text-text justify-center transition duration-200 ease-in-out transform px-4 py-4 border-b-4 border-slate-300 hover:border-b-2 bg-gradient-to-t from-slate-400 via-slate-200 to-slate-300 rounded-xl hover:translate-y-px"
            >
              View all services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
