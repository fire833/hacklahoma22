import { useAppDispatch } from "../../../app/hooks";
import { Modifier, ModifierMapKey } from "../../../containers/targets/AttackTypes";
import { tryPurchaseModifierById } from "../../../player/playerSlice";

type MarketModifierOfferingProps = {
    mod: Modifier,
    modId: ModifierMapKey
}

export function MarketModifierOffering(props: MarketModifierOfferingProps) {

    let dispatch = useAppDispatch();

    function purchaseMod(modId: ModifierMapKey){
        dispatch(tryPurchaseModifierById(modId))
    }

    return (
        <div>
            <h4 style={{marginBottom: "0"}}>{props.mod.name}</h4>
            <p style={{marginTop: "0"}}>
                {props.mod.description}
            </p>
            <button onClick={() => purchaseMod(props.modId)}>Purchase for ${props.mod.cost}</button>
        </div>
    )
}