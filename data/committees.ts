export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  organization: string;
  honors?: string;
  extra?: string;
  imageName?: string;
}

export interface CommitteeSection {
  title: string;
  description?: string;
  members: CommitteeMember[];
  gridCols?: string; // Tailwind grid column classes
}

export const committeesData: CommitteeSection[] = [
  {
    title: "Patron",
    description: "Leadership & Vision",
    members: [
      {
        id: "patron-1",
        name: "Dr. Karthiya Banu Ph.D.,",
        role: "Founder & CEO",
        organization: "Inspire Softech Group Companies",
        honors: "Best Entrepreneur Awardee",
        imageName: "karthiya_banu",
      },
    ],
    gridCols: "grid-cols-1 md:grid-cols-1",
  },
  {
    title: "Conference Dignitaries",
    description: "Distinguished Leaders & Experts",
    members: [
      {
        id: "dignitary-1",
        name: "Dr. R. Ravanan M.Sc., M.Phil., Ph.D., FSMS",
        role: "Joint Director (P & D) (Retd)",
        organization: "Directorate of Collegiate Education, Chennai",
        honors: "Tamil Nadu Scientist Awardee",
        imageName: "r_ravanan",
      },
      {
        id: "dignitary-2",
        name: "Shri. K. Karunagaran M.E.,",
        role: "Executive Engineer",
        organization: "HOTLINES, TANTRANSCO, Vellore",
        imageName: "k_karunagaran",
      },
      {
        id: "dignitary-3",
        name: "Dr. C. Sundar Ph.D.,",
        role: "Principal",
        organization: "Dhanraj Baid Jain College, Chennai",
        imageName: "c_sundar",
      },
      {
        id: "dignitary-4",
        name: "Dr. J. Indumathi Ph.D.,",
        role: "Dean",
        organization: "Sree Balaji Institute of Science and Technology",
        extra: "Professor of Practice, Anna University",
        imageName: "j_indumathi",
      },
      {
        id: "dignitary-5",
        name: "Dr. K. Chokkanathan Ph.D.,",
        role: "Associate Professor",
        organization: "MITS Deemed To Be University, Andhra Pradesh",
        imageName: "k_chokkanathan",
      },
      {
        id: "dignitary-6",
        name: "Dr. P. M. Anbumaran M.B.B.S ,M.D.,",
        role: "Professor - Respiratory Medicine",
        organization: "Saveetha Medical College and Hospital",
        imageName: "p_m_anbumaran",
      },
      {
        id: "dignitary-7",
        name: "Shri. Shree Ranjan Natesan Velmurugan",
        role: "Software Diagnostic Engineer",
        organization: "Expleo - (Rolls-Royce, UK)",
        imageName: "shree_ranjan_natesan_velmurugan",
      },
    ],
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  },
  {
    title: "Advisory Committee",
    description: "Strategic Advisors & Consultants",
    members: [
      {
        id: "advisory-1",
        name: "Dr. S. Umarani MCA.,Ph.D.,",
        role: "Professor, Dept. of Computer Science",
        organization: "SRM Institute of Science and Technology, Chennai",
        imageName: "s_umarani",
      },
      {
        id: "advisory-2",
        name: "Dr. Venkateswarlu Karumuri Ph.D.,",
        role: "Assistant Professor, School of Management",
        organization: "MITS Deemed To Be University, Andhra Pradesh",
        imageName: "venkateswarlu_karumuri",
      },
      {
        id: "advisory-3",
        name: "Dr. S. Usharani Ph.D.,",
        role: "Head of the Department, Dept. of MCA",
        organization: "Viswam Engineering College, Andhra Pradesh",
        imageName: "s_usharani",
      },
      {
        id: "advisory-4",
        name: "Dr. Agnibha Das Majumdar Ph.D.,",
        role: "Independent Researcher and Physics Educator",
        organization: "Ex-Assistant Professor, MITS University",
        imageName: "agnibha_das_majumdar",
      },
    ],
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  },
  {
    title: "Review Committee",
    description: "Expert reviewers ensuring the highest standards of academic excellence.",
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    members: [
      {
        id: "review-1",
        name: "Dr. G. Fathima, Ph.D.",
        role: "Professor & Head, Dept. of Computer Science and Engineering",
        organization: "Adhiyamaan College of Engineering (An Autonomous Institution), Hosur",
        imageName: "g_fathima"
      },
      {
        id: "review-2",
        name: "Dr. R. PARAMESWARI",
        role: "Director – Academics, Professor & Head, Dept. of Computer Science and Information Technology",
        organization: "Vels Institute of Science, Technology & Advanced Studies (VISTAS), Palavaram, Chennai",
        imageName: "r_parameswari"
      },
      {
        id: "review-3",
        name: "Dr. G. Thailambal, M.C.A., M.Phil., Ph.D.",
        role: "Professor & Head, Dept. of Advanced Computing and Analytics",
        organization: "Vels Institute of Science Technology and Advanced Studies (VISTAS), Palavaram, Chennai",
        imageName: "g_thailambal"
      },
      {
        id: "review-4",
        name: "Dr. R. DEVI",
        role: "Professor & Head, Dept. of Applied Computing & Emerging Technologies",
        organization: "Vels Institute of Science Technology and Advanced Studies (VISTAS), Palavaram, Chennai",
        imageName: "r_devi"
      },
      {
        id: "review-5",
        name: "Dr. K. Shanmugapriya M.B.B.S. M.D.",
        role: "Associate Professor-Respiratory Medicine",
        organization: "Chennai Chest Clinic, Chennai",
        imageName: "k_shanmugapriya"
      }
    ]
  },
  {
    title: "Technical & Media Team",
    description: "Conference Operations & Communications",
    members: [
      {
        id: "technical-1",
        name: "Mr. S. Aravind",
        role: "Technical Program Lead",
        organization: "Head – Learning & Development, Edinz Tech Private Limited",
        imageName: "s_aravind",
      },
      {
        id: "technical-2",
        name: "Mr. K. Girinath",
        role: "Media Coordinator",
        organization: "Executive – Technical Operations, Inspire Softech Solutions",
        imageName: "k_girinath",
      },
    ],
    gridCols: "grid-cols-1 md:grid-cols-2",
  },
];
