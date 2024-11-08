// src/components/__tests__/FlightTable.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import FlightTable from '../FlightTable';

test('renders flight table', () => {
    const flights = [
        { id: '1', flightNumber: 'AA123', airline: 'American Airlines', origin: 'JFK', destination: 'LAX', departureTime: '2023-10-01T10:00:00Z', status: 'On Time' },
    ];
    render(<FlightTable flights={flights} error={null} />);
    expect(screen.getByText('Flight Number')).toBeInTheDocument();
    expect(screen.getByText('AA123')).toBeInTheDocument();
});