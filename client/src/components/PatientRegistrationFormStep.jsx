    import React from "react";

    const PatientRegistrationFormStep = ({ step, formData, setFormData }) => {
    switch (step) {
        case 0:
        return (
            <div className="space-y-4">
            <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border p-2 rounded-lg"
            />
            <input
                type="number"
                placeholder="Age"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="w-full border p-2 rounded-lg"
            />
            </div>
        );

        case 1:
        return (
            <div className="space-y-4">
            <textarea
                placeholder="Describe your illness or pain level"
                value={formData.illness}
                onChange={(e) =>
                setFormData({ ...formData, illness: e.target.value })
                }
                className="w-full border p-2 rounded-lg"
            />
            </div>
        );

        case 2:
        return (
            <div className="space-y-4">
            <textarea
                placeholder="Any previous therapy?"
                value={formData.previousTherapy}
                onChange={(e) =>
                setFormData({ ...formData, previousTherapy: e.target.value })
                }
                className="w-full border p-2 rounded-lg"
            />
            </div>
        );

        case 3:
        return (
            <div className="space-y-4">
            <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
                }
                className="w-full border p-2 rounded-lg"
            />
            </div>
        );

        case 4:
        return (
            <div className="space-y-4">
            <input
                type="file"
                onChange={(e) =>
                setFormData({ ...formData, idProof: e.target.files[0] })
                }
                className="w-full"
            />
            </div>
        );

        case 5:
        return (
            <div className="text-center space-y-4">
            <h3 className="text-xl font-bold">Ready to Start?</h3>
            <p>Please confirm and finish your registration.</p>
            </div>
        );

        default:
        return null;
    }
    };

    export default PatientRegistrationFormStep;
