import { test, expect } from '@playwright/test';

import booking from '../test-data/booking.json';
import putBooking from '../test-data/putBooking.json';

import { createBooking } from '../utils/apiHelpers';

test('Update booking without token should fail', async ({ request }) => {
  const createBody = await createBooking(request, booking);
  const bookingId = createBody.bookingid;

  const response = await request.put(`/booking/${bookingId}`, {
    data: putBooking
  });

  expect(response.status()).toBe(403);
  expect(response.statusText()).toBe('Forbidden');
});