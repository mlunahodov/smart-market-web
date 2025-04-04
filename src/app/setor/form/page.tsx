"use client"

import { createSetor } from "@/actions/setor-actions";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

const initialState = {
    values: {
        name: "",
        icon: ""
    },
    errors: {
        name:"",
        icon: ""
    }
}

export default function SetorFormPage() {

    const [state, formAction, pending] = useActionState(createSetor, initialState)

    return (
        <>
            <NavBar active="setor" />

            <main className="flex justify-center items-center">
                <div className="bg-green-950 min-w-2/3 p-6 rounded m-6">
                    <h2 className="text-lg font-bold" >
                        Cadastrar Setor
                    </h2>

                    <form action={formAction} className="space-y-4">
                        <div>
                            <Input 
                                name="name" 
                                placeholder="nome do setor" 
                                aria-invalid={!!state?.errors.name} 
                                defaultValue={state?.values.name} 
                            />
                            <span className="text-sm text-destructive">{state?.errors.name}</span>
                        </div>

                        <div>
                            <Input 
                                name="icon" 
                                placeholder="nome do ícone" 
                                aria-invalid={!!state?.errors.icon}
                                defaultValue={state?.values.icon}
                            />
                            <span className="text-sm text-destructive">{state?.errors.icon}</span>
                        </div>

                        <div className="flex justify-around">
                            <Button variant="outline" asChild>
                                <Link href="/setor">
                                    <ArrowLeft />
                                    Cancelar
                                </Link>
                            </Button>

                            <Button className="bg-black text-white hover:bg-neutral-900" >
                                
                                <Check />
                                Salvar
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}