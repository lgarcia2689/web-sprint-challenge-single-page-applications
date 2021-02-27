import React from 'react'

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
      <form className='form container' onSubmit={onSubmit}>

          <div className='errors'>
          {/* RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.name}</div>
        </div>

          <div className='form-group inputs'>
              {/* ////////// TEXT INPUTS ////////// */}
                <label>Name&nbsp;
                <input
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                />
                </label>
                {/* ////////// CHECKBOXES ////////// */}
                <label>Size
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

                {/* ////////// CHECKBOXES ////////// */}
                <label>Pepperoni
                    <input 
                        type='checkbox'
                        name='pepperoni'
                        onChange={onChange}
                        checked={values.pepperoni}
                    />
                </label>
                <label>bacon
                    <input 
                        type='checkbox'
                        name='bacon'
                        onChange={onChange}
                        checked={values.bacon}
                    />
                </label>
                <label>spinach
                    <input 
                        type='checkbox'
                        name='spinach'
                        onChange={onChange}
                        checked={values.spinach}
                    />
                </label>
                <label>mushrooms
                    <input 
                        type='checkbox'
                        name='mushrooms'
                        onChange={onChange}
                        checked={values.mushrooms}
                    />
                </label>
          </div>
          <div className = 'formSubmit'>
            {/* DISABLED THE BUTTON */}
          <button disabled={disabled}>Add to Order</button>
          </div>
      </form>
    );
  }
  
  export default Form;
  