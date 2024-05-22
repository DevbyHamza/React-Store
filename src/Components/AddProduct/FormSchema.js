import * as Yup from 'yup';
export const FormSchema = Yup.object({
    title:Yup.string().min(3).max(15).required('Title is must '),
    description:Yup.string().min(3).max(50).required('Description is must '),
    price:Yup.number().min(3).max(1000).required('Price  is must '),
    rate:Yup.number().min(1).max(5).required('Rating is must '),
    image:Yup.string().min(3).max(100).required('Image URL is must '),
    category:Yup.string().min(3).max(15).required('Category is must '),
    
})