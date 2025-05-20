import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => (
    <footer className="py-5">
        <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="w-auto h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
        </Link>

        <div className="font-normal text-center text-gray-900">© 2024 Tailwind Labs Inc. All rights reserved.</div>

        <div className="text-center">
            <Link to="/privacy" className="text-sm font-semibold leading-6 text-gray-900">
                Privacy
            </Link>
            <Link to="/privacy" className="text-sm font-semibold leading-6 text-gray-900">
                Changelog
            </Link>
        </div>
    </footer>
)

export default Footer
