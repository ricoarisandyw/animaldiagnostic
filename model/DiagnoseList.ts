import AgeData from "../static/AgeData";
import BreathFrequency from "../static/BreathFrequencyData";
import DiagnoseData from "../static/DiagnoseData";
import FaceExpressionData from "../static/FaceExpressionData";
import PulseData from "../static/PulseData";
import TemperatureData from "../static/TemperatureData";
import DiagnoseModel from "./DiagnoseModel";

const DiagnoseList: DiagnoseModel[] = [
    {
        diagnose: DiagnoseData.BVD,
        age: [AgeData.YOUNG, AgeData.OLD],
        temperature: [TemperatureData.NORMAL, TemperatureData.HYPERTERMI],
        breathFrequency: [BreathFrequency.FAST, BreathFrequency.NORMAL, BreathFrequency.SLOW],
        pulse: [PulseData.FAST, PulseData.NORMAL, PulseData.WEAK],
        faceExpression: FaceExpressionData.SLUGGISH,
        swollen: [true],
        hypersalivation: [true, false],
        symptoms: "erosi mulut/mukosa, diare",
        differentialDiagnose: "MCF, vesicular diseases"
    },
    {
        diagnose: DiagnoseData.JEMBRANA,
        age: [AgeData.OLD],
        temperature: [TemperatureData.HYPERTERMI],
        breathFrequency: [BreathFrequency.FAST, BreathFrequency.NORMAL, BreathFrequency.SLOW],
        faceExpression: FaceExpressionData.SLUGGISH,
        swollen: [true],
        hypersalivation: [true],
        pulse: [PulseData.FAST, PulseData.NORMAL, PulseData.WEAK],
        symptoms: "keringat dan diare darah,",
        differentialDiagnose: "-"
    },
    {
        diagnose: DiagnoseData.MCF,
        age: [AgeData.YOUNG, AgeData.OLD],
        temperature: [TemperatureData.HYPERTERMI],
        breathFrequency: [BreathFrequency.FAST, BreathFrequency.NORMAL, BreathFrequency.SLOW],
        faceExpression: FaceExpressionData.SLUGGISH,
        swollen: [true],
        hypersalivation: [true],
        pulse: [PulseData.FAST, PulseData.NORMAL],
        symptoms: "eksudat mukorpurulenta  dari hidung",
        differentialDiagnose: "-"
    },
    {
        diagnose: DiagnoseData.ANTHRAX,
        age: [AgeData.YOUNG, AgeData.OLD],
        temperature: [TemperatureData.HYPERTERMI],
        breathFrequency: [BreathFrequency.FAST, BreathFrequency.SLOW],
        faceExpression: FaceExpressionData.SLUGGISH,
        swollen: [true],
        hypersalivation: [false],
        pulse: [PulseData.WEAK],
        symptoms: "gemetar, kejang",
        differentialDiagnose: "Surra, sapi gila"
    },
    {
        diagnose: DiagnoseData.BLACKLEG,
        age: [AgeData.YOUNG],
        temperature: [TemperatureData.HYPERTERMI],
        breathFrequency: [BreathFrequency.FAST, BreathFrequency.NORMAL, BreathFrequency.SLOW],
        faceExpression: FaceExpressionData.SLUGGISH,
        pulse: [PulseData.FAST, PulseData.NORMAL, PulseData.WEAK],
        swollen: [true, false],
        hypersalivation: [false],
        symptoms: "kebengkakan pada paha ",
        differentialDiagnose: "anthrax"
    },
    {
        diagnose: DiagnoseData.BRUCELLOSIS,
        age: [AgeData.OLD],
        temperature: [TemperatureData.NORMAL, TemperatureData.HYPERTERMI, TemperatureData.HYPOTERMI],
        breathFrequency: [BreathFrequency.FAST, BreathFrequency.NORMAL, BreathFrequency.SLOW],
        faceExpression: FaceExpressionData.SLUGGISH,
        swollen: [true, false],
        hypersalivation: [false],
        pulse: [PulseData.FAST, PulseData.NORMAL, PulseData.WEAK],
        symptoms: "riwayat keluron/abortus, leleran vagina, infertil",
        differentialDiagnose: "-"
    },
    {
        diagnose: DiagnoseData.JOHNESDISEASE,
        age: [AgeData.YOUNG, AgeData.OLD],
        temperature: [TemperatureData.NORMAL, TemperatureData.HYPERTERMI, TemperatureData.HYPOTERMI],
        breathFrequency: [BreathFrequency.NORMAL],
        faceExpression: FaceExpressionData.SLUGGISH,
        swollen: [true],
        hypersalivation: [false],
        pulse: [PulseData.NORMAL],
        symptoms: "kurus, diare kronis, bottle jaw",
        differentialDiagnose: "cacingan",
    },
    {
        diagnose: DiagnoseData.NORMAL,
        age: [AgeData.YOUNG, AgeData.OLD],
        temperature: [TemperatureData.NORMAL],
        breathFrequency: [BreathFrequency.FAST, BreathFrequency.NORMAL, BreathFrequency.SLOW],
        pulse: [PulseData.FAST, PulseData.NORMAL, PulseData.WEAK],
        swollen: [false],
        hypersalivation: [false],
        faceExpression: FaceExpressionData.GOOD,
        symptoms: "-",
        differentialDiagnose: "-"
    },
    {
        diagnose: DiagnoseData.DEEPER,
        age: [AgeData.YOUNG, AgeData.OLD],
        temperature: [TemperatureData.NORMAL, TemperatureData.HYPERTERMI, TemperatureData.HYPOTERMI],
        breathFrequency: [BreathFrequency.FAST, BreathFrequency.NORMAL, BreathFrequency.SLOW],
        pulse: [PulseData.FAST, PulseData.NORMAL, PulseData.WEAK],
        swollen: [true, false],
        hypersalivation: [true, false],
        faceExpression: FaceExpressionData.SLUGGISH,
        symptoms: "-",
        differentialDiagnose: "-"
    }
]

export default DiagnoseList