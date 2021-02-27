import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('name is required, please fill out.')
        .min(3, 'name must be 3 characters long'),
    // Drop downs are required
    size: yup.string()
    .oneOf(['Small','medium','large','extraLarge'],'Size is required'),
   // Checkboxes are not required
   pepperoni: yup.boolean(),
   bacon: yup.boolean(),
   spinach: yup.boolean(),
   mushrooms: yup.boolean()


})

export default formSchema