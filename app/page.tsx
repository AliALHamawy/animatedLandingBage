import { Header, Hero, LogoTicker, ProductShowCase, Pricing, Testimonials, CallToAction, Footer } from "@/Import";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowCase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
      <Analytics />
    </>
  );
}
