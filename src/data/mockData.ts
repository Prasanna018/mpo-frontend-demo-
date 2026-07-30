export interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  category: string;
  summary: string;
  content: string;
  pdfUrl?: string;
}

export interface EventItem {
  id: string;
  dayMonth: string; // e.g. "AUG 7"
  year: string;    // e.g. "2026"
  fullDate: string; // e.g. "August 7, 2026"
  time: string;
  title: string;
  location: string;
  description: string;
  pdfUrl?: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  category: string;
  description: string;
  status: 'Active' | 'Under Review' | 'Planning Phase';
  funding: string;
}

export interface AgendaItem {
  id: string;
  venue: string;
  date: string;
  time: string;
  pdfUrl?: string;
  status?: 'cancelled' | 'No Meeting';
}

export interface BoardMember {
  name: string;
  organization: string;
  image?: string;
  avatarType?: 'male' | 'female';
  isVacant?: boolean;
}

export const MPO_NAV_LINKS = [
  { name: 'Home', href: '#home', active: true },
  { 
    name: 'About', 
    href: '#about', 
    hasDropdown: true,
    dropdownItems: [
      'MPO Overview',
      'Policy Committee',
      'Technical Advisory Committee',
      'Agendas'
    ] 
  },
  { name: 'Programs & Studies', href: '#programs' },
  { name: 'Plans', href: '#plans' },
  { name: 'Data', href: '#data' },
  { name: 'Funding', href: '#funding' },
  { name: 'Contact', href: '#contact' },
];

export const POLICY_COMMITTEE_DATA = {
  chair: {
    name: 'Mr. John Wood (Chair)',
    organization: 'City of Colonial Heights',
    image: '/pc-members/john-wood.png'
  },
  votingMembers: [
    {
      name: 'Mr. Casey Dooley (Vice Chair)',
      organization: 'Dinwiddie County',
      image: '/pc-members/casey-dooley.png'
    },
    {
      name: 'Mayor Samuel Parham',
      organization: 'City of Petersburg',
      image: '/pc-members/samuel-parham.png'
    },
    {
      name: 'Mr. T.J. Webb',
      organization: 'Prince George County',
      image: '/pc-members/tj-webb.png'
    },
    {
      name: 'Mr. Kevin Carroll',
      organization: 'Chesterfield County',
      image: '/pc-members/kevin-carroll.png'
    },
    {
      name: 'Vacant',
      organization: 'City of Hopewell',
      image: '/pc-members/hopewell-seal.png',
      isVacant: true
    },
    {
      name: 'Mr. Dale Totten',
      organization: 'For the Secretary of Transportation',
      image: '/pc-members/dale-totten.png'
    },
    {
      name: 'Mr. Darius Mason',
      organization: 'Petersburg Area Transit',
      image: '/pc-members/darius-mason.png'
    },
    {
      name: 'Mr. Jay Ellington',
      organization: 'Crater Planning District Commission',
      image: '/pc-members/jay-ellington.png'
    }
  ],
  nonVotingMembers: [
    {
      name: 'Mr. Wood Hudson',
      organization: 'Department of Rail & Public Transportation',
      image: '/pc-members/wood-hudson.png',
      isVacant: false
    },
    {
      name: 'Ms. Brigitte Carter',
      organization: 'RideFinders, Inc.',
      image: '/pc-members/brigitte-carter.png',
      isVacant: false
    },
    {
      name: 'Mr. Ivan Rucker',
      organization: 'Federal Highway Administration (FHWA)',
      image: 'silhouette-male',
      isVacant: false
    },
    {
      name: 'Vacant',
      organization: 'Federal Transit Administration (FTA)',
      image: 'silhouette-male',
      isVacant: true
    }
  ]
};

