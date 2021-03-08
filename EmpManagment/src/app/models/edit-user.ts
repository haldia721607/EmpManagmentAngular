import { Cities } from "./cities";
import { Countries } from "./countries";
import { States } from "./states";

export class EditUser {
    id: string;
    userName: string;
    email: string;
    countryId: number;
    stateId: number;
    cityId: number;
    claims: any;
    roles: any;
    countries: Countries;
    states: States[];
    cities: Cities[];
    /**
     *
     */
    constructor() {
        this.id = null;
        this.userName = null;
        this.email = null;
        this.countryId = 0;
        this.stateId = 0;
        this.cityId = 0;
        this.claims = null;
        this.roles = null;
        this.countries = null;
        this.states = null;
        this.cities = null;
    }
}
