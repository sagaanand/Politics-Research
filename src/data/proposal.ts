export interface ProjectCommercials {
  projectLeadCost: number;
  employeeOneCost: number;
  employeeTwoCost: number;
  employeeThreeCost: number;
  researchExpenses: number;
  markupPercentage: number;
  advancePercentage: number;
  interimPercentage: number;
  finalPercentage: number;
}

export interface MilestonePayment {
  percentage: number;
  title: string;
  amount: number;
  trigger: string;
  description: string;
}

export interface SlideMetadata {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  category: 'Overview' | 'Founder & Companies' | 'Political Experience' | 'Methodology' | 'Analysis' | 'Commercials & Sign-off';
}

export const projectCommercials: ProjectCommercials = {
  projectLeadCost: 50000,
  employeeOneCost: 15000,
  employeeTwoCost: 15000,
  employeeThreeCost: 15000,
  researchExpenses: 10000,
  markupPercentage: 15,
  advancePercentage: 40,
  interimPercentage: 30,
  finalPercentage: 30
};

export const totalCost =
  projectCommercials.projectLeadCost +
  projectCommercials.employeeOneCost +
  projectCommercials.employeeTwoCost +
  projectCommercials.employeeThreeCost +
  projectCommercials.researchExpenses;

export const markupAmount =
  (totalCost * projectCommercials.markupPercentage) / 100;

export const preliminaryProjectFee = totalCost + markupAmount;

export const paymentMilestones = {
  advance: (preliminaryProjectFee * projectCommercials.advancePercentage) / 100,
  interim: (preliminaryProjectFee * projectCommercials.interimPercentage) / 100,
  final: (preliminaryProjectFee * projectCommercials.finalPercentage) / 100
};

// Validate that payment percentages total 100%
const totalPaymentPercentage =
  projectCommercials.advancePercentage +
  projectCommercials.interimPercentage +
  projectCommercials.finalPercentage;

if (totalPaymentPercentage !== 100) {
  console.warn(
    `Warning: Payment percentages do not sum to 100%. Total: ${totalPaymentPercentage}%`
  );
}

// Calculate milestone payment schedule dynamically based on the fee
export const getMilestones = (fee: number = preliminaryProjectFee): MilestonePayment[] => [
  {
    percentage: projectCommercials.advancePercentage,
    title: 'Project Kickoff & Source Audit',
    amount: (fee * projectCommercials.advancePercentage) / 100,
    trigger: 'Payable prior to commencement of data audit and fieldwork',
    description: 'Covers initial source discovery, document collection setup, infrastructure, and team mobilization.'
  },
  {
    percentage: projectCommercials.interimPercentage,
    title: 'Interim Dataset & Mapping Milestone',
    amount: (fee * projectCommercials.interimPercentage) / 100,
    trigger: 'Payable upon substantial completion of dataset extraction, polling-station mapping & verification',
    description: 'Triggered when the three-election polling-station mapping draft and verified figures are delivered for preliminary review.'
  },
  {
    percentage: projectCommercials.finalPercentage,
    title: 'Final Analytical Handover',
    amount: (fee * projectCommercials.finalPercentage) / 100,
    trigger: 'Payable upon delivery of agreed final deliverables and closure of review rounds',
    description: 'Delivery of master Excel dataset, analytical PDF report, slide presentation, source register, and discrepancy documentation.'
  }
];

export const proposalMeta = {
  projectTitle: 'Viralimalai Assembly Constituency',
  projectSubtitle: 'Historical Electoral Data Research & Analysis',
  coverageYears: ['2016', '2021', '2026'],
  coverageYearsFormatted: '2016 · 2021 · 2026',
  geography: 'Viralimalai Assembly Constituency (Tamil Nadu)',
  unitOfAnalysis: 'Polling-Station Level',
  preparedBy: 'Ananda Krishnan',
  company: 'Ctrl Alt Kick Ad Tech Solutions Pvt Ltd',
  documentVersion: 'Comprehensive Research Proposal v3.0',
  preliminaryFeeFormatted: '₹1,20,750',
  targetDuration: '4 Weeks',
  reviewRounds: 'Two (2) consolidated review rounds',
  expenseAllowanceFormatted: '₹10,000'
};

export const slideList: SlideMetadata[] = [
  { id: 1, slug: 'cover', title: 'Cover', category: 'Overview' },
  { id: 2, slug: 'about-ananda-krishnan', title: 'About Ananda Krishnan', category: 'Founder & Companies' },
  { id: 3, slug: 'professional-experience', title: 'Professional Experience', category: 'Founder & Companies' },
  { id: 4, slug: 'company-ecosystem', title: 'Company Ecosystem', category: 'Founder & Companies' },
  { id: 5, slug: 'ctrl-alt-kick', title: 'Ctrl Alt Kick', category: 'Founder & Companies' },
  { id: 6, slug: 'digital-cake', title: 'Digital Cake', category: 'Founder & Companies' },
  { id: 7, slug: 'nam-nilam-infra', title: 'Nam Nilam Infra', category: 'Founder & Companies' },
  { id: 8, slug: 'political-research-experience', title: 'Political Research Track Record', category: 'Political Experience' },
  { id: 9, slug: 'case-study-tamil-nadu-2021', title: 'Case Study: Tamil Nadu 2021', category: 'Political Experience' },
  { id: 10, slug: 'case-study-lok-sabha-2024', title: 'Case Study: Lok Sabha 2024', category: 'Political Experience' },
  { id: 11, slug: 'relates-to-viralimalai', title: 'Application to Viralimalai', category: 'Political Experience' },
  { id: 12, slug: 'project-overview', title: 'Project Overview', category: 'Overview' },
  { id: 13, slug: 'research-objectives', title: 'Research Objectives', category: 'Overview' },
  { id: 14, slug: 'project-scope', title: 'Project Scope', category: 'Overview' },
  { id: 15, slug: 'research-methodology', title: 'Research Methodology', category: 'Methodology' },
  { id: 16, slug: 'polling-station-mapping', title: 'Polling Station Mapping', category: 'Methodology' },
  { id: 17, slug: 'analytical-framework', title: 'Analytical Framework', category: 'Analysis' },
  { id: 18, slug: 'deliverables', title: 'Deliverables', category: 'Analysis' },
  { id: 19, slug: 'quality-assurance', title: 'Quality Assurance', category: 'Methodology' },
  { id: 20, slug: 'team-and-timeline', title: 'Team & Timeline', category: 'Commercials & Sign-off' },
  { id: 21, slug: 'commercials-and-payment', title: 'Commercials & Payment', category: 'Commercials & Sign-off' },
  { id: 22, slug: 'approval-and-next-steps', title: 'Approval & Next Steps', category: 'Commercials & Sign-off' }
];
