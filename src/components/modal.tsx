import { FC, ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  width: string; // Example: '1/2', 'full', 'screen', etc. from Tailwind CSS
  height: string; // Example: 'auto', '96', 'full', etc. from Tailwind CSS
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  width,
  height,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div
        className={`modal-container bg-white w-full md:max-w-${width} max-h-${height} mx-auto rounded shadow-lg z-50 overflow-y-auto`}
      >
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-end items-center">
            <button
              className="text-black close-modal cursor-pointer z-50"
              onClick={onClose}
            >
              &times;
            </button>
          </div>

          <div className="my-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
