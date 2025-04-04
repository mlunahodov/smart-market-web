import Link from "next/link";

interface NavBarProps {
    active: "estoque" | "vendas" | "setor"
}

const links = [
    { label: "ESTOQUE" , href: "/estoque" },
    { label: "VENDAS", href: "/vendas" },
    { label: "SETOR", href: "/setor" },
]

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const classActive = "border-b-4 border-white-600"

    return (
        <nav className="flex justify-between bg-green-900 px-6 pt-6">
            <h1 className="text-2xl font-bold">SmartMarket</h1>
            <ul className="flex gap-28">
                {links.map(link =>
                    <li key={link.label} className={active === link.label ? classActive : ""}>
                        <Link href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                )}

            </ul>
            <img className="size-12 rounded-full" src="http://github.com/mlunahodov.png" alt="avatar" />
        </nav>
    )
}