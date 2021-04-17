import { useEffect, useState } from "react"
import DiagnoseDB from "../../services/DiagnoseDB"
import { DiagnoseFormModel } from "./DiagnoseForm"

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

function extractDate(date:Date){
    return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()
}

export default function DiagnoseList(){
    const [diagnoseList, setDiagnoseList]  = useState<DiagnoseFormModel[]>([])

    useEffect(() => {
        DiagnoseDB().get()
        .then((diagnoseResponse) => {
            if(diagnoseResponse) setDiagnoseList(diagnoseResponse)
        })
        .catch((error) => {
            throw error
        })
    }, [])
    return (
        <div>
            <table className="table shadow">
                <thead className="table-header">
                    <tr>
                        <th>No Agenda</th>
                        <th>Tanggal</th>
                        <th>Usia</th>
                        <th>Frekuensi Napas</th>
                        <th>Expresi Wajah</th>
                        <th>Pulse</th>
                        <th>Temperatur</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        diagnoseList.map((diagnose) => {
                            return (
                                <tr className="table-row" key={diagnose.noAgenda}>
                                    <td>{diagnose.noAgenda}</td>
                                    <td>{extractDate(diagnose.date)}</td>
                                    <td>{diagnose.age}</td>
                                    <td>{diagnose.breathFrequency}</td>
                                    <td>{diagnose.faceExpression}</td>
                                    <td>{diagnose.pulse}</td>
                                    <td>{diagnose.temperature}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}