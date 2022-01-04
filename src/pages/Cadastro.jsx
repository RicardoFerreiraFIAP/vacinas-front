import Footer from "../components/Footer";
import Formulario from "../components/Formulario";
import Header from "../components/Header";

export default function Cadastro(props) {
  const { setNeedsToFetchData } = props;
  return (
    <div>
      <Header />
      <Formulario setNeedsToFetchData={setNeedsToFetchData} />
      <Footer />
    </div>
  );
}
