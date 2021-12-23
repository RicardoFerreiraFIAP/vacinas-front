import Header from "../components/Header";
import VacinaStats from "../components/VacinaStats";
import Menu from "../components/Menu";
import CronogramaDeVacinacao from "../components/CronogramaDeVacinacao";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <VacinaStats />
      <Menu />
      <CronogramaDeVacinacao />
      <Footer />
    </div>
  );
}
