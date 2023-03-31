import { Target } from "../../../../containers/targets/TargetContainer"
import { TargetListElement } from "./TargetListElement"
import "./TargetList.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { pushEmail, removeActiveEmail } from "../../../inbox/inboxSlice";
import { InboxEmailKind } from "../../../inbox/ActiveEmail";
import { useAppDispatch } from "../../../../app/hooks";

type TargetListProps = {
    targets: Target[],

}

export function TargetList(props: TargetListProps) {

    let initState: number[] = [];
    let [activatedIndicies, setActivedIndicies] = useState(initState);
    let dispatch = useAppDispatch();

    function activateIndex(ind: number) {
        if (activatedIndicies.includes(ind)) {
            console.log("clicked already checked");

            setActivedIndicies(
                activatedIndicies.filter(val => val !== ind)
            )
            return;
        };
        if (activatedIndicies.length >= 3) {
            setActivedIndicies(
                [
                    activatedIndicies[0],
                    activatedIndicies[1],
                    ind,
                ]
            )
        } else {
            setActivedIndicies([...activatedIndicies, ind]);
        }
    }

    function submitChoices(){
        let targets = props.targets.filter((e, ind) => activatedIndicies.includes(ind));

        if(targets.length !== 3){
            alert("You must select 3 targets");
            return;
        }

        for(let t of targets){
            dispatch(
            pushEmail(
                {
                    blurb: "Another phishing e-mail to write",
                    data: {
                        target: t
                    },
                    kind: InboxEmailKind.OutgoingDraft,
                    senderName: "You",
                    subject: "[Draft] to: " + t.Name
                }
            )
        )
        }

        dispatch(removeActiveEmail())
        
    }


    return (
        <div className="targetListWraper">

            <div className="targetList">
                {props.targets.map((e, index) => {
                    return <TargetListElement target={e} key={index} onclick={() => activateIndex(index)} checked={activatedIndicies.includes(index)}></TargetListElement>
                })}
            </div>

            <button onClick={submitChoices}>Finalize Today's Targets</button>
        </div>
    )
}