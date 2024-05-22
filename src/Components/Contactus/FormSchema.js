import * as Yup from 'yup';
export const FormSchema = Yup.object({
    name:Yup.string().min(3).max(20).required('Name is must '),
    subject:Yup.string().min(3).max(20).required('subject is must '),
    email: Yup.string().email('Invalid email address').required('Required'),
    message:Yup.string().min(10).max(50).required('message is must '),
})