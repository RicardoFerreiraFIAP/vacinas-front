import Header from "../components/Header";
import VacinaStats from "../components/VacinaStats";
import Menu from "../components/Menu";
import CronogramaDeVacinacao from "../components/CronogramaDeVacinacao";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { getPatientInfo } from "../services/api";

export default function Home(props) {
  const { patientInfo, setPatientInfo } = props;

  useEffect(() => {
    async function fetchData() {
      const updatedPatientInfo = await getPatientInfo();
      console.log({ updatedPatientInfo });
      setPatientInfo(updatedPatientInfo);
    }
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Header />
      <VacinaStats />
      <Menu patientInfo={patientInfo} />
      <CronogramaDeVacinacao />
      <Footer />
    </div>
  );
}
