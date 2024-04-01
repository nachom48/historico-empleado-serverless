import { GetItemCommandOutput } from "@aws-sdk/client-dynamodb";
import { IHistoricoSueldos } from "src/application/interfaces/historico-interface";

export interface IHistoricoQuery {
    getHistoricoEmpleado: (empleadoId: number) => Promise<GetItemCommandOutput>;
    saveHistoricoEmpleado: (empleadoId:number,sueldos:IHistoricoSueldos) => Promise<void>;
}