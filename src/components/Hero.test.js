import React from 'react';
import { render } from '@testing-library/react';
import Hero from './Hero';

describe('Hero', () => {
    it('renders the hero title', () => {
        const { getByText } = render(<Hero title="Welcome to ActiveAxis" />);
        expect(getByText('Welcome to ActiveAxis')).toBeInTheDocument();
    });

    it('renders the hero subtitle', () => {
        const { getByText } = render(<Hero subtitle="The ultimate fitness experience" />);
        expect(getByText('The ultimate fitness experience')).toBeInTheDocument();
    });

    it('renders the hero image', () => {
        const { getByAltText } = render(<Hero imageSrc="/path/to/image.jpg" />);
        expect(getByAltText('Hero Image')).toBeInTheDocument();
    });
});


