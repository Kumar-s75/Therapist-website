import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#B5DBDF]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="bg-white p-4 rounded-2xl shadow-lg max-w-md mx-auto">
                <Image
                  src="./photo.jpg"
                  alt="Dr. Serena Blake, Clinical Psychologist"
                  width={500}
                  height={600}
                  className="rounded-xl object-cover w-full"
                />
                <div className="mt-4 text-center">
                  <div className="font-bold text-teal-dark">Dr. Serena Blake</div>
                  <div className="text-sm text-teal-primary">PsyD</div>
                  <div className="flex items-center justify-center mt-2">
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 text-xs">
                      ⭐ Top Rated | 8+ Years Experience
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6 " >
              <Badge variant="outline" className="border-teal-primary text-teal-dark bg-[#fef3c7]">
                About Dr. Serena Blake, PsyD - Experienced Clinical Psychologist in Los Angeles, CA
              </Badge>

              <h2 className="text-4xl md:text-5xl font-bold text-teal-dark ">Hi I'm Dr. Serena Blake</h2>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
  With over <strong>eight years of dedicated experience </strong> in individual and relational therapy, I find great fulfillment in working with people from all walks of life, each bringing their unique stories, challenges, and aspirations. My <strong>passion</strong> is to help you navigate your own journey toward <strong>healing, self-understanding, and emotional resilience</strong>. Whether we meet in my cozy office on Maplewood Drive in Los Angeles or connect virtually through Zoom, my priority is to provide a <strong>safe, supportive space</strong>  where you can thrive and move confidently toward a more peaceful, connected, and empowered life.
</p>

<p>
  My therapeutic approach is rooted in <strong>evidence-based principles</strong> like cognitive-behavioral therapy and mindfulness, blended with a warm, compassionate style that fosters <strong>emotional growth</strong>, the <strong>deepening of relationships</strong>, and a greater sense of <strong>inner peace</strong>.
</p>

<p>
  Whether you are seeking relief from <strong>anxiety</strong>, healing from <strong>past trauma</strong>, or hoping to strengthen your <strong>most valued relationships</strong>, Together, we can uncover pathways that lead to lasting change, meaningful growth, and a more fulfilling future.
</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
