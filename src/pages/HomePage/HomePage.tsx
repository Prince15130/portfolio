import Hero from "../../sections/Hero/Hero";
import ProjectsGrid from "../../sections/ProjectsGrid/ProjectsGrid";
import TechStack from "../../sections/TechStack/TechStack";
import Experience from "../../sections/Experience/Experience";
import Approach from "../../sections/Approach/Approach";
import Awards from "../../components/Awards/Awards";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Hero />
      <Approach />
      <ProjectsGrid />
      <TechStack />
      <Experience />

      <section className={styles.awardsSection} id="awards">
        <SectionHeader title="Awards & Recognition" />
        <Awards />
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
