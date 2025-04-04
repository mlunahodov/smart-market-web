import NavBar from "@/components/nav-bar";

export default function EstoquePage() {
    return (
        <>
            <NavBar active="estoque"/>

            <main className="flex justify-center items-center">
                <div className="bg-green-950 min-w-2/3 p-6 rounded m-6">
                    <h2 className="text-lg font-bold" >Estoque</h2>
                </div>
            </main>
        </>
    )
}