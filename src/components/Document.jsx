export function SubmittedData({ data, onDelete, isToggled }) {
  /*   if (!data || data.length === 0) return null; */
  if (isToggled !== true) {
    return undefined;
  }
  return (
    <div className="submitted-data">
      {data.map((obj) => (
        <article className="result" key={obj.id}>
          <button onClick={() => onDelete(obj.id)}>Delete</button>
          {/* Personal Details */}
          <section className="general-result">
            <h1>
              {obj.general.firstName} {obj.general.lastName}
            </h1>
            <p>{obj.general.email}</p>
            <p>{obj.general.phone}</p>
            <p>{obj.general.address}</p>
            <p>{obj.general.portfolio}</p>
          </section>

          {/* Education */}
          <section className="education-result">
            <h2>Education</h2>
            <h3>{obj.education.school}</h3>
            <p>{obj.education.degree}</p>
            <p>{obj.education.schoolLocation}</p>
            <p>
              {obj.education.educationStart} - {obj.education.educationEnd}
            </p>
            <p>{obj.education.educationDetails}</p>
          </section>

          {/* Experience */}
          <section className="experience-result">
            <h2>Experience</h2>
            <h3>{obj.experience.jobTitle}</h3>
            <p>{obj.experience.company}</p>
            <p>{obj.experience.workLocation}</p>
            <p>
              {obj.experience.workStart} - {obj.experience.workEnd}
            </p>
            <p>{obj.experience.workDetails}</p>
          </section>
        </article>
      ))}
    </div>
  );
}
