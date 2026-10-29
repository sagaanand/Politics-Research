import React from 'react';
import { getMilestones, projectCommercials } from '../data/proposal';

interface PricingTableProps {
  fee?: number;
}

export const PricingTable: React.FC<PricingTableProps> = ({ fee = projectCommercials.preliminaryFee }) => {
  const milestones = getMilestones(fee);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-[#E5E5EA] bg-white">
      <table className="w-full text-left text-xs">
        <thead className="bg-[#FBFBFD] border-b border-[#E5E5EA] text-[#6E6E73] uppercase tracking-wider font-medium text-[11px]">
          <tr>
            <th className="py-2.5 px-4">Milestone</th>
            <th className="py-2.5 px-4">Allocation</th>
            <th className="py-2.5 px-4 text-right">Amount (INR)</th>
            <th className="py-2.5 px-4">Trigger / Condition</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#F0F0F2] text-[#1D1D1F]">
          {milestones.map((m, idx) => (
            <tr key={idx} className="hover:bg-[#F9F9FB] transition-colors">
              <td className="py-3 px-4 font-semibold text-[#1D1D1F]">{m.title}</td>
              <td className="py-3 px-4 font-mono font-medium text-[#0066CC]">{m.percentage}%</td>
              <td className="py-3 px-4 text-right font-mono font-bold text-[#1D1D1F]">
                ₹{m.amount.toLocaleString('en-IN')}
              </td>
              <td className="py-3 px-4 text-[#6E6E73] text-[11px]">{m.trigger}</td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-[#F5F5F7] border-t border-[#E5E5EA] font-semibold text-[#1D1D1F]">
          <tr>
            <td colSpan={2} className="py-3 px-4 text-right text-[#6E6E73]">
              Total Preliminary Engagement Fee:
            </td>
            <td className="py-3 px-4 text-right font-mono font-bold text-sm text-[#1D1D1F]">
              ₹{fee.toLocaleString('en-IN')}
            </td>
            <td className="py-3 px-4 text-[10px] text-[#86868B]">100% of agreed scope</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
