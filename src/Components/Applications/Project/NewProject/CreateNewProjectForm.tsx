import { NewProjectInitialValue, NewProjectValidation } from "@/Data/Application/Project";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setCreatedData } from "@/Redux/Reducers/ProjectSlice";
import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import { TitleAndClientSection } from "./TitleAndClientSection";
import { ProjectSection } from "./ProjectSection";
import { DateSection } from "./DateSection";
import { DescriptionSection } from "./DescriptionSection";
import { ButtonSection } from "./ButtonSection";
import UploadProjectFile from "./UploadProjectFile";
import { ProjectInitialValue } from "@/Types/ProjectType";
import React, { useState, useEffect } from "react";

const CreateNewProjectForm = ({ticketData}:any) => {
  const router = useRouter();
  const { createdFormData } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();
  const randomValue = Math.floor(Math.random() * (100 - 10 + 1)) + 10;

  return (
    <Formik initialValues={NewProjectInitialValue} validationSchema={NewProjectValidation} onSubmit={()=>{}}>
      {() => (
        <Form className="theme-form">
          {/* <TitleAndClientSection ticketData={ticketData}/>
          <ProjectSection ticketData={ticketData}/> */}
          <DateSection ticketData={ticketData}/>
          {/* <DescriptionSection ticketData={ticketData}/>
          <UploadProjectFile ticketData={ticketData}/>
          <ButtonSection ticketData={ticketData}/> */}
        </Form>
      )}
    </Formik>
  );
};

export default CreateNewProjectForm;
