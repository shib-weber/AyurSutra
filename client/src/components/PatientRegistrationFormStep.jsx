
// Star Rating Component
const StarRating = ({ value, onChange }) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => onChange(star)}
          className={`cursor-pointer text-2xl ${star <= value ? "text-red-500" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const PatientRegistrationFormStep = ({ step, formData, setFormData }) => {
  // Add disease
  const addDisease = () => {
    setFormData({
      ...formData,
      diseases: [...(formData.diseases || []), { name: "", stage: 0 }],
    });
  };

  const updateDisease = (index, field, value) => {
    const updated = [...formData.diseases];
    updated[index][field] = value;
    setFormData({ ...formData, diseases: updated });
  };

  const addTherapy = () => {
    setFormData({
      ...formData,
      previousTherapies: [
        ...(formData.previousTherapies || []),
        { name: "", location: "", doctor: "", prescription: null },
      ],
    });
  };

  const updateTherapy = (index, field, value) => {
    const updated = [...formData.previousTherapies];
    updated[index][field] = value;
    setFormData({ ...formData, previousTherapies: updated });
  };

  switch (step) {
    case 0:
      return (
        <div className="space-y-4 flex flex-col justify-center align-middle">
            <h1 className="text-6xl text-center font-bold text-emerald-900 mb-[10%]">Basic Details</h1>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full border p-2 rounded-lg"
            />
          </div>

          <input
            type="text"
            placeholder="Mother's Name"
            value={formData.motherName}
            onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
            className="w-full border p-2 rounded-lg"
          />
          <input
            type="text"
            placeholder="Father's Name"
            value={formData.fatherName}
            onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
            className="w-full border p-2 rounded-lg"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="w-full border p-2 rounded-lg"
            />
            <select
              value={formData.maritalStatus}
              onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}
              className="w-full border p-2 rounded-lg"
            >
              <option value="">Select Marital Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Widowed">Widowed</option>
              <option value="Divorced">Divorced</option>
            </select>
          </div>
        </div>
      );

    case 1:
      return (
        <div className="space-y-4">
          <h3 className="text-6xl text-center font-bold text-emerald-900 mb-[10%]">Diseases & Pain Level</h3>
          {formData.diseases?.map((disease, index) => (
            <div key={index} className="border p-3 rounded-lg space-y-2">
              <input
                type="text"
                placeholder="Disease Name"
                value={disease.name}
                onChange={(e) => updateDisease(index, "name", e.target.value)}
                className="w-full border p-2 rounded-lg"
              />
              <StarRating
                value={disease.stage}
                onChange={(val) => updateDisease(index, "stage", val)}
              />
            </div>
          ))}
          <button
            onClick={addDisease}
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            + Add Disease
          </button>
        </div>
      );

    case 2:
      return (
        <div className="space-y-4">
          <h3 className="text-6xl text-center font-bold text-emerald-900 mb-[10%]">Previous Therapies</h3>
          {formData.previousTherapies?.map((therapy, index) => (
            <div key={index} className="border p-3 rounded-lg space-y-2">
              <input
                type="text"
                placeholder="Therapy Name"
                value={therapy.name}
                onChange={(e) => updateTherapy(index, "name", e.target.value)}
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="Location"
                value={therapy.location}
                onChange={(e) => updateTherapy(index, "location", e.target.value)}
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="text"
                placeholder="Doctor's Name"
                value={therapy.doctor}
                onChange={(e) => updateTherapy(index, "doctor", e.target.value)}
                className="w-full border p-2 rounded-lg"
              />
              <input
                type="file"
                onChange={(e) => updateTherapy(index, "prescription", e.target.files[0])}
                className="w-full"
              />
            </div>
          ))}
          <button
            onClick={addTherapy}
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            + Add Therapy
          </button>
        </div>
      );

    case 3:
      return (
        <div className="space-y-4">
          <label className="text-6xl text-center font-bold text-emerald-900 mb-[10%]">Address</label>
          <textarea
            placeholder="Full Address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full border p-2 rounded-lg resize-none"
            rows={4}
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="State"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              className="w-full border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
              className="w-full border p-2 rounded-lg"
            />
          </div>
        </div>
      );

    case 4:
      return (
        <div className="space-y-4">
          <label className="text-6xl text-center font-bold text-emerald-900 mb-[10%]">Upload ID Proof</label>
          <select
            value={formData.idProofType}
            onChange={(e) => setFormData({ ...formData, idProofType: e.target.value })}
            className="w-full border p-2 rounded-lg mt-[10%]"
          >
            <option value="">Select ID Proof</option>
            <option value="Aadhar">Aadhar Card</option>
            <option value="Voter">Voter Card</option>
            <option value="Driving">Driving Licence</option>
          </select>
          <input
            type="file"
            onChange={(e) => setFormData({ ...formData, idProof: e.target.files[0] })}
            className="w-full "
          />
        </div>
      );

    case 5:
      return (
        <div className="space-y-4">
          {/* User account details */}
          <h1 className="text-6xl text-center font-bold text-emerald-900 mb-[5%]">Register</h1>
          <input
            type="email"
            placeholder="Email"
            value={formData.email || ""}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border p-2 rounded-lg"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            value={formData.mobile || ""}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            className="w-full border p-2 rounded-lg"
          />
          <input
            type="text"
            placeholder="Username"
            value={formData.username || ""}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="w-full border p-2 rounded-lg"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="password"
              placeholder="Password"
              value={formData.password || ""}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full border p-2 rounded-lg"
            />
            <input
              type="password"
              placeholder="Re-enter Password"
              value={formData.rePassword || ""}
              onChange={(e) => setFormData({ ...formData, rePassword: e.target.value })}
              className="w-full border p-2 rounded-lg"
            />
          </div>

          {/* Terms & Conditions */}
          <div className="text-center">
            <h3 className="text-xl font-bold">Terms & Conditions</h3>
            <p className="text-gray-600">
              By finishing, you agree that all information provided is true and correct to the best of your knowledge.
            </p>
            <label className="flex items-center justify-center gap-2 mt-2">
              <input
                type="checkbox"
                checked={formData.acceptedTerms || false}
                onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
              />
              <span className="text-gray-700">I accept the terms and conditions</span>
            </label>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default PatientRegistrationFormStep;
