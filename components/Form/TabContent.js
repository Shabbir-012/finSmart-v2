
const fieldsMap = {
    personal: [
        {
          id: "title",
          label: "Title",
          type: "radio",
          options: ["Mr.", "Ms.", "Mrs.", "Others"],
        },
        {
          id: "nid",
          label: "NID Number",
          type: "text",
          placeholder: "Enter NID Number",
        },
        {
          id: "fullName",
          label: "Full Name",
          type: "text",
          placeholder: "Enter Full Name",
        },
        {
          id: "dob",
          label: "Date of Birth",
          type: "text",
          placeholder: "Enter Date of Birth",
        },
        {
          id: "gender",
          label: "Gender",
          type: "radio",
          options: ["Male", "Female", "Other"],
        },
        {
          id: "nationality",
          label: "Nationality",
          type: "radio",
          options: ["Bangladeshi", "Non-Bangladeshi"],
        },
        {
          id: "profession",
          label: "Applicant Profession",
          type: "text",
          placeholder: "Enter your Profession",
        },
      ],
      address: [
        { id: "presentAddress", label: "Present Address", type: "section" },
        {
          id: "villageStreet",
          label: "Village/Street No",
          type: "text",
          placeholder: "Enter Village/Street Name",
        },
        {
          id: "district",
          label: "District",
          type: "dropdown",
          options: ["Dhaka", "Chattogram", "Sylhet", "Khulna"],
        },
        { id: "permanentAddress", label: "Permanent Address", type: "section" },
        {
          id: "villageNo",
          label: "Village No",
          type: "text",
          placeholder: "Enter Village Name",
        },
        {
          id: "districtPerm",
          label: "District",
          type: "dropdown",
          options: ["Dhaka", "Chattogram", "Sylhet", "Khulna"],
        },
      ],
      family: [
        {
          id: "fatherName",
          label: "Father's Name",
          type: "text",
          placeholder: "Enter Father's Name",
        },
        {
          id: "motherName",
          label: "Mother's Name",
          type: "text",
          placeholder: "Enter Mother's Name",
        },
        {
          id: "maritalStatus",
          label: "Marital Status",
          type: "dropdown",
          options: ["Single", "Married", "Other"],
        },
        {
          id: "spouseName",
          label: "Spouse Name",
          type: "text",
          placeholder: "Enter Spouse Name",
        },
      ],
      nominee: [
        {
          id: "nomineeName",
          label: "Nominee's Name",
          type: "text",
          placeholder: "Enter Nominee's Name",
        },
        {
          id: "nomineedot",
          label: "Date of Birth",
          type: "text",
          placeholder: "Enter Date of Birth",
        },
        {
          id: "relationWithNominee",
          label: "Relationship with Nominee",
          type: "text",
          placeholder: "Relationship",
        },
      ],
      documents: [
        {
          id: "applicantPicture",
          label: "Upload/Take Applicant Picture",
          type: "upload",
        },
        {
          id: "nidFront",
          label: "Upload/Take NID Front Picture",
          type: "upload",
        },
        {
          id: "nidBack",
          label: "Upload/Take NID Back Picture",
          type: "upload",
        },
        {
          id: "signature",
          label: "Upload/Take Signature",
          type: "upload",
        },
      ],
      
      
};

export default fieldsMap;



//  PreviewFormInfo