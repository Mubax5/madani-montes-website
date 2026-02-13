import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

const WA_NUMBER = "6282123576275";
const WA_LINK = `https://wa.me/${WA_NUMBER}`;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/galeri", label: "Galeri" },
    { href: "/kontak", label: "Kontak" },
  ];

  const programLinks = [
    { href: "/program-sekolah", label: "Program Sekolah" },
    { href: "/program-unggulan", label: "Program Unggulan" },
    { href: "/bimbel", label: "Bimbel" },
    { href: "/training-parenting", label: "Training & Parenting" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform bg-white p-1">
              <img
                src="/favicon.png"
                alt="Madani Montessori Islamic School"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-bold text-primary text-lg leading-tight group-hover:text-purple-700 transition-colors">
                Madani Montessori
              </span>
              <span className="text-xs text-muted-foreground font-medium">Islamic School</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary font-bold" : "text-gray-600"}`}>
              Beranda
            </Link>
            <Link href="/tentang" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/tentang") ? "text-primary font-bold" : "text-gray-600"}`}>
              Tentang
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none ${location.includes("program") || location.includes("bimbel") || location.includes("training") ? "text-primary font-bold" : "text-gray-600"}`}>
                Program <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56 rounded-xl shadow-xl border-purple-100 p-2">
                {programLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild className="rounded-lg focus:bg-purple-50 cursor-pointer">
                    <Link href={link.href}>{link.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/galeri" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/galeri") ? "text-primary font-bold" : "text-gray-600"}`}>
              Galeri
            </Link>
            <Link href="/kontak" className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/kontak") ? "text-primary font-bold" : "text-gray-600"}`}>
              Kontak
            </Link>

            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent text-accent-foreground hover:bg-yellow-400 rounded-full px-6 font-bold shadow-md hover:shadow-lg transition-all active:scale-95">
                <Phone className="w-4 h-4 mr-2" />
                Daftar via WA
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-purple-50 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-purple-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-primary hover:bg-purple-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="px-4 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">Program</div>
              {programLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 pl-8 rounded-lg text-base font-medium text-gray-600 hover:text-primary hover:bg-purple-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 px-4">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-yellow-400 rounded-xl py-6 font-bold text-lg shadow-md">
                    <Phone className="w-5 h-5 mr-2" />
                    Daftar via WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
