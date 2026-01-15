// Central Data for Excellent Entrance Coaching Centre

export const siteData = {
  general: {
    name: "Excellent Entrance Coaching Centre",
    location: "Vaikom",
    phone: "9876543210",
    whatsapp: "9876543210",
    email: "info@excellententrance.com", // Placeholder
    address: "Near Temple Road, Vaikom, Kerala", // Placeholder based on location
    logoText: "Excellent", // Or Use an Image
  },
  theme: {
    primary: "#4B0082", // Deep Purple (Indigo)
    secondary: "#FFD700", // Gold
    accent: "#E6E6FA", // Lavender
    dark: "#1A1A1A",
    light: "#F5F5F5",
  },
  hero: [
    {
      id: 1,
      title: "Unlock Your Medical & Engineering Dreams",
      subtitle: "Join the best coaching institute in Vaikom for NEET & JEE.",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=1920", // Classroom/Study
      ctaText: "Join Now",
    },
    {
      id: 2,
      title: "Proven Track Record of Success",
      subtitle: "Top ranks in KEAM and Board Exams year after year.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1920", // Graduation/Success
      ctaText: "View Results",
    },
  ],
  about: {
    title: "Legacy of Excellence",
    subtitle: "Shaping Brilliance Since 2010",
    description: "At Excellent Entrance Coaching Centre, we don't just teach; we inspire. With over a decade of experience, we have mastered the art of transforming average students into rank holders. Our holistic approach combines rigorous academic training with mental conditioning to prepare students for the toughest challenges.",
    motto: "Empowering Minds, Engineering Success",
    vision: "To be the premier institute for entrance coaching, fostering a culture of academic excellence and ethical values.",
    mission: "To provide accessible, high-quality education that empowers students to achieve their professional dreams in medicine and engineering.",
    features: [
      "Expert Faculty from Top Institutes",
      "Personalized Doubt Clearance",
      "Comprehensive Study Material",
      "Regular Mock Tests & Analysis"
    ],
    team: [
      {
        id: 1,
        name: "Dr. S. Kumar",
        role: "Academic Director",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300",
        bio: "20+ Years in Entrance Coaching"
      },
      {
         id: 2, 
         name: "Prof. Anjali Menon",
         role: "HOD Physics",
         image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
         bio: "Ex-Professor, NIT Calicut"
      },
      {
        id: 3,
        name: "Mr. Rajeev Pillai",
        role: "HOD Mathematics",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
        bio: "Expert in shortcut techniques"
      },
      {
        id: 4,
        name: "Mrs. Lakshmi G.",
        role: "HOD Chemistry",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300",
        bio: "PhD in Organic Chemistry"
      }
    ]
    // image: handled in component
  },
  courses: [
    {
      id: 1,
      title: "NEET Coaching",
      description: "Intensive preparation for medical entrance exams with top educators.",
      icon: "medical",
      brochureLink: "#",
      detailsLink: "#",
      category: "Medical"
    },
    {
      id: 2,
      title: "JEE Main & Advanced",
      description: "Structured learning path for engineering aspirants.",
      icon: "engineering",
      brochureLink: "#",
      detailsLink: "#",
      category: "Engineering"
    },
    {
      id: 3,
      title: "KEAM Entrance",
      description: "Specialized coaching for Kerala Engineering Architecture Medical.",
      icon: "architecture",
      brochureLink: "#",
      detailsLink: "#",
      category: "Engineering"
    },
    {
      id: 4,
      title: "Plus Two Science Tuition",
      description: "Comprehensive support for Physics, Chemistry, Biology, and Maths.",
      icon: "science",
      brochureLink: "#",
      detailsLink: "#",
      category: "Tuition"
    },
    {
      id: 5,
      title: "Foundation Batch",
      description: "Strong foundation for Class 8, 9 & 10 students.",
      icon: "books",
      brochureLink: "#",
      detailsLink: "#",
      category: "Foundation"
    },
  ],
  stats: [
    { label: "Years of Excellence", value: "15+" },
    { label: "Doctors Created", value: "500+" },
    { label: "Engineers Created", value: "1000+" },
    { label: "Top Ranks", value: "100+" },
  ],
  toppers: [
    {
      id: 1,
      name: "Arjun K.",
      rank: "AIR 150",
      exam: "NEET 2025",
      category: "Medical",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150", // Placeholder
    },
    {
      id: 2,
      name: "Sneha P.",
      rank: "State Rank 5",
      exam: "KEAM 2025",
      category: "Engineering",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150", // Placeholder
    },
    {
      id: 3,
      name: "Rahul M.",
      rank: "99.8%ile",
      exam: "JEE Main",
      category: "Engineering",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150", // Placeholder
    },
    {
      id: 4,
      name: "Anjali S.",
      rank: "AIR 800",
      exam: "NEET 2025",
      category: "Medical",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
    },
    {
      id: 5,
      name: "Vishnu R.",
      rank: "AIR 450",
      exam: "JEE Adv",
      category: "Engineering",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=150",
    }
  ],
  videos: [
    {
      id: 1,
      title: "Important Current Affairs - Jan 2026",
      thumbnail: "https://images.unsplash.com/photo-1585241936939-be05368a5bc3?auto=format&fit=crop&q=80&w=400",
      url: "#", // Placeholder
    },
    {
      id: 2,
      title: "NEET 2026 Strategy by Expert",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400",
      url: "#",
    },
    {
      id: 3,
      title: "JEE Advanced Tips & Tricks",
      thumbnail: "https://images.unsplash.com/photo-1606326608690-4e0281b1e588?auto=format&fit=crop&q=80&w=400",
      url: "#",
    },
  ],
  testimonials: [
    {
      id: 1,
      name: "Lakshmi Nair",
      role: "MBBS Student",
      text: "Excellent Coaching Centre helped me realize my dream of becoming a doctor. The faculty is amazing!",
    },
    {
      id: 2,
      name: "Aditya Menon",
      role: "IIT Madras",
      text: "The study materials and test series are top-notch. Highly recommended for JEE aspirants.",
    },
  ],
};
