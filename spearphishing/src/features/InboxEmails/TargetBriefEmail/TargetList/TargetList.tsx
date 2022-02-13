import { Target } from "../../../../containers/targets/TargetContainer"
import { TargetListElement } from "./TargetListElement"
import "./TargetList.css";
import { useState } from "react";

type TargetListProps = {
    targets: Target[],

}

export function TargetList(props: TargetListProps){

    let initState: number[] = [];
    let [activatedIndicies, setActivedIndicies] = useState(initState);

    function activateIndex(ind: number){
        if(activatedIndicies.includes(ind)) {
            console.log("clicked already checked");
            
            setActivedIndicies(
                activatedIndicies.filter(val => val !== ind)
            )
            return;
        };
        if(activatedIndicies.length >= 3){
            setActivedIndicies(
                [ 
                    activatedIndicies[0],
                    activatedIndicies[1],
                    ind,
                ]
            )
        }else{
            setActivedIndicies([...activatedIndicies, ind]);
        }
    }

    return (
        <div className="targetList">
            {props.targets.map((e, index) => {
                return <TargetListElement target={e} key={index} onclick={() => activateIndex(index)} checked={activatedIndicies.includes(index)}></TargetListElement>
            })}
        </div>
    ) 
}