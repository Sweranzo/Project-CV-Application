import { useState } from "react";
import { Loading } from "./Loading.jsx";
/* import SubmittedData from "./Document.jsx"; */

function General({ onChange }) {
  return (
    <section className="general">
      <h1>Personal Details</h1>
      <input
        placeholder="First name"
        name="firstName"
        id="first"
        onChange={onChange}
      />
      <input
        placeholder="Last name"
        name="lastName"
        id="last"
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        onChange={onChange}
      />
      <input
        type="tel"
        placeholder="Phone"
        name="phone"
        id="phone"
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Address"
        name="address"
        id="address"
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="LinkedIn / Portfolio"
        name="portfolio"
        id="portfolio"
      />

      {/*       {data && (
        <div className="general-result">
          <h1>
            {data.general.firstName} {data.general.lastName}
          </h1>
          <h2>{data.general.email}</h2>
          <h2>{data.general.phone}</h2>
          <h2>{data.general.address}</h2>
        </div>
      )} */}
    </section>
  );
}

function Education({ onChange }) {
  return (
    <section className="education">
      <h1>Education</h1>
      <input
        placeholder="School Name"
        name="school"
        id="school"
        onChange={onChange}
        required
      />
      <input
        placeholder="Degree / Course"
        name="degree"
        id="degree"
        onChange={onChange}
        required
      />
      <input
        placeholder="Location"
        name="schoolLocation"
        id="schoolLocation"
        onChange={onChange}
        required
      />
      <input
        placeholder="Start Date"
        name="educationStart"
        id="educationStart"
        onChange={onChange}
        required
      />
      <input
        placeholder="End Date / Expected Graduation"
        name="educationEnd"
        id="educationEnd"
        onChange={onChange}
        required
      />
      <input
        placeholder="Relevant Coursework / Achievements"
        name="educationDetails"
        id="educationDetails"
        onChange={onChange}
        required
      />
    </section>
  );
}

function Experience({ onChange }) {
  return (
    <section className="experience">
      <h1>Experience</h1>
      <input
        placeholder="Job Title"
        name="jobTitle"
        id="jobTitle"
        onChange={onChange}
        required
      />
      <input
        placeholder="Company Name"
        name="company"
        id="company"
        onChange={onChange}
        required
      />
      <input
        placeholder="Location"
        name="workLocation"
        id="workLocation"
        onChange={onChange}
        required
      />
      <input
        placeholder="Start Date"
        name="workStart"
        id="workStart"
        onChange={onChange}
        required
      />
      <input
        placeholder="End Date / Present"
        name="workEnd"
        id="workEnd"
        onChange={onChange}
        required
      />
      <input
        placeholder="Responsibilities / Achievements"
        name="workDetails"
        id="workDetails"
        onChange={onChange}
        required
      />
      {/*  <div className="experience-result"></div> */}
    </section>
  );
}

export function Form({ setIsLoading, content, projectsData, setData }) {
  const [generalData, setGeneralData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [educationData, setEducationData] = useState({
    school: "",
    degree: "",
    schoolLocation: "",
    educationStart: "",
    educationEnd: "",
    educationDetails: "",
  });

  const [experienceData, setExperienceData] = useState({
    jobTitle: "",
    company: "",
    workLocation: "",
    workStart: "",
    workEnd: "",
    workDetails: "",
  });

  function handleOnChange(e, setName) {
    const { name, value } = e.target;
    setName((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function saveData() {
    const data = {
      id: crypto.randomUUID(),
      general: generalData,
      education: educationData,
      experience: experienceData,
    };
    setData((previousData) => [...previousData, data]);
  }

  function handleDelete(id) {
    setData((previousData) => previousData.filter((obj) => obj.id !== id));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    content("submitting");
    try {
      await saveData();
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
      content("successfully submitted");
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
      console.log("successfully submitted");
    } catch (error) {
      console.log("failed submit CV", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <General
          onChange={(e) => handleOnChange(e, setGeneralData)}
          data={projectsData}
        ></General>
        <Education
          onChange={(e) => handleOnChange(e, setEducationData)}
          data={projectsData}
        ></Education>
        <Experience
          onChange={(e) => handleOnChange(e, setExperienceData)}
        ></Experience>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

/* export function shareData(sectionName) {
  return <div className="sharedData"></div>;
}
 */
