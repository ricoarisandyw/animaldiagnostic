import { get, set } from 'idb-keyval';
import { DiagnoseFormModel } from '../pages/components/DiagnoseForm';

import DbTable from './DbTable';

const DiagnoseDB = () => ({
    get: (): Promise<DiagnoseFormModel[]> => get(DbTable.DIAGNOSES),
    add: async (newDiagnose: DiagnoseFormModel) => {
        const existing = await DiagnoseDB().get()
        console.log("Existing", existing)
        if (existing) return set(DbTable.DIAGNOSES, [...existing, newDiagnose])
        else return set(DbTable.DIAGNOSES, [newDiagnose])
    }
})

export default DiagnoseDB