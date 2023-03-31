import { useDispatch } from "react-redux";
import { Modifier, RefactoredAttackTypeKey } from "../containers/targets/AttackTypes";
import { RefactoredAttackTypeMap } from "../containers/targets/AttackTypes";
import { Target } from "../containers/targets/TargetContainer";
import { addData, addMoney, incrementDailyEmails } from "./playerSlice";

import { store } from "../app/store"
import { miniSerializeError } from "@reduxjs/toolkit";

export type PhishingEmail = {
    attackType: RefactoredAttackTypeKey,
    modifiersApplied: Modifier[]
}

export function fenceCredibility(credibility: number) {
    return Math.min(100, Math.max(0, credibility))
}

export function sendPhishingEmail(target: Target, phishingEmail: PhishingEmail) {

    let dispatch = store.dispatch;

    // Take the target's base trust likelihood
    let credibility = target.Trust;

    if (target.VulnerableAttackTypes.includes(phishingEmail.attackType)) {
        credibility = fenceCredibility(credibility * 1.2)
    };

    if (target.ResistantAttackTypes.includes(phishingEmail.attackType)) {
        credibility = fenceCredibility(credibility * 0.5)
    }

    // Pass credibility through all modifiers
    for (let mod of phishingEmail.modifiersApplied) {
        credibility = fenceCredibility(mod.modifyCredibility(credibility))
    }

    // Attack Type modifies likelihood last
    credibility = fenceCredibility(RefactoredAttackTypeMap[phishingEmail.attackType].modifyCredibility(credibility, target));

    // now you have a freshly modified credibility, roll the die somehow

    let phishSuccessful = Math.random() < (credibility / 100); // result of cred. roll
    console.log(phishSuccessful)

    if (phishSuccessful) {
        // Calculate base earnings
        let dollars_won = (target.MoneyPayoutMin + (credibility / 100) * target.MoneyPayoutRange);
        let data_won = (target.DataPayoutMin + (credibility / 100) * target.DataPayoutRange);

        // Apply modifiers to payout
        for (let mod of phishingEmail.modifiersApplied) {
            let result = mod.modifyPayout(dollars_won, data_won);
            dollars_won = result.modifiedMoneyPaid;
            data_won = result.modifiedDataPaid;
        }

        // Round data and payout values
        dollars_won = Math.round(dollars_won);
        data_won = Math.round(data_won);

        // Now you have final money and data earnings, add to user
        dispatch(addMoney(dollars_won))
        dispatch(addData(data_won))
    }

    dispatch(incrementDailyEmails())
}