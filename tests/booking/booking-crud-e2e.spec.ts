import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';

import booking from '../../test-data/booking.json';
import putBooking from '../../test-data/putBooking.json';
import patchBookingData from '../../test-data/patchBookingData.json';

import {
  createBooking,
  getBooking,
  createToken,
  updateBooking,
  patchBooking,
  deleteBooking
} from '../../utils/apiHelpers';

import { attachJson, attachText } from '../../utils/allureHelpers';


test('Booking CRUD E2E flow', async ({ request }) => {
  let bookingId: number;
  let token: string;

  await allure.owner('Ian');
  await allure.feature('Booking API');
  await allure.story('CRUD Flow');
  await allure.severity('critical');

  await test.step('Create booking', async () => {
    const createBody = await createBooking(request, booking);
    bookingId = createBody.bookingid;

    expect(createBody.booking).toMatchObject(booking);

    expect(createBody.booking.bookingdates.checkin).toBe(booking.bookingdates.checkin);
    expect(createBody.booking.bookingdates.checkout).toBe(booking.bookingdates.checkout);

    await attachJson('Create Booking Response', createBody);
  });

  await test.step('Get created booking', async () => {
    const getResponse = await getBooking(request, bookingId);
    expect(getResponse.status()).toBe(200);

    const getBody = await getResponse.json();

    expect(getBody).toMatchObject(booking);
    expect(getBody.firstname).toBe(booking.firstname);
    expect(getBody.lastname).toBe(booking.lastname);
    expect(getBody.additionalneeds).toBe(booking.additionalneeds);

    await attachJson('Get Booking Response', getBody);
  });

  await test.step('Generate auth token', async () => {
    token = await createToken(request);

    expect(token).toBeTruthy();
    expect(typeof token).toBe('string');

    await attachText('Generated Token', token);
  });

  await test.step('Update booking using PUT', async () => {
    const updateResponse = await updateBooking(
      request,
      bookingId,
      token,
      putBooking
    );

    const updateBody = await updateResponse.json();

    expect(updateBody).toMatchObject(putBooking);
    expect(updateBody.firstname).toBe(putBooking.firstname);
    expect(updateBody.lastname).toBe(putBooking.lastname);
    expect(updateBody.additionalneeds).toBe(putBooking.additionalneeds);
    expect(updateBody.bookingdates.checkin).toBe(putBooking.bookingdates.checkin);
    expect(updateBody.bookingdates.checkout).toBe(putBooking.bookingdates.checkout);

    await attachJson('PUT Response', updateBody);
  });

  await test.step('Patch booking using PATCH', async () => {
    const patchResponse = await patchBooking(
      request,
      bookingId,
      token,
      patchBookingData
    );

    const patchBody = await patchResponse.json();

    expect(patchBody.firstname).toBe(patchBookingData.firstname);
    expect(patchBody.additionalneeds).toBe(patchBookingData.additionalneeds);

    // unchanged field checks
    expect(patchBody.lastname).toBe(putBooking.lastname);
    expect(patchBody.totalprice).toBe(putBooking.totalprice);

    await attachJson('PATCH Response', patchBody);
  });

  await test.step('Delete booking', async () => {
    const deleteResponse = await deleteBooking(request, bookingId, token);

    expect(deleteResponse.status()).toBe(201);
    expect(deleteResponse.statusText()).toBe('Created');
  });

  await test.step('Verify booking is deleted', async () => {
    const verifyResponse = await getBooking(request, bookingId);

    expect(verifyResponse.status()).toBe(404);
    expect(verifyResponse.statusText()).toBe('Not Found');

    await attachText(
      'Delete Verification',
      `${verifyResponse.status()} ${verifyResponse.statusText()}`
    );
  });
});