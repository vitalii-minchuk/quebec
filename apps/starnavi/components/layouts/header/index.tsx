import { BackHomeBtn } from "@/components/layouts/back-home-btn";

export const Header = () => {
  return (
    <header className=" bg-slate-200 h-12">
      <div className="container flex items-center justify-between h-full">
        <h3>Starnavi</h3>
        <BackHomeBtn />
      </div>
    </header>
  );
};
