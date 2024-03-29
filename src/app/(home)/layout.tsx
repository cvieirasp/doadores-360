import Navigation from "@/components/custom/navigation";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <main className="h-screen flex flex-col">
      <Navigation />
      {children}
    </main>
  );
};

export default layout;
