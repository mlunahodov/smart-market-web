import { getSetor } from "@/actions/setor-actions";
import SetorItem from "@/components/setor-item";
import NavBar from "@/components/nav-bar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { CircleAlert, Plus } from "lucide-react";
import Link from "next/link";

export default async function SetorPage() {
    const data: Array<Setor> = await getSetor()

    return (
        <>
            <NavBar active="setor" />

            <main className="flex justify-center items-center">
                <div className="bg-green-950 min-w-2/3 p-6 rounded m-6">

                    <div className="flex justify-between mb-4">
                        <h2 className="text-lg font-bold" >Setor</h2>

                        <Button
                            className="bg-black text-white hover:bg-neutral-900"
                            asChild
                        >
                            <Link href="/setor/form">
                                <Plus />
                                Novo Setor
                            </Link>
                        </Button>
                    </div>

                    {(data.length == 0) ?
                        <Alert>
                            <CircleAlert />
                            <AlertDescription>
                                Nenhum setor cadastrado
                            </AlertDescription>
                        </Alert>
                        : ""
                    }

                    {data.map(setor => <SetorItem key={setor.id} setor={setor} />)}

                </div>
            </main>
        </>
    )
}
