describe('Color Note', () => {

  it('Allow permission', async () => {
    await $('//*[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]').click();
    await expect($('//*[@text="SKIP"]')).toBeDisplayed();
  });

  it('Skip Tutorial', async () => {
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
    await expect($('//*[@text="Add note"]')).toBeDisplayed();
  });

  it('add note', async() => {
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/img_add"]').click();
    await $('//*[@text="Text"]').click();
    await expect($('//*[@text="Editing"]')).toBeDisplayed();

    // add note title
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
    .addValue("Hitachi Vantara Staffs");

    // add note body
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
    .addValue("LoiNH");

    // save the changes
    await driver.back();
    await driver.back();

    // assertion
    await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'))
    .toBeDisplayed();

    await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
    .toHaveText('LoiNH');
  })
});