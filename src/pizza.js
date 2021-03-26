import './pizza.css'
import React, {useState, useEffect} from 'react'
import Form from './Form'
import Order from './Order'
import axios from "axios";
import formSchema from './formSchema'
import * as yup from 'yup'

const initialFormValues = {
  ///// TEXT INPUTS /////
  name:'',
  specialInstructions:'',

  ///// DROPDOWN /////
  size: '',
  ///// CHECKBOXES /////
  pepperoni: false,
  bacon: false,
  spinach: false,
  mushrooms: false,
  onion: false,
  pineapple: false,
  ham: false,
  chicken: false,
  bellpepper: false,
  sardines: false,
  olive: false,
  beef: false,
}

const initialFormErrors = {
  ///// TEXT INPUT ERRORS /////
  name:'',
}

const initialOrder = []
const initialDisabled = true

function App(){
   //////////////// STATES ////////////////
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)
  const [order, setOrder] = useState(initialOrder)


  const postNewOrder= newOrder => {
    axios.post('https://reqres.in/api/users',newOrder)
    .then(res => {
      setOrder([res.data, ...order])
    })
    .catch(err => {
      console.log(err);
    })
    setFormValues(initialFormValues)
  }

  //////////////// EVENT HANDLERS ////////////////
  const inputChange = (name,value)  => {
    yup.reach(formSchema,name)
    .validate(value)
    .then(() => { 
      setFormErrors({...formErrors,[name]: ''})
    })
      
      .catch(err => {
        setFormErrors({...formErrors,[name]: err.errors[0]})
    })
    setFormValues({
      ...formValues,
      [name]:value
    })
  }

  const formSubmit = () =>{
    const newOrder = {
      name: formValues.name.trim(),
    }
    postNewOrder(newOrder)
  }
  

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='container'>
      <Form
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />
      {
        order.map(order => {
          return (
            <Order key={order.id} details={order} />
          )
        })
      }
      
    </div>
  );
};
export default App;
