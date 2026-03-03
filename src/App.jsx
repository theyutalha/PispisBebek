import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const featureCards = [
  {
    title: "Akıllı Atak Takvimi",
    desc: "19. hafta gibi kritik dönemleri, ideal uyanıklık penceresiyle birlikte takip edin.",
    className: "md:col-span-2 md:row-span-2",
    tint: "from-peach/45 to-white",
  },
  {
    title: "Günlük Timeline + Hızlı Ekle",
    desc: "Beslenme, bez, uyku ve sağlık kayıtlarını tek akışta görün, tek dokunuşla ekleyin.",
    className: "",
    tint: "from-sky/45 to-white",
  },
  {
    title: "WHO Uyumlu Grafikler",
    desc: "Kilo ve boy gelişimini persentil eğrileriyle karşılaştırıp yorumlayın.",
    className: "",
    tint: "from-lilac/45 to-white",
  },
  {
    title: "İstatistikler, Rozetler ve Analiz",
    desc: "Detaylı özet, aktivite ısı haritası, emzirme dengesi ve rozetlerle ritmi yakalayın.",
    className: "md:col-span-2",
    tint: "from-peach/35 to-sky/25",
  },
  {
    title: "Diş Haritası & Sağlık Checkpoint",
    desc: "Diş gelişimini işaretleyin, aşı ve sağlık adımlarını zamanında takip edin.",
    className: "",
    tint: "from-sky/35 to-lilac/30",
  },
];

const appScreens = [
  {
    file: "Simulator Screenshot - iPhone 11 Pro Max - 2026-03-03 at 22.39.36.png",
    title: "Ataklar Ekranı",
  },
  {
    file: "Simulator Screenshot - iPhone 11 Pro Max - 2026-03-03 at 22.44.06.png",
    title: "Günlük Akış",
  },
  {
    file: "Simulator Screenshot - iPhone 11 Pro Max - 2026-03-03 at 22.44.14.png",
    title: "Hızlı Ekle",
  },
  {
    file: "Simulator Screenshot - iPhone 11 Pro Max - 2026-03-03 at 22.46.27.png",
    title: "Detaylı Özet",
  },
  {
    file: "Simulator Screenshot - iPhone 11 Pro Max - 2026-03-03 at 22.46.32.png",
    title: "Kişisel Başarılar",
  },
  {
    file: "Simulator Screenshot - iPhone 11 Pro Max - 2026-03-03 at 22.46.37.png",
    title: "Emzirme Dengesi",
  },
  {
    file: "Simulator Screenshot - iPhone 11 Pro Max - 2026-03-03 at 22.46.44.png",
    title: "Diş Haritası",
  },
  {
    file: "Simulator Screenshot - iPhone 11 Pro Max - 2026-03-03 at 22.46.52.png",
    title: "Anne Saati",
  },
  {
    file: "Simulator Screenshot - iPhone 11 Pro Max - 2026-03-03 at 22.46.58.png",
    title: "Büyüme Grafikleri",
  },
  {
    file: "Simulator Screenshot - iPhone 11 Pro Max - 2026-03-03 at 22.47.07.png",
    title: "İstatistikler Rozetleri",
  },
  {
    file: "Simulator Screenshot - iPhone 11 Pro Max - 2026-03-03 at 22.47.14.png",
    title: "Paylaşım ve Rozet",
  },
];

const SITE_DIR = `${import.meta.env.BASE_URL}site/`;
const toAssetPath = (file) => `${SITE_DIR}${encodeURIComponent(file)}`;

function Logo() {
  return (
    <div className="flex items-center gap-3">
        <img
        src={`${SITE_DIR}iconpispis.png`}
        alt="PışPış uygulama ikonu"
        className="h-9 w-9 rounded-2xl shadow-card"
      />
      <span className="text-lg font-extrabold tracking-tight text-ink">PışPış</span>
    </div>
  );
}

