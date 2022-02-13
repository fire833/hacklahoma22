import { TargetList } from "../../TargetBriefEmail/TargetList/TargetList";
import { addName, addLink } from "./GlobalDecisionMethods";

// This needs some work but its a good start.
export function BankResetPasswordEmail() {
    return (
        <p>
            <p>
                Hello{addName("user", "")},
            </p>

            <p>
                Your bank account has been disabled due to an
                extreme number of incorrect logins originating
                from a hostile source. For your security, please
                go to the below link in order to reset your bank
                password and secure your account.
            </p>

            {addLink("https://mybank.co", "https://baankofamerica.com")}

            <p>
                Thank you very much,
                <br></br>
                Bank of America Security Team
            </p>
        </p>
    )
}