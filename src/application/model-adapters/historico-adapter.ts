
import HistoricoQuery from 'src/infraestruture/repositories/historico-query';
import { IHistoricoMethod } from '../interfaces/response-controller-interface';
import { IHistoricoSueldos } from '../interfaces/historico-interface';
import { IHistoricoQuery } from 'src/infraestruture/interfaces/response-query-interface';

class HistoricoAdapter implements IHistoricoMethod {

    private historicoQuery : IHistoricoQuery;

    //Lo traje como metodohistorico y luego lo instancio como nuevo histocioquery
    
    constructor(){
        this.historicoQuery = new HistoricoQuery()
    }

    public async getHistoricoEmpleado(empleadoId: number) {
        const query = await this.historicoQuery.getHistoricoEmpleado(empleadoId);
        if (!query.Item){
            return null;
        }

        return query.Item.historico.L.map((item=>{
            const {fechaActualizacion,sueldoAnterior,sueldoNuevo} = item.M;
            return {
                fechaActualizacion : new Date (fechaActualizacion.S),
                sueldoAnterior:+sueldoAnterior.N,
                sueldoNuevo:+sueldoNuevo.N
            }
        }));
    }

    public async saveHistoricoEmpleado(empleadoId: number, sueldos: IHistoricoSueldos) : Promise<void>{
        await this.historicoQuery.saveHistoricoEmpleado(empleadoId,sueldos);
    }

}

export default HistoricoAdapter