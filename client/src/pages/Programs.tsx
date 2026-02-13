import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Programs() {
  const [location] = useLocation();
  const isSchool = location === "/program-sekolah";
  const isFeatured = location === "/program-unggulan";
  
  const pageTitle = isSchool ? "Program Sekolah" : "Program Unggulan";
  const pageDesc = isSchool 
    ? "Jenjang pendidikan formal untuk usia dini dengan kurikulum terpadu." 
    : "Nilai tambah yang membuat lulusan kami berbeda dan berkarakter.";

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      
      <section className="bg-blue-50 py-20 rounded-b-[3rem]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">{pageTitle}</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {pageDesc}
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-20 space-y-20">
        {isSchool ? (
          <>
            {/* KB */}
            <div className="flex flex-col md:flex-row gap-10 items-center bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100">
              <div className="w-full md:w-1/3 h-64 rounded-2xl bg-pink-100 overflow-hidden shrink-0">
                <img src="https://pixabay.com/get/g77cf51a59eb6499cbda4b3fc0c152153fafaa975dd94b3e5dc400308e50e46d8e6a7cefc1447aa570d46e170ef2024e0_1280.jpg" alt="KB" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold text-pink-500 mb-3">Kelompok Bermain (KB)</h2>
                <div className="inline-block bg-pink-50 text-pink-600 px-3 py-1 rounded-full text-sm font-bold mb-4">Usia 3-4 Tahun</div>
                <p className="text-gray-600 mb-6">
                  Program ini dirancang untuk menstimulasi perkembangan motorik kasar dan halus, sosialisasi, serta kemandirian dasar. Anak belajar melalui bermain dengan alat peraga edukatif yang menyenangkan.
                </p>
                <Button className="bg-pink-500 hover:bg-pink-600 rounded-full text-white">Daftar KB Sekarang</Button>
              </div>
            </div>

            {/* TK A */}
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100">
              <div className="w-full md:w-1/3 h-64 rounded-2xl bg-blue-100 overflow-hidden shrink-0">
                <img src="https://pixabay.com/get/gdae49e465899497f74142ab228cb76619ad75b1d59a6311172a03e080b0de2ff5a2e73bb8dedb7af38a7994922beca586d616c8d4dd39809f783cbd3ffe9a9d1_1280.jpg" alt="TK A" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold text-blue-500 mb-3">Taman Kanak-Kanak A</h2>
                <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-bold mb-4">Usia 4-5 Tahun</div>
                <p className="text-gray-600 mb-6">
                  Fokus pada pengenalan konsep dasar matematika, bahasa, dan sains sederhana. Pembiasaan ibadah harian mulai diterapkan secara lebih terstruktur namun tetap menyenangkan.
                </p>
                <Button className="bg-blue-500 hover:bg-blue-600 rounded-full text-white">Daftar TK A Sekarang</Button>
              </div>
            </div>

            {/* TK B */}
            <div className="flex flex-col md:flex-row gap-10 items-center bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100">
              <div className="w-full md:w-1/3 h-64 rounded-2xl bg-purple-100 overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=400" alt="TK B" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold text-purple-500 mb-3">Taman Kanak-Kanak B</h2>
                <div className="inline-block bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm font-bold mb-4">Usia 5-6 Tahun</div>
                <p className="text-gray-600 mb-6">
                  Persiapan matang menuju Sekolah Dasar. Anak dibimbing untuk menguasai kemampuan calistung dasar, pemecahan masalah sederhana, dan kemandirian penuh dalam kegiatan sehari-hari.
                </p>
                <Button className="bg-purple-500 hover:bg-purple-600 rounded-full text-white">Daftar TK B Sekarang</Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[2rem] shadow-lg border-l-8 border-green-400">
                <h3 className="text-2xl font-bold font-display text-gray-800 mb-4">Tahfidz Quran</h3>
                <p className="text-gray-600">
                  Program hafalan surat-surat pendek (Juz 30) dengan metode talqin yang ramah anak. Target lulusan minimal hafal 15 surat pendek dan doa harian.
                </p>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-lg border-l-8 border-yellow-400">
                <h3 className="text-2xl font-bold font-display text-gray-800 mb-4">Montessori Practical Life</h3>
                <p className="text-gray-600">
                  Latihan keterampilan hidup sehari-hari seperti menuang air, mengancingkan baju, dan membersihkan meja untuk melatih motorik dan kemandirian.
                </p>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-lg border-l-8 border-red-400">
                <h3 className="text-2xl font-bold font-display text-gray-800 mb-4">Islamic Character Building</h3>
                <p className="text-gray-600">
                  Penanaman adab makan, adab ke kamar mandi, adab berbicara, dan menghormati orang tua/guru melalui pembiasaan dan keteladanan.
                </p>
              </div>
              <div className="bg-white p-8 rounded-[2rem] shadow-lg border-l-8 border-blue-400">
                <h3 className="text-2xl font-bold font-display text-gray-800 mb-4">English for Kids</h3>
                <p className="text-gray-600">
                  Pengenalan kosakata bahasa Inggris sederhana melalui lagu, flashcard, dan percakapan ringan sehari-hari.
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
