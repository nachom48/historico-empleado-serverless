import schema from "@functions/guardarHistoricoEmpleado/schema";
import { ValidatedEventAPIGatewayProxyEvent, formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import HistoricoController from "src/application/controllers/historico-controller";
import { IResponseApi } from "src/application/interfaces/response-controller-interface";



const historicoController = new HistoricoController();

const guardarHistoricoEmpleado :  ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) =>{

    const sueldos = {
        sueldoAnterior: event.body.sueldoAnterior,
        sueldoNuevo : event.body.sueldoNuevo,
    }

    const empleadoID = +event.pathParameters.empleadoId;
    const response :IResponseApi = await historicoController.saveHistoricoEmpleado(empleadoID,sueldos);
    return formatJSONResponse(response.statusCode,response)
}



export const main = middyfy(guardarHistoricoEmpleado)