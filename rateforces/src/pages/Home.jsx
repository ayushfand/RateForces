import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import HowItWorks from "../components/How_To_Use";
import Features from "../components/Features";
import Footer from "../components/Footer";
import ContestRow from "../components/ContestRow";

import { getContests } from "../utils/api";

export default function Home() {

  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const loadContests = async () => {
    const data = await getContests();

    setUpcoming(data.upcoming);
    setPast(data.past);
    setLoading(false);
  };

  loadContests();
}, []);

  return (
    <div className="bg-neutral-950 min-h-screen">

      <Navbar />
      <HeroSection />

      {loading ? (
  <p className="text-gray-400 text-center mt-10">
    Loading contests...
  </p>
) : (
  <>
    <ContestRow title="Upcoming Contests" contests={upcoming} />
    <ContestRow title="Recent Past Contests" contests={past} />
  </>
)}

      <HowItWorks />
      <Features />
      <Footer />

    </div>
  );
}