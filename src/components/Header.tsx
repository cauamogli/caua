import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";

const navItems = [
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-light tracking-wider text-foreground font-display">
          Soil & Spirit
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Cart + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/shop"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">cart (0)</span>
          </Link>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 bg-black z-40 md:hidden animate-fade-in">
          <nav className="flex flex-col px-6 pt-8">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-border">
                <Link
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 text-xl text-foreground"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
