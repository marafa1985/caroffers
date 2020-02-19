import React from 'react';
import { render } from '@testing-library/react';
import TourDuration from './TourDuration';

test('renders learn react link', () => {
    const component = render(<TourDuration setDuration={() => { }} duration={120} />);
    expect(component).toMatchSnapshot();
});
