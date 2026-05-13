import { Link } from "react-router-dom";
import { Package, RotateCcw, Clock, MapPin } from "lucide-react";

const Shipping = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extralight text-foreground tracking-wider text-center mb-4 font-display">
          Shipping & Returns
        </h1>
        <p className="text-muted-foreground text-center mb-16 font-light">
          Everything you need to know about receiving your ceramics.
        </p>

        <div className="space-y-16">
          {/* Shipping */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Package className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground tracking-wide font-display">
                Shipping
              </h2>
            </div>
            <div className="bg-secondary rounded-lg p-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-foreground font-medium">Standard Shipping</h3>
                  <p className="text-secondary-foreground text-sm font-light">5–7 business days</p>
                  <p className="text-primary text-sm">Free on all orders</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-foreground font-medium">Express Shipping</h3>
                  <p className="text-secondary-foreground text-sm font-light">2–3 business days</p>
                  <p className="text-primary text-sm">$15.00</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-foreground font-medium">Overnight</h3>
                  <p className="text-secondary-foreground text-sm font-light">Next business day</p>
                  <p className="text-primary text-sm">$35.00</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-foreground font-medium">International</h3>
                  <p className="text-secondary-foreground text-sm font-light">7–14 business days</p>
                  <p className="text-primary text-sm">$25.00</p>
                </div>
              </div>
            </div>
          </section>

          {/* Processing */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground tracking-wide font-display">
                Processing Time
              </h2>
            </div>
            <p className="text-secondary-foreground font-light leading-relaxed">
              All orders are processed within 2–4 business days. Each piece is individually
              inspected and wrapped in protective packaging before shipping. You will receive a
              shipping confirmation email with tracking information once your order has shipped.
              During new collection releases, processing times may extend to 5–7 business days
              due to high demand.
            </p>
          </section>

          {/* Coverage */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground tracking-wide font-display">
                Where We Ship
              </h2>
            </div>
            <p className="text-secondary-foreground font-light leading-relaxed">
              We currently ship to the United States, Canada, the United Kingdom, European
              Union countries, Australia, Japan, and South Korea. We're working to expand our
              shipping coverage. If your country isn't listed, please email us at{" "}
              <a href="mailto:hello@soilandspirit.com" className="text-primary hover:text-copper-light underline transition-colors">
                hello@soilandspirit.com
              </a>{" "}
              and we'll do our best to accommodate your request.
            </p>
          </section>

          {/* Returns */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <RotateCcw className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-light text-foreground tracking-wide font-display">
                Returns & Exchanges
              </h2>
            </div>
            <div className="space-y-4 text-secondary-foreground font-light leading-relaxed">
              <p>
                We offer a 30-day return policy on all undamaged products in original packaging.
                If you're not satisfied with your purchase, you can return it within 30 days of
                delivery for a full refund to your original payment method.
              </p>
              <p>
                If your piece arrives damaged during shipping, we will replace it at no cost.
                Please photograph the damage and packaging and contact our team within 48 hours
                of delivery.
              </p>
              <div className="bg-muted rounded-lg p-6 mt-6">
                <h3 className="text-foreground font-medium mb-3">To initiate a return:</h3>
                <ol className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-medium">1.</span>
                    Email <a href="mailto:returns@soilandspirit.com" className="text-primary underline">returns@soilandspirit.com</a> with your order number
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-medium">2.</span>
                    We'll send you a prepaid return label within 24 hours
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-medium">3.</span>
                    Pack your piece in its original packaging with protective wrapping
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-medium">4.</span>
                    Drop off at any authorized shipping location
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-medium">5.</span>
                    Refund processed within 5–7 business days of receipt
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center mt-20">
          <p className="text-muted-foreground text-sm font-light mb-4">
            Have questions? We're here to help.
          </p>
          <a
            href="mailto:hello@soilandspirit.com"
            className="text-primary hover:text-copper-light underline text-sm uppercase tracking-wider transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
