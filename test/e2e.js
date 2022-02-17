import { Selector } from 'testcafe';

fixture `Webpage`
  .page('http://api:3001/')

test(`Startseite H1`, async t => {
  const h1 = Selector("h1");
  await t
    .expect(h1.exists).ok()
    .expect(h1.textContent).eql('Bilder Datenbank');
})

test(`Datei Upload`, async t => {
  const pics = Selector("#pics>li")
  await t
    .setFilesToUpload('input[type="file"]', [
      'demo.jpg'
    ])
    .expect(pics.count).eql(1)
})
