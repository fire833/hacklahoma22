import { useAppDispatch } from "../../../app/hooks";
import { Modifier, ModifierMapKey, RefactoredAttackTypeKey, RefactoredAttackTypeMap } from "../../../containers/targets/AttackTypes";
import { tryPurchaseAttackById, tryPurchaseModifierById } from "../../../player/playerSlice";

type MarketModifierOfferingProps = {
    attackid: RefactoredAttackTypeKey,
}

export function MarketattackOffering(props: MarketModifierOfferingProps) {

    let dispatch = useAppDispatch();

    function purchaseAttack(atkId: RefactoredAttackTypeKey){
        dispatch(tryPurchaseAttackById(atkId))
    }
    let attack = RefactoredAttackTypeMap[props.attackid as RefactoredAttackTypeKey];

    return (
        <div>
            <h4 style={{marginBottom: "0"}}>{attack.displayName}</h4>
            <p style={{marginTop: "0"}}>
                {attack.description}
            </p>
            <button onClick={() => purchaseAttack(props.attackid)}>Purchase for ${attack.cost}</button>
        </div>
    )
}