import pdfImage from "/images/pdf-image.svg?url";
function Navbar() {
  const links = ["Acasă", "Încărcare PDF", "Rezultate", "Contact"];

  return (
    <nav className="bg-cyan-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <img src={pdfImage} className="h-6 w-6" />
            <span className="text-white font-bold text-xl">Extractor PDF</span>
          </div>

          <div className="hidden md:flex space-x-6 text-white">
            {links.map((link) => (
              <a key={link} className="hover:text-gray-200 transition" href="#">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
