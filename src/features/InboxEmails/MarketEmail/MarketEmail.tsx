import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { ModifierMap, ModifierMapKey, RefactoredAttackTypeKey, RefactoredAttackTypeMap } from "../../../containers/targets/AttackTypes";
import { GetRandomUser } from "../../../containers/targets/targets";
import { acceptInitEmail } from "../../../player/playerSlice";
import { sendPhishingEmail } from "../../../player/submitEmail";
import { InboxEmailKind } from "../../inbox/ActiveEmail";
import { IncomingEmail, pushEmail, removeActiveEmail } from "../../inbox/inboxSlice";
import { InboxEmailProps } from "../InboxEmailProps";
import { EmailSkeleton } from "../SharedComponents/EmailSkeleton";
import { MarketModifierOffering } from "./MarketModifierOffering";

import './MarketEmail.css';
import { TargetBriefData } from "../TargetBriefEmail/TargetBriefEmail";
import { MarketattackOffering } from "./MarketAttackOffering";

type MarketEmailProps = {
    children?: any,
    activeEmail: IncomingEmail | null
}

export function MarketEmail(props: MarketEmailProps) {

    const ThisType: InboxEmailKind = InboxEmailKind.Market;

    let dispatch = useAppDispatch();

    let player = useAppSelector(state => state.player);
    

    function finishShopping(){
        dispatch(
            removeActiveEmail()
        )

        dispatch(
            pushEmail({
                blurb: 'Your daily target brief',
                data: {
                    targets: [
                        GetRandomUser(),
                        GetRandomUser(),
                        GetRandomUser(),
                        GetRandomUser(),
                        GetRandomUser(),
                    ]
                } as TargetBriefData,
                kind: InboxEmailKind.TargetBrief,
                senderName: "The Bossman",
                subject: "Target Brief: Day " + (player.day_num + 1)
            })
        )
    }

    if (props.activeEmail === null || props.activeEmail.kind !== ThisType) return <></>

    
    console.log(player.modifierNamesOwned);
    

    return (
        <EmailSkeleton email={props.activeEmail}>
            <h2>Modifiers: </h2>
            {
                Object.keys(ModifierMap).map((modId, ind) => {
                    let mod = ModifierMap[modId as ModifierMapKey];
                    console.log(player.modifierNamesOwned, mod.name, modId);
                    
                    if(player.modifierNamesOwned.includes(modId)) return <span key={ind}></span>;
                    return (<MarketModifierOffering mod={mod} modId={modId as ModifierMapKey} key={ind}></MarketModifierOffering>)
                })
            }
            
            <hr/>

            <h2>
                Phishing Scam Types:
            </h2>
            {
                Object.keys(RefactoredAttackTypeMap).map((atkId, ind) => {
                    let atk = RefactoredAttackTypeMap[atkId as RefactoredAttackTypeKey];
                    
                    if(player.attackTypeNamesOwned.includes(atkId)) return <span key={ind}></span>;
                    return (<MarketattackOffering attackid={atkId as RefactoredAttackTypeKey} key={ind}></MarketattackOffering>)
                })
            }


            <hr/>

            <button className="doneShoppingBtn" onClick={finishShopping}>I'm Done Shopping</button>
        </EmailSkeleton>
    )


}