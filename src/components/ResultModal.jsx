import { forwardRef,useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({ remainingTime,targetTime, onReset}, ref){
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed();    
    const score =Math.round(( 1 - remainingTime / (targetTime * 1000)) * 100);
    useImperativeHandle(ref, () => {
        return{
            open: () => {
                dialog.current.showModal();
            },
        }
    });
    return(
        <dialog ref={ref} className="result-modal">
           {userLost && <h2>Your lost </h2>}
           {!userLost &&  <h2>Your Score: {score}</h2>}
            <p>The target Time was <strong>{targetTime}</strong> seconds.</p>
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    );
})

export default ResultModal;