export default function DiagnoseFormStyle(){
    return (
        <style jsx={true}>{
        `
        .form-container {
            width: 100%;
            padding: 1rem;
            margin-top: 1rem;
            background: white;    
        }
        .form {
            padding: 1rem;
            border-radius: 5px;
        }
        .form-label {
            font-weight: bold;
        }
        .btn-cancel {
            background-color: #D63637;
        }
        .btn-cancel:hover {
            background-color: #e64242;
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