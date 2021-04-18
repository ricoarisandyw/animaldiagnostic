import React, { useState } from "react";
import DiagnoseList from "../../model/DiagnoseList";
import DiagnoseDB from "../../services/DiagnoseDB";
import AgeData from "../../static/AgeData";
import BreathFrequency from "../../static/BreathFrequencyData";
import DiagnoseData from "../../static/DiagnoseData";
import FaceExpressionData from "../../static/FaceExpressionData";
import PulseData from "../../static/PulseData";
import TemperatureData from "../../static/TemperatureData";

const RenderData = (inputProps) => (
    <div>
        {
            inputProps.values.map((value) => (
                <React.Fragment key={value}>
                    <label className="radio-button">
                        <input required onChange={inputProps.onChange} type="radio" name={inputProps.name} value={value} />
                        <span className="label-visible">
                            <span className="fake-radiobutton"></span>
                            {value}
                        </span>
                    </label>
                    <br />
                    <br />
                </React.Fragment>
            ))
        }
    </div>
)

export interface DiagnoseFormModel {
    age: string
    temperature: string
    breathFrequency: string
    pulse: string
    faceExpression: string
    swollen: boolean
    hypersalivation: boolean
    noAgenda: string
    date: Date
    diagnose?: string
    differentialDiagnose?: string
}

export default function DiagnoseForm(props){
    const [diagnoseForm, setDiagnoseForm] = useState<DiagnoseFormModel>({
        age: AgeData.OLD,
        breathFrequency: BreathFrequency.NORMAL,
        faceExpression: FaceExpressionData.GOOD,
        pulse: PulseData.NORMAL,
        temperature: TemperatureData.NORMAL,
        swollen: false,
        hypersalivation: false,
        noAgenda: "",
        date: new Date()
    })
    const [diagnoseResult, setDiagnoseResult] = useState<string>(null)
    const [symptomsList, setSymptomList] = useState<string[]>([])
    const [symptomsSelected, setSymptomsSelected] = useState<string>("")

    const updateSymptoms = (newDiagnose) => {
        const diagnoses = DiagnoseList.filter((diagnose) => (
            diagnose.age.includes(newDiagnose.age) &&
            diagnose.temperature.includes(newDiagnose.temperature) &&
            diagnose.breathFrequency.includes(newDiagnose.breathFrequency) &&
            diagnose.pulse.includes(newDiagnose.pulse) &&
            diagnose.faceExpression === newDiagnose.faceExpression &&
            diagnose.swollen.includes(newDiagnose.swollen) &&
            diagnose.hypersalivation.includes(newDiagnose.hypersalivation)
        ))
        if(diagnoses.length === 1){
            setSymptomsSelected(diagnoses[0].symptoms)
        }
        setSymptomList(diagnoses.map((diag => diag.symptoms)))
    }

    const setData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDiagnoseForm({
            ...diagnoseForm,
            [event.target.name]: event.target.value,
        })
        if(event.target.name !== "noAgenda" && event.target.name !== "date"){
            const newDiagnose = {
                ...diagnoseForm,
                [event.target.name]: event.target.value,
            }
            updateSymptoms(newDiagnose)
        }
    }

    const setCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDiagnoseForm({
            ...diagnoseForm,
            [event.target.name]: !diagnoseForm[event.target.name],
        })
        const newDiagnose = {
            ...diagnoseForm,
            [event.target.name]: !diagnoseForm[event.target.name],
        }
        updateSymptoms(newDiagnose)
    }

    const onDiagnose = async () => {
        const diagnose = DiagnoseList.find((diagnose) => (
            diagnose.age.includes(diagnoseForm.age) &&
            diagnose.temperature.includes(diagnoseForm.temperature) &&
            diagnose.breathFrequency.includes(diagnoseForm.breathFrequency) &&
            diagnose.pulse.includes(diagnoseForm.pulse) &&
            diagnose.faceExpression === diagnoseForm.faceExpression &&
            diagnose.swollen.includes(diagnoseForm.swollen) &&
            diagnose.hypersalivation.includes(diagnoseForm.hypersalivation) &&
            diagnose.symptoms === symptomsSelected
        ))
        if(diagnose)
            setDiagnoseResult(diagnose.diagnose)
        else
            setDiagnoseResult(DiagnoseData.NORMAL)

        await DiagnoseDB().add({
            ...diagnoseForm,
            diagnose: diagnose ? diagnose.diagnose : DiagnoseData.NORMAL,
            differentialDiagnose: diagnose ? diagnose.differentialDiagnose : "-",
            date: diagnoseForm.date,
            noAgenda: diagnoseForm.noAgenda
        })
        props.onSubmit()
    }

    const onReset = () => {
        setDiagnoseResult(null)
    }

    const setSymptoms = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSymptomsSelected(event.target.value)
    }

    return (
        <div className="form-container">
            <form className="form shadow">
                <h1>Form Diagnosa</h1>
                <hr />
                <div className="form-group">
                    <label className="form-label">Nomor Agenda</label><br />
                    <input className="form-input" name="noAgenda" placeholder="nomor agenda" onChange={setData} />
                </div>
                <div className="form-group">
                    <label className="form-label">Tanggal Pemeriksaan</label><br />
                    <input type="date" name="date" className="form-input" placeholder="tanggal pemeriksaan" />
                </div>
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
                    <label className="form-label">Pembengkakan Lgl.</label>
                    <label className="checkbox">
                        <input type="checkbox" onChange={setCheckbox} name="swollen" checked={diagnoseForm.swollen} />
                        <span className="label-visible">
                            <span className="fake-checkbox"></span>
                        </span>
                    </label>
                </div>
                <div className="form-group">
                    <label className="form-label">Hypersalivasi</label>
                    <label className="checkbox">
                        <input type="checkbox" onChange={setCheckbox} name="hypersalivation" checked={diagnoseForm.hypersalivation} />
                        <span className="label-visible">
                            <span className="fake-checkbox"></span>
                        </span>
                    </label>
                </div>
                <div className="form-group">
                    <label className="form-label">Gejala</label>
                    {
                        symptomsList.length > 1 ?
                        <RenderData onChange={setSymptoms} name="symptoms" values={symptomsList} /> :
                        "Tidak ada gejala"
                    }
                </div>
                <div>
                    <input type="button" className="btn btn-primary" value="Hasil Diagnosa" onClick={onDiagnose} />
                    <input type="button" className="btn btn-cancel" value="Reset" onClick={onReset} />
                </div>
                {diagnoseResult &&
                    <div className="result">
                        HASIL DIAGNOSA <br />
                        {diagnoseResult}
                    </div>
                }
            </form>
        </div>
    )
}