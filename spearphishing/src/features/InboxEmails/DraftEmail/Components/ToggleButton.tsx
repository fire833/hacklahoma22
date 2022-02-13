import './ToggleButton.css';


type ToggleButtonProps = {
    children?: any,
    isActive: boolean,
    onclick: any
}


export function ToggleButton(props: ToggleButtonProps){
    const activeText = "Applied";
    const inactiveText = "Apply Modifier?";

    return (<button onClick={props.onclick} className={props.isActive ? "toggleBtn activeToggle" : "toggleBtn inactiveToggle"}> {props.isActive ? activeText : inactiveText} </button>)
}