export const TAC_COMMITTEE_DATA = {
  votingMembers: [
    {
      name: 'Mr. Hongmyung (Hong) Lim (Chair)',
      organization: 'Chesterfield County',
      image: '/tac-members/hongmyung-lim.png',
      avatarType: 'male' as const
    },
    {
      name: 'Mr. Matthew Ryan (Vice Chair)',
      organization: 'City of Colonial Heights',
      image: '/tac-members/matt-ryan.png',
      avatarType: 'male' as const
    },
    {
      name: 'Mr. Jared Crews',
      organization: 'City of Petersburg',
      image: '/tac-members/jared-crews.png',
      avatarType: 'male' as const
    },
    {
      name: 'Mr. Tim Graves',
      organization: 'Prince George County',
      image: '/tac-members/prince-george-seal.png',
      avatarType: 'male' as const
    },
    {
      name: 'Mr. Josh Sementelli',
      organization: 'City of Hopewell',
      image: '/tac-members/hopewell-seal.png',
      avatarType: 'male' as const
    },
    {
      name: 'Mr. Frank Haltom',
      organization: 'Dinwiddie County',
      image: '/tac-members/dinwiddie-seal.png',
      avatarType: 'male' as const
    },
    {
      name: 'Mr. Mark Bassett',
      organization: 'Dinwiddie County',
      image: '/tac-members/mark-bassett.png',
      avatarType: 'male' as const
    },
    {
      name: 'Ms. Naomi Siodmok',
      organization: 'Virginia Department of Transportation',
      image: '/tac-members/naomi-siodmok.png',
      avatarType: 'female' as const
    },
    {
      name: 'Mr. Darius Mason',
      organization: 'Petersburg Area Transit',
      image: '/tac-members/darius-mason.png',
      avatarType: 'male' as const
    },
    {
      name: 'Mr. Wood Hudson',
      organization: 'Department of Rail & Public Transportation',
      image: '/tac-members/wood-hudson.png',
      avatarType: 'male' as const
    },
    {
      name: 'Mr. Zakari Mumuni',
      organization: 'Crater Planning District Commission',
      image: '/tac-members/zakari-mumuni.png',
      avatarType: 'male' as const
    }
  ],
  nonVotingMembers: [
    {
      name: 'Ms. Brigitte Carter',
      organization: 'RideFinders, Inc.',
      image: '/tac-members/brigitte-carter.png',
      avatarType: 'female' as const
    },
    {
      name: 'Ms. Alexis Morris',
      organization: 'Petersburg National Battlefield Park',
      avatarType: 'female' as const
    },
    {
      name: 'Mr. Fritz Brandt',
      organization: 'Fort Lee',
      avatarType: 'male' as const
    }
  ]
};

export const PROGRAMS_STUDIES_DATA = {
  'Corridor Plans': [
    {
      id: 'cp-1',
      title: 'I-85/95 Interchange Feasibility Study (2015)',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/Draft-5.07.2026-Policy-Committee-Agenda-V6-05.07.2026.pdf'
    },
    {
      id: 'cp-2',
      title: 'I-95/85 RSA',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/Draft-4.09.2026-Policy-Committee-Agenda-Updated-04.07.2026_compressed.pdf'
    },
    {
      id: 'cp-3',
      title: 'Fort Lee (now Fort Gregg-Adams) Expansion Traffic Study (2007)',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/03.12.2026-Policy-Committee-Agenda-Final-Updated-04.23.2026_compressed.pdf'
    }
  ],
  'Regional Plans': [
    {
      id: 'rp-1',
      title: 'Tri-Cities Regional Active Transportation Plan (2025)',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/02.12.2026-Policy-Committee-agenda-Final-V3_compressed.pdf'
    },
    {
      id: 'rp-2',
      title: '2045 Metropolitan Transportation Blueprint Plan',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'rp-3',
      title: 'Tri-Cities Regional Congestion Management Process',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/Draft-5.07.2026-Policy-Committee-Agenda-V6-05.07.2026.pdf'
    }
  ],
  'Reports': [
    {
      id: 'rep-1',
      title: 'Annual Unified Planning Work Program Report',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/Draft-4.09.2026-Policy-Committee-Agenda-Updated-04.07.2026_compressed.pdf'
    },
    {
      id: 'rep-2',
      title: 'Tri-Cities Freight Corridor & Logistics Performance Report',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/03.12.2026-Policy-Committee-Agenda-Final-Updated-04.23.2026_compressed.pdf'
    },
    {
      id: 'rep-3',
      title: 'Regional Air Quality & Emission Inventory Analysis Report',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/02.12.2026-Policy-Committee-agenda-Final-V3_compressed.pdf'
    }
  ]
};

