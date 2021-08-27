import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import AboutMe from './AboutMe';

test('renders AboutMe', () => {
    const component = render(<AboutMe />)

    expect(true).toBe(true)
});