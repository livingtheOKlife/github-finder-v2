import { useContext } from 'react'
import { FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import AlertContext from '../context/alert/AlertContext' 

/**--------------------------------------------------------------------------- Toast component function
 * 
 * @name Toast
 * 
 * @function
 * 
 * @returns aside#toast
 * 
 * @author livingtheOKlife
 * 
 * @date 13.04.2024
 * 
 * -------------------------------------------------- */

const Toast = () => {

  const { toast, dispatch } = useContext(AlertContext)

  return toast !== null &&

    <aside id='toast' className={`${toast.type === 'error' ? 'error' : ''}${toast.type === 'success' ? 'success' : ''}`}>

      <div className="toast-bg">

        {toast.type === 'error' && <FaExclamationTriangle />}
        {toast.type === 'success' && <FaCheckCircle />}

        <p>{toast.msg}</p>

        <button className='ctrl-btn btn-ghost' onClick={() => dispatch({type: 'SET_TOAST_INACTIVE'})}>
          <FaXmark />
        </button>

        <div className="progress-bar">
          
          <div className="bg">
            <div className="fg"></div>
          </div>
          
        </div>

      </div>

    </aside>

}

export default Toast