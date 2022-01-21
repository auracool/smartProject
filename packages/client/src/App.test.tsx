import React from 'react'
import { screen } from '@testing-library/react'
import { render,cleanup } from './test-utils'
import { MockedProvider } from '@apollo/client/testing';
import { App } from './App'
import { gql } from '@apollo/client';



it("renders with MockedProvider", async () => {
  const { findByText, getByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
    <App />
    </MockedProvider>
  );

  expect(getByText("Loading...")).toBeInTheDocument();
  const textIncluded = await findByText("Smart Traveller");
  expect(textIncluded).toBeInTheDocument();
});
