import { MembershipPlan, FacilityItem, ClassItem, TrainerItem, FAQItem, TestimonialItem } from "./types";

export const STATS = [
  { label: "Years Experience", value: 12, suffix: "+" },
  { label: "Members Trained", value: 8500, suffix: "+" },
  { label: "Daily Visitors", value: 450, suffix: "" },
  { label: "Certified Trainers", value: 24, suffix: "" },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "12,500",
    period: "/ 3 months",
    description: "Perfect for starting your fitness journey with high-end strength & cardio equipment.",
    features: [
      "Access to Strength & Free Weight Zones",
      "Modern Cardio Area access",
      "Premium Locker & Shower Facilities",
      "1 Complimentary Trainer assessment",
      "Secured valet parking space",
    ],
  },
  {
    id: "pro",
    name: "Pro Elite",
    price: "22,500",
    period: "/ 6 months",
    description: "Our most requested tier. Complete access to classes, sparring, and specialist training.",
    features: [
      "Unlimited access to all Zones",
      "All group classes (Zumba, General Fitness)",
      "Elite Boxing Area & Sparring Access",
      "Monthly Body Composition Analysis",
      "2 Guest passes per month",
      "Secured Valet Parking + Towel service",
    ],
    isHighlighted: true,
  },
  {
    id: "elite",
    name: "Legacy Elite",
    price: "38,000",
    period: "/ 12 months",
    description: "The ultimate club experience. Fully tailored to sculpt your lifelong physical legacy.",
    features: [
      "24/7 Priority Club Access",
      "Weekly 1-on-1 Certified Personal Training",
      "Customized Nutrition Plan & Weekly Reviews",
      "Access to Elite Recovery Lounge & Saunas",
      "Complimentary hydration & energy drinks",
      "Complimentary health bar refreshments",
      "Dedicated legacy support concierge",
    ],
  },
];

export const FACILITIES: FacilityItem[] = [
  {
    id: "strength-zone",
    title: "Strength Zone",
    description: "Equipped with custom premium selectorized machines, loaded-plate setups, and specialized Olympic platforms.",
    iconName: "Dumbbell",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "cardio-area",
    title: "Cardio Area",
    description: "Sleek, internet-enabled curved treadmills, high-resistance rowers, and premium cross-trainers with active feedback.",
    iconName: "Flame",
    imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "boxing-area",
    title: "Boxing Area",
    description: "A compact punching zone equipped with premium high-impact heavy bags, slip bags, and custom defense mirrors.",
    iconName: "Shield",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "functional-training",
    title: "Functional Training",
    description: "Battle ropes, medicine balls, kettlebells, custom monkey rigs, and plyometric spaces for infinite variation.",
    iconName: "Workflow",
    imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "free-weights",
    title: "Free Weights Area",
    description: "Rows of premium urethane dumbbells, custom calibrated plates, and sturdy competition-grade flat/incline benches.",
    iconName: "Grid",
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "nutrition-guidance",
    title: "Nutrition Guidance",
    description: "Personalized metabolic assessments and nutritional consultations with certified dietitians to accelerate results.",
    iconName: "Apple",
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1000",
  },
];

export const CLASSES: ClassItem[] = [
  {
    id: "bodybuilding",
    title: "Elite Bodybuilding",
    description: "Tailored training programs focusing on progressive overload and precise hypertrophy techniques to build lasting muscular density.",
    tag: "Strength",
  },
  {
    id: "weight-loss",
    title: "Weight Loss Performance",
    description: "Custom high-energy metabolic and functional conditioning strategies designed to torch body fat and build enduring cardiovascular fitness.",
    tag: "Weight Management",
  },
  {
    id: "general-fitness",
    title: "General Fitness & Conditioning",
    description: "Balanced overall fitness programs targeting mobility, core strength, stamina, and functional movement patterns for longevity.",
    tag: "Conditioning",
  },
  {
    id: "zumba",
    title: "Zumba & Cardio Aerobics",
    description: "High-energy rhythmic workouts that boost cardiovascular endurance, dynamic coordination, and overall physical vitality.",
    tag: "Aerobic",
  },
  {
    id: "boxing",
    title: "Boxing & Coordination",
    description: "Focused mitt-work and punching bag drills to refine defensive mechanics, explosive power, and tactical agility.",
    tag: "Combat",
  },
];

