import { NextFunction, Request, Response } from "express";
import { nextTick } from "process";
import * as vaccineService from "../services/vaccineService";


export const getAllVaccineService = (
    req:Request,
    res:Response,
    next:NextFunction
) => {
    vaccineService
        .getAllVaccinationService()
        .then((data) => res.json((data)))
        .catch((err) => nextTick(err));
};


export const getVaccineServiceById = (
    req:Request,
    res:Response,
    next:NextFunction
) => {
    const {id} = req.params;
    vaccineService
        .getVaccinationServiceById(+id)
        .then((data) => res.json(data))
        .catch((err)=>next(err));
}

export const createVaccineService = (req:Request, res:Response, next:NextFunction) =>{
    vaccineService
    .createVaccineService(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err))
}

export const updateVaccineService = (req:Request, res:Response, next:NextFunction) =>{
    vaccineService
    .updateVaccineService(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err))
}

export const deleteVaccineService = (req:Request, res:Response, next:NextFunction) =>{
    const {id} = req.params;
    vaccineService
    .deleteVaccineService(+id)
    .then((data) => res.json(data))
    .catch((err) => next(err))
}