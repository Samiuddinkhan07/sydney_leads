import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const About = () => {
  return (
    <div>
      <section data-section-name="landing-page-hero-section">
        <div className="min-h-screen bg-[url('/hero-image.png')] bg-cover bg-center bg-no-repeat relative ">
          <div className="flex flex-col justify-center items-center gap-4 pt-[3rem]">
            <h2 className="text-5xl font-bold text-[#B34B0C]">TOGETHER</h2>
            <h3 className="flex flex-row text-4xl font-extrabold text-white">
              <p>We support.</p>
              <p>We empower.</p>
              <p>We Act.</p>
            </h3>
            <div className="flex flex-row gap-3 mt-4">
              <Button className="rounded-2xl">Get involved</Button>
              <Button className="rounded-2xl">Our mission</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black rounded-3xl mt-[-10px]">
        <div className="p-10">
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-3xl font-bold text-[#B34B0C]">WHO ARE WE?</h2>
            <p className="font-semibold text-2xl text-white mb-14">
              Empowering young voices.Defending their rights.Driving real change
            </p>
          </div>
          <div className="flex items-center gap-10 text-[#B3B2B0]">
            <div>
              <p className="mb-5">
                The Youth Advocate (TYA) is a youth-led organization committed
                to supporting young people across Australia through legal aid,
                social research, and inclusive action.
              </p>
              <p className="mb-5">
                We exist to ensure every young person regardless of circumstance
                has access to justice, representation, and opportunity. Our work
                spans three pillars
              </p>
              <div className="grid grid-cols-3 gap-4 my-3">
                <div className="bg-[#B3B2B0] rounded p-10 text-center">
                  <p className="text-[#733816] font-bold">
                    Legal support for youth in need
                  </p>
                </div>
                <div className="bg-[#B3B2B0] rounded p-10 text-center">
                  <p className="text-[#733816] font-bold">
                    Evidence-based research to inform change
                  </p>
                </div>
                <div className="bg-[#B3B2B0] rounded p-10 text-center">
                  <p className="text-[#733816] font-bold">
                    Community-led programs that inspire action
                  </p>
                </div>
              </div>
              <p className="mt-5">
                Whether you’re here to seek help, contribute, or collaborate,
                TVA is your space to be heard, empowered, and supported.
              </p>
            </div>
            <div>
              <img
                src="/who are we image.jpg"
                alt="who we are image"
                width={"700px"}
                className="rounded"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center p-10">
          <div>
            <h2 className="text-3xl font-semibold mb-[4rem]">WHAT WE DO?</h2>
          </div>
          <div>
            <div className="flex flex-row gap-6 items-center">
              <div className="flex flex-col gap-3 ">
                <h2 className="font-bold text-3xl">LEGAL SUPPORT</h2>
                <p className="text-2xl">
                  Guidance and resources for youth-related legal issues,
                  available Australia-wide.
                </p>
                <p className="font-bold hover:underline hover:cursor-pointer">Learn more</p>
              </div>
              <div>
                <img src="/what we do 1.png" width="400px"  className="rounded-xl" />
              </div>
            </div>
            <div className="flex flex-row gap-6 items-center">
              <div>
                <img src="/What we do 2.png" width="400px" className="rounded-xl " />
              </div>
              <div className="flex flex-col gap-3 ">
                <h2 className="font-bold text-3xl">RESEARCH PROJECTS</h2>
                <p className="text-2xl">
                  Leading initiatives on youth justice, advocacy, and community
                  impact.
                </p>
                <p className="font-bold hover:underline hover:cursor-pointer">Learn more</p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-center">
              <div className="flex flex-col gap-3 ">
                <h2 className="font-bold text-3xl">FOUNDATION INITIATIVES</h2>
                <p className="text-2xl">
                  Sponsorships, mentorships, and fundraising to support our
                  programs.
                </p>
                <p className="font-bold hover:underline hover:cursor-pointer">Learn more</p>
              </div>
              <div>
                <img src="/what we do 3.png" width="400px" className="rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-[8rem] my-10">
          <div className="flex flex-col text-center mx-auto w-[30%]">
            <div>
              <h2 className="font-extrabold text-3xl">JOIN US</h2>
              <h3 className="text-2xl my-5">
                <p>Membership. Volunteer. Donate.</p>
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <Input type="email" placeholder="Email" className="border-black" />
              </div>
                <Button>Submit</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
