import React from 'react';
import { X, Lock, AlertTriangle, ShieldCheck } from 'lucide-react';
import { getInternalCostBreakdown } from '../data/proposal';

interface InternalCostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InternalCostModal: React.FC<InternalCostModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { items, totalCost, markupPercentage, markupAmount, computedFee } = getInternalCostBreakdown();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="internal-costing-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4 sm:p-6 no-print"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-3xl shadow-2xl border border-[#E5E5EA] overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F8FAFC] border-b border-[#E5E5EA]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-800">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h2 id="internal-costing-title" className="text-sm font-bold text-[#1D1D1F] flex items-center gap-2">
                Internal Commercials & Costing Architecture
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold tracking-wider">
                  Internal Only · Strictly Confidential
                </span>
              </h2>
              <p className="text-xs text-[#6E6E73] mt-0.5">
                Ctrl Alt Kick Ad Tech Solutions Pvt Ltd · Updated Costing Model
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-white transition-colors"
            aria-label="Close internal commercials view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 leading-relaxed">
            <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              <strong>Confidentiality Notice:</strong> The individual cost allocations (Lead ₹50,000; Employees 1, 2, 3 at ₹15,000 each; Fieldwork ₹10,000; and 15% markup on cost) are internal costing parameters. In client presentations and quotations, only the preliminary project fee (₹1,20,750) and milestone schedule are displayed.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-[#E5E5EA]">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F8FAFC] border-b border-[#E5E5EA] text-[#6E6E73] uppercase tracking-wider font-semibold text-[11px]">
                <tr>
                  <th className="py-2.5 px-4">Component</th>
                  <th className="py-2.5 px-4">Scope / Role</th>
                  <th className="py-2.5 px-4 text-right">Rate (1 Month)</th>
                  <th className="py-2.5 px-4 text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9] text-[#1D1D1F]">
                {items.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                    <td className="py-3 px-4 font-bold text-[#1D1D1F]">{item.component}</td>
                    <td className="py-3 px-4 text-[#64748B] max-w-xs text-[11px]">{item.role}</td>
                    <td className="py-3 px-4 text-right font-mono text-[#64748B]">
                      ₹{item.ratePerMonth.toLocaleString('en-IN')}
                    </td>
                    <td className="py-3 px-4 text-right font-mono font-bold text-[#1D1D1F]">
                      ₹{item.total.toLocaleString('en-IN')}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-[#F8FAFC] border-t border-[#E5E5EA] font-semibold text-[#1D1D1F]">
                <tr>
                  <td colSpan={3} className="py-2.5 px-4 text-right text-[#64748B]">
                    Total Estimated Cost:
                  </td>
                  <td className="py-2.5 px-4 text-right font-mono font-bold">
                    ₹{totalCost.toLocaleString('en-IN')}
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} className="py-2.5 px-4 text-right text-[#64748B]">
                    {markupPercentage}% Markup on Cost:
                  </td>
                  <td className="py-2.5 px-4 text-right font-mono font-bold text-[#0066CC]">
                    ₹{markupAmount.toLocaleString('en-IN')}
                  </td>
                </tr>
                <tr className="bg-white border-t-2 border-[#1D1D1F]">
                  <td colSpan={3} className="py-3.5 px-4 text-right font-bold text-sm text-[#1D1D1F]">
                    Preliminary Project Quotation (Fee):
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono font-bold text-lg text-[#1D1D1F]">
                    ₹{computedFee.toLocaleString('en-IN')}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#64748B]">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Updated per Section 6 costing architecture. Milestones: 40% Kickoff (₹48,300) · 30% Interim (₹36,225) · 30% Final (₹36,225).
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#E5E5EA] bg-[#F8FAFC] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold rounded-xl bg-[#1D1D1F] text-white hover:bg-black transition-colors"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};
