export interface VaccineService{
    id: number;
    service_name:string;
    site_location: string;
    start_date: string;
    end_date:string;
    number_of_doses: number;
    gender: string;
    ethnicity: string;
    min_age: number;
}

export type VaccineServiceToCreate = Omit<VaccineService, "id">