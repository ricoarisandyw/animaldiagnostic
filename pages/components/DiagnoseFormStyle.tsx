export default function DiagnoseFormStyle(){
    return (
        <style jsx={true}>{
        `
        .form-container {
            width: 100%;
            padding: 1rem;
            margin-top: 1rem;    
        }
        .form {
            padding: 1rem;
            border: 1px solid black;
            border-radius: 5px;
        }
        .form-label {
            font-weight: bold;
        }
        .btn {
            padding: .5rem 1rem;
            background-color: #3D70F3;
            border: none;
            border-radius: 5px;
            margin-right: 1rem;
            color: white;
            font-size: 1rem;
            cursor: pointer;
        }
        .btn:hover {
            opacity: 0.9;
        }
        .cancel {
            background-color: #D63637;
        }
        .form-group {
            display: flex;
            padding: 1rem 0;
        }
        .form-label {
            min-width: 30%;
        }
        .result {
            background: gray;
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
            color: white;
            padding: 1rem;
            margin: 1rem;
            border-radius: 5px;
        }
        `
        }</style>
    )
}