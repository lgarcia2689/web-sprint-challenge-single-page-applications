import React from 'react'
import './Form.css'

function Form(props) {  
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

      const onSubmit = (e) => {
        (e).preventDefault()
        submit()
      }

    const onChange = (e) => {
        const {name,value,type,checked} = (e).target
        {/* ////////// FOR CHECKBOX TO WORK ////////// */}
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }
    
    return (
      <form className='formContainer' onSubmit={onSubmit}>

        <h1>Make Your Pizza</h1>

          <div className='errors'>
          {/* RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.name}</div>
        </div>

          <div className='formGroupInputs'>
              {/* ////////// TEXT INPUTS ////////// */}
                <label>Name:&nbsp;
                <input
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                />
                </label>
                {/* ////////// CHECKBOXES ////////// */}

                <div className = 'sizeContainer'>
                <label>Size:&nbsp;
                    <select
                        onChange={onChange}
                        value={values.size}
                        name='size'
                    >   
                        <option value=''>-- Select an option --</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='extraLarge'>Extra Large</option>
                    </select>
                    </label>
                    </div>
                {/* ////////// CHECKBOXES ////////// */}

            <fieldset className = 'toppingsContainer'>
                <legend>TOPPINGS</legend>
                <div className = 'topToppings'>
                <label>pepperoni:&nbsp;
                    <input 
                        type='checkbox'
                        name='pepperoni'
                        onChange={onChange}
                        checked={values.pepperoni}
                    />
                </label>
                <label>bacon:&nbsp;
                    <input 
                        type='checkbox'
                        name='bacon'
                        onChange={onChange}
                        checked={values.bacon}
                    />
                </label>
                <label>spinach:&nbsp;
                    <input 
                        type='checkbox'
                        name='spinach'
                        onChange={onChange}
                        checked={values.spinach}
                    />
                </label>
                <label>mushrooms:&nbsp;
                    <input 
                        type='checkbox'
                        name='mushrooms'
                        onChange={onChange}
                        checked={values.mushrooms}
                    />
                </label>
                </div>
                <div className = 'middleToppings'>
                <label>onion:&nbsp;
                    <input 
                        type='checkbox'
                        name='onion'
                        onChange={onChange}
                        checked={values.onion}
                    />
                </label>
                <label>pineapple:&nbsp;
                    <input 
                        type='checkbox'
                        name='pineapple'
                        onChange={onChange}
                        checked={values.pineapple}
                    />
                </label>
                <label>ham:&nbsp;
                    <input 
                        type='checkbox'
                        name='ham'
                        onChange={onChange}
                        checked={values.ham}
                    />
                </label>
                <label>chicken:&nbsp;
                    <input 
                        type='checkbox'
                        name='chicken'
                        onChange={onChange}
                        checked={values.chicken}
                    />
                </label>
                </div>
                <div className = 'bottomToppings'>
                <label>bellpepper:&nbsp;
                    <input 
                        type='checkbox'
                        name='bellpepper'
                        onChange={onChange}
                        checked={values.bellpepper}
                    />
                </label>
                <label>sardines:&nbsp;
                    <input 
                        type='checkbox'
                        name='sardines'
                        onChange={onChange}
                        checked={values.sardines}
                    />
                </label>
                <label>olive:&nbsp;
                    <input 
                        type='checkbox'
                        name='olive'
                        onChange={onChange}
                        checked={values.olive}
                    />
                </label>
                <label>beef:&nbsp;
                    <input 
                        type='checkbox'
                        name='beef'
                        onChange={onChange}
                        checked={values.beef}
                    />
                </label>  
                </div>
                </fieldset>
                <div className = "specialInstructions">
                <label>Special Instructions:&nbsp;
                <input
                    value={values.specialInstructions}
                    onChange={onChange}
                    name='specialInstructions'
                    type='text'
                />
                </label>
                </div>
          </div>
          <div className = 'formSubmit'>
            {/* DISABLED THE BUTTON */}
          <button id = 'addToOrder' disabled={disabled}>Add to Order</button>
          
          </div>
      </form>
    );
  }
  
  export default Form;
  