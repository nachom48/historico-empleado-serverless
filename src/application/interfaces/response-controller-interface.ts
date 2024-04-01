import { StatusCodes } from "http-status-codes";
import { IHistorico, IHistoricoSueldos } from "./historico-interface";

export interface IResponseApi {
    statusCode: StatusCodes;
    success: boolean;
    data: any;
    message: string;
};

export interface IResponseBody {
    data?: any;
    message?: string;
}

export interface IHistoricoMethod {
    getHistoricoEmpleado: (empleadoId: number) => Promise<IHistorico[]>;
    saveHistoricoEmpleado: (empleadoId:number,sueldos:IHistoricoSueldos) => Promise<void>;
}

export interface IHistoricoApi {
    getHistoricoEmpleado: (empleadoId: number) => Promise<IResponseApi>;
    saveHistoricoEmpleado: (empleadoId:number,sueldos:IHistoricoSueldos) => Promise<IResponseApi>;
}