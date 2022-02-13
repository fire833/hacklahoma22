import { useDispatch } from "react-redux";
import { AttackTypes, Modifier } from "../containers/targets/AttackTypes";
import { Target } from "../containers/targets/TargetContainer";
import { addData, addMoney, incrementDailyEmails } from "./playerSlice";

import {store} from "../app/store"

export type PhishingEmail = {
    attackType: AttackTypes,
    modifiersApplied: Modifier[]
}

export function sendPhishingEmail(target: Target, phishingEmail: PhishingEmail) {

    let dispatch = store.dispatch;

    let credibility = target.Trust;

    // somehow modify credibility based on attackType
    // whether you add a flat value, or multiply by a number, who knows.

    if (target.VulnerableAttackTypes.includes(phishingEmail.attackType)) {
        credibility *= 1.5
    };

    if (target.ResistantAttackTypes.includes(phishingEmail.attackType)) {
        credibility /= 2;
    }

    // now pass cred through all modifiers

    for (let mod of phishingEmail.modifiersApplied) {
        credibility = mod.modifyCredibility(credibility);
    }

    // now you have a freshly modified credibility, roll the die somehow

    let phishSuccessful = true; // result of cred. roll

    if (phishSuccessful) {
        // calculate earnings

        let dollars_won = 1000;
        let data_won = 1000;

        for (let mod of phishingEmail.modifiersApplied) {
            let result = mod.modifyPayout(dollars_won, data_won);
            dollars_won = result.modifiedMoneyPaid;
            data_won = result.modifiedDataPaid;
        }

        // now you have final money and data earnings, add to user


        // dispatch might crash, if that happens its probably
        // because react wants you to put this function and
        // run it in a component
        dispatch(addMoney(dollars_won))
        dispatch(addData(data_won))
    }

    dispatch(incrementDailyEmails())



}