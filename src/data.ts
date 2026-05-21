import { Home, Phone, ShoppingBag, Info, BookOpen } from "lucide-react";

export const CATEGORIES = [
  "Pain Relief",
  "Antibiotics",
  "Vitamins & Supplements",
  "Mother & Baby",
  "First Aid",
  "Chronic Condition",
];

export const PRODUCTS = [
  {
    id: "p1",
    name: "Paracetamol 500mg",
    category: "Pain Relief",
    short_desc: "Effective relief from mild to moderate pain and fever.",
    long_desc: "Paracetamol is a common painkiller used to treat aches and pain. It can also be used to reduce a high temperature. It's available combined with other painkillers and anti-sickness medicines.",
    usage: "Take 1-2 tablets every 4-6 hours as needed. Do not exceed 8 tablets in 24 hours.",
    warnings: "Do not take with other paracetamol-containing products. Consult a doctor if symptoms persist.",
    price: "$1.50",
    image: "https://images.unsplash.com/photo-1584308666744-24d5e45a03ca?auto=format&fit=crop&q=80&w=600",
    available: true,
  },
  {
    id: "p2",
    name: "Amoxicillin 250mg",
    category: "Antibiotics",
    short_desc: "Broad-spectrum antibiotic for bacterial infections.",
    long_desc: "Amoxicillin is used to treat a wide variety of bacterial infections. This medication is a penicillin-type antibiotic. It works by stopping the growth of bacteria. This antibiotic treats only bacterial infections. It will not work for viral infections (such as common cold, flu).",
    usage: "Take exactly as prescribed by your doctor. Usually taken every 8 to 12 hours.",
    warnings: "Requires prescription. Finish the complete course even if you feel better.",
    price: "Contact for Price",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=600",
    available: true,
  },
  {
    id: "p3",
    name: "Complete Multivitamin",
    category: "Vitamins & Supplements",
    short_desc: "Daily essential vitamins for immune support.",
    long_desc: "A daily multivitamin to help fill nutritional gaps. Contains Vitamin C, D, Zinc, and essential B-vitamins for energy and immune system support.",
    usage: "Take one tablet daily with a meal.",
    warnings: "Do not exceed recommended dose. Keep out of reach of children.",
    price: "$12.00",
    image: "https://images.unsplash.com/photo-1550572017-edb9b47e24a4?auto=format&fit=crop&q=80&w=600",
    available: true,
  },
  {
    id: "p4",
    name: "Baby Rash Cream",
    category: "Mother & Baby",
    short_desc: "Soothing cream for diaper rash relief.",
    long_desc: "Formulated with Zinc Oxide, this cream forms a protective barrier on baby's skin to provide relief and soothe irritated skin caused by diaper rash.",
    usage: "Apply generously to clean, dry diaper area with each change.",
    warnings: "For external use only. Avoid contact with eyes.",
    price: "$5.50",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=600",
    available: true,
  },
  {
    id: "p5",
    name: "Digital Thermometer",
    category: "First Aid",
    short_desc: "Fast and accurate temperature reading.",
    long_desc: "Easy-to-read digital thermometer suitable for adults and children. Provides accurate readings in seconds with a memory function for the last reading.",
    usage: "Use orally or under the arm. Clean with alcohol swab before and after use.",
    warnings: "Keep batteries away from children. Do not drop.",
    price: "$8.00",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=600",
    available: true,
  },
  {
    id: "p6",
    name: "Ibuprofen 400mg",
    category: "Pain Relief",
    short_desc: "Anti-inflammatory pain relief.",
    long_desc: "Used for relieving pain from various conditions such as headache, dental pain, menstrual cramps, muscle aches, or arthritis. It is also used to reduce fever and to relieve minor aches and pain due to the common cold or flu.",
    usage: "Take 1 tablet every 4-6 hours while symptoms persist. Take with food if stomach upset occurs.",
    warnings: "May cause stomach bleeding. Consult doctor if you have asthma or kidney problems.",
    price: "$2.50",
    image: "https://images.unsplash.com/photo-1550572017-edb9b47e24a4?auto=format&fit=crop&q=80&w=600",
    available: true,
  }
];

export const BLOG_POSTS = [
  {
    id: "b1",
    title: "How to Use Antibiotics Safely",
    date: "May 1, 2026",
    summary: "Antibiotics are powerful medicines, but using them incorrectly can cause harm. Learn the essential rules for safe antibiotic use.",
    content: "Antibiotics treat bacterial infections, not viruses like the common cold. Always finish your prescribed course, even if you feel better. Never share antibiotics or save them for later...",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "b2",
    title: "Common Health Tips for Families in Somalia",
    date: "April 15, 2026",
    summary: "Simple, everyday habits to keep you and your family healthy and prevent common illnesses.",
    content: "Proper hydration, hand hygiene, and balanced nutrition drawn from local foods can build strong immunity. Be aware of safe water practices...",
    image: "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?auto=format&fit=crop&q=80&w=600"
  }
];

export const NAV_LINKS = [
  { name: "Home", path: "/", icon: Home },
  { name: "Shop", path: "/shop", icon: ShoppingBag },
  { name: "About Us", path: "/about", icon: Info },
  { name: "Health Tips", path: "/blog", icon: BookOpen },
  { name: "Contact", path: "/contact", icon: Phone },
];

export const WHATSAPP_NUMBER = "252618857272"; // DurDur Pharmacy
