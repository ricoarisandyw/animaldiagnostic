import React, { useState } from "react";
import DiagnoseList from "../model/DiagnoseList";
import DiagnoseModel from "../model/DiagnoseModel";
import AgeData from "../static/AgeData";
import BreathFrequency from "../static/BreathFrequencyData";
import DiagnoseData from "../static/DiagnoseData";
import FaceExpressionData from "../static/FaceExpressionData";
import PulseData from "../static/PulseData";
import TemperatureData from "../static/TemperatureData";
import DiagnoseFormStyle from "./DiagnoseFormStyle";
import './DiagnoseFormStyle.tsx';

const RenderData = (inputProps) => (
    <div>
        {
            inputProps.values.map((value) => (
                <React.Fragment key={value}>
                    <input required onChange={inputProps.onChange} type="radio" name={inputProps.name} value={value} />
                    <label>{value}</label><br />
                </React.Fragment>
            ))
        }
    </div>
)

interface DiagnoseFormModel {
    age: string
    temperature: string
    breathFrequency: string
    pulse: string
    faceExpression: string
    swollen: boolean
    hypersalivation: boolean
}

export default function DiagnoseForm(){
    const [diagnoseForm, setDiagnoseForm] = useState<DiagnoseFormModel>({
        age: AgeData.OLD,
        breathFrequency: BreathFrequency.NORMAL,
        faceExpression: FaceExpressionData.GOOD,
        pulse: PulseData.NORMAL,
        temperature: TemperatureData.NORMAL,
        swollen: false,
        hypersalivation: false,
    })
    const [diagnoseResult, setDiagnoseResult] = useState<DiagnoseModel[]>(null)

    const setData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDiagnoseForm({
            ...diagnoseForm,
            [event.target.name]: event.target.value,
        })
    }

    const setCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDiagnoseForm({
            ...diagnoseForm,
            [event.target.name]: !diagnoseForm[event.target.name],
        })
    }

    const onDiagnose = () => {
        const diagnose = DiagnoseList.filter((diagnose) => (
            diagnose.age.includes(diagnoseForm.age) &&
            diagnose.temperature.includes(diagnoseForm.temperature) &&
            diagnose.breathFrequency.includes(diagnoseForm.breathFrequency) &&
            diagnose.pulse.includes(diagnoseForm.pulse) &&
            diagnose.faceExpression === diagnoseForm.faceExpression &&
            diagnose.swollen.includes(diagnoseForm.swollen) &&
            diagnose.hypersalivation.includes(diagnoseForm.hypersalivation)
        ))
        setDiagnoseResult(diagnose)
    }

    const onReset = () => {
        setDiagnoseResult(null)
    }

    return (
        <div className="form-container">
            <form className="form">
                <DiagnoseFormStyle />
                <h1>Form Diagnosa</h1>
                <div className="form-group">
                    <label className="form-label">Usia</label><br />
                    <RenderData onChange={setData} name="age" values={[AgeData.OLD, AgeData.YOUNG]} />          
                </div>
                <div className="form-group">
                    <label className="form-label">Suhu</label><br />
                    <RenderData onChange={setData} name="temperature" values={[TemperatureData.HYPERTERMI, TemperatureData.HYPOTERMI, TemperatureData.NORMAL]} />
                </div>
                <div className="form-group">
                    <label className="form-label">Frekuensi Nafas</label><br />
                    <RenderData onChange={setData} name="breathFrequency" values={[BreathFrequency.FAST, BreathFrequency.NORMAL, BreathFrequency.SLOW]} />
                </div>
                <div className="form-group">
                    <label className="form-label">Pulsus</label><br />
                    <RenderData onChange={setData} name="pulse" values={[PulseData.FAST, PulseData.NORMAL, PulseData.WEAK]} />
                </div>
                <div className="form-group">
                    <label className="form-label">Ekspresi Muka</label><br />
                    <RenderData onChange={setData} name="faceExpression" values={[FaceExpressionData.GOOD, FaceExpressionData.SLUGGISH]} />
                </div>
                <div className="form-group">
                    <label className="form-label">Pembengkakan Lgl.</label><br />
                    <input type="checkbox" onChange={setCheckbox} name="swollen" checked={diagnoseForm.swollen} />
                </div>
                <div className="form-group">
                    <label className="form-label">Hypersalivasi</label><br />
                    <input type="checkbox" onChange={setCheckbox} name="hypersalivation" checked={diagnoseForm.hypersalivation} />
                </div>
                <div>
                    <input type="button" className="btn" value="Mulai Diagnosa" onClick={onDiagnose} />
                    <input type="button" className="btn cancel" value="Reset" onClick={onReset} />
                </div>
                {diagnoseResult &&
                    <div className="result">
                        HASIL DIAGNOSA <br />
                        {diagnoseResult?.length > 0
                        ? diagnoseResult.map((diagnose) => diagnose.diagnose + ", ") : " TIDAK DITEMUKAN"
                    }
                    </div>
                }
            </form>
        </div>
    )
}