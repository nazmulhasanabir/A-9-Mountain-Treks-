import Carts from "../Layout Cart/Carts";
import MainLayout from "../Main layout/MainLayout";
import Navbar from "../Navbar";

const HomeLayout = () => {
  return (
    <div className="">
      <div className="w-11/12 mx-auto">
        <header className="p-5">
          <Navbar></Navbar>
        </header>
        <main className="mt-10">
          <MainLayout></MainLayout>
          <Carts></Carts>
        </main>
        <footer></footer>
      </div>
    </div>
  );
};

export default HomeLayout;
