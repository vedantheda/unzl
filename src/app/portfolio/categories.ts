// Portfolio categories and items

// Define the types
export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  year: string;
  category: string;
  tags: string[];
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  images: {
    src: string;
    alt: string;
  }[];
  videoUrl?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

// Define categories
export const categories: Category[] = [
  {
    id: 'collaboration-platforms',
    name: 'Collaboration Platforms',
    description: 'Teams-like platforms that enhance communication and productivity across organizations.',
    icon: 'users'
  },
  {
    id: 'ai-automation',
    name: 'AI Automation',
    description: 'Intelligent automation solutions that streamline workflows and reduce manual tasks.',
    icon: 'search'
  },
  {
    id: 'data-technologies',
    name: 'Data Technologies',
    description: 'Advanced data processing and synthetic data generation platforms for modern applications.',
    icon: 'share'
  },
  {
    id: 'enterprise-software',
    name: 'Enterprise Software',
    description: 'Custom enterprise solutions designed for scalability, security, and performance.',
    icon: 'shopping-cart'
  },
  {
    id: 'cloud-solutions',
    name: 'Cloud Solutions',
    description: 'Cloud-native applications and infrastructure solutions for modern businesses.',
    icon: 'video'
  }
];

// Define portfolio items
export const portfolioItems: PortfolioItem[] = [
  {
    id: 'wedding-portal-platform',
    title: 'WeddingConnect Pro',
    client: 'Wedding Industry Solutions',
    year: '2024',
    category: 'collaboration-platforms',
    tags: ['Teams-like Platform', 'Wedding Planning', 'Real-time Collaboration'],
    description: 'A comprehensive collaboration platform designed specifically for wedding planning, featuring Teams-like functionality with specialized tools for vendors, couples, and planners.',
    challenge: 'The wedding industry lacked a centralized platform for coordinating between couples, vendors, and planners, leading to miscommunication and project delays.',
    solution: 'We developed a Teams-like collaboration platform with wedding-specific features including vendor management, timeline planning, document sharing, and real-time communication.',
    results: [
      '85% reduction in project coordination time',
      '92% user satisfaction rate',
      '150+ wedding vendors onboarded in first quarter'
    ],
    images: [
      {
        src: '/images/weddingconnectpro.png',
        alt: 'Wedding Portal Dashboard - Team Collaboration Interface'
      },
      {
        src: '/images/weddingconnectpro.png',
        alt: 'Wedding Planning Collaboration Platform'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/QH2-TGUlwu4'
  },
  {
    id: 'tax-automation-platform',
    title: 'TaxFlow AI',
    client: 'Enterprise Tax Solutions',
    year: '2024',
    category: 'ai-automation',
    tags: ['AI Automation', 'Tax Processing', 'Team Collaboration'],
    description: 'An intelligent tax processing platform that combines Teams-like collaboration with advanced AI automation for streamlined tax preparation and compliance workflows.',
    challenge: 'Tax preparation firms needed a solution that could automate complex tax calculations while maintaining team collaboration and compliance standards.',
    solution: 'We developed an AI-powered platform with automated document processing, tax calculations, compliance monitoring, and integrated team collaboration features.',
    results: [
      '75% reduction in tax preparation time',
      '99.8% accuracy in automated calculations',
      '60+ tax firms using the platform'
    ],
    images: [
      {
        src: '/images/taxflowai.png',
        alt: 'AI Tax Automation Dashboard with Analytics'
      },
      {
        src: '/images/taxflowai.png',
        alt: 'AI Processing and Document Analysis Interface'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/nN9xsFUsPqM'
  },
  {
    id: 'lidar-synthetic-data',
    title: 'LidarSynth Engine',
    client: 'Autonomous Vehicle Research',
    year: '2024',
    category: 'data-technologies',
    tags: ['Synthetic Data', 'LIDAR', 'Machine Learning'],
    description: 'An advanced data generation platform that creates high-quality synthetic LIDAR datasets for autonomous vehicle training, urban planning, and machine learning applications.',
    challenge: 'Autonomous vehicle companies needed large-scale, diverse LIDAR datasets for training ML models, but real-world data collection was expensive and limited.',
    solution: 'We developed a sophisticated synthetic data generation platform that creates realistic LIDAR point clouds with customizable scenarios and environmental conditions.',
    results: [
      '10x faster dataset generation compared to real-world collection',
      '95% accuracy in ML model training with synthetic data',
      '25+ automotive companies using the platform'
    ],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        alt: 'LIDAR Point Cloud Data Visualization'
      },
      {
        src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1599&q=80',
        alt: 'Synthetic Data Generation Platform Interface'
      }
    ]
  },
  {
    id: 'enterprise-chat-hub',
    title: 'Enterprise Chat Hub',
    client: 'Global Manufacturing Corp',
    year: '2024',
    category: 'enterprise-software',
    tags: ['Enterprise Messaging', 'Security', 'Scalability'],
    description: 'A secure enterprise messaging and collaboration platform designed for large organizations with advanced security and compliance requirements.',
    challenge: 'The organization needed a secure communication platform that could handle 10,000+ users while meeting strict compliance and security standards.',
    solution: 'We developed a scalable enterprise chat platform with end-to-end encryption, role-based access controls, and integration with existing enterprise systems.',
    results: [
      '10,000+ active users across 50+ departments',
      '99.9% uptime with enterprise-grade security',
      '40% improvement in internal communication efficiency'
    ],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1539&q=80',
        alt: 'Enterprise Chat and Collaboration Interface'
      },
      {
        src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        alt: 'Enterprise Security and Compliance Dashboard'
      }
    ]
  },
  {
    id: 'cloud-analytics-platform',
    title: 'DataFlow Analytics',
    client: 'Financial Services Group',
    year: '2024',
    category: 'cloud-solutions',
    tags: ['Cloud Analytics', 'Real-time Processing', 'Business Intelligence'],
    description: 'A cloud-native analytics platform that processes real-time financial data and provides actionable business intelligence for decision-making.',
    challenge: 'The financial services company needed to process massive amounts of real-time data while ensuring compliance and providing instant insights to stakeholders.',
    solution: 'We built a scalable cloud analytics platform with real-time data processing, automated reporting, and interactive dashboards for business intelligence.',
    results: [
      '500TB+ data processed daily with sub-second latency',
      '90% reduction in report generation time',
      '35% improvement in data-driven decision making'
    ],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        alt: 'Real-time Financial Analytics Dashboard'
      },
      {
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1515&q=80',
        alt: 'Business Intelligence Data Visualization'
      }
    ],
    videoUrl: 'https://www.youtube.com/embed/8SkdfdJDZ38'
  },
  {
    id: 'cloud-sync-manager',
    title: 'CloudSync Manager',
    client: 'Multi-National Technology Corp',
    year: '2024',
    category: 'cloud-solutions',
    tags: ['Multi-Cloud', 'Synchronization', 'Infrastructure'],
    description: 'A comprehensive multi-cloud synchronization and management platform that enables seamless data and application management across different cloud providers.',
    challenge: 'The corporation was using multiple cloud providers with no unified management system, leading to data silos and operational inefficiencies.',
    solution: 'We developed a unified cloud management platform that synchronizes data and applications across AWS, Azure, and Google Cloud with automated failover and optimization.',
    results: [
      '99.99% uptime across all cloud environments',
      '45% reduction in cloud management overhead',
      '30% cost savings through automated optimization'
    ],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80',
        alt: 'Multi-Cloud Management Dashboard Interface'
      },
      {
        src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        alt: 'Cloud Infrastructure Architecture Visualization'
      }
    ]
  }
];

// Helper function to get items by category
export function getItemsByCategory(categoryId: string): PortfolioItem[] {
  return portfolioItems.filter(item => item.category === categoryId);
}

// Helper function to get a specific item by ID
export function getItemById(id: string): PortfolioItem | undefined {
  return portfolioItems.find(item => item.id === id);
}

// Helper function to get related items (same category, excluding the current item)
export function getRelatedItems(id: string, limit: number = 3): PortfolioItem[] {
  const currentItem = getItemById(id);
  if (!currentItem) return [];

  return portfolioItems
    .filter(item => item.category === currentItem.category && item.id !== id)
    .slice(0, limit);
}
