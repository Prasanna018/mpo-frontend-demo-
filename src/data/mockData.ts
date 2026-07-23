export interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: string;
  category: string;
  summary: string;
  content: string;
}

export interface EventItem {
  id: string;
  dayMonth: string; // e.g. "MAY 7"
  year: string;    // e.g. "2026"
  fullDate: string; // e.g. "May 7, 2026"
  time: string;
  title: string;
  location: string;
  description: string;
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
      'Policy Committee (PC)',
      'Technical Advisory Committee (TAC)',
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
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80'
  },
  votingMembers: [
    {
      name: 'Mr. Casey Dooley',
      organization: 'Dinwiddie County',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Mr. Kevin Carroll',
      organization: 'Chesterfield County',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Vacant',
      organization: 'City of Hopewell',
      image: 'city-seal',
      isVacant: true
    },
    {
      name: 'Mayor Samuel Parham',
      organization: 'City of Petersburg',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Mr. T.J. Webb',
      organization: 'Prince George County',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Mr. Dale Totten',
      organization: 'For the Secretary of Transportation',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80'
    }
  ],
  nonVotingMembers: [
    {
      name: 'Vacant',
      organization: 'Federal Highway Administration',
      image: 'silhouette-male',
      isVacant: true
    },
    {
      name: 'Vacant',
      organization: 'Federal Transit Administration',
      image: 'silhouette-male',
      isVacant: true
    },
    {
      name: 'Ms. Brigitte Carter',
      organization: 'RideFinders, Inc.',
      image: 'silhouette-female',
      isVacant: false
    },
    {
      name: 'Vacant',
      organization: 'Virginia Dept. of Rail and Public Transportation',
      image: 'silhouette-male',
      isVacant: true
    }
  ]
};

