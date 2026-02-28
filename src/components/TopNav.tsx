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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6.79534 3.75H2.03872C1.93735 3.75 1.85938 3.82798 1.85938 3.92155V5.61366C1.85938 5.66044 1.87497 5.69943 1.91396 5.73842L11.9029 15.509C11.973 15.5792 12.0822 15.5792 12.1524 15.509L15.5288 12.2261L15.4976 12.2183L15.5132 12.1949L6.9201 3.79679C6.88111 3.7656 6.84213 3.75 6.79534 3.75ZM17.1117 3.78119L12.7216 8.07774C12.6826 8.11673 12.6826 8.17911 12.7216 8.2181L16.0434 11.4931C16.0824 11.5321 16.1448 11.5321 16.1838 11.4931L17.0494 10.6198C17.065 10.6042 17.0883 10.612 17.0883 10.6354V20.1486C17.0883 20.2032 17.1351 20.25 17.1897 20.25H22.0321C22.0867 20.25 22.1335 20.2032 22.1335 20.1486V3.85137C22.1335 3.79679 22.0867 3.75 22.0321 3.75H17.1819C17.1585 3.75 17.1351 3.7578 17.1117 3.78119ZM6.61599 20.2422H2.02313C1.93735 20.2422 1.85938 20.172 1.85938 20.0785V7.32136C1.85938 7.1732 2.03872 7.10302 2.14009 7.2044L6.73296 11.7115C6.76415 11.7427 6.77974 11.7817 6.77974 11.8284V20.0862C6.77974 20.172 6.70956 20.2422 6.61599 20.2422Z" fill="#1C2026"/>
      </svg>

      <div className="flex-1" />

      {/* Gift promo */}
      <div className="hidden sm:flex items-center gap-2 text-[#546073]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[14px] font-semibold">Get up to $750 a year</span>
      </div>
    </header>
  );
}
