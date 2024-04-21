# MySchoolApp-Automation 🤖
In [Violentmonkey](https://violentmonkey.github.io/get-it/), install the newest version with this link: [`https://raw.githubusercontent.com/0dpe/MySchoolApp-Automation/main/MySchoolApp-Automation.js`](https://raw.githubusercontent.com/0dpe/MySchoolApp-Automation/main/MySchoolApp-Automation.js).
## Functionalities 🦾
- On the login page, clicks the **Next** button as soon as the email address field contains '**@**' and the **Remember me** checkbox is checked.
- In Assignment Center, rearranges by **Due** date, switches to **Month** view, and filters out **Completed** assignments. 
- Works on any Blackbaud MySchoolApp student portal[^1].
## Dev Notes 🤡
Version 1.0 uses a polling loop (`setTimeout`) to check for the existence of elements to click them, which can sometimes cause **performance issues** and **infinite loops**. Workarounds I've tried that don't work: 
- [`addEventListener("DOMContentLoaded", (event) => {})`](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event) fires way too early, likely even before the UserScript runs.
- [`addEventListener("load", (event) => {})`](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event) also fires too early, before buttons can be clicked.
- [`addEventListener("readystatechange", (event) => {})`](https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange_event) with [`document.readyState === "interactive"`](https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState#readystatechange_as_an_alternative_to_domcontentloaded_event) yields similar results as [`addEventListener("DOMContentLoaded", (event) => {})`](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event); with [`document.readyState === "complete"`](https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState#readystatechange_as_an_alternative_to_load_event) yields similar results as [`addEventListener("load", (event) => {})`](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)

[^1]: Matches for `https://*.myschoolapp.com/app*`
