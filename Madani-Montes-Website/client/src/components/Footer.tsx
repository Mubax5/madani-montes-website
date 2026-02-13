import { Link } from "wouter";
import { Phone, MapPin, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 rounded-t-[3rem] mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">M</span>
              </div>
              <span className="font-display font-bold text-xl">Madani Montessori</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Membangun generasi Rabbani yang cerdas, kreatif, dan berakhlak mulia dengan metode Montessori dan nilai-nilai Islami.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4 text-accent">Navigasi</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-accent transition-colors">Beranda</Link></li>
              <li><Link href="/tentang" className="hover:text-accent transition-colors">Tentang Kami</Link></li>
              <li><Link href="/program-sekolah" className="hover:text-accent transition-colors">Program Sekolah</Link></li>
              <li><Link href="/galeri" className="hover:text-accent transition-colors">Galeri Kegiatan</Link></li>
              <li><Link href="/kontak" className="hover:text-accent transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4 text-accent">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span className="text-primary-foreground/90">
                  Jalan Raya Perum Korpri Blok J1 No.16, Cisauk, Tangerang
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="https://wa.me/6282123576275" target="_blank" className="hover:text-accent transition-colors">
                  0821-2357-6275
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary-foreground/90">info@madanimontessori.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4 text-accent">Ikuti Kami</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} Madani Montessori Islamic School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
