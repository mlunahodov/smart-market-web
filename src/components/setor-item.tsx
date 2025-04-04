import CrudDropdown from "./crud-dropdown";
import Icon from "./icon";

interface SetorItemProps {
    setor: Setor
}

export default function SetorItem({ setor }: SetorItemProps){
    return(
        <div className="flex justify-between mt-2">
            <div className="flex gap-2">
                <Icon name={setor.icon}/>
                <span>{setor.name}</span>
            </div>

            <div>
                <CrudDropdown />
            </div>
        </div>
    )
}