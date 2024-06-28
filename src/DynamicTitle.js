import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { meta } from './content_option';

const DynamicTitle = () => {
    const location = useLocation();

    const getTitle = (pathname) => {
        switch (pathname) {
            case '/home-hero':
                return `${meta.title} | Home`;
            case '/about':
                return `${meta.title} | About`;
            case '/accomplishments':
                return `${meta.title} | Accomplishments`;
            case '/contact':
                return `${meta.title} | Contact`;
            default:
                return `${meta.title}`;
        }
    };

    useEffect(() => {
        document.title = getTitle(location.pathname);
    }, [location.pathname]);

    return (
        <Helmet>
            <title>{getTitle(location.pathname)}</title>
        </Helmet>
    );
};

export default DynamicTitle;
