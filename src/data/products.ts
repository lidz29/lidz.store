import { Product, Review, Testimonial } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'E-book Business Plan Template',
    description: 'Template lengkap untuk membuat business plan yang profesional. Dilengkapi dengan panduan step-by-step, contoh kasus nyata, dan worksheet yang dapat diedit. Perfect untuk startup dan UKM yang ingin mengembangkan bisnis mereka.',
    price: 99000,
    category: 'E-book',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    reviews: 124,
    features: [
      'Format PDF dan DOCX',
      'Panduan lengkap 50+ halaman',
      'Template worksheet Excel',
      'Video tutorial bonus',
      'Update gratis selamanya'
    ],
    downloadUrl: '#'
  },
  {
    id: '2',
    name: 'UI/UX Design Kit',
    description: 'Koleksi lengkap komponen UI/UX untuk website dan aplikasi modern. Termasuk wireframe, mockup, dan asset design yang siap pakai. Cocok untuk designer dan developer.',
    price: 149000,
    category: 'Design',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    reviews: 89,
    features: [
      'Format Figma dan Sketch',
      '200+ komponen UI',
      'Dark & light theme',
      'Responsive breakpoints',
      'Icon library bonus'
    ],
    downloadUrl: '#'
  },
  {
    id: '3',
    name: 'Instagram Template Pack',
    description: 'Paket template Instagram siap pakai untuk meningkatkan engagement. Berisi 50+ template post dan story dengan berbagai tema bisnis dan lifestyle.',
    price: 79000,
    category: 'Template',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    reviews: 203,
    features: [
      'Format PSD dan Canva',
      '50+ template unik',
      'Editable text dan warna',
      'Panduan penggunaan',
      'Bonus 20 template story'
    ],
    downloadUrl: '#'
  },
  {
    id: '4',
    name: 'Digital Marketing Toolkit',
    description: 'Kumpulan tools dan template untuk digital marketing. Termasuk content calendar, social media planner, email template, dan analytics dashboard.',
    price: 199000,
    category: 'Tools',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    reviews: 156,
    features: [
      'Excel dan Google Sheets',
      'Content planning tools',
      'Email templates',
      'Analytics dashboard',
      'Marketing calendar'
    ],
    downloadUrl: '#'
  },
  {
    id: '5',
    name: 'Logo Design Bundle',
    description: 'Koleksi 100+ logo design premium dalam berbagai kategori. Setiap logo tersedia dalam format vector yang dapat diedit dan digunakan untuk berbagai keperluan bisnis.',
    price: 129000,
    category: 'Design',
    image: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.6,
    reviews: 78,
    features: [
      'Format AI, EPS, PNG',
      '100+ design premium',
      'Berbagai kategori bisnis',
      'Fully editable',
      'Commercial license'
    ],
    downloadUrl: '#'
  },
  {
    id: '6',
    name: 'Website Template Pack',
    description: 'Paket template website responsif untuk berbagai industri. Dilengkapi dengan HTML, CSS, JavaScript, dan panduan customization yang mudah diikuti.',
    price: 179000,
    category: 'Template',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    reviews: 91,
    features: [
      'HTML, CSS, JavaScript',
      '10+ template responsif',
      'Cross-browser compatible',
      'Documentation lengkap',
      'Source code included'
    ],
    downloadUrl: '#'
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    productId: '1',
    userName: 'Andi Pratama',
    rating: 5,
    comment: 'Template business plan yang sangat lengkap dan mudah dipahami. Membantu saya dalam menyusun proposal untuk investor.',
    date: '2025-01-10'
  },
  {
    id: '2',
    productId: '1',
    userName: 'Sarah Dewi',
    rating: 5,
    comment: 'Sangat recommended! Format yang rapi dan contoh yang relevan dengan bisnis lokal.',
    date: '2025-01-08'
  },
  {
    id: '3',
    productId: '2',
    userName: 'Rizky Hakim',
    rating: 5,
    comment: 'UI kit yang sangat lengkap. Menghemat waktu development saya hingga 50%.',
    date: '2025-01-12'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maya Sari',
    role: 'Graphic Designer',
    comment: 'Lidz.store menyediakan template dan tools berkualitas tinggi dengan harga yang sangat terjangkau. Sangat membantu pekerjaan saya sehari-hari.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '2',
    name: 'Budi Santoso',
    role: 'Entrepreneur',
    comment: 'Produk digital di sini benar-benar berkualitas. E-book business plan template membantu saya mendapatkan pendanaan untuk startup.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: '3',
    name: 'Linda Permata',
    role: 'Content Creator',
    comment: 'Template Instagram pack-nya amazing! Engagement rate saya naik 200% sejak menggunakan template dari Lidz.store.',
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];