import { ValidatedEventAPIGatewayProxyEvent, formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import HistoricoController from "src/application/controllers/historico-controller";
import { IResponseApi } from "src/application/interfaces/response-controller-interface";


const historicoController = new HistoricoController();
const getHistoricoEmpleado :  ValidatedEventAPIGatewayProxyEvent<any> = async (event) =>{
    const response :IResponseApi =  await historicoController.getHistoricoEmpleado(+event.pathParameters.empleadoId);
    return formatJSONResponse(response.statusCode,response)
}



export const main = middyfy(getHistoricoEmpleado)