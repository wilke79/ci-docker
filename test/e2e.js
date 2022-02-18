import { Selector } from 'testcafe';

fixture `Webpage`
  .page('http://localhost:3001/')

test(`Header 1 on main page`, async t => {
  const h1 = Selector('h1');
  await t
    .expect(h1.exists).ok()
    .expect(h1.textContent).eql('Simple picture db');
})

test(`Upload picture with exif date check`, async t => {
  const pics = Selector('#pics>li')
  const picDate = Selector('#pics>li>span')
  await t
    .setFilesToUpload('input[type="file"]', [
      'demo.jpg'
    ])
    .expect(pics.count).eql(1)
    .expect(picDate.textContent).eql('Sat Feb 12 2022')
})

test(`Delete picture`, async t => {
  const pics = Selector('#pics>li')
  await t
    .click('#pics>li>button')
    .expect(pics.count).eql(0)
})
