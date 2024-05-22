import * as Yup from 'yup';
export const FormSchema = Yup.object({
    firstname:Yup.string().min(3).max(20).required('First name is a required field.  '),
    lastname:Yup.string().min(3).max(20).required('First name is a required field.  '),
})