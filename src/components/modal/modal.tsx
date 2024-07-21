import { FC, ReactNode, useEffect, useState } from "react";

import Cross from "../../assets/icons/cross.svg";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  customModalStyle: string;
  children: ReactNode;
};

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  customModalStyle,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return isVisible ? (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className={`absolute inset-0 backdrop-blur-xs `}
        onClick={onClose}
      ></div>
      <div
        className={`relative bg-white ${customModalStyle} mx-auto rounded shadow-lg z-50 overflow-y-auto ${
          isOpen ? "modal-grow" : "modal-exit"
        } `}
      >
        <button
          className="absolute top-2 right-2 text-black cursor-pointer z-50"
          onClick={onClose}
        >
          <div className="bg-primaryBlue w-8 h-8 rounded-[50%] flex justify-center items-center">
            <Cross />
          </div>
        </button>
        <div>{children}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
