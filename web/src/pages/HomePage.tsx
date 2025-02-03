import Header from "../components/Header";
import Footer from "../components/Footer";
import LanguageSelector from "../components/LanguageSelector";

function HomePage() {
  return (
    <>
      <Header />

      <div className="flex justify-end p-4">
        <LanguageSelector />
      </div>

      <div className="">
        <label>Desenvolvedor Full-Stack-Junior</label>
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
