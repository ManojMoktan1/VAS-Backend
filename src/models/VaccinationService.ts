import db from '../db/db';
import { VaccineService, VaccineServiceToCreate } from '../domain/VaccineService';

class VaccinationService{
    public static table = "vaccination_service";

    public static async getAllVaccineServices(){
        const vaccineServices = await db(VaccinationService.table).select();

        return vaccineServices;

    }

    public static async createVaccineService(
        vaccineService: VaccineServiceToCreate
    ){
        const newVaccineService = await db(VaccinationService.table).insert(
            vaccineService,
            [
                'id',
                'service_name',
                'site_location',
                'start_date',
                'end_date',
                'number_of_doses',
                'ethnicity',
                'min_age',
            ]
        );
        return newVaccineService;
    }

    public static async getVaccineById(id:number){
        const vaccineService = await db(VaccinationService.table)
            .where({id})
            .first();

        return vaccineService;
    }

    public static async updateVaccineService(vaccineService: VaccineService){
        const updatedVaccineService = await db(VaccinationService.table)
        .where({id: vaccineService.id})
        .update(vaccineService)
        .returning("*");
        return updatedVaccineService;
    }

    public static async deleteVaccineService(id:number){
        await db(VaccinationService.table).where({id}).delete();
    }


}
export default VaccinationService;

