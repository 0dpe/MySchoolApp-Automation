// ==UserScript==
// @name         MySchoolApp Automation (MA)
// @namespace    https://github.com/0dpe/MySchoolApp-UserScript
// @version      1.0
// @description  Automatically clicks buttons in the Blackbaud portal.
// @author       Odpe
// @match        https://*.myschoolapp.com/app*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/0dpe/MySchoolApp-UserScript/main/V1.js
// @updateURL    https://raw.githubusercontent.com/0dpe/MySchoolApp-UserScript/main/V1.js
// ==/UserScript==


(function () {
    'use strict'

    const style1 = 'font-weight: bold'
    const style2 = 'text-decoration: line-through color: grey'

    const findAndClick = (identifier) => {
        console.log(`%cMA: Attempting ${identifier}`, style2)
        const element = document.querySelector(identifier)
        if (element) {
            element.click()
            console.log(`%cMA: Clicked ${identifier}`, style1)
        } else {
            setTimeout(() => findAndClick(identifier), 50)
        }
    }

    window.onhashchange = function () {
        const currentHash = window.location.hash

        if (currentHash === '#studentmyday/assignment-center') {
            console.log('%cMA: Assignment Center Hash', style1)
            ['[data-sort="date_due"]', '[data-sort="date_due"]', '#month-view', '#filter-status', '.status-button.active[data-id="1"]'].forEach(findAndClick)
        }

        if (currentHash === '#login') {
            console.log('%cMA: Login Hash', style1)
            const checkInputAndCheckbox = () => {
                console.log('%cMA: Checking input & checkbox', style2)
                const input = document.querySelector('#Username')
                const checkbox = document.querySelector('#remember')
                if (input && input.value.includes('@') && checkbox && checkbox.checked) {
                    console.log('%cMA: Input & checkbox conditions met', style1)
                    click('#nextBtn')
                } else {
                    setTimeout(checkInputAndCheckbox, 50)
                }
            }
            checkInputAndCheckbox()
        }
    }

    window.dispatchEvent(new Event('hashchange'))
})()
