import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Megaphone, Sparkles } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
const services = [
  {
    title: "Talent Management",
    description: "We're experts at talent management. From sourcing the perfect creators to aligning them with fitting brands and opportunities, we've got you covered. But we don't stop there; we also mentor and nurture emerging talents, helping them develop the skills they need to thrive in the digital world.",
    icon: Users
  },
  {
    title: "Influencer Marketing",
    description: "We're your experts in influencer marketing. From crafting impactful campaigns to seamless collaborations, we go the extra mile. We don't just connect you to a creator; we coordinate and manage them, ensuring smooth operations throughout the collaboration and its execution.",
    icon: Sparkles
  },
  {
    title: "Promotions",
    description: "At Collabr8, we specialize in digital promotions that make an impact. From dynamic social media campaigns to strategic events, we've got your back. Let's collaborate to boost your brand's visibility and achieve your promotional goals, including film and movie promotions.",
    icon: Megaphone
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-50 flex justify-center items-center">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <service.icon className="h-12 w-12 mb-4" />
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

