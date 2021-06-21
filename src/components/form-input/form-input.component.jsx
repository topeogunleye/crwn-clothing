import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className='form-input' onChange={handleChange} {...otherProps} type="text" />
  </div>
)

export default FormInput