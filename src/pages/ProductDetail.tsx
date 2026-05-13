import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useInView } from "@/hooks/useInView";
import { products } from "@/data/products";
import { TriangleAlert } from "lucide-react";

const FadeIn = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { ref, isInView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s ease-out",
      }}
    >
      {children}
    </div>
  );
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();

  const product = productId ? products[productId] : undefined;

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  return (
    <div className="bg-black min-h-screen text-foreground">
      {/* Hero: Product info left (sticky), Gallery right (scrolling) */}
      <div className="container mx-auto px-6 pt-12 lg:pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          {/* Product Info — Sticky Left Column */}
          <div className="lg:sticky lg:top-24 lg:self-start space-y-6 order-2 lg:order-1">
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-medium text-foreground tracking-tight leading-tight">
                {product.name} {product.subtitle}
              </h1>
            </div>

            <p className="text-lg text-foreground">{product.price}</p>

            <p className="text-muted-foreground text-sm leading-relaxed font-light max-w-md">
              {product.description}
            </p>
          </div>

          {/* Gallery — Vertical scroll, right column */}
          <div className="space-y-3 order-1 lg:order-2">
            {product.gallery.map((img, i) => (
              <FadeIn key={i}>
                <div className="overflow-hidden rounded-2xl bg-black">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover"
                    loading={i > 0 ? "lazy" : undefined}
                    width={1200}
                    height={1200}
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Specs Section — Two column: image left, categorized specs right */}
      <FadeIn>
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Spec image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src={product.specImage}
                alt={`${product.name} detail`}
                className="w-full h-auto object-cover"
                loading="lazy"
                width={1200}
                height={1200}
              />
            </div>

            {/* Spec groups */}
            <div className="py-4">
              <div className="border-t border-border pt-6 mb-8">
                <p className="text-sm font-medium text-foreground">
                  {product.name} {product.subtitle}
                </p>
              </div>

              <div className="space-y-8">
                {product.specGroups.map((group) => (
                  <div key={group.label}>
                    <p className="text-sm font-semibold text-foreground mb-1">
                      {group.label}
                    </p>
                    {group.values.map((val, i) => (
                      <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                        {val}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Care Instructions */}
      <FadeIn>
        <div className="container mx-auto px-6 py-4">
          <div className="max-w-3xl mx-auto">
            {/* Care notes */}
            <div className="border-t border-border pt-8 pb-8">
              <div className="flex items-start gap-2 mb-4">
                <TriangleAlert className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
              </div>
              {product.careNotes.map((note, i) => (
                <p key={i} className="text-sm font-semibold text-foreground leading-relaxed">
                  {note}
                </p>
              ))}
            </div>

            {/* Craft note */}
            <div className="border-t border-border pt-8 pb-8">
              {product.craftNote.split("\n").map((line, i) => (
                <p key={i} className="text-sm font-semibold text-foreground leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Usage Images with Captions */}
      <FadeIn>
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="border-t border-border pt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.usageImages.map((img, i) => (
                  <div key={i} className="space-y-3">
                    <div className="overflow-hidden rounded-2xl bg-black">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full aspect-[3/4] object-cover"
                        loading="lazy"
                        width={600}
                        height={800}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground font-light">
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Shipping Note */}
      <FadeIn>
        <div className="container mx-auto px-6 py-8 pb-32">
          <div className="max-w-3xl mx-auto">
            <div className="border-t border-border pt-8 text-center">
              <p className="text-sm font-semibold text-foreground">
                Wrapped and shipped in recycled packaging
              </p>
              <p className="text-sm text-primary mt-1 underline cursor-pointer">
                All sales final
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default ProductDetail;
