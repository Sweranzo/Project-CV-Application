import "./App.css";
import { Form } from "./components/Form.jsx";
import { Head } from "./components/header.jsx";
import { Nav } from "./components/Nav.jsx";
import { SubmittedData } from "./components/Document.jsx";
import { Loading } from "./components/Loading.jsx";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [textContent, setTextContent] = useState("");
  const [showProjects, setProjects] = useState(false);
  const [projectsData, setData] = useState([]);
  const [deleteData, setDeleteData] = useState(undefined);

  return (
    <>
      <Loading isLoading={isLoading} text={textContent}></Loading>
      <header>
        <Head></Head>
      </header>
      <Nav onClick={() => setProjects((previous) => !previous)} />
      <main>
        <Form
          setIsLoading={setIsLoading}
          content={setTextContent}
          projectsData={projectsData}
          setData={setData}
        ></Form>
      </main>
      <SubmittedData
        data={projectsData}
        onDelete={deleteData}
        isToggled={showProjects}
      ></SubmittedData>
    </>
  );
}

export default App;
