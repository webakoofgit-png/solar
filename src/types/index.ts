export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'residential' | 'commercial' | 'industrial' | 'institutional';
  categoryLabel: string;
  capacity: string;
  location: string;
  completionYear: string;
  image: string;
  gallery: string[];
  summary: string;
  clientRequirement: string;
  solutionProvided: string;
  highlights: string[];
  specs: {
    systemCapacity: string;
    solarPanels: string;
    inverterModel: string;
    mountingStructure: string;
    estimatedAnnualGeneration: string;
    co2OffsetAnnual: string;
  };
  demoDisclaimer?: string;
}

export interface Solution {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  category: 'residential' | 'commercial' | 'industrial' | 'services';
  features: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  idealFor: string[];
  roiTimeline: string;
  warranty: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  projectType: string;
  capacity: string;
  rating: number;
  quote: string;
  image: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'all' | 'general' | 'residential' | 'commercial' | 'financial' | 'maintenance';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  propertyType: 'Residential Villa' | 'Apartment / Society' | 'Commercial Office' | 'Industrial Factory' | 'Educational / Healthcare' | 'Other';
  monthlyBill: string;
  solution: string;
  message: string;
}
