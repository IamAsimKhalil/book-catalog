import { createContext } from "react";
const formDataContext = createContext({ form: null, getData: () => {} });

export default formDataContext;
