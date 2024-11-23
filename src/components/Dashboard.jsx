import Navbar from "./Navbar";
import TableBox from "./TableBox";

function Dashboard() {
  return (
    <>
      <div class="min-h-full">
        <Navbar />
        <header class="shadow">
          <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 class="text-2xl font-bold tracking-tight text-white-800">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <TableBox />
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
