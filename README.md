# MySchoolApp-Automation 🤖
In [Violentmonkey](https://violentmonkey.github.io/get-it/), install the newest version with this link: [`https://raw.githubusercontent.com/0dpe/MySchoolApp-Automation/main/MySchoolApp-Automation.js`](https://raw.githubusercontent.com/0dpe/MySchoolApp-Automation/main/MySchoolApp-Automation.js).
## Functionalities 🦾
- On the login page, clicks the **Next** button as soon as the email address field contains '**@**' and the **Remember me** checkbox is checked.
- In Assignment Center, rearranges by **Due** date, switches to **Month** view, and filters out **Completed** assignments. 
- Works on any Blackbaud MySchoolApp student portal[^1].
## Dev Notes 🤡
Version 1.0 uses a polling loop to check for the existance of elements to click them, which can sometimes cause infinite loops.

[^1]: Matches for `https://*.myschoolapp.com/app*`