function PhoneShot({ file, alt }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
      className="relative mx-auto w-[300px] md:w-[340px]"
    >
      <div className="absolute inset-0 -z-10 rounded-[48px] bg-gradient-to-b from-lilac/70 via-peach/45 to-sky/55 blur-3xl" />
      <div className="rounded-[44px] border border-white/70 bg-[#11151c] p-2 shadow-soft">
        <img
          src={toAssetPath(file)}
          alt={alt}
          className="h-auto w-full rounded-[36px] bg-[#ebe8e2] object-cover"
          loading="eager"
        />
      </div>
    </motion.div>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#fff_5%,#FCFBF8_40%,#f6f2eb_100%)]" />

      <header
        className={`sticky top-0 z-30 transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/60 bg-white/60 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <Logo />
          <a
            href="#download"
            className="rounded-full bg-ink px-5 py-2 text-sm font-bold text-white shadow-card transition hover:translate-y-[-1px] hover:bg-[#1f2634]"
          >
            App Store
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-5 pb-16 pt-8 md:px-8 md:pt-14">
        <section className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex rounded-full border border-sky/45 bg-white/75 px-4 py-1 text-xs font-bold uppercase tracking-[0.12em] text-ink/75">
              iOS Baby Growth Assistant
            </span>
            <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-tight md:text-6xl">
              Büyüme Yolculuğunda Modern Asistanınız.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink/70">
              PışPış ile bebeğinizin beslenme, uyku, atak haftaları ve sağlık verilerini tek bir
              ferah ekranda, %100 gizlilikle takip edin.
            </p>

            <div id="download" className="mt-7">
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-2xl bg-ink px-7 py-4 text-base font-extrabold text-white shadow-soft transition hover:-translate-y-0.5"
              >
                Download on the App Store
              </a>
              <p className="mt-3 text-sm text-ink/60">
                Internet gerektirmez, veriler cihazınızda kalır.
              </p>
            </div>
          </motion.div>
          <PhoneShot
            file={appScreens[0].file}
            alt="PışPış uygulaması Ataklar ekranı"
          />
        </section>

        <section className="mt-20">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-ink/55">Real Screens</p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Uygulamadan Gerçek Ekranlar</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {appScreens.map((screen, i) => (
              <motion.figure
                key={screen.file}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.03 }}
                className="rounded-[28px] border border-white/80 bg-white p-2 shadow-card"
              >
                <img
                  src={toAssetPath(screen.file)}
                  alt={screen.title}
                  className="h-auto w-full rounded-[22px]"
                  loading="lazy"
                />
                <figcaption className="px-2 pb-2 pt-3 text-sm font-bold text-ink/75">
                  {screen.title}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-ink/55">Features</p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Apple esintili Bento deneyimi</h2>
          </div>
          <div className="grid auto-rows-[220px] grid-cols-1 gap-5 md:grid-cols-3">
            {featureCards.map((card, i) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.06 }}
                className={`group relative overflow-hidden rounded-[30px] border border-white/85 bg-gradient-to-br ${card.tint} p-6 shadow-card ${card.className}`}
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.95),transparent_50%)]" />
                <h3 className="relative text-2xl font-extrabold leading-snug">{card.title}</h3>
                <p className="relative mt-3 max-w-sm text-base text-ink/70">{card.desc}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] border border-white/85 bg-white/70 p-8 shadow-soft backdrop-blur-md md:p-10"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-ink/55">Privacy</p>
                <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Verileriniz Sadece Size Ait.</h2>
                <p className="mt-4 max-w-2xl text-lg text-ink/70">
                  PışPış, verilerinizi hiçbir sunucuya göndermez. Tüm kayıtlar sadece telefonunuzda
                  saklanır (Local-first). Hızlı, güvenli ve çevrimdışı çalışır.
                </p>
              </div>
              <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-gradient-to-br from-lilac to-sky shadow-card">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3L4 6V11C4 16 7.4 20.6 12 22C16.6 20.6 20 16 20 11V6L12 3Z"
                    stroke="#27303F"
                    strokeWidth="1.8"
                  />
                  <path d="M9 12.2L11 14.2L15 10.2" stroke="#27303F" strokeWidth="1.8" />
                </svg>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-white/70 bg-white/55">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-7 text-sm text-ink/70 md:flex-row md:px-8">
          <p>Sevgiyle iOS için tasarlandı.</p>
          <div className="flex items-center gap-5">
            <a className="hover:text-ink" href="mailto:talhabekaroglu@gmail.com">
              İletişim
            </a>
            <a className="hover:text-ink" href={`${SITE_DIR}privacy.html`}>
              Gizlilik Politikası
            </a>
            <a className="hover:text-ink" href={`${SITE_DIR}terms.html`}>
              Kullanım Koşulları
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
