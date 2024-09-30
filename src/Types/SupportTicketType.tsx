export interface SupportDataType {
    id: number;
    image: string;
    position: string;
    salary: string;
    office: string;
    skill: number;
    extn: number;
    email: string;
    customer: string;
    skillColor:string;
    customerId: string;
    title: string;
    status: string;
    agent: {
      id: string;
    }
  }

  export interface SkillsDataProp{
    value: number;
    skillColor:string
  }
  
  export interface ImageDataProp{
    title:string
  }

  export interface ViewDataProp{
    ticketId:string | number
  }
  