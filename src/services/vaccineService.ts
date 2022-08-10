import Success from '../domain/Success';
import { VaccineService, VaccineServiceToCreate } from '../domain/VaccineService';
import logger from '../misc/logger';
import VaccinationService from '../models/VaccinationService';



 export const getAllVaccinationService = async (): Promise<Success<VaccineService>> => {
    // Operation here
    logger.info('Getting all vaccine service');
    const vaccineServices = await VaccinationService.getAllVaccineServices();

    return {
      data: vaccineServices,
      message: 'vaccine services fetched successfully'
    };
  
  
  }


export const getVaccinationServiceById = async(
    id:number
): Promise<Success<VaccineService>> => {
    logger.info ("getting the vaccine service by id");
    const vaccineService = await VaccinationService.getVaccineById(id);

    return{
        data: vaccineService,
        message: "vaccine service fetched successfully by id."
    }

}

export const createVaccineService = async(
  vaccineService: VaccineServiceToCreate
): Promise<Success<VaccineService>> => {
  logger.info("Adding new vaccination service");
  const newVaccineService = await VaccinationService.createVaccineService(
    vaccineService
  );
  return{
    data:newVaccineService,
    message:"Vaccination service added successfully",
  }
}

export const updateVaccineService = async(
  vaccineService: VaccineService
): Promise<Success<VaccineService>> => {
  logger.info("Updating the vaccination Service");
  const updatedVaccineService = await VaccinationService.updateVaccineService(
    vaccineService
  );
  
  return {
    data: updatedVaccineService,
    message: "Vaccination service updated successfully",
  }

}

export const deleteVaccineService = async(id:number) => {
  logger.info("Deleting vaccination service");
  const deletedVaccineService = await VaccinationService.deleteVaccineService(id);

  return{
    data:deletedVaccineService,
    message: "vaccination service deleted successfully"
  }
}
