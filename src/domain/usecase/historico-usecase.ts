import { StatusCodes } from "http-status-codes";
import HttpError from "src/application/exceptions/http-error";
import { IHistoricoSueldos } from "src/application/interfaces/historico-interface";
import { IHistoricoMethod } from "src/application/interfaces/response-controller-interface";
import HistoricoAdapter from "src/application/model-adapters/historico-adapter";

export default class HistoricoUseCase implements IHistoricoMethod {

    private historicoAdapter : IHistoricoMethod;

    constructor(){
        this.historicoAdapter = new HistoricoAdapter();
    }

    public async getHistoricoEmpleado (empleadoId: number){

        const result = await this.historicoAdapter.getHistoricoEmpleado(empleadoId);;

        if(result == null || ( result.length == 0))
            throw new HttpError("El historico del mensaje no existe",StatusCodes.NOT_FOUND)

        return this.historicoAdapter.getHistoricoEmpleado(empleadoId);

    }

    public async saveHistoricoEmpleado(empleadoId: number, sueldos: IHistoricoSueldos) : Promise<void>{
        await this.historicoAdapter.saveHistoricoEmpleado(empleadoId,sueldos);
    }

}