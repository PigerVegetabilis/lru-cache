import type { ReactElement } from "react"
import "./Comp.css"

interface CompProps{
    val : number;
}

export default function Comp(props : CompProps) : ReactElement{
    return (
        <div className="lru-component">
            <button>{props.val}</button>
        </div>
        
    )
}