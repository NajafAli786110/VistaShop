import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-800 p-4 text-center">
            <p className="text-gray-600 dark:text-gray-400">© 2024 VistaShop. All rights reserved.</p>
            <p className="text-gray-600 dark:text-gray-400">Contact <Link target='_blank' to="https://linktr.ee/Najaf_Ali_Balti" className='font-bold text-black'>Najaf Ali Balti</Link> </p>
        </footer>
    );
};
