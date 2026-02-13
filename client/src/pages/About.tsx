import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      
      {/* Header */}
      <section className="bg-purple-50 py-20 rounded-b-[3rem]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">Tentang Kami</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Mengenal lebih dekat Madani Montessori Islamic School, tempat di mana potensi anak dikembangkan dengan kasih sayang dan nilai-nilai Islami.
          </p>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-purple-100 h-full">
                <h3 className="text-2xl font-display font-bold text-primary mb-6">Visi Kami</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  "Menjadi lembaga pendidikan anak usia dini unggulan yang membentuk generasi Rabbani yang cerdas, kreatif, mandiri, dan berakhlak mulia berbasis metode Montessori."
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-blue-100 h-full">
                <h3 className="text-2xl font-display font-bold text-blue-600 mb-6">Misi Kami</h3>
                <ul className="space-y-4">
                  {[
                    "Menyelenggarakan pendidikan yang mengintegrasikan nilai-nilai Islam dan metode Montessori.",
                    "Mengembangkan potensi anak secara optimal dalam aspek kognitif, afektif, dan psikomotorik.",
                    "Menciptakan lingkungan belajar yang aman, nyaman, dan menyenangkan.",
                    "Bekerjasama dengan orang tua dalam proses tumbuh kembang anak."
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story / History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                {/* Unsplash: school building or activity */}
                <img 
                  src="https://images.unsplash.com/photo-1577896334614-201b37d54f8e?auto=format&fit=crop&q=80&w=800" 
                  alt="Suasana Sekolah" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <SectionHeader title="Sejarah Singkat" align="left" className="mb-6" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Madani Montessori Islamic School didirikan dengan semangat untuk menghadirkan pendidikan berkualitas yang seimbang antara ilmu dunia dan akhirat. Berawal dari keinginan luhur untuk mencetak generasi penerus yang tidak hanya cerdas secara intelektual, tetapi juga memiliki fondasi agama yang kuat.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Terletak di Cisauk, Tangerang, sekolah kami terus berkembang dan berinovasi dalam memberikan layanan pendidikan terbaik bagi masyarakat sekitar, dengan fasilitas yang mendukung dan tenaga pengajar yang berdedikasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
