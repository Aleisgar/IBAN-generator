export interface Preferences {
    ibanCreatorApiToken: string;
}
export interface Iban {
    account: Account;
    iban: string;
}
interface Account{
    code:string;
    metadata:{name:string;alias:string,entityCode:string}
}
export interface IbanCreatorError {
    error: string;
}