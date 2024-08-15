import { configureStore } from "@reduxjs/toolkit";
import AddProductSlice from "./Reducers/AddProductSlice";
import BookmarkTabSlice from "./Reducers/BookmarkTabSlice";
import CartSlice from "./Reducers/CartSlice";
import ChatSlice from "./Reducers/ChatSlice";
import ContactSlice from "./Reducers/ContactSlice";
import FileManagerSlice from "./Reducers/FileManagerSlice";
import FilterSlice from "./Reducers/FilterSlice";
import FormWizardTwoSlice from "./Reducers/FormLayout/FormWizardTwoSlice";
import NumberingWizardSlice from "./Reducers/FormLayout/NumberingWizardSlice";
import StudentWizardSlice from "./Reducers/FormLayout/StudentWizardSlice";
import TwoFactorSlice from "./Reducers/FormLayout/TwoFactorSlice";
import VerticalWizardSlice from "./Reducers/FormLayout/VerticalWizardSlice";
import HeaderBookmarkSlice from "./Reducers/HeaderBookmarkSlice";
import LayoutSlice from "./Reducers/LayoutSlice";
import LetterBoxSlice from "./Reducers/LetterBoxSlice";
import ProductSlice from "./Reducers/ProductSlice";
import ProjectSlice from "./Reducers/ProjectSlice";
import TaskSlice from "./Reducers/TaskSlice";
import ThemeCustomizerSlice from "./Reducers/ThemeCustomizerSlice";
import ToDoSlice from "./Reducers/ToDoSlice";
import profileReducer from './Reducers/ProfileSlice';
import customerReducer from "./Reducers/CustomerSclice"
import customerCommonSlice from "./Reducers/CustomerCommon"


const Store = configureStore({
  reducer: {
    layout: LayoutSlice,
    twoFactor: TwoFactorSlice,
    numberingWizard: NumberingWizardSlice,
    studentWizard: StudentWizardSlice,
    verticalWizard: VerticalWizardSlice,
    formWizardTwo: FormWizardTwoSlice,
    project: ProjectSlice,
    fileManager: FileManagerSlice,
    todo: ToDoSlice,
    task: TaskSlice,
    contact: ContactSlice,
    bookmarkTab: BookmarkTabSlice,
    chat: ChatSlice,
    product: ProductSlice,
    filterData: FilterSlice,
    cartData: CartSlice,
    letterBox: LetterBoxSlice,
    headerBookMark: HeaderBookmarkSlice,
    themeCustomizer: ThemeCustomizerSlice,
    addProduct: AddProductSlice,
    profile: profileReducer,
    customer: customerReducer,
    customerCommon: customerCommonSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export default Store;


export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;