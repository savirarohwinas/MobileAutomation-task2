
describe('Open Application',() => {
    it('User can open diet meal apps ', async() => {
        await expect($('[id="com.fghilmany.dietmealapp:id/header_welcome"]')).toHaveText("Welcome...");     
    })
  })
  
describe('Submit Form User',() => {
    it('User can input name field : Sasa ', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/et_name"]').setValue("sasa");    
    })

    it('User can input Weight field: 65 ', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/et_weight"]').setValue("65");    
    })

    it('User can input Height field: 165 ', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/et_height"]').setValue("165");    
    })

    it('User can choose gender between Male or Female ', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/rb_male"]').click();
        await $('[id="com.fghilmany.dietmealapp:id/rb_female"]').click();   
    })

    it('User can click button "next" ', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/bt_next"]').click();
        await expect($('[id="com.fghilmany.dietmealapp:id/tv_header_desc"]')).toHaveText("Isi formulir untuk membuat/menambahkan user");
    })
})

describe('Submit Form Activity',() => {
    it('Check all activity appears', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/rb_rest"]').isEnabled();
        await $('[id="com.fghilmany.dietmealapp:id/rb_very_very_low"]').isEnabled();
        await $('[id="com.fghilmany.dietmealapp:id/rb_very_low"]').isEnabled();
        await $('[id="com.fghilmany.dietmealapp:id/rb_low_to_medium"]').isEnabled();
        await $('[id="com.fghilmany.dietmealapp:id/rb_medium"]').isEnabled();
        await $('[id="com.fghilmany.dietmealapp:id/rb_heavy"]').isEnabled();
        await $('[id="com.fghilmany.dietmealapp:id/rb_very_heavy"]').isEnabled();
    })

    it('User can choose aktivitas sehari-hari : Tidur,Rebahan,Duduk,dsj ', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/rb_rest"]').click();
    })

    it('User can choose aktivitas sehari-hari : Sekolah,Kuliah,Kerja,Kantor,dsj ', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/rb_low_to_medium"]').click();
    })  

    it('User can click button "selesai"', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/bt_finish"]').click();
        await expect($('[id="com.fghilmany.dietmealapp:id/tv_header_name"]')).toHaveText("Hi,");
    })

})

describe('Dashboard Page',() => {
    it('User in Dashboard page ', async() => {
        await expect($('[id="com.fghilmany.dietmealapp:id/tv_header_name"]')).toHaveText("Hi,");
        await expect($('[text="Ready to some calories today?"]')).toHaveText("Ready to some calories today?");
        await $('[id="com.fghilmany.dietmealapp:id/view"]').isEnabled();
    })

    it('User in Meal page', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/navigation_meal"]').click();
        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[5]').isEnabled();

    })


    it('User in Profil page', async() => {
        await $('[id="com.fghilmany.dietmealapp:id/navigation_profile"]').click();
        await $('[id="com.fghilmany.dietmealapp:id/iv_setting"]').isEnabled();
    })

  })


  