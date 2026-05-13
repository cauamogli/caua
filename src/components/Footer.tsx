import { Link } from "react-router-dom";
import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 mt-32">
      {/* Newsletter */}
      <div className="container mx-auto px-6 text-center space-y-4 pb-8">
        <p className="text-secondary-foreground text-lg font-light">
          Want to know when new pieces are available?
        </p>
        <a
          href="mailto:hello@soilandspirit.com"
          className="text-primary hover:text-copper-light underline text-base transition-colors"
        >
          Join email list
        </a>
      </div>

      {/* Social */}
      <div className="flex gap-6 justify-center py-6">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Twitter className="w-5 h-5" />
        </a>
      </div>

      {/* Copyright & Legal */}
      <div className="container mx-auto px-6 pt-6 text-center space-y-4">
        <p className="text-muted-foreground text-sm">©2024 Soil & Spirit</p>
        <p className="text-muted-foreground/60 text-xs leading-relaxed max-w-3xl mx-auto">
          No part of this site may be copied, reproduced, republished, transmitted or
          distributed in any form or by any means, including photocopying or other
          electronic or mechanical methods, without the creator's express prior written
          consent.
        </p>
        <div className="flex gap-4 justify-center mt-6">
          <Link
            to="/shipping"
            className="text-muted-foreground hover:text-secondary-foreground text-xs underline transition-colors"
          >
            shipping and returns
          </Link>
          <Link
            to="/warranty"
            className="text-muted-foreground hover:text-secondary-foreground text-xs underline transition-colors"
          >
            warranty information
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
