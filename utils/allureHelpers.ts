import * as allure from 'allure-js-commons';

export const attachJson = async (title: string, body: unknown) => {
  await allure.attachment(
    title,
    JSON.stringify(body, null, 2),
    'application/json'
  );
};

export const attachText = async (title: string, content: string) => {
  await allure.attachment(title, content, 'text/plain');
};