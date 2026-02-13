import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function TrainingParenting() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      
      <section className="bg-teal-50 py-20 rounded-b-[3rem]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">Training & Parenting</h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Program edukasi untuk orang tua dan guru agar dapat membersamai tumbuh kembang anak dengan lebih baik.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="rounded-3xl overflow-hidden shadow-xl">
             <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800" alt="Seminar Parenting" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Seminar Parenting</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Kami secara rutin mengadakan seminar parenting dengan menghadirkan psikolog atau praktisi pendidikan anak. Topik yang dibahas seputar pola asuh, komunikasi dengan anak, hingga penanganan tantrum.
            </p>
            <Button className="rounded-full bg-teal-600 hover:bg-teal-700">Lihat Jadwal Seminar</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="md:order-2 rounded-3xl overflow-hidden shadow-xl">
             <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" alt="Training Guru" className="w-full h-full object-cover" />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Training for Teachers</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Pelatihan metode Montessori dan manajemen kelas untuk guru-guru PAUD/TK. Kami berbagi ilmu tentang pembuatan alat peraga edukatif dan teknik penyampaian materi yang menyenangkan.
            </p>
            <Button variant="outline" className="rounded-full border-teal-600 text-teal-600">Info Training</Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
