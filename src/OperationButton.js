import { ACTIONS } from "./App"


export default function OperationButton({ operation, dispatch }) {
    return <button onClick={() => dispatch({ type: ACTIONS.CHOSE_OPERATION, payload: { operation }})}>
    {operation}
    </button>
}