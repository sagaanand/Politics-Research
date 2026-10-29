export interface ProjectCommercials {
  researcherMonthlyCost: number;
  dataExecutiveOneMonthlyCost: number;
  dataExecutiveTwoMonthlyCost: number;
  projectLeadMonthlyCost: number;
  researchExpenses: number;
  markupPercentage: number;
  advancePercentage: number;
  interimPercentage: number;
  finalPercentage: number;
  preliminaryFee: number;
}

export interface InternalCostItem {
  component: string;
  role: string;
  ratePerMonth: number;
  durationMonths: number;
  total: number;
  notes: string;
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
  category: 'Overview' | 'Methodology' | 'Analysis' | 'Execution' | 'Commercials' | 'Agreement';
}

export const projectCommercials: ProjectCommercials = {
  researcherMonthlyCost: 20000,
  dataExecutiveOneMonthlyCost: 20000,
  dataExecutiveTwoMonthlyCost: 20000,
  projectLeadMonthlyCost: 80000,
  researchExpenses: 10000,
  markupPercentage: 15,
  advancePercentage: 40,
  interimPercentage: 30,
  finalPercentage: 30,
  preliminaryFee: 172500
};

// Validate payment percentages equal 100%
const totalPaymentPercentage =
  projectCommercials.advancePercentage +
  projectCommercials.interimPercentage +
  projectCommercials.finalPercentage;

if (totalPaymentPercentage !== 100) {
  console.warn(
    `Warning: Payment percentages do not sum to 100%. Total: ${totalPaymentPercentage}%`
  );
}

// Calculate milestone payment schedule dynamically based on the preliminary fee
export const getMilestones = (fee: number = projectCommercials.preliminaryFee): MilestonePayment[] => [
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

// Internal cost breakdown for internal review purposes only
export const getInternalCostBreakdown = () => {
  const items: InternalCostItem[] = [
    {
      component: 'Senior Researcher',
      role: 'Methodology supervision, quality control, discrepancy audits',
      ratePerMonth: projectCommercials.researcherMonthlyCost,
      durationMonths: 1,
      total: projectCommercials.researcherMonthlyCost,
      notes: 'Supervises secondary source collection and cross-year consistency'
    },
    {
      component: 'Data Collection Executive 1',
      role: 'Primary document collection, structured extraction, digitization',
      ratePerMonth: projectCommercials.dataExecutiveOneMonthlyCost,
      durationMonths: 1,
      total: projectCommercials.dataExecutiveOneMonthlyCost,
      notes: 'Primary data entry and physical/digital archive extraction'
    },
    {
      component: 'Data Collection Executive 2',
      role: 'Independent cross-verification, arithmetic checks, double-entry audit',
      ratePerMonth: projectCommercials.dataExecutiveTwoMonthlyCost,
      durationMonths: 1,
      total: projectCommercials.dataExecutiveTwoMonthlyCost,
      notes: 'Performs blind verification against authoritative gazettes'
    },
    {
      component: 'Project Lead & Primary Analyst',
      role: 'Ananda Krishnan — Analytical architecture, cross-year comparison, client review',
      ratePerMonth: projectCommercials.projectLeadMonthlyCost,
      durationMonths: 1,
      total: projectCommercials.projectLeadMonthlyCost,
      notes: 'Overall analytical framework, synthesis, presentation, and client advisory'
    },
    {
      component: 'Research & Fieldwork Allowance',
      role: 'Document procurement, archival records access, local transport/stipends',
      ratePerMonth: projectCommercials.researchExpenses,
      durationMonths: 1,
      total: projectCommercials.researchExpenses,
      notes: 'Subject to actual vouchers and expense limits'
    }
  ];

  const totalCost = items.reduce((sum, item) => sum + item.total, 0);
  const markupAmount = (totalCost * projectCommercials.markupPercentage) / 100;
  const computedFee = totalCost + markupAmount;

  return {
    items,
    totalCost,
    markupPercentage: projectCommercials.markupPercentage,
    markupAmount,
    computedFee
  };
};

export const proposalMeta = {
  projectTitle: 'Viralimalai Assembly Constituency',
  projectSubtitle: 'Historical Electoral Data Research & Analysis',
  coverageYears: ['2016', '2021', '2026'],
  coverageYearsFormatted: '2016 · 2021 · 2026',
  geography: 'Viralimalai Assembly Constituency (Tamil Nadu)',
  unitOfAnalysis: 'Polling-Station Level',
  preparedBy: 'Ananda Krishnan',
  company: 'Ctrl Alt Kick Ad Tech Solutions Pvt Ltd',
  documentVersion: 'Proposal v1.0',
  preliminaryFeeFormatted: '₹1,72,500',
  targetDuration: '4 Weeks',
  reviewRounds: 'Two (2) consolidated review rounds',
  expenseAllowanceFormatted: '₹10,000'
};

export const slideList: SlideMetadata[] = [
  { id: 1, slug: 'cover', title: 'Cover', category: 'Overview' },
  { id: 2, slug: 'executive-summary', title: 'Executive Summary', category: 'Overview' },
  { id: 3, slug: 'research-objectives', title: 'Research Objectives', category: 'Overview' },
  { id: 4, slug: 'project-scope', title: 'Project Scope', category: 'Overview' },
  { id: 5, slug: 'research-methodology', title: 'Research Methodology', category: 'Methodology' },
  { id: 6, slug: 'data-architecture', title: 'Data Architecture', category: 'Methodology' },
  { id: 7, slug: 'polling-station-mapping', title: 'Polling Station Mapping', category: 'Methodology' },
  { id: 8, slug: 'analytical-framework', title: 'Analytical Framework', category: 'Analysis' },
  { id: 9, slug: 'deliverables', title: 'Deliverables', category: 'Analysis' },
  { id: 10, slug: 'quality-assurance', title: 'Quality Assurance', category: 'Methodology' },
  { id: 11, slug: 'project-team', title: 'Project Team', category: 'Execution' },
  { id: 12, slug: 'timeline', title: 'Timeline & Schedule', category: 'Execution' },
  { id: 13, slug: 'preliminary-project-fee', title: 'Preliminary Commercials', category: 'Commercials' },
  { id: 14, slug: 'payment-terms', title: 'Payment Milestones', category: 'Commercials' },
  { id: 15, slug: 'scope-and-exclusions', title: 'Scope & Exclusions', category: 'Commercials' },
  { id: 16, slug: 'data-availability', title: 'Data Assumptions', category: 'Execution' },
  { id: 17, slug: 'client-responsibilities', title: 'Client Responsibilities', category: 'Execution' },
  { id: 18, slug: 'approval', title: 'Approval to Proceed', category: 'Agreement' }
];
