import { auth } from "@/services/auth";

export default async function Page() {
  const session = await auth();
  return <div>Hello {session?.user?.name}</div>;
}
