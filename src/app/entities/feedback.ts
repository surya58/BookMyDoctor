import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class Feedback implements IFeedback {
    feedbackId: number = 0;
    comments : string ="";
    rating : number =0;
    patient:any;
    doctor:any;


}

export interface IFeedback {
    feedbackId: number;
    comments : string;
    rating : number;
    patient:Patient;
    doctor:Doctor;


}