import React,{useEffect} from 'react'
import './Popup.css'
import { useDispatch, useSelector } from 'react-redux';
import { truepop, setpost, setindex } from '../../reducer';
const Popup = () => {
  const dispatch = useDispatch();
  const popup = useSelector((state) => {
    return state.popup
  })
  useEffect(() => {
    function handleEsc(event) {
      if (event.keyCode === 27) {
        dispatch(truepop());
      }
    }

    function handleClickOutside(event) {
      console.log(event.target.classList);
      if (event.target.classList.contains('popup')) {
        dispatch(truepop());
      }
    }

    if (popup.popup==true) {
      window.addEventListener('keydown', handleEsc);
      window.addEventListener('mousedown', handleClickOutside);
    } else {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popup.popup]);

  return (
    <div className='popup'>
      <div className='popup-insidediv'>
        <div className='popup-x' onClick={() => { dispatch(truepop()) }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
        </svg>
        </div>
        <div className='popup-header'>
          {(popup.post[popup.index]).name} Details
        </div>
        <div className='popup-header-address'>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
          </svg>  Address:</span> {(popup.post[popup.index]).address.street},{(popup.post[popup.index]).address.city} Pincode: {(popup.post[popup.index]).address.zipcode}
        </div>
        <div className='popup-header-phone'>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
          </svg>Phone:</span> {(popup.post[popup.index]).phone}
        </div>
        <div className='popup-header-website'>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-server" viewBox="0 0 16 16">
            <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z" />
            <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.51 6.51 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8c-1.966 0-3.809-.317-5.208-.876a6.508 6.508 0 0 1-1.458-.79z" />
            <path d="M14.667 11.668a6.51 6.51 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.51 6.51 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z" />
          </svg>Website:</span> {(popup.post[popup.index]).website}
        </div>
      </div>
    </div>
  )
}

export default Popup
