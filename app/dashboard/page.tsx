import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/auth"

export default async function Dashboard() {
    // Check if the user is signed in
    const session = await getSession();

    if (!session?.user) {
        redirect("/sign-in")
    }

    return <div>Dashboard</div>
}