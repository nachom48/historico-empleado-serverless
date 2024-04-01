import HistoricoUseCase from "src/domain/usecase/historico-usecase";
import { responseFail, responseSuccess } from "../helpers/response";
import { IHistoricoApi, IResponseApi, IHistoricoMethod } from "../interfaces/response-controller-interface"
import { StatusCodes } from "http-status-codes";
import { IHistoricoSueldos } from "../interfaces/historico-interface";

class HistoricoController implements IHistoricoApi {
    private historicoUseCase : IHistoricoMethod;


    constructor(){
        this.historicoUseCase = new HistoricoUseCase();
    }
   
    getHistoricoEmpleado = async (empleadoId: number) => {

        let response: IResponseApi;

        try {
            const result = await this.historicoUseCase.getHistoricoEmpleado(empleadoId);
            response = responseSuccess({
                data:result
            },
            StatusCodes.OK)
        } catch (error) {
            response = responseFail(error);
        }

        return response;
    
    }

    saveHistoricoEmpleado = async (empleadoID:number,sueldos:IHistoricoSueldos) =>{
        let response: IResponseApi;

        try {
            await this.historicoUseCase.saveHistoricoEmpleado(empleadoID,sueldos);
            response = responseSuccess({message:'Historico almacenado'},StatusCodes.OK)
        } catch (error) {
            response = responseFail(error)
            
        }
        return response;
    }


}

export default HistoricoController;