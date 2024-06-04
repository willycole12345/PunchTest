import React from 'react';
import BtnSubmit from '../assets/top_button.svg'

function NewletterForm() {
  return (
    <>
      <div>
           <form>
          <input type="text" className='form_header' placeholder='Looking for a Designer' />
          <div class="btn">
            <img src={BtnSubmit} className='form_btn' alt="submit"/>
          </div>
            
          </form>
      </div>
          
    </>
  )
}

export default NewletterForm;