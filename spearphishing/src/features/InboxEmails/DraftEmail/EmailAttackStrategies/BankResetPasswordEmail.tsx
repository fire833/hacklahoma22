import { TargetList } from "../../TargetBriefEmail/TargetList/TargetList";
import { addName, addLink } from "./GlobalDecisionMethods";

// This needs some work but its a good start.
export function BankResetPasswordEmail() {
    return (
        <p> 
            Hello {addName("user", "")}, 
            Your bank account has been disabled due to an
            extreme number of incorrect logins originating
            from a hostile source. For your security, please
            go to the below link in order to reset your bank 
            password.

            {addLink("https://mybank.co", "https://baankofamerica.com")}

            Thank you very much,
            
            Your banking team
        </p>
    )
}