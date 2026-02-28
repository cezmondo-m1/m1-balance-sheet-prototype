function EditIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#2a7da7]">
      <path
        d="M14.166 2.5a2.357 2.357 0 013.334 3.334L6.25 17.084l-4.333 1 1-4.334L14.166 2.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between pb-4 border-b border-[#d4dbe6]">
      <h3 className="text-[18px] font-semibold text-[#1c2026] tracking-[-0.25px]">{title}</h3>
      <button className="cursor-pointer hover:opacity-70 transition-opacity">
        <EditIcon />
      </button>
    </div>
  );
}

function LineItem({
  label,
  sublabel,
  amount,
  bold = false,
  noBorder = false,
}: {
  label: string;
  sublabel?: string;
  amount: string;
  bold?: boolean;
  noBorder?: boolean;
}) {
  return (
    <div className={`flex items-center justify-between py-3 last:border-b-0 ${noBorder ? '' : 'border-b border-[#d4dbe6]'}`}>
      <div className="flex flex-col gap-0.5">
        <span
          className={`text-[16px] leading-6 tracking-[-0.25px] ${
            bold ? 'font-semibold text-[#1c2026]' : 'font-normal text-[#1c2026]'
          }`}
        >
          {label}
        </span>
        {sublabel && (
          <span className="text-[14px] font-normal leading-5 text-[#546073]">{sublabel}</span>
        )}
      </div>
      <span
        className={`text-[16px] leading-6 tracking-[-0.25px] ${
          bold ? 'font-semibold text-[#1c2026]' : 'font-normal text-[#1c2026]'
        }`}
      >
        {amount}
      </span>
    </div>
  );
}

function CompositionBar({
  segments,
}: {
  segments: { color: string; widthPercent: number }[];
}) {
  return (
    <div className="flex h-[7px] w-full rounded-full overflow-hidden">
      {segments.map((seg, i) => (
        <div
          key={i}
          style={{ width: `${seg.widthPercent}%`, backgroundColor: seg.color }}
        />
      ))}
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span
        className="inline-block w-2 h-2 rounded-full shrink-0"
        style={{ backgroundColor: color }}
      />
      <span className="text-[14px] font-normal leading-5 text-[#1c2026]">{label}</span>
    </div>
  );
}

