import React, {
    useState,
    useEffect,
    forwardRef,
    useImperativeHandle
} from 'react';
import './Dialog.css'
import Button from '../Button';
import Form from '../Form';

const Dialog = forwardRef(({ type, options = {} }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [receivedFormData, setReceivedFormData] = useState(null);

  useEffect(() => {
    const formDataChangedListener = (event) => {
      setReceivedFormData(event.detail);
    };
    window.addEventListener('formDataChanged', formDataChangedListener);

    return () => {
      window.removeEventListener('formDataChanged', formDataChangedListener);
    };
  }, []);

  const {
    title = "Dialog",
    submitLabel = "Submit",
    cancelLabel = "Cancel",
    allowClickOut = true,
  } = options;

  const dialogContent = () => {
    if (type === 'confirm') {
      return `<h3>Do you want to delete this book?</h3>`
    } else if (type === 'addBookForm') {
      return <Form />
    } else if (type === 'editBook') {
      return ""
    } else {
      return null;
    }
  };

  const handleOpen = () => {
      setIsOpen(true);
  };

  const handleClose = () => {
      setIsOpen(false);
  };

  const handleSubmit = () => {
   
    if (receivedFormData) {
      console.log(receivedFormData);
    }
    handleClose();
  };

  const handleCancel = () => {
      handleClose();
  };

  useEffect(() => {
  const handleClickOut = (e) => {
      if (allowClickOut && e.target.classList.contains('dialog')) {
      handleClose();
      }
  };

  if (isOpen) {
      document.addEventListener('click', handleClickOut);
  } else {
      document.removeEventListener('click', handleClickOut);
  }

  return () => {
      document.removeEventListener('click', handleClickOut);
  };
  }, [isOpen, allowClickOut]);


  

  useImperativeHandle(ref, () => ({
      handleOpen,
  }));



  return (
    <>
      {isOpen && (
        <div className="dialog">
          <div className="dialog-container">
            {title && (
              <header className="container__heading">
                <h3>{title}</h3>
              </header>
            )}
            <section className="container__body">{dialogContent()}</section>
            <section className="container__footer">
            <Button label={cancelLabel} onClick={handleCancel}  />
            {submitLabel && (
            <Button label={submitLabel} onClick={handleSubmit} type="submit" primary />
            )}
            </section>
          </div>
        </div>
          )}
    </>
  );
})

export default Dialog;
