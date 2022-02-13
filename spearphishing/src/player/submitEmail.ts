import { AttackTypes, Modifier } from "../containers/targets/AttackTypes";
import { Target } from "../containers/targets/TargetContainer";


type PhishingEmail = {
    attackType: AttackTypes,
    modifiersApplied: Modifier[]
}

export function sendPhishingEmail(target: Target, phishingEmail: PhishingEmail){


    let credibility = target.Trust;

    // somehow modify credibility based on attackType
    // whether you add a flat value, or multiply by a number, who knows.

    

}