import { useState } from "react";
import { Target } from "../../../../containers/targets/TargetContainer";
import "./TargetListElement.css";


type TargetListProps = {
    children?: any,
    target: Target,
    onclick: any,
    checked: boolean
}

export function TargetListElement(props: TargetListProps) {

    return (
        <div className="targetListElement" onClick={props.onclick}>
            <div className="dataSegment">
                <p>{props.target.Name} | {props.target.Occupation} | {props.target.Gender} |  {props.target.Age} years old </p>
            </div>
            <div className="checkboxWrapper">
                <input type={"checkbox"} className="checkbox" readOnly checked={props.checked}></input>
            </div>
        </div>
    )
}