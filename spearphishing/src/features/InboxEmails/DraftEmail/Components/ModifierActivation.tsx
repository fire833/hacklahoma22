import { Modifier } from "../../../../containers/targets/AttackTypes";
import { ToggleButton } from "./ToggleButton";

import './ModifierActivation.css';

type ModifierActivationProps = {
    children?: any,
    modifier: Modifier,
    onclick: any,
    isActive: boolean
}

export function ModifierActivation(props: ModifierActivationProps){
    return (
        <div className="modifierActivation">
            <p><b>{props.modifier.name}</b></p>
            <p>{props.modifier.description}</p>
            <ToggleButton isActive={props.isActive} onclick={props.onclick}>Activate</ToggleButton>
        </div>
    )
}