export const AGENDAS_DATA: { current: AgendaItem[]; archive: AgendaItem[] } = {
  current: [
    {
      id: 'pc-1',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'May 7, 2026',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/Draft-5.07.2026-Policy-Committee-Agenda-V6-05.07.2026.pdf'
    },
    {
      id: 'pc-2',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'April 9, 2026',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/Draft-4.09.2026-Policy-Committee-Agenda-Updated-04.07.2026_compressed.pdf'
    },
    {
      id: 'pc-3',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'March 12, 2026',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/03.12.2026-Policy-Committee-Agenda-Final-Updated-04.23.2026_compressed.pdf'
    },
    {
      id: 'pc-4',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'February 12, 2026',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/02.12.2026-Policy-Committee-agenda-Final-V3_compressed.pdf'
    }
  ],
  archive: [
    {
      id: 'arch-1',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'November 13, 2025',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-2',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'October 9, 2025',
      time: '4:30 PM',
      status: 'cancelled'
    },
    {
      id: 'arch-3',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'August 19, 2025',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-4',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'June 12, 2025',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-5',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'May 8, 2025',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-6',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'April 10, 2025',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-7',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'March 13, 2025',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-8',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'February 13, 2025',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-9',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'November 14, 2024',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-10',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'October 10, 2024',
      time: '4:30 PM',
      status: 'cancelled'
    },
    {
      id: 'arch-11',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'September 12, 2024',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-12',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'August 8, 2024',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-13',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'June 13, 2024',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-14',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'May 9, 2024',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-15',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'April 11, 2024',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-16',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'March 14, 2024',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-17',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'February 22, 2024',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-18',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'January 11, 2024',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-19',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'October 12, 2023',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-20',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'September 14, 2023',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-21',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'August 10, 2023',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-22',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'June 22, 2023',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-23',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'May 11, 2023',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-24',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'April 13, 2023',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-25',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'March 9, 2023',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-26',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'February 23, 2023',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-27',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'January 12, 2023',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-28',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'September 8, 2022',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-29',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'August 11, 2022',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-30',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'June 23, 2022',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-31',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'May 12, 2022',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-32',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'April 14, 2022',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-33',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'March 10, 2022',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-34',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'February 24, 2022',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-35',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'January 13, 2022',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-36',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'December 9, 2021',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-37',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'November 18, 2021',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-38',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'October 14, 2021',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-39',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'September 9, 2021',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-40',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'August 12, 2021',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-41',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'June 24, 2021',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-42',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'May 13, 2021',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-43',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'April 8, 2021',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-44',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'March 11, 2021',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-45',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'February 25, 2021',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-46',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'January 14, 2021',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'arch-47',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'December 10, 2020',
      time: '4:30 PM',
      status: 'No Meeting'
    },
    {
      id: 'arch-48',
      venue: '1964 Wakefield Stree , PO Box 1808 , Petersburg, VA 23805',
      date: 'November 12, 2020',
      time: '4:30 PM',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    }
  ]
};

