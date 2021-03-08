import { UsersInRole } from "./users-in-role";

export class EditRoleViewModel {
    id:string;
    roleName:string;
    users:UsersInRole;
    constructor()
    {
        this.id=null;
        this.roleName=null;
        this.users=null;
    }
}