export const TRAINERS: TrainerItem[] = [
  {
    id: "trainer-1",
    name: "Marcus Sterling",
    specialization: "IFBB Pro Bodybuilding & Hypertrophy Expert",
    experience: "12+ Years Experience",
    silhouetteSeed: 1,
    bio: "Marcus is a veteran IFBB Pro competitor who has spent over 12 years perfecting hypertrophy science. He has helped dozens of national athletes secure their pro cards and is passionate about structured progressive overload.",
    philosophy: "Consistency outclasses talent every day. Fall in love with the process, and the physical results will follow.",
    certifications: ["IFBB Pro Card Holder", "Gold's Gym Master Trainer", "ISSA Sports Nutritionist"],
  },
  {
    id: "trainer-2",
    name: "Amara Vance",
    specialization: "Tactical Boxing Champion & Speed Specialist",
    experience: "8+ Years Experience",
    silhouetteSeed: 2,
    bio: "An active champion and state gold-medalist, Amara brings real ring intensity. She specializes in hand-eye speed, fast footwork, and functional combat conditioning.",
    philosophy: "In the ring and in life, it is not about how hard you hit, but how hard you can get hit and keep moving forward.",
    certifications: ["State Boxing Coach Certified", "AIBA Certified Referee & Judge", "ACE Certified Group Fitness Trainer"],
  },
  {
    id: "trainer-3",
    name: "Vikram Malhotra",
    specialization: "Powerlifting Coach & Biomechanics Consultant",
    experience: "10+ Years Experience",
    silhouetteSeed: 3,
    bio: "Vikram holds a Master's degree in Biomechanics and specializes in powerlifting and injury rehabilitation. He ensures your lifting technique is anatomically flawless.",
    philosophy: "Form dictates force. Move correctly first, then add load to achieve absolute structural power.",
    certifications: ["M.Sc. Kinesiology & Biomechanics", "IPF Certified Coach", "CSCS National Specialist"],
  },
  {
    id: "trainer-4",
    name: "Elena Rostova",
    specialization: "HIIT Weight Management & Certified Nutrition Specialist",
    experience: "7+ Years Experience",
    silhouetteSeed: 4,
    bio: "Elena has spent 7+ years designing effective high-velocity weight-loss systems. She combines intense interval training with customized metabolic nutrition plans for sustainable results.",
    philosophy: "Fitness is not a temporary punishment for what you ate; it is a permanent celebration of what your body is capable of.",
    certifications: ["Certified Metabolic Specialist", "Precision Nutrition Level 2 Coach", "NASM Certified Personal Trainer"],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Rajesh Krishnan",
    role: "Elite Club Member since 2024",
    stars: 5,
    review: "Muscle Legacy completely redefines the luxury gym experience in Chennai. The equipment is absolute world-class, the community is supportive, and the valet service makes every session incredibly hassle-free.",
  },
  {
    id: "test-2",
    name: "Samantha Hughes",
    role: "Zumba & Boxing regular",
    stars: 5,
    review: "The boxing coaches here are real, professional fighters. Combined with the pristine locker facilities and elite recovery lounges, it genuinely feels like an premium sanctuary for physical growth.",
  },
  {
    id: "test-3",
    name: "Arun Swaminathan",
    role: "Legacy Personal Training client",
    stars: 5,
    review: "In just six months, under the elite physical assessments and detailed nutritional coaching, I have achieved strength records I thought impossible. Worth every single rupee.",
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What are your membership options?",
    answer: "We offer three membership tiers: Starter, Pro Elite, and Legacy Elite. Each can be paid monthly or annually. Annual memberships receive a 15% VIP discount.",
  },
  {
    id: "faq-2",
    question: "Do you have personal training available?",
    answer: "Yes. Our Legacy Elite plan includes dedicated 1-on-1 personal coaching. Alternatively, personal training sessions can be added onto Starter or Pro Elite tiers at any time with your preferred trainer.",
  },
  {
    id: "faq-3",
    question: "What facilities are in your Boxing Arena?",
    answer: "Our Boxing Arena is equipped with a professional competition-size elevated ring, custom Title heavy bags, speed bags, slip bags, and interactive target pads. It's built for both tactical conditioning and active sparring.",
  },
  {
    id: "faq-4",
    question: "Is there secure parking available at the gym?",
    answer: "Yes, we offer complimentary 2-level secured basement valet parking for all members during club operating hours. Simply drop your keys at the entry counter.",
  },
  {
    id: "faq-5",
    question: "Are lockers and towels available?",
    answer: "Absolutely. Standard lockers are free to use. Premium cedarwood wood-paneled digital lockers, daily freshly laundered luxury towel service, and VIP changing suites are included on our Pro Elite and Legacy Elite tiers.",
  },
  {
    id: "faq-6",
    question: "What are the club operating hours?",
    answer: "Muscle Legacy is open Monday to Saturday from 5:00 AM to 11:00 PM, and Sundays from 7:00 AM to 6:00 PM.",
  },
  {
    id: "faq-7",
    question: "How do I make my membership payments?",
    answer: "We support all secure payment options including Credit/Debit cards, UPI, and online bank transfers. Subscriptions can also be automated monthly for seamless continuous access.",
  },
];
