export type PageType = 'home' | 'about' | 'services' | 'careers' | 'contact' | 'privacy' | 'terms';

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  experience: string;
  description: string;
  requirements: string[];
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  extendedDescription: string;
  iconName: string;
  features: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  features: string[];
  imageType: 'temple' | 'launcher' | 'qurixa';
}

export interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  jobTitle?: string;
  phone?: string;
  serviceInterest: string;
  message: string;
}
