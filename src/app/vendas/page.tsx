import NavBar from "@/components/nav-bar";

export default function TransactionsPage() {
    return (
        <>
            <NavBar active="vendas" />

            <main className="flex justify-center items-center">
                <div className="bg-green-950 min-w-2/3 p-6 rounded m-6">
                    <h2 className="text-lg font-bold" >Vendas</h2>
                </div>
            </main>
        </>
    )
}