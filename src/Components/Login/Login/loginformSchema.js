import * as Yup from 'yup';
export const FormSchema = Yup.object({
    name:Yup.string().min(3).max(40).required('Name is a required field.  '),
    password:Yup.string().min(3).max(20).required('Password is a required field.  '),
})