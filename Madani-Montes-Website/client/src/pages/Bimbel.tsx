import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Bimbel() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      
      <section className="bg-yellow-50 py-20 rounded-b-[3rem]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">Bimbingan Belajar</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Membantu siswa SD untuk lebih memahami pelajaran sekolah dan meraih prestasi akademik terbaik.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-yellow-100 text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-800 mb-8">Fasilitas & Keunggulan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">👩‍🏫</div>
              <h3 className="font-bold text-lg mb-2">Guru Berpengalaman</h3>
              <p className="text-sm text-gray-600">Tentor sabar dan menguasai materi dengan baik.</p>
            </div>
            <div className="p-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">📝</div>
              <h3 className="font-bold text-lg mb-2">Materi Lengkap</h3>
              <p className="text-sm text-gray-600">Modul belajar sesuai kurikulum sekolah terbaru.</p>
            </div>
            <div className="p-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🏡</div>
              <h3 className="font-bold text-lg mb-2">Suasana Nyaman</h3>
              <p className="text-sm text-gray-600">Kelas ber-AC dan kondusif untuk belajar.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-8">Pilihan Kelas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl hover:border-yellow-400 transition-colors">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Kelas Privat</h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>• 1 Guru 1 Siswa</li>
              <li>• Jadwal Fleksibel</li>
              <li>• Fokus pada kesulitan siswa</li>
              <li>• Durasi 90 menit</li>
            </ul>
            <a href="https://wa.me/6282123576275?text=Saya%20tertarik%20info%20Bimbel%20Privat" target="_blank">
              <Button className="w-full bg-yellow-400 text-yellow-900 hover:bg-yellow-500 rounded-full font-bold">Tanya Privat</Button>
            </a>
          </div>
          <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl hover:border-yellow-400 transition-colors">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Kelas Reguler</h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>• Maksimal 5 Siswa per kelas</li>
              <li>• Jadwal Tetap</li>
              <li>• Diskusi kelompok</li>
              <li>• Durasi 90 menit</li>
            </ul>
            <a href="https://wa.me/6282123576275?text=Saya%20tertarik%20info%20Bimbel%20Reguler" target="_blank">
              <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 rounded-full font-bold">Tanya Reguler</Button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
