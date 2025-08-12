import React, { useEffect } from 'react';
import { ModalWrapper, ModalContent } from './style';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    image: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, image }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = 'auto'; 
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <ModalWrapper>
            <ModalContent>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-2xl text-gray-500 focus:outline-none cursor-pointer"
                >
                    X
                </button>
                {image && <img src={image} alt={title} className="modal-image" />} 
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-sm text-gray-700">{description}</p>
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;
