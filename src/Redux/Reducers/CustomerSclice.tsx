import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ContactNumber {
  type: string;
  number: string;
}


interface Address {
  type: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}


interface Preference {
  type: string;
  value: string;
}


interface SocialMediaProfile {
  platform: string;
  profileUrl: string;
}


interface Tag {
  name: string;
}


interface Interaction {
  type: string;
  date: string;
  details: string;
}


interface Note {
  date: string;
  content: string;
}


interface Document {
  type: string;
  contentUrl: string;
  uploadDate: string;
  fileName: string;
}


interface Feedback {
  content: string;
  date: string;
}


export interface Customer {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  contactNumbers: ContactNumber[];
  addresses: Address[];
  dateOfBirth: string;
  gender: string;
  loyaltyPoints: number;
  customerType: string;
  active: boolean;
  createdDate: string;
  lastModifiedDate: string;
  preferredContactMethod: string;
  preferredLanguage: string;
  occupation: string;
  company: string;
  website: string;
  profilePictureUrl: string;
  nationality: string;
  socialSecurityNumber: string;
  maritalStatus: string;
  spouseName: string;
  childrenNames: string;
  preferences: Preference[];
  education: string;
  socialMediaProfiles: SocialMediaProfile[];
  referralSource: string;
  membershipLevel: string;
  hobbies: string;
  lastPurchaseDate: string;
  tags: Tag[];
  subscribedToNewsletter: boolean;
  interactions: Interaction[];
  notes: Note[];
  documents: Document[];
  feedbacks: Feedback[];
}


interface CustomerState {
  customer: Customer | null | {};
}


const initialState: CustomerState = {
  customer: {},
};


const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomer(state, action: PayloadAction<Customer>) {
      state.customer = action.payload;
    },
    updateCustomerField(state, action: PayloadAction<{ field: keyof Customer; value: any }>) {
        const { field, value } = action.payload;
        // Use type assertion to update the state field properly
        (state.customer as any)[field] = value;
    },
    updateNestedField(state, action: PayloadAction<{ path: (keyof Customer)[]; value: any }>) {
        let current: any = state.customer;
        const lastKey = action.payload.path.pop();
        action.payload.path.forEach((key) => {
          current = current[key];
        });
        if (lastKey) {
          current[lastKey] = action.payload.value;
        }
    }
  },
});


export const { setCustomer, updateCustomerField, updateNestedField } = customerSlice.actions;


export default customerSlice.reducer;