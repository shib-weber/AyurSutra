    import React from "react";

    const StepNavigation = ({ step, setStep, totalSteps, onFinish }) => {
    return (
        <div className="flex justify-between items-center mt-8">
        <button
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
            className={`px-5 py-2 rounded-lg border ${
            step === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-emerald-100"
            }`}
        >
            Prev
        </button>

        {step < totalSteps - 1 ? (
            <button
            onClick={() => setStep(step + 1)}
            className="px-5 py-2 rounded-lg bg-emerald-900 text-white hover:bg-emerald-700"
            >
            Next
            </button>
        ) : (
            <button
            onClick={onFinish}
            className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
            >
            Finish
            </button>
        )}
        </div>
    );
    };

    export default StepNavigation;
