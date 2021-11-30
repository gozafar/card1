import { CREATE_CONTACT } from "./Constant";

export const addContact = (contact) => ({
  type: CREATE_CONTACT,
  payload: contact,
});
