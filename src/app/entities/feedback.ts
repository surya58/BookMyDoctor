import { Patient } from "./patient";

export class Feedback implements IFeedback {
    feedbackId: number = 0;
    feedbackComment : string ="";
    rating : number =0;
    patient:Patient[] =[];


}

export interface IFeedback {
    feedbackId: number;
    feedbackComment : string;
    rating : number;
    patient:Patient[];


}