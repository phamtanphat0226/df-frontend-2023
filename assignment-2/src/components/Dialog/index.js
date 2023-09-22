import React, {
    useState,
    useEffect,
    forwardRef,
    useRef,
    useImperativeHandle
} from 'react';
import './Dialog.css'
import Button from '../Button';

const Dialog = forwardRef(({ content = '', options = {} }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    const {
    title = "Dialog",
    submitLabel = "Submit",
    cancelLabel = "Cancel",
    allowClickOut = true,
    } = options;

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSubmit = () => {
        handleClose();
    // Xử lý khi người dùng nhấn Submit
    };

    const handleCancel = () => {
        handleClose();
    // Xử lý khi người dùng nhấn Cancel
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
            <section className="container__body">{content}</section>
            <section className="container__footer">
            <Button label={cancelLabel} onClick={handleCancel} />
            {submitLabel && (
            <Button label={submitLabel} onClick={handleSubmit} />
            )}
            </section>
          </div>
        </div>
          )}
    </>
  );
})

export default Dialog;
