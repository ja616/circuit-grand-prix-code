<header className="bg-gradient-to-r from-[#8e44ad] to-[#ff3e3e] text-white sticky top-0 z-50 py-4">
  <div className="max-w-screen-xl mx-auto px-4">
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
      <nav className="hidden md:flex items-center space-x-6">
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
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {/* Mobile Navigation */}
    {isOpen && (
      <nav className="md:hidden py-4 bg-[#8e44ad] rounded-b-lg">
        <div className="flex flex-col space-y-4 items-center">
          {/* Same mobile nav items */}
        </div>
      </nav>
    )}
  </div>
</header>