export const TAC_COMMITTEE_DATA = {
  votingMembers: [
    {
      name: 'Mr. Hongmyung Lim (Chair)',
      organization: 'Chesterfield County',
      avatarType: 'male' as const
    },
    {
      name: 'Mr. Matt Ryan (Vice Chair)',
      organization: 'City of Colonial Heights',
      avatarType: 'male' as const
    },
    {
      name: 'Mr. Mark Bassett',
      organization: 'Dinwiddie County',
      avatarType: 'male' as const
    },
    {
      name: 'Mr. Josh Sementelli',
      organization: 'City of Hopewell',
      avatarType: 'male' as const
    },
    {
      name: 'Mr. Jared Crews',
      organization: 'City of Petersburg',
      avatarType: 'male' as const
    },
    {
      name: 'Mr. Tim Graves',
      organization: 'Prince George County',
      avatarType: 'male' as const
    },
    {
      name: 'Representative',
      organization: 'Petersburg Area Transit',
      avatarType: 'male' as const
    },
    {
      name: 'Representative',
      organization: 'Virginia Department of Transportation',
      avatarType: 'female' as const
    },
    {
      name: 'Representative',
      organization: 'Virginia Department of Rail and Public Transportation',
      avatarType: 'male' as const
    },
    {
      name: 'Mr. Zakari Mumuni',
      organization: 'Crater Planning District Commission',
      avatarType: 'male' as const
    }
  ],
  nonVotingMembers: [
    {
      name: 'Ms. Brigitte Carter',
      organization: 'RideFinders, Inc.',
      avatarType: 'female' as const
    },
    {
      name: 'Mr. Fritz Brandt',
      organization: 'Fort Lee',
      avatarType: 'male' as const
    },
    {
      name: 'Ms. Alexis Morris',
      organization: 'Petersburg National Battlefield Park',
      avatarType: 'female' as const
    },
    {
      name: 'Mr. Myles Busching',
      organization: 'PlanRVA / PLAN2050',
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
      title: '2045 Metropolitan Transportation Long-Range Blueprint Plan',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/11.13.2025-Policy-Committee-agenda-Updated-11.13.2025-Final-V3_compressed.pdf'
    },
    {
      id: 'rp-3',
      title: 'Tri-Cities Regional Congestion Management Process (CMP)',
      pdfUrl: 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/Draft-5.07.2026-Policy-Committee-Agenda-V6-05.07.2026.pdf'
    }
  ],
  'Reports': [
    {
      id: 'rep-1',
      title: 'Annual Unified Planning Work Program (UPWP) Report',
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
    subtitle: 'What is an mpo?',
    paragraphs: [
      'A Metropolitan Planning Organization (MPO) is a federally designated transportation planning agency responsible for coordinating transportation planning and decision-making in urbanized areas with populations greater than 50,000. Established by Congress through the Federal-Aid Highway Act of 1962, MPOs were created to promote regional coordination through a continuing, cooperative, and comprehensive ("3-C") transportation planning process.',
      'MPOs bring together local governments, transportation agencies, and other stakeholders to develop long-range transportation plans, prioritize transportation investments, and ensure that federal transportation funds are allocated in accordance with regional goals and priorities.',
      'The Tri-Cities Area Metropolitan Planning Organization (TCAMPO) is the federally designated transportation planning agency responsible for coordinating the regional transportation planning process for the Tri-Cities Area urbanized area. TCAMPO is one of 15 MPOs in Virginia and is governed through a three-part organizational structure consisting of:'
    ],
    bullets: [
      'an executive decision-making body (Policy Committee),',
      'an advisory body (Transportation Advisory Committee), and',
      'a full-time professional staff responsible for supporting the MPO\'s planning activities and serving the member jurisdictions.'
    ],
    historyTitle: 'History of tri-cities area mpo',
    historyContent: 'The Tri-Cities region was designated an urbanized area by the US Bureau of Census to manage regional transportation growth. The TCAMPO was created to unify multi-jurisdictional transportation planning for member cities and counties. TCAMPO serves as the Lead Planning Agency (LPA) managing federal highway and transit fund allocations across the regional network.'
  },
  'Policy Committee (PC)': {
    title: 'Policy Committee (PC)',
    subtitle: 'Voting',
    paragraphs: [],
    bullets: [],
    historyTitle: '',
    historyContent: ''
  },
  'Technical Advisory Committee (TAC)': {
    title: 'Technical Advisory Committee (TAC)',
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
    title: 'Hosting Public Meeting For Regional Transportation Plan Update',
    date: 'June 18, 2026',
    category: 'Public Notice',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    summary: 'Public meeting scheduled discussing transportation sustainability goals, regional priorities, and community feedback.',
    content: 'The Tri-Cities Area Metropolitan Planning Organization (TCAMPO) invites residents, local business owners, and civic leaders to participate in our upcoming Regional Transportation Visioning Session. The meeting will focus on long-term transit expansion, highway safety enhancements, non-motorized trail networks, and environmental impact strategies. Public feedback will directly inform our 2026-2045 Regional Transportation Plan.'
  },
  {
    id: 'news-2',
    title: 'Community Development Funding Program Updates',
    date: 'May 24, 2026',
    category: 'Grants & Funding',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    summary: 'New funding opportunities announced supporting infrastructure, sustainability, and regional community development initiatives.',
    content: 'TCAMPO has announced the release of $14.5 Million in community development sub-allocation grants for eligible local municipalities and transit partners. Applications are officially open for projects targeting corridor modernization, ADA sidewalk upgrades, smart traffic signals, and electric vehicle fleet transitions.'
  },
  {
    id: 'news-3',
    title: 'New Transit & Freight Infrastructure Announcements',
    date: 'May 10, 2026',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    summary: 'Regional freight movement corridor study released supporting industrial expansion, intermodal hubs, and clean freight routing.',
    content: 'A comprehensive study evaluating freight movement efficiency across the Tri-Cities logistics hub was published today. Key highlights include proposed dedicated truck bypass routes, real-time freight bottleneck monitoring, and zero-emission drayage infrastructure recommendations.'
  },
  {
    id: 'news-4',
    title: 'Tri-Cities Regional Active Transportation System Expansion',
    date: 'April 29, 2026',
    category: 'Bicycle & Pedestrian',
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=800&q=80',
    summary: 'Phase 3 of the interconnected regional trail system receives environmental clearance and federal matching grant.',
    content: 'The regional bicycle and pedestrian network is set to expand by 32 miles of connected multi-use trails connecting suburban corridors to downtown transit hubs. Construction is slated to commence early Q4 2026.'
  }
];

export const EVENTS_ITEMS: EventItem[] = [
  {
    id: 'event-1',
    dayMonth: 'MAY 7',
    year: '2026',
    fullDate: 'May 7, 2026',
    time: '10:00 AM - 12:30 PM EST',
    title: 'TCAMPO Policy Committee Monthly Board Session',
    location: 'TCAMPO Central Headquarters & Virtual Livestream',
    description: 'Monthly voting meeting of elected officials and transportation directors regarding TIP modifications and regional grant allocations.'
  },
  {
    id: 'event-2',
    dayMonth: 'APRIL 9',
    year: '2026',
    fullDate: 'April 9, 2026',
    time: '2:00 PM - 4:00 PM EST',
    title: 'Technical Advisory Committee (TAC) Workshop',
    location: 'City Planning Conference Room B',
    description: 'Engineering and technical review session evaluating travel demand modeling data and congestion management performance metrics.'
  },
  {
    id: 'event-3',
    dayMonth: 'MARCH 12',
    year: '2026',
    fullDate: 'March 12, 2026',
    time: '6:00 PM - 8:00 PM EST',
    title: 'Citizens Advisory Committee (CAC) Community Forum',
    location: 'Tri-Cities Regional Community Center',
    description: 'Public interactive workshop providing resident input on transit route updates, safety improvements, and neighborhood connectivity.'
  },
  {
    id: 'event-4',
    dayMonth: 'FEBRUARY 12',
    year: '2026',
    fullDate: 'February 12, 2026',
    time: '1:30 PM - 3:30 PM EST',
    title: 'Freight & Economic Development Taskforce Meeting',
    location: 'Regional Commerce Hub Center',
    description: 'Specialized roundtable focused on supply chain resiliency, rail corridor safety, and commercial vehicle electrification.'
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
    title: 'Metropolitan Transportation Plan (MTP) Vision 2045',
    category: 'Long-Range Strategy',
    description: '20-year blueprint guiding regional transportation investments, multi-modal mobility, and environmental preservation.',
    status: 'Active',
    funding: 'Regional Blueprint'
  },
  {
    id: 'prog-3',
    title: 'Congestion Management Process (CMP) Optimization',
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
