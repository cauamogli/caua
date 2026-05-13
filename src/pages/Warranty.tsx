import { Shield, Wrench, AlertCircle, CheckCircle } from "lucide-react";

const Warranty = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extralight text-foreground tracking-wider text-center mb-4 font-display">
          Warranty
        </h1>
        <p className="text-muted-foreground text-center mb-16 font-light">
          Made by hand. Backed by our commitment to craft.
        </p>

        <div className="space-y-16">
          {/* Coverage Overview */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground tracking-wide font-display">
                Coverage Overview
              </h2>
            </div>
            <div className="bg-secondary rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="text-foreground font-medium">All Ceramics</h3>
                  <p className="text-primary text-2xl font-light font-display">Lifetime Guarantee</p>
                  <p className="text-secondary-foreground text-sm font-light">
                    Covers manufacturing defects in materials and craftsmanship. If a piece cracks,
                    chips, or fails under normal household use due to a flaw in making, we will
                    replace it.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-foreground font-medium">Shipping Damage</h3>
                  <p className="text-primary text-2xl font-light font-display">Full Replacement</p>
                  <p className="text-secondary-foreground text-sm font-light">
                    If your piece arrives broken or damaged in transit, we will ship a replacement
                    at no cost. Report within 48 hours of delivery with photos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What's Covered */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground tracking-wide font-display">
                What's Covered
              </h2>
            </div>
            <div className="space-y-3">
              {[
                "Cracks that develop from normal use (not impact)",
                "Glaze defects: crawling, pinholing, or flaking",
                "Warping that affects the piece's function",
                "Leaking in pieces intended to hold liquid",
                "Handle or spout separation",
                "Damage that occurred during shipping",
              ].map((item) => (
                <div key={item} className="flex items-start text-sm">
                  <span className="text-primary mr-3 text-lg leading-none">•</span>
                  <span className="text-secondary-foreground leading-relaxed font-light">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* What's Not Covered */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-2xl font-light text-foreground tracking-wide font-display">
                What's Not Covered
              </h2>
            </div>
            <div className="space-y-3">
              {[
                "Chips or cracks from drops or impacts",
                "Staining from food, tea, or coffee (this is natural patina)",
                "Cosmetic variations in glaze — these are inherent to handmade ceramics",
                "Damage from dishwasher use on pieces marked hand-wash only",
                "Thermal shock from extreme temperature changes",
                "Loss or theft",
              ].map((item) => (
                <div key={item} className="flex items-start text-sm">
                  <span className="text-muted-foreground mr-3 text-lg leading-none">×</span>
                  <span className="text-secondary-foreground leading-relaxed font-light">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Claim Process */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Wrench className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground tracking-wide font-display">
                Filing a Warranty Claim
              </h2>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <ol className="space-y-6">
                {[
                  {
                    step: "Document the Issue",
                    desc: "Take a clear photo showing the defect. Note when you first noticed it and include your order number.",
                  },
                  {
                    step: "Contact Us",
                    desc: "Email care@soilandspirit.com with your photos, order number, and a brief description. We respond within 24 hours.",
                  },
                  {
                    step: "Review",
                    desc: "Our team will review your claim. We may ask for additional photos or details about how the piece has been used.",
                  },
                  {
                    step: "Resolution",
                    desc: "Approved claims are resolved with a replacement piece, shipped at no cost. Most claims are resolved within 5–7 business days.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-primary font-display text-xl font-light min-w-[2rem]">
                      {i + 1}.
                    </span>
                    <div>
                      <h3 className="text-foreground font-medium mb-1">{item.step}</h3>
                      <p className="text-secondary-foreground text-sm font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* A Note on Handmade */}
          <section className="bg-secondary rounded-lg p-8 text-center space-y-4">
            <h2 className="text-2xl font-light text-foreground tracking-wide font-display">
              A Note on Handmade
            </h2>
            <p className="text-secondary-foreground font-light max-w-2xl mx-auto">
              Every piece we make carries the subtle marks of the human hand — slight asymmetries,
              glaze variations, and traces of the making process. These are not defects. They are
              what makes each piece singular. Our warranty covers functional issues, not the
              beautiful irregularities that come with handmade work.
            </p>
          </section>
        </div>

        <div className="text-center mt-20">
          <p className="text-muted-foreground text-sm font-light mb-4">
            Questions about your warranty?
          </p>
          <a
            href="mailto:care@soilandspirit.com"
            className="text-primary hover:text-copper-light underline text-sm uppercase tracking-wider transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Warranty;
