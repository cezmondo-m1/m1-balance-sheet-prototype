export default function TopNav() {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-[#d4dbe6] flex items-center z-20 px-6">
      {/* Hamburger */}
      <button className="mr-4 text-[#546073]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* M1 Logo */}
      <div className="flex items-center font-bold text-[20px] text-[#152b56] select-none">M</div>

      <div className="flex-1" />

      {/* Gift promo */}
      <div className="flex items-center gap-2 text-[#546073]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[14px] font-semibold">Get up to $750 a year</span>
      </div>
    </header>
  );
}
