import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { clsx } from "clsx";

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  const images = [
    { id: 1, category: "sekolah", src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=600", title: "Kegiatan Belajar" },
    { id: 2, category: "event", src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600", title: "Pentas Seni" },
    { id: 3, category: "sekolah", src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=600", title: "Montessori Class" },
    { id: 4, category: "bimbel", src: "https://images.unsplash.com/photo-1577896334614-201b37d54f8e?auto=format&fit=crop&q=80&w=600", title: "Suasana Bimbel" },
    { id: 5, category: "event", src: "https://images.unsplash.com/photo-1526634332515-d56c2c626ebc?auto=format&fit=crop&q=80&w=600", title: "Field Trip" },
    { id: 6, category: "sekolah", src: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&q=80&w=600", title: "Olahraga Pagi" },
  ];

  const filteredImages = filter === "all" ? images : images.filter(img => img.category === filter);

  const categories = [
    { id: "all", label: "Semua" },
    { id: "sekolah", label: "Kegiatan Sekolah" },
    { id: "bimbel", label: "Bimbel" },
    { id: "event", label: "Acara & Event" },
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      
      <section className="bg-green-50 py-20 rounded-b-[3rem]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">Galeri Kegiatan</h1>
          <p className="text-xl text-gray-600">
            Dokumentasi keceriaan dan momen berharga anak-anak di Madani Montessori.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={clsx(
                "px-6 py-2 rounded-full font-bold transition-all",
                filter === cat.id 
                  ? "bg-primary text-white shadow-lg scale-105" 
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img) => (
            <div key={img.id} className="group relative rounded-3xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-xl transition-all cursor-pointer">
              <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-lg">{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
