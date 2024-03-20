(function () {
    let activeVisaCenterIndex = 0;
    let canrun = true;
    function startCheckingAppointment() {
        try {
            const selectList = document.getElementsByTagName('mat-select');
            const visaCenterSelect = selectList[0];
            const visaCategorySelect = selectList[1];
            const visaSubCategorySelect = selectList[2];



            if (visaCenterSelect) {
                // select visa center
                visaCenterSelect.click();
                const visaCenterList = document.getElementsByTagName('mat-option');
                const currentVisaCenter = visaCenterList[activeVisaCenterIndex];
                currentVisaCenter.click();

                let visaSubCategory = '';
                let visaCategory = '';

                setTimeout(() => {
                    // select visa category
                    visaCategorySelect.click();
                    const visaCategoryList = document.getElementsByTagName('mat-option');
                    visaCategory =
                        visaCategoryList.length > 1
                            ? visaCategoryList[2]
                            : visaCategoryList[0];
                    visaCategory.click();
                }, 2000);

                setTimeout(() => {
                    // select visa sub category
                    visaSubCategorySelect.click();
                    const visaSubCategoryList =
                        document.getElementsByTagName('mat-option');
                    const visaSubCategoryArr = Array.from(visaSubCategoryList);
                    visaSubCategory = visaSubCategoryArr.find((visaSubCategorty) =>
                        visaSubCategorty.innerText.includes('Work Permit')
                    );
                    visaSubCategory.click();
                }, 2500);

                canRun = false;

                // setTimeout(() => {
                //     // // check if any appointments are available
                //     const HTMLElm = document.getElementsByTagName('html')[0];
                //     let alarmTimerId = 0;

                //     const continueBtn = document.getElementsByClassName(
                //         'mat-focus-indicator btn mat-btn-lg btn-block btn-brand-orange mat-raised-button mat-button-base mat-button-disabled'
                //     )[0];

                //     if (
                //         location.href.includes('bgd/en/ita/application-detail') &&
                //         !HTMLElm.innerText.includes(
                //             'No appointment slots are currently available'
                //         ) &&
                //         !continueBtn
                //     ) {
                //         const audio = new Audio(
                //             'https://notificationsounds.com/storage/sounds/file-sounds-1158-lovingly.mp3'
                //         );
                //         audio.play();
                //         // alarmTimerId = setInterval(() => {
                //         // }, 70000)

                //         const qs = `${encodeURIComponent(currentVisaCenter.innerText)};${encodeURIComponent(visaCategory.innerText)};${encodeURIComponent(visaSubCategory.innerText)}`;
                //         console.log(qs);
                //     } else {
                //         clearInterval(alarmTimerId);
                //     }

                //     canReset = true;
                // }, 2000);
            }
        } catch (error) {
            console.log(error);
        }
    }

    function autoLogin() {
        let loginbtn = document.getElementsByClassName(
            'mat-focus-indicator btn'
        )[0];
        // document.getElementsByTagName("mat-form-field")[0].focus()
        // document.getElementsByTagName("mat-form-field")[1].focus()
        document.getElementsByTagName('body')[0].click();
        setTimeout(() => loginbtn.click(), 0);
    }

    function startNewBooking() {
        let newBookingBtn = document.getElementsByClassName(
            'btn mat-raised-button mat-button-base'
        );
        newBookingBtn[0].click();
    }

    function autoLogout() {
        let logoutBtn = document.getElementsByClassName(
            'dropdown-item bg-brand-orange'
        );
        logoutBtn[0].click();
    }

    setInterval(() => {
        const locationHref = location.href;
        console.log('working started');
        if (locationHref.includes('bgd/en/ita/dashboard')) {
            startNewBooking();
        } else if (locationHref.includes('bgd/en/ita/application-detail')) {
            if (canrun)
                startCheckingAppointment();
        }
        console.log('working');
    }, 2000);
})();
