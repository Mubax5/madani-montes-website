import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Star, Heart, BookOpen, Users, Play } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { ProgramCard } from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 lg:pt-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -z-10 rounded-l-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-primary font-bold text-sm mb-6">
                <Star className="w-4 h-4 mr-2 fill-current" />
                Pendaftaran Siswa Baru Telah Dibuka
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold text-gray-900 leading-[1.1] mb-6">
                Belajar dengan <span className="text-primary relative">
                  Gembira
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>, Tumbuh dengan Akhlak.
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Membangun fondasi karakter islami dan kecerdasan anak melalui metode Montessori yang menyenangkan dan personal.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/6282123576275" target="_blank" rel="noopener noreferrer">
                  <Button className="h-14 px-8 rounded-full bg-primary text-primary-foreground hover:bg-purple-700 text-lg font-bold shadow-lg shadow-purple-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                    Konsultasi Gratis
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <Link href="/program-sekolah">
                  <Button variant="outline" className="h-14 px-8 rounded-full border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary hover:bg-purple-50 text-lg font-bold transition-all">
                    Lihat Program
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Abstract decorative blobs */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl -z-10" />
              
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  {/* Placeholders for vibrant kid images */}
                  <div className="h-64 rounded-[2rem] bg-gray-200 overflow-hidden shadow-xl">
                    {/* Unsplash image: happy kid studying */}
                    <img 
                      src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=600" 
                      alt="Anak belajar bahagia" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="h-40 rounded-[2rem] bg-gray-200 overflow-hidden shadow-lg">
                    {/* Unsplash image: montessori materials */}
                    <img 
                      src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=600" 
                      alt="Alat montessori" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-40 rounded-[2rem] bg-primary/10 flex items-center justify-center p-6 text-center">
                    <div>
                      <h3 className="text-4xl font-display font-bold text-primary mb-1">5+</h3>
                      <p className="text-sm font-bold text-gray-600">Tahun Pengalaman</p>
                    </div>
                  </div>
                  <div className="h-64 rounded-[2rem] bg-gray-200 overflow-hidden shadow-xl">
                    {/* Unsplash image: teacher and student */}
                    <img 
                      src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600" 
                      alt="Guru dan murid" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS / VALUES */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Kenapa Memilih Kami?" 
            subtitle="Keunggulan" 
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProgramCard 
              title="Metode Montessori"
              description="Pendekatan yang berpusat pada anak untuk mengembangkan kemandirian dan kecintaan belajar."
              icon={<Heart className="w-6 h-6" />}
              color="pink"
              link="/program-sekolah"
            />
            <ProgramCard 
              title="Program Tahfidz"
              description="Membiasakan anak mencintai Al-Qur'an sejak dini dengan metode hafalan yang menyenangkan."
              icon={<BookOpen className="w-6 h-6" />}
              color="blue"
              link="/program-sekolah"
            />
            <ProgramCard 
              title="Karakter Islami"
              description="Penanaman adab dan akhlak mulia dalam setiap aktivitas harian siswa."
              icon={<Star className="w-6 h-6" />}
              color="purple"
              link="/program-unggulan"
            />
            <ProgramCard 
              title="Full Day School"
              description="Lingkungan belajar yang aman dan kondusif sepanjang hari untuk tumbuh kembang optimal."
              icon={<Users className="w-6 h-6" />}
              color="green"
              link="/kontak"
            />
          </div>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section className="py-24 bg-gray-50 rounded-[4rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 font-bold text-sm tracking-wide uppercase mb-3">
                Program Kami
              </span>
              <h2 className="text-4xl font-display font-bold text-gray-900">Jenjang Pendidikan</h2>
              <p className="mt-4 text-gray-600 text-lg">Kami menyediakan program pendidikan yang disesuaikan dengan tahapan perkembangan usia anak.</p>
            </div>
            <Link href="/program-sekolah">
              <Button variant="outline" className="hidden md:flex mt-6 md:mt-0 border-2 rounded-full px-6 font-bold hover:bg-blue-50 text-blue-600 border-blue-200">
                Lihat Semua
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Kelompok Bermain", age: "3-4 Tahun", desc: "Stimulasi motorik dan sosialisasi awal melalui bermain terarah." },
              { title: "Taman Kanak-Kanak A", age: "4-5 Tahun", desc: "Pengenalan calistung dasar dan konsep matematika konkret." },
              { title: "Taman Kanak-Kanak B", age: "5-6 Tahun", desc: "Persiapan matang menuju sekolah dasar dengan kemandirian penuh." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600 font-bold">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <span className="text-sm font-semibold text-blue-500 bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">{item.age}</span>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/program-sekolah">
              <Button className="w-full rounded-full font-bold">Lihat Semua Program</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* BIMBEL & EXTRAS */}
      <section className="py-24 overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-yellow-100 rounded-full blur-3xl -z-10 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-200 rounded-[2.5rem] rotate-3 opacity-50" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[500px]">
                {/* Unsplash: tutor teaching */}
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
                  alt="Bimbingan Belajar" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">Ekstra</span>
                    <h3 className="text-3xl font-display font-bold">Bimbingan Belajar</h3>
                    <p className="opacity-90 mt-2">Dukungan tambahan untuk pencapaian akademik terbaik.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <SectionHeader 
                title="Lebih dari Sekedar Sekolah" 
                subtitle="Program Unggulan" 
                align="left"
                className="mb-8"
              />
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Kami juga menyediakan layanan Bimbingan Belajar (Bimbel) untuk siswa SD yang membutuhkan pendampingan khusus, serta program Training & Parenting untuk orang tua.
              </p>
              
              <ul className="space-y-6 mb-10">
                {[
                  "Bimbel Calistung & Mapel SD",
                  "Program Tahfidz Intensif",
                  "Seminar Parenting Berkala",
                  "Konsultasi Psikologi Anak"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                      <Play className="w-3 h-3 fill-current" />
                    </div>
                    <span className="font-semibold text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <Link href="/bimbel">
                  <Button className="rounded-full px-8 py-6 font-bold text-base shadow-lg bg-gray-900 hover:bg-gray-800 text-white">
                    Info Bimbel
                  </Button>
                </Link>
                <Link href="/training-parenting">
                  <Button variant="outline" className="rounded-full px-8 py-6 font-bold text-base border-2">
                    Training & Parenting
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Siap Bergabung Bersama Kami?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Daftarkan putra-putri Anda sekarang dan jadilah bagian dari keluarga besar Madani Montessori. Kuota terbatas!
              </p>
              <a href="https://wa.me/6282123576275" target="_blank" rel="noopener noreferrer">
                <Button className="bg-accent text-accent-foreground hover:bg-yellow-400 h-16 px-10 rounded-full text-xl font-bold shadow-lg transform transition-all hover:scale-105">
                  Hubungi Kami Sekarang
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
