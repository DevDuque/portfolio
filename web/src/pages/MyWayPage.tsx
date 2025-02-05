// Components
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyWayPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="flex-grow flex items-center justify-center">
          <h1 className="text-3xl font-bold">My Way Page</h1>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default MyWayPage;
