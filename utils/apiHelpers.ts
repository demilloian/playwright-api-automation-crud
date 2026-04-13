import { APIRequestContext, expect } from '@playwright/test';
import auth from '../test-data/auth.json';

export const getTokenHeader = (token: string) => ({
  'Content-Type': 'application/json',
  'Cookie': `token=${token}`
});

export const createBooking = async (
  request: APIRequestContext,
  payload: object
) => {
  const response = await request.post('/booking', {
    data: payload
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body).toHaveProperty('bookingid');
  expect(typeof body.bookingid).toBe('number');
  expect(body).toHaveProperty('booking');

  return body;
};

export const getBooking = async (
  request: APIRequestContext,
  bookingId: number
) => {
  return await request.get(`/booking/${bookingId}`);
};

export const createToken = async (request: APIRequestContext) => {
  const response = await request.post('/auth', {
    data: auth
  });

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body).toHaveProperty('token');
  expect(body.token).toBeTruthy();
  expect(typeof body.token).toBe('string');

  return body.token;
};

export const updateBooking = async (
  request: APIRequestContext,
  bookingId: number,
  token: string,
  payload: object
) => {
  const response = await request.put(`/booking/${bookingId}`, {
    headers: getTokenHeader(token),
    data: payload
  });

  expect(response.status()).toBe(200);
  return response;
};

export const patchBooking = async (
  request: APIRequestContext,
  bookingId: number,
  token: string,
  payload: object
) => {
  const response = await request.patch(`/booking/${bookingId}`, {
    headers: getTokenHeader(token),
    data: payload
  });

  expect(response.status()).toBe(200);
  return response;
};

export const deleteBooking = async (
  request: APIRequestContext,
  bookingId: number,
  token: string
) => {
  const response = await request.delete(`/booking/${bookingId}`, {
    headers: getTokenHeader(token)
  });

  expect(response.status()).toBe(201);
  return response;
};