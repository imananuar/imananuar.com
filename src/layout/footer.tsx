import { useState } from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-black absolute right-0 bottom-0 p-1">
            <p>Copyright © {currentYear} Iman Anuar</p>
        </footer>
    )
}