export const ABOUT_SECTIONS = {
  'MPO Overview': {
    title: 'MPO Overview',
    subtitle: 'What is an MPO',
    paragraphs: [
      'A Metropolitan Planning Organization (MPO) is a federally designated transportation planning agency responsible for coordinating transportation planning and decision-making in urbanized areas with populations greater than 50,000. Established by Congress through the Federal-Aid Highway Act of 1962, MPOs were created to promote regional coordination through a continuing, cooperative, and comprehensive ("3-C") transportation planning process.',
      'MPOs bring together local governments, transportation agencies, and other stakeholders to develop long-range transportation plans, prioritize transportation investments, and ensure that federal transportation funds are allocated in accordance with regional goals and priorities.',
      'The Tri-Cities Area Metropolitan Planning Organization (TCAMPO) is the federally designated transportation planning agency responsible for coordinating the regional transportation planning process for the Tri-Cities Area urbanized area. TCAMPO is one of 15 MPOs in Virginia and is governed through a three-part organizational structure consisting of:'
    ],
    bullets: [
      'an executive decision-making body (Policy Committee),',
      'an advisory body (Technical Advisory Committee), and',
      'a full-time professional staff responsible for supporting the MPO\'s planning activities and serving the member jurisdictions.'
    ],
    historyTitle: '',
    historyContent: ''
  },
  'Policy Committee': {
    title: 'Policy Committee',
    subtitle: 'Voting',
    paragraphs: [],
    bullets: [],
    historyTitle: '',
    historyContent: ''
  },
  'Technical Advisory Committee': {
    title: 'Technical Advisory Committee',
    subtitle: 'Voting Members',
    paragraphs: [],
    bullets: [],
    historyTitle: '',
    historyContent: ''
  },
  'Agendas': {
    title: 'Agendas',
    subtitle: 'Agendas',
    paragraphs: [],
    bullets: [],
    historyTitle: '',
    historyContent: ''
  }
};

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'August Technical Advisory Committee (TAC) Meeting',
    date: 'AUG 7, 2026',
    category: 'Public Notice',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    summary: 'The August Technical Advisory Committee (TAC) meeting is scheduled for August 7, 2026, at 10:00 a.m. at the Crater Planning District Commission (Crater PDC), located at 1964 Wakefield Street, Petersburg, VA 23805.',
    content: 'The August Technical Advisory Committee (TAC) meeting is scheduled for August 7, 2026, at 10:00 a.m. at the Crater Planning District Commission (Crater PDC), located at 1964 Wakefield Street, Petersburg, VA 23805.',
    pdfUrl: 'https://craterpdc.org/wp-content/uploads/2026/07/TCAMPO_Draft_TAC_Agenda_Aug07-26-v6.pdf'
  },
  {
    id: 'news-2',
    title: 'August Policy Committee (PC) Meeting',
    date: 'AUG 13, 2026',
    category: 'Public Notice',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    summary: 'The August Policy Committee (PC) meeting is scheduled for August 13, 2026, at 4:30 p.m. at the Crater Planning District Commission (Crater PDC), located at 1964 Wakefield Street, Petersburg, VA 23805.',
    content: 'The August Policy Committee (PC) meeting is scheduled for August 13, 2026, at 4:30 p.m. at the Crater Planning District Commission (Crater PDC), located at 1964 Wakefield Street, Petersburg, VA 23805.',
    pdfUrl: 'https://craterpdc.org/wp-content/uploads/2026/07/TCAMPO_Draft_TAC_Agenda_Aug07-26-v6.pdf'
  },
  {
    id: 'news-3',
    title: 'PLAN2050 CLRP & FFY27–30 MTIP – Conformity',
    date: 'JUN 25, 2026',
    category: 'Public Notice',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    summary: 'Policy Committee approved the draft conformity project lists (PLAN2050 and FFY27–30 MTIP) and authorized TAC to review and release for public review.',
    content: 'Policy Committee approved the draft conformity project lists (PLAN2050 and FFY27–30 MTIP) and authorized TAC to review and release for public review.'
  },
  {
    id: 'news-4',
    title: 'FY27 UPWP',
    date: 'MAY 29, 2026',
    category: 'Public Notice',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=80',
    summary: "Policy Committee approved the FY27 Unified Planning Work Program (UPWP), which outlines TCAMPO's planning activities, budget, and priorities for the upcoming fiscal year.",
    content: "Policy Committee approved the FY27 Unified Planning Work Program (UPWP), which outlines TCAMPO's planning activities, budget, and priorities for the upcoming fiscal year."
  },
  {
    id: 'news-5',
    title: 'Election of Officers',
    date: 'MAY 7, 2026',
    category: 'Public Notice',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
    summary: 'Policy Committee elected Mr. John Wood (Colonial Heights) as Chair and Mr. Casey Dooley (Dinwiddie) as Vice Chair for the July 1, 2026–June 30, 2027 term.',
    content: 'Policy Committee elected Mr. John Wood (Colonial Heights) as Chair and Mr. Casey Dooley (Dinwiddie) as Vice Chair for the July 1, 2026–June 30, 2027 term.'
  },
  {
    id: 'news-6',
    title: 'SMART SCALE Round 7 Preliminary Applications',
    date: 'APR 6, 2026',
    category: 'Public Notice',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    summary: 'The Policy Committee supported four SMART SCALE Round 7 preliminary applications submitted by TCAMPO: (1) #13899 – S. Crater Road at Crater Circle and Wagner Road (with sidewalks), (2) #13913 – Wagner Road at Normandy Drive (US-301 Corridor), (3) #13914 – US-460: Wagner Road to I-295, and (4) #13915 – Washington/Wythe Conversion to Two-Way and SPUI at I-95.',
    content: 'The Policy Committee supported four SMART SCALE Round 7 preliminary applications submitted by TCAMPO: (1) #13899 – S. Crater Road at Crater Circle and Wagner Road (with sidewalks), (2) #13913 – Wagner Road at Normandy Drive (US-301 Corridor), (3) #13914 – US-460: Wagner Road to I-295, and (4) #13915 – Washington/Wythe Conversion to Two-Way and SPUI at I-95.'
  }
];

export const EVENTS_ITEMS: EventItem[] = [
  {
    id: 'event-1',
    dayMonth: 'AUG 7',
    year: '2026',
    fullDate: 'August 7, 2026',
    time: '10:00 AM',
    title: 'August Technical Advisory Committee (TAC) Meeting',
    location: 'Crater Planning District Commission (Crater PDC), 1964 Wakefield Street, Petersburg, VA 23805',
    description: 'The August Technical Advisory Committee (TAC) meeting is scheduled for August 7, 2026, at 10:00 a.m. at the Crater Planning District Commission (Crater PDC), located at 1964 Wakefield Street, Petersburg, VA 23805.',
    pdfUrl: 'https://craterpdc.org/wp-content/uploads/2026/07/TCAMPO_Draft_TAC_Agenda_Aug07-26-v6.pdf'
  },
  {
    id: 'event-2',
    dayMonth: 'AUG 13',
    year: '2026',
    fullDate: 'August 13, 2026',
    time: '4:30 PM',
    title: 'August Policy Committee (PC) Meeting',
    location: 'Crater Planning District Commission (Crater PDC), 1964 Wakefield Street, Petersburg, VA 23805',
    description: 'The August Policy Committee (PC) meeting is scheduled for August 13, 2026, at 4:30 p.m. at the Crater Planning District Commission (Crater PDC), located at 1964 Wakefield Street, Petersburg, VA 23805.',
    pdfUrl: 'https://craterpdc.org/wp-content/uploads/2026/07/TCAMPO_Draft_TAC_Agenda_Aug07-26-v6.pdf'
  }
];

export const QUICK_ACTIONS = [
  {
    id: 'programs',
    title: 'Explore Programs',
    iconName: 'FolderSearch',
    subtitle: 'Browse regional transportation programs and ongoing planning initiatives.'
  },
  {
    id: 'plans',
    title: 'View Regional Plans',
    iconName: 'ClipboardList',
    subtitle: 'Access Long-Range Transportation Plans, TIPs, and UPWPs.'
  },
  {
    id: 'funding',
    title: 'Funding',
    iconName: 'HandCoins',
    subtitle: 'Explore federal, state, and local grant opportunities & allocations.'
  },
  {
    id: 'agendas',
    title: 'Agendas',
    iconName: 'CalendarClock',
    subtitle: 'Review upcoming and archived meeting agendas, minutes, and schedules.'
  },
  {
    id: 'committee',
    title: 'Committee',
    iconName: 'Users',
    subtitle: 'Meet Policy Committee members, TAC delegates, and CAC representatives.'
  }
];

export const PROGRAMS_LIST: ProgramItem[] = [
  {
    id: 'prog-1',
    title: 'Transportation Improvement Program (TIP) 2026-2029',
    category: 'Capital Projects',
    description: 'Staged 4-year financial program of transportation improvements funded by federal, state, and regional sources.',
    status: 'Active',
    funding: '$142.5M Budget'
  },
  {
    id: 'prog-2',
    title: 'Metropolitan Transportation Plan Vision 2045',
    category: 'Long-Range Strategy',
    description: '20-year blueprint guiding regional transportation investments, multi-modal mobility, and environmental preservation.',
    status: 'Active',
    funding: 'Regional Blueprint'
  },
  {
    id: 'prog-3',
    title: 'Congestion Management Process Optimization',
    category: 'Operations & Safety',
    description: 'Systematic program to monitor congestion, deploy intelligent transportation systems (ITS), and optimize traffic signal timing.',
    status: 'Active',
    funding: '$18.2M Allocated'
  },
  {
    id: 'prog-4',
    title: 'Clean Corridor & Fleet Electrification Initiative',
    category: 'Sustainability',
    description: 'Regional corridor deployment of high-power charging infrastructure for transit buses, commercial freight, and municipal fleets.',
    status: 'Planning Phase',
    funding: '$25.0M Federal Grant'
  }
];
