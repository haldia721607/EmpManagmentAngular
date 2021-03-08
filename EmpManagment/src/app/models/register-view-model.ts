import { Cities } from "./cities";
import { Countries } from "./countries";
import { States } from "./states";

export class RegisterViewModel {
    name:string;
    email:string;
    password:string;
    confirmPassword:string;
    countryId:number;
    stateId:number;
    cityId:number;
    termsAndPolicy:boolean;

    // countries:Countries;
    // states:States;
    // cities:Cities;

    /**
     *
     */
    constructor() {
        this.name=null;
        this.email=null;
        this.password=null;
        this.confirmPassword=null;
        this.countryId=0;
        this.stateId=0;
        this.cityId=0;
        this.termsAndPolicy=false;

        // this.countries=null;
        // this.states=null;
        // this.cities=null;
    }
}
