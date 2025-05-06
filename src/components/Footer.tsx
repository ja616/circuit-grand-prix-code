
const Footer = () => {
  return (
    <footer className="bg-[#1e1e42] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-mario text-xl mb-4">RAS IEEE SOP</h3>
            <p className="text-gray-300">
              Join the race into the future of technology with tug-of-war bots, underwater bots, and wild workshops!
            </p>
          </div>
          
          <div>
            <h3 className="font-mario text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#schedule" className="text-gray-300 hover:text-white transition-colors">Schedule</a></li>
              <li><a href="#mission" className="text-gray-300 hover:text-white transition-colors">Tracks</a></li>
              <li><a href="#leaderboard" className="text-gray-300 hover:text-white transition-colors">Leaderboard</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-mario text-lg mb-4">Connect With Us</h3>
            <p className="text-gray-300 mb-2">Email: contact@rasieeesop.com</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Robotics & IoT Track - IEEE SOP. All rights reserved.</p>
          <p className="mt-2">
            Site design inspired by Mario. Mario is a trademark of Nintendo. 
            This is not an official Nintendo site.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
