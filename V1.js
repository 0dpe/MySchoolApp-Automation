// ==UserScript==
// @name         MySchoolApp Automation (MA)
// @namespace    https://github.com/0dpe/MySchoolApp-UserScript
// @version      1.0
// @description  Automatically clicks buttons in the Blackbaud portal.
// @author       Odpe
// @match        https://*.myschoolapp.com/app/*
// @grant        none
// ==/UserScript==


(function () {
    'use strict';

    const style1 = 'font-weight: bold'
    const style2 = 'text-decoration: line-through; color: grey'

    const click = (identifier) => {
        const element = document.querySelector(identifier);
        if (element) {
            element.click();
            console.log(`%cMA: Clicked ${identifier}`, style1);
        } else {
            console.log(`%cMA: Attempting ${identifier}`, style2);
            setTimeout(() => click(identifier), 50);
        }
    };

    window.onhashchange = function() {
        const currentHash = window.location.hash;

        if (currentHash === '#studentmyday/assignment-center') {
            console.log('%cMA: Assignment Center URL', style1);
            ['[data-sort="date_due"]', '[data-sort="date_due"]', '#month-view', '#filter-status', '.status-button.active[data-id="1"]', '#btn-filter-apply'].forEach(click);
        }

        if (currentHash === '#login') {
            console.log('%cMA: Login URL', style1);
            const checkInput = (inputId, nextBtnId) => {
                const input = document.querySelector(inputId);
                if (input && inputchecked) {
                    click(nextBtnId);
                } else {
                    setTimeout(() => checkInput(inputId, nextBtnId), 50);
                }
            };

            checkInput('#Username', '#nextBtn');
        }
    };

    window.dispatchEvent(new Event('hashchange'));
})();