describe('Meu teste', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('check register new skill', async () => {
    const inputNewSkill = element(by.id('input-new'));
    const buttonAdd = element(by.id('button-add'));
    const flatListSkills = element(by.id('flat-list-skills'));

    await inputNewSkill.tap();
    await inputNewSkill.typeText('React Native');
    await buttonAdd.tap();
    
    await flatListSkills.tap();

    expect(flatListSkills).toBeVisible();

  })
});
