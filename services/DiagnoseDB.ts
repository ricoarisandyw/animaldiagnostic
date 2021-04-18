import { get, set } from 'idb-keyval';
import { DiagnoseFormModel } from '../pages/components/DiagnoseForm';

import DbTable from './DbTable';

const DiagnoseDB = () => ({
    get: (): Promise<DiagnoseFormModel[]> => get(DbTable.DIAGNOSES),
    add: async (newDiagnose: DiagnoseFormModel) => {
        const existing = await DiagnoseDB().get()
        if (existing) return set(DbTable.DIAGNOSES, [...existing, newDiagnose])
        else return set(DbTable.DIAGNOSES, [newDiagnose])
    },
    delete: async (index: number) => {
        const existing = await DiagnoseDB().get()
        const newList = existing.filter((_, i) => i !== index)
        return set(DbTable.DIAGNOSES, newList)
    }
})

export default DiagnoseDB