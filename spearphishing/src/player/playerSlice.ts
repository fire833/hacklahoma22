import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AttackTypes } from "../containers/targets/AttackTypes";

// type DomainCapabilities = {
    
// }

// type PayloadCapabilities = {
    
// }

// type General = {
    
// }

interface PlayerState {
    // DomainCapabilities: DomainCapabilities;
    // You can have multiple levels of domain quality, ranged from 1-5.
    // 1 is that you just have a random dictionary domain aksjdsakdjalsdsa.something.xyz
    // 2 Is that you have a domain with some structure: scammersrejoice.biz
    // 3 Is that you have a poor version of a known domain: goiglebooh.net
    // 4 A more realistic domain: gooogleh.com
    // 5 Very close to realistic domain: gooogle.com
    // 6 BONUS! You have a matching domain (ie you have a forged certificate and control over an authoritative DNS server)
    DomainLevel: number;
    // PayloadCapabilities: PayloadCapabilities;
    // Can your payload infect your host with ransomware.
    ExecuteRansomware: boolean;
    // Can your payload enable a RAT server.
    EnableRAT: boolean;
    // Can your payload have obfuscation in the binary?
    EnableObfuscation: boolean;
    // Can your payload evade AV?
    AdvancedDeceptionTechniques: boolean;
    // Can your payload be run as an obfuscated attachment (ie out of a PDF/gzip/Excel bug?)
    ObfuscateViaAlternatePayload: boolean;
    // General: General;
    UnlockedAttackVectors: AttackTypes[];

    hasAcceptedInitEmail: boolean
}


let initialState: PlayerState = {
    DomainLevel: 0,
    ExecuteRansomware: false,
    EnableRAT: false,
    EnableObfuscation: false,
    ObfuscateViaAlternatePayload: false,
    UnlockedAttackVectors: [],
    AdvancedDeceptionTechniques: false,
    hasAcceptedInitEmail: false
}


export const playerSlice = createSlice({
    name: 'player',
    initialState: initialState,
    reducers: {
        acceptInitEmail(currState){
            currState.hasAcceptedInitEmail = true;
        }
    }
})

export const { acceptInitEmail } = playerSlice.actions;
export default playerSlice.reducer;