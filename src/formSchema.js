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
   mushrooms: yup.boolean(),
   onion: yup.boolean(),
   pineapple: yup.boolean(),
   ham: yup.boolean(),
   chicken: yup.boolean(),
   bellpepper: yup.boolean(),
   sardines: yup.boolean(),
   olive: yup.boolean(),
   beef: yup.boolean(),

   specialInstructions:yup.string()
   .trim()
})

export default formSchema