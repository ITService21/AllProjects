import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ModalContext = createContext();

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

export const ModalProvider = ({ children }) => {
    const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);
    const [showFormModal, setShowFormModal] = useState(false);

    const openModal = () => {
        setIsAnyModalOpen(true); 
        localStorage.setItem('isAnyModalOpen', 'true');
    };
    
    const closeModal = () => {
        setIsAnyModalOpen(false); 
        setShowFormModal(false);
        localStorage.setItem('isAnyModalOpen', 'false');
    };

    const openFormModal = () => {
        setShowFormModal(true);
        openModal();
    };

    const closeFormModal = () => {
        setShowFormModal(false);
        closeModal();
    };

    return (
        <ModalContext.Provider value={{
            isAnyModalOpen,
            openModal,
            closeModal,
            showFormModal,
            openFormModal,
            closeFormModal
        }}>
            {children}
        </ModalContext.Provider>
    );
};

ModalProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
