import { Doctor } from "./doctor";

export class AvailabilityDates {
    availabilityId :number | undefined
    doctor:Doctor=new Doctor()
    fromDate :Date=new Date();
    endDate:Date=new Date();
}
