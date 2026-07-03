# Design System Specification: PIKI Digital Ecosystem (PIKI-DEP)

## 1. Brand Identity & Visual Philosophy

PIKI (Persatuan Inteligensia Kristen Indonesia) mewakili komunitas akademisi, cendekiawan, dan profesional. Oleh karena itu, arah desain harus mencerminkan aspek **Scholastic Authority (Wibawa Akademis), Trust (Kepercayaan), dan State-of-the-Art Modernity (Modernitas Mutakhir)**.

## 2. Color Palette

- **Dominant (60%):** `#F8FAFC` (Slate Light - Bersih, berjarak, bernuansa akademis modern).
- **Secondary (30%):** `#0B2F64` (Inteligensia Blue - Biru tua royal yang melambangkan keandalan, stabilitas, dan kecerdasan tinggi).
- **Accent (10%):** `#D4AF37` (Classic Academic Gold - Emas elegan untuk merepresentasikan prestasi akademik, keunggulan, dan kehormatan).
- **Neutral Dark:** `#0F172A` (Slate Dark - Digunakan untuk teks judul, teks penting, dan keterbacaan tinggi).

## 3. Typography

- **Headings (Titles, h1, h2):** `Merriweather` atau `Playfair Display` (Serif font untuk memperkuat kesan prestisius, kredibel, dan bergaya jurnal ilmiah).
- **Body Text & UI Components:** `Plus Jakarta Sans` atau `Inter` (Sans-serif modern untuk keterbacaan yang tajam, bersih, dan kontemporer).

## 4. UI Components Style

- **Corners:** Semi-rounded (`12px` hingga `16px` border-radius) untuk memberikan kesan ramah namun tetap formal dan terstruktur.
- **Borders:** Tipis (`1px`) berwarna `#E2E8F0` untuk membagi area tanpa membuat halaman terlihat penuh.
- **Cards:** Gunakan efek bayangan tipis (_subtle shadow_) `0px 4px 12px rgba(11, 47, 100, 0.05)` untuk kedalaman visual yang elegan.

eof
Act as a Principal UI/UX Designer. Generate a web app prototype containing 5 connected screens for PIKI (Persatuan Inteligensia Kristen Indonesia) Digital Ecosystem & Journal Platform.

Apply the styling rules defined below to all generated screens:

- Main Color Palette: #0B2F64 (Inteligensia Blue), #D4AF37 (Classic Gold), #F8FAFC (Slate Light background), #0F172A (Slate Dark for titles).
- Typography: Use an elegant Serif font (like Merriweather/Playfair Display) for main headers and clean Sans-Serif (like Plus Jakarta Sans/Inter) for body and controls.
- UI Styling: Semi-rounded borders (12px border-radius), thin borders, and subtle drop shadows. No flashy text shadows. Make it look highly professional, academic, and modern.

Please generate the following 5 interconnected screens on a single canvas, mapping logical navigation links (navbar tabs/buttons) between them:

---

SCREEN 1: LANDING PAGE (BERANDA UTAMA)

- Header: Elegant navigation bar featuring the PIKI logo, and links to "Beranda", "Portal Jurnal", "Satu Data & KTA", "E-Sekretariat", and "Akses Anggota". Include a "Daftar KTA" golden CTA button.
- Hero Section: High-quality corporate grid layout with a compelling headline "Intelektual Kristen Mengabdi untuk Bangsa" over a subtle academic abstract vector background.
- Core Feature Section - Infografis Agregasi Data (Interactive Dashboard Widget):
  - Row of 4 Metric Cards with icons:
    - Card 1: "8,450" - Total Pengurus & Anggota Aktif Nasional.
    - Card 2: "34 DPD & 412 DPC" - Sebaran Wilayah Cabang.
    - Card 3: "128 Jurnal" - Jurnal Terpublikasi SINTA Q1-Q3.
    - Card 4: "42%" - Anggota Bergelar Doktor & Magister (PhD/Master).
  - Two visual charts inside this section:
    - Chart 1: Professional Expertise Distribution (Bar chart showing IT: 240, Hukum: 450, Akademisi: 850, Pengusaha: 310, Medis: 190).
    - Chart 2: Regional Sebaran Map/Distribution representation.
- Social & News Feed Section:
  - News grid showing 3 latest articles about national PIKI activities.
  - A beautiful mock widget embedding Instagram post cards and a YouTube video container.

---

SCREEN 2: PORTAL JURNAL ILMIAH PIKI (ACADEMIC JOURNAL PORTAL)

- Top Section: Prominent "Portal Jurnal Ilmiah PIKI" page title with a sophisticated search engine UI (Search input, category dropdown, SINTA Rank filter: Q1, Q2, Q3, and a search button).
- Secondary Banner: A golden action-oriented callout "Punya karya ilmiah? Ajukan naskah Anda untuk di-review" with a button "Kirim Naskah Jurnal".
- Journal Grid Layout: A list of research cards. Each card must include:
  - A colorful metadata tag (e.g., "SINTA Q1", "Hukum & HAM", "Sains & Teknologi").
  - Title: Scholarly research paper title.
  - Authors: Names of PIKI professors/researchers.
  - Short Abstract: 2-3 lines of description.
  - PDF Download button with a download icon and "Detail Naskah" button.

---

SCREEN 3: SATU DATA & DASHBOARD KTA DIGITAL

- Page Title: "Satu Data & Direktori Anggota PIKI".
- Layout: Two-column layout.
  - Left Column (Directory Filters & Search):
    - Advanced filtering panels: Filter by DPD/DPD Province, Filter by Expertise (IT, Law, Business, Education, Theology), and Search by name/NTA.
    - Search result list of 3-4 professional member profiles with profile avatars, titles, and active status indicators.
  - Right Column (KTA Digital Showcase):
    - An exceptionally premium digital Membership Card (Kartu Tanda Anggota - KTA) container.
    - KTA Design: Deep royal blue gradient base, golden border trims, PIKI logo watermark, Member Photo, Name, NTA, and DPD Region.
    - Security Visual Overlays:
      - A prominent "CRYPTOGRAPHIC SECURE QR CODE" block.
      - A subtle security seal watermark overlay text "VALIDATED BY DPP PIKI".
      - Holographic-style microprint textures on the background.

---

SCREEN 4: E-SEKRETARIAT (DIGITAL SECRETARIAT)

- Page Title: "Kesekretariatan & Persuratan Digital PIKI".
- Top Stats Row: A mini dashboard showing "Surat Masuk: 12", "Surat Keluar: 34", "Menunggu TTD: 3", and "Selesai: 48". Include a visual linear workflow step tracking bar.
- Two-Column Workspace:
  - Left Column (Surat Generator Form):
    - Dropdown selector for Letter Templates (Surat Keputusan (SK), Surat Tugas, Surat Rekomendasi).
    - Form fields for Subject, Recipient, Letter Content/Body text area, and Date.
    - "Generate & Sign" gold CTA button.
  - Right Column (Live Document Preview Panel):
    - A clean A4-proportioned paper preview with official PIKI header letterhead.
    - Placeholder text auto-populating from the form.
    - Bottom Signature Area featuring high-fidelity mock representations of:
      - "Tanda Tangan Digital Terenkripsi" (Digital Signature Certificate stamp of Ketum & Sekjen).
      - Official "Cap Digital Sekretariat DPP PIKI" (A blue official round stamp visual graphic).

---

SCREEN 5: AKSES ANGGOTA & FORMULIR PENDAFTARAN KTA

- Split Screen Layout:
  - Left Panel: Clean, minimalist Login form with Username/Email, Password, "Ingat Saya" checkbox, and a blue "Masuk Ekosistem" button.
  - Right Panel: Registration and KTA Application Form:
    - Text: "Belum terdaftar? Lengkapi data diri untuk mengajukan KTA Digital PIKI."
    - Input fields: Full Name, Degree, Profession, DPD/DPC Domisili selection.
    - Document Upload Drag-and-Drop Area: Upload KTP and academic certificates.
    - Submit Button: "Kirim Pengajuan KTA" in gold accent.
