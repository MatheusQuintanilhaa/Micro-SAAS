import { SectionCards } from "@/app/_components/section-cards";

import AddClientSheet from "../_components/add-client-sheet";
import { getClients } from "./actions";

export default async function Page() {
  const clients = await getClients();

  return (
    <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
            </div>
            <div className="flex items-center justify-between px-8">
              <h2>Clientes</h2>
              <AddClientSheet/>
            </div>
            <div className="px-8 flex flex-col mt-8">
              <h2>Ultimos clientes criados</h2>
              <div>
                {clients?.map((item) => (
                  <p key={item.userName}>{item.userName}</p>
                ))}
              </div>
            </div>
          </div>
  );
}
