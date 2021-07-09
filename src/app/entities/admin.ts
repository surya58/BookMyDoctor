import { Patient } from "./patient";
import { Doctor } from "./doctor";

export class Admin implements IAdmin {
    id : number =0;
    adminName: string ="";
    contactNumber : number = 0;
    emailId : string ="";
    password : string = "";
    patients :Patient[] =[];
    doctors : Doctor[] = [];
}
export interface IAdmin{
    id : number ;
    adminName: string ;
    contactNumber : number ;
    emailId : string ;
    password : string ;
    patients :Patient[] ;
    doctors : Doctor[] ;

}