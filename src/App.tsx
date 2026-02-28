import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import BalanceSheet from './components/BalanceSheet';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopNav />
      <Sidebar />
      <main className="pt-14 lg:ml-[264px]">
        <BalanceSheet />
      </main>
    </div>
  );
}
