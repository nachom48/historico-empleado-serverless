import { AttributeValue, GetItemCommand, GetItemCommandInput, GetItemCommandOutput, PutItemCommand, PutItemCommandInput } from "@aws-sdk/client-dynamodb";
import { IHistorico, IHistoricoSueldos } from "src/application/interfaces/historico-interface";
import client from "./DynamoConnection";
import { IHistoricoQuery } from "../interfaces/response-query-interface";

const TableName = 'historico-empleado';

class HistoricoQuery implements IHistoricoQuery {
    

    public async getHistoricoEmpleado (empleadoId: number):Promise<GetItemCommandOutput> {

        const input : GetItemCommandInput = {
            TableName,
            Key:{
                empleadoId:{
                    N : ""+empleadoId
                }
            }
        }

        const command = new GetItemCommand(input);
        const result = await client.send(command);

        console.log("result",result)

        return result
    }

    public async saveHistoricoEmpleado(empleadoId: number, sueldos: IHistoricoSueldos) : Promise<void>{
        const valor : AttributeValue = {
            M:{
                
            fechaActualizacion: {
                S: (new Date()).toString()
            },
            sueldoAnterior:{
                N: ""+sueldos.sueldoAnterior
            },
            sueldoNuevo:{
                N: ""+sueldos.sueldoNuevo
            }
            
        }
        }

        const query = await this.getHistoricoEmpleado(empleadoId);

        let historico = (query.Item) ? query.Item.historico.L :  [];

        historico.push(valor);

        const input: PutItemCommandInput = {
            TableName,
            Item:{
               empleadoId: {
                N: ""+empleadoId
               } ,
               historico:{
                L:historico
               }
            }
        }
        const command = new PutItemCommand(input);
        await client.send(command);
    }
    

}

export default HistoricoQuery;