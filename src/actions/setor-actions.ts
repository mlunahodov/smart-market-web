import { icons } from "lucide-react"
import { redirect } from "next/navigation"

const API_URL = "http://localhost:9090/setor"

type FieldError = {
    field: string
    message: string
}

export async function getSetor() {
    const response = await fetch(API_URL)
    return await response.json()
}

export async function createSetor(initialState: any, formData: FormData) {
    const name = formData.get("name")
    const icon = formData.get("icon")

    const data = {
        name: typeof name === "string" ? name : "",
        icon: typeof icon === "string" ? icon : ""
    }

    console.log(data)

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

 
    const response = await fetch(API_URL, options)

        if (!response.ok) {
            const errors: FieldError[] = await response.json()
            return {
                values: {
                    name: data.name,
                    icon: data.icon
                },
                errors: {
                    name: errors.find(e => e.field === "name")?.message,
                    icon: errors.find(e => e.field === "icon")?.message
                }
            }
        }

        redirect("/setor")
    }