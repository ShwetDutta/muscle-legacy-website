export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isHighlighted?: boolean;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamic-render corresponding Lucide icon
  imageUrl?: string;
}

export interface ClassItem {
  id: string;
  title: string;
  description: string;
  duration?: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  tag: string;
}

export interface TrainerItem {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  silhouetteSeed: number; // For rendering premium dynamic SVGs instead of standard images
  bio?: string;
  philosophy?: string;
  certifications?: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  stars: number;
  review: string;
}
