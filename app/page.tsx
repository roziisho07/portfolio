import Hero from "./Components/Hero";

import AboutSection from "./Components/About";
import ContactSection from "./Components/Contact";
// import UpworkProfileCard from "./Components/UpworkCard";

export default function Home() {
  return (
    <div className="">
      <Hero />
      {/* <ScrollableWebsiteGallery /> */}
      {/* <SidebarMain /> */}

      <AboutSection />
      {/* <UpworkProfileCard /> */}

      <ContactSection />
    </div>
  );
}
