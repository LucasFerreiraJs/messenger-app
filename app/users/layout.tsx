import Sidebar from "../components/sidebar/Sidebar";

export default function UsersLayout({ children }: { children: React.ReactNode }) {


  return (

    // // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        {children}
      </div>
    </Sidebar>
  );
}

