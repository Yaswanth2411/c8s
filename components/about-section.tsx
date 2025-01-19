import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white flex justify-center items-center">
      <div className="container">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              Who Are We?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Hey collaborators! in a world where everything is going digital, we're here to help you navigate the social media maze. Led by Mahesh Nandyala and his expert crew, we understand how important collaborations are for both brands and creators. So, whether you're a brand seeking the spotlight or a creator aiming to amplify your voice, Collabr8 is your ultimate partner.
            </p>
            </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center">
              What Do We Do?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Collabr8, we're dedicated to making collaborations seamless and impactful. Whether you're a brand ready to shine or a creator seeking to amplify your voice, we've got you covered. From brainstorming innovative ideas to executing flawless campaigns, our team ensures that every collaboration is a success story. With Collabr8, expect excellence in every digital endeavor.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