function SummaryCard({
  title,
  amount,
  compositionSegments,
  legend,
}: {
  title: string;
  amount: string;
  compositionSegments: { color: string; widthPercent: number }[];
  legend: { color: string; label: string }[];
}) {
  return (
    <div className="bg-white border border-[#d4dbe6] rounded-xl p-6 w-full">
      <div className="mb-4">
        <p className="text-[18px] font-semibold text-[#1c2026] leading-6 mb-1">{title}</p>
        <p className="text-[28px] font-semibold text-[#152b56] leading-8 tracking-[-0.32px]">
          {amount}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[12px] font-semibold text-[#1c2026] leading-4">Composition</p>
        <CompositionBar segments={compositionSegments} />
        <div className="flex flex-col gap-1.5 mt-1">
          {legend.map((item, i) => (
            <LegendDot key={i} color={item.color} label={item.label} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AddButton({ label }: { label: string }) {
  return (
    <button className="self-start flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#d4dbe6] text-[14px] font-semibold text-[#1c2026] hover:bg-gray-50 transition-colors">
      {label}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </button>
  );
}

function OutlineButton({ label }: { label: string }) {
  return (
    <button className="px-5 py-2 rounded-full border border-[#d4dbe6] text-[14px] font-normal text-[#2a7da7] hover:bg-blue-50 transition-colors">
      {label}
    </button>
  );
}

export default function BalanceSheet() {
  return (
    <div className="min-h-screen bg-white">
      {/* Secondary tabs */}
      <div className="border-b border-[#d4dbe6] bg-white sticky top-14 z-10 overflow-x-auto">
        <div className="px-4 md:px-8 lg:px-16 flex items-center gap-6 lg:gap-8 h-12 min-w-max">
            {['About you', 'Your finances', 'M1 accounts', 'Documents', 'Security', 'Preferences', 'Platform fee'].map(
              (tab) => (
                <button
                  key={tab}
                  className={`text-[14px] leading-5 h-full border-b-2 transition-colors ${
                    tab === 'Your finances'
                      ? 'border-[#1c2026] font-semibold text-[#1c2026]'
                      : 'border-transparent font-normal text-[#546073] hover:text-[#1c2026]'
                  }`}
                >
                  {tab}
                </button>
              )
            )}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 md:px-8 lg:px-16 py-6 lg:py-8">
          {/* Sub-tabs */}
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-1">
            {['Balance sheet', 'Cash flow', 'Investment profile', 'Investor disclosures'].map((tab) => (
              <button
                key={tab}
                className={`shrink-0 px-4 py-1.5 rounded-full text-[14px] leading-5 border transition-colors ${
                  tab === 'Balance sheet'
                    ? 'border-[#1c2026] bg-[#1c2026] text-white font-semibold'
                    : 'border-[#d4dbe6] text-[#546073] font-normal hover:border-[#1c2026] hover:text-[#1c2026]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Page title */}
          <h2 className="text-[28px] font-light text-[#1c2026] leading-8 tracking-[-0.32px] mb-8">
            Balance sheet
          </h2>

          {/* Summary cards + add buttons (paired so they stay together when stacking) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[52px] mb-12">
            <div className="flex flex-col gap-6">
              <SummaryCard
                title="Total assets"
                amount="$2,107,849"
                compositionSegments={[
                  { color: '#9aaed6', widthPercent: 16.4 },
                  { color: '#3d5a94', widthPercent: 80.6 },
                  { color: '#ccd6ea', widthPercent: 3 },
                ]}
                legend={[
                  { color: '#9aaed6', label: 'Investable assets $345,360' },
                  { color: '#3d5a94', label: 'Real estate $1,700,000' },
                  { color: '#ccd6ea', label: 'Other significant assets $62,489' },
                ]}
              />
              <AddButton label="Add asset" />
            </div>
            <div className="flex flex-col gap-6">
              <SummaryCard
                title="Total liabilities"
                amount="$180,200"
                compositionSegments={[
                  { color: '#f4e0a2', widthPercent: 69.4 },
                  { color: '#edd17b', widthPercent: 2.7 },
                  { color: '#d6a55c', widthPercent: 27.9 },
                ]}
                legend={[
                  { color: '#f4e0a2', label: 'Mortgage $125,000' },
                  { color: '#edd17b', label: 'Credit cards $5,050' },
                  { color: '#d6a55c', label: 'Other debts and loans $50,150' },
                ]}
              />
              <AddButton label="Add liability" />
            </div>
          </div>

          {/* Two-column sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[52px]">
            {/* Left: Assets */}
            <div className="flex flex-col gap-12">
              {/* Cash and Savings */}
              <div>
                <SectionHeader title="Cash and savings" />
                <LineItem label="Total cash and savings accounts" amount="$63,489" bold />
                <LineItem
                  label="M1 High-Yield Cash Account - 0282"
                  sublabel="M1 Finance"
                  amount="$62,489"
                />
                <LineItem label="Everyday savings – 3068" sublabel="Chase" amount="$1,000" />
                <LineItem label="Total checking accounts" amount="$500" bold />
                <LineItem
                  label="Everyday checking – 1234"
                  sublabel="Bank of America"
                  amount="$500"
                />
                <LineItem label="Total physical cash" amount="$1,000" bold noBorder />
                <div className="mt-4">
                  <OutlineButton label="Open M1 Earn account" />
                </div>
              </div>

              {/* Investments */}
              <div>
                <SectionHeader title="Investments" />
                <LineItem label="Total investment accounts" amount="$280,371" bold />
                <LineItem
                  label="M1 Invest - Individual - 0742"
                  sublabel="M1 Finance"
                  amount="$280,371"
                />
              </div>

              {/* Real estate */}
              <div>
                <SectionHeader title="Real estate" />
                <LineItem label="Total real estate" amount="$1,700,000" bold />
                <LineItem
                  label="Primary residence"
                  sublabel="123 Main St"
                  amount="$1,200,000"
                />
                <LineItem
                  label="Vacation property"
                  sublabel="456 Beach Rd"
                  amount="$500,000"
                />
              </div>

              {/* Other significant assets */}
              <div>
                <SectionHeader title="Other significant assets" />
                <LineItem label="Total other assets" amount="$62,489" bold />
                <LineItem label="Vehicle" sublabel="2022 Tesla Model 3" amount="$42,489" />
                <LineItem label="Collectibles" sublabel="Art collection" amount="$20,000" />
              </div>
            </div>

            {/* Right: Liabilities */}
            <div className="flex flex-col gap-12">
              {/* Mortgage */}
              <div>
                <SectionHeader title="Mortgage" />
                <LineItem label="Total mortgage balance" amount="$125,000" bold />
                <LineItem
                  label="6.25%"
                  sublabel="Vacation property"
                  amount="$125,000"
                />
              </div>

              {/* Credit cards */}
              <div>
                <SectionHeader title="Credit cards" />
                <LineItem label="Total credit card debt" amount="$5,050" bold />
                <LineItem
                  label="22.9% APR"
                  sublabel="Chase Sapphire Preferred"
                  amount="$1,850"
                />
                <LineItem label="22.9% APR" sublabel="AMEX Gold" amount="$3,200" />
              </div>

              {/* Other loans or debts */}
              <div>
                <SectionHeader title="Other loans or debts" />
                <LineItem label="Total other debt" amount="$50,150" bold />
                <LineItem label="Student loans" sublabel="Federal - MOHELA" amount="$32,000" />
                <LineItem label="Auto loan" sublabel="5.9% APR" amount="$18,150" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
