document.querySelector<HTMLInputElement>('#oauth_access_description').value =
  'REMU_TOKEN';

const names = [
  'public_repo',
  'gist',
  'user',
  'read\\:user',
  'user\\:email',
  'user\\:follow',
];

names.forEach((name) => {
  document
    .querySelector<HTMLInputElement>(`#oauth_access_scopes_${name}`)
    .click();
});

document.querySelector<HTMLFormElement>('#new_oauth_access').submit();
