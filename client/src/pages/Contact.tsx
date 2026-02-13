import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type CreateInquiryRequest } from "@shared/schema";
import { z } from "zod";
import { MapPin, Phone, Clock } from "lucide-react";

// Add specific validation for frontend form if needed, or stick to schema
const formSchema = insertInquirySchema.extend({
  childAge: z.coerce.number().min(2, "Minimal 2 tahun").max(12, "Maksimal 12 tahun"),
  whatsapp: z.string().min(10, "Nomor WA tidak valid"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const mutation = useCreateInquiry();
  const { register, handleSubmit, setValue, watch, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      program: "KB",
    }
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data, {
      onSuccess: () => {
        reset();
        // Optional: Open WA automatically after save
        const text = `Assalamu'alaikum, saya ${data.parentName}. Saya ingin mendaftarkan anak saya ${data.childName} (${data.childAge} th) untuk program ${data.program}. Pesan: ${data.message || "-"}`;
        window.open(`https://wa.me/6282123576275?text=${encodeURIComponent(text)}`, '_blank');
      }
    });
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      
      <section className="bg-purple-600 text-white py-20 rounded-b-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-display font-bold mb-6">Hubungi Kami</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Kami siap melayani pertanyaan Anda seputar pendaftaran dan program sekolah.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Informasi Kontak</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center shrink-0 text-purple-600">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Lokasi Sekolah</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Jalan Raya Perum Korpri Blok J1 No.16, <br/>
                    Suradita, Kec. Cisauk, Kab. Tangerang, Banten
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0 text-blue-600">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Telepon / WhatsApp</h3>
                  <p className="text-gray-600 mb-1">0821-2357-6275 (Admin)</p>
                  <p className="text-sm text-gray-500">Klik tombol WA untuk respon cepat</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center shrink-0 text-yellow-600">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Jam Operasional</h3>
                  <p className="text-gray-600">Senin - Jumat: 07.30 - 15.00 WIB</p>
                  <p className="text-gray-600">Sabtu: 08.00 - 12.00 WIB</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 h-64 bg-gray-200 rounded-3xl overflow-hidden shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.719665766297!2d106.6393527749911!3d-6.299446993689667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb23d0637c37%3A0xe542600277876a43!2sJl.%20Raya%20Korpri%20No.16%2C%20Suradita%2C%20Kec.%20Cisauk%2C%20Kabupaten%20Tangerang%2C%20Banten%2015343!5e0!3m2!1sen!2sid!4v1709697683952!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-xl border border-gray-100">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Formulir Peminatan</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Nama Orang Tua</Label>
                  <Input {...register("parentName")} placeholder="Nama Ayah/Bunda" className="rounded-xl h-12" />
                  {errors.parentName && <span className="text-red-500 text-sm">{errors.parentName.message}</span>}
                </div>
                <div className="space-y-2">
                  <Label>Nomor WhatsApp</Label>
                  <Input {...register("whatsapp")} placeholder="08..." type="tel" className="rounded-xl h-12" />
                  {errors.whatsapp && <span className="text-red-500 text-sm">{errors.whatsapp.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Nama Anak</Label>
                  <Input {...register("childName")} placeholder="Nama Lengkap Anak" className="rounded-xl h-12" />
                  {errors.childName && <span className="text-red-500 text-sm">{errors.childName.message}</span>}
                </div>
                <div className="space-y-2">
                  <Label>Usia Anak (Tahun)</Label>
                  <Input {...register("childAge")} placeholder="Contoh: 4" type="number" className="rounded-xl h-12" />
                  {errors.childAge && <span className="text-red-500 text-sm">{errors.childAge.message}</span>}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Program yang Diminati</Label>
                <Select onValueChange={(val) => setValue("program", val)} defaultValue="KB">
                  <SelectTrigger className="rounded-xl h-12">
                    <SelectValue placeholder="Pilih Program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="KB">Kelompok Bermain (KB)</SelectItem>
                    <SelectItem value="TK A">TK A</SelectItem>
                    <SelectItem value="TK B">TK B</SelectItem>
                    <SelectItem value="Bimbel">Bimbingan Belajar</SelectItem>
                    <SelectItem value="Training">Training & Parenting</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Pesan / Pertanyaan (Opsional)</Label>
                <Textarea {...register("message")} placeholder="Tulis pesan Anda..." className="rounded-2xl min-h-[120px]" />
              </div>

              <Button 
                type="submit" 
                disabled={mutation.isPending}
                className="w-full h-14 text-lg font-bold rounded-xl bg-accent text-accent-foreground hover:bg-yellow-400"
              >
                {mutation.isPending ? "Mengirim..." : "Kirim Pesan & Buka WhatsApp"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
