<header className="bg-gradient-to-r from-[#8e44ad] to-[#ff3e3e] text-white sticky top-0 z-50 py-3">
  <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
    <div className="flex items-center justify-between">
      
      {/* Logo - LEFT */}
      <Link to="/" className="flex items-center">
        <img 
          src="/lovable-uploads/275d2a89-16d4-4c5f-81d6-c0b6f9f1f9e7.png" 
          alt="SOP Logo" 
          className="h-10 w-auto"
        />
      </Link>

      {/* Navigation - RIGHT */}
      <nav className="hidden md:flex items-center gap-6">
        <a href="#" onClick={(e) => {e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'})}} className="font-mario text-white hover:text-yellow-200 text-base text-shadow-mario">HOME</a>
        <a href="#mission" onClick={(e) => {e.preventDefault(); document.getElementById('mission')?.scrollIntoView({behavior: 'smooth'})}} className="font-mario text-white hover:text-yellow-200 text-base text-shadow-mario">MISSION</a>
        <a href="#powerups" onClick={(e) => {e.preventDefault(); document.getElementById('powerups')?.scrollIntoView({behavior: 'smooth'})}} className="font-mario text-white hover:text-yellow-200 text-base text-shadow-mario">POWERUPS</a>
        <a href="#schedule" onClick={(e) => {e.preventDefault(); document.getElementById('schedule')?.scrollIntoView({behavior: 'smooth'})}} className="font-mario text-white hover:text-yellow-200 text-base text-shadow-mario">SCHEDULE</a>
        <a href="#leaderboard" onClick={(e) => {e.preventDefault(); document.getElementById('leaderboard')?.scrollIntoView({behavior: 'smooth'})}} className="font-mario text-white hover:text-yellow-200 text-base text-shadow-mario">LEADERBOARD</a>
        <Link to="/highlights" className="font-mario text-white hover:text-yellow-200 text-base text-shadow-mario">HIGHLIGHTS</Link>
        <a 
          href="https://unstop.com" 
          target="_blank" 
          rel="noreferrer"
          className="font-mario bg-white text-[#ff3e3e] px-4 py-2 rounded-lg hover:bg-yellow-200 font-bold"
        >
          REGISTER NOW
        </a>
      </nav>

      {/* Mobile toggle */}
      <button onClick={toggleMenu} className="md:hidden text-white">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  </div>

  {/* Mobile Navigation */}
  {isOpen && (
    <div className="md:hidden bg-[#8e44ad] py-4">
      <div className="flex flex-col items-center space-y-4">
        {/* You can insert the same nav links here for mobile */}
      </div>
    </div>
  )}
</header>


