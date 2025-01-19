import Image from "next/image";

export function BrandsSection() {
  return (
    <section id="brands" className="py-24 bg-white flex justify-center items-center">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Brand Associations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="relative w-40 h-40">
              <Image
                src={`/brands/brand${i}.png`}
                alt={`Brand logo ${i}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
