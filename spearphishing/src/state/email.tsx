import { timeStamp } from "console";


export type EmailState = {
    
    // Specifies the credibility level for this email based on the provided 'upgrades' for this
    // email object. Should be between 0 and 100, determines whether or not the phishing attempt succeeds.
    Credibility: number; 
    // Specifies the payout potential for this email object.
    Payout: Payout;
    // Specifies the template of the 
    Template: EmailTemplate;

}

// Specifies the payout for an outgoing email template.
export class Payout {
    
    // Increment the range by this much, can be negative.
    incrementMoneyRange(num: number) {
        this.MoneyRange = this.MoneyRange + num;
    }

    // Increment the minimum by this much, can be negative. 
    incrementMoneyMinimum(num: number) {
        this.MoneyMin = this.MoneyMin + num;
    }

    // Increment the minimum by this much, can be negative. 
    incrementDataMinimum(num: number) {
        this.DataMin = this.DataMin + num;
    }

    // Increment the range by this much, can be negative. 
    incrementDataRange(num: number) {
        this.DataRange = this.DataRange + num;
    }

    // Just some generic constructor
    Payout() {
        this.DataMin = 0;
        this.DataRange = 50;
        this.MoneyMin = 0;
        this.MoneyRange = 50;
    }

    // Speciy the range of data payout that can be achieved in the current state of this email.
    DataRange: number = 0;
    // Specify the minimum amount of data payout that can be achieved in the current state of this email.
    DataMin: number = 50;
    // Specify the range of money payout that can be achieved in the current state of thie email.
    MoneyRange: number = 0;
    // Specify the minimum amount of money payout that can be achieved in the current state of this email.
    MoneyMin: number = 50;

    // Create the payout layer for Aaron when updating the global counter for data and money.
    GenerateMoneyPayout(): number {
        return Math.floor(Math.random() * this.MoneyRange) + this.MoneyMin;
    }

    // Create the payout layer for Aaron when updating the global counter for data and money.
    GenerateDataPayout(): number {
        return Math.floor(Math.random() * this.DataRange) + this.DataMin;
    }
}

export class EmailTemplate {

    EmailTemplate(tag: string) {

    }

    // Use to deserialize the email template from a string.
    Deserialize() {

    }

}