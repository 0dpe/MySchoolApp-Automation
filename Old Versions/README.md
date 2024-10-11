## 1.0
Version 1.0 uses a polling loop (`setTimeout`) with `querySelector` to check for the existence of elements to click them. Although this approach likely works on all types of websites, it sometimes causes performance issues and infinite loops. Using traditional event listeners does not solve the problem because MySchoolApp uses jQuery and dynamically modifies elements.
* [`addEventListener("DOMContentLoaded", (event) => {})`](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event) fires way too early, likely even before the UserScript runs.
  * [`addEventListener("readystatechange", (event) => {})`](https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange_event) with [`document.readyState === "interactive"`](https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState#readystatechange_as_an_alternative_to_domcontentloaded_event) yields similar results.
  * jQuery's [`$(document).ready(function() {})`](https://api.jquery.com/ready/) yields similar results. 
* [`addEventListener("load", (event) => {})`](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event) also fires too early, before the buttons are loaded.
  * [`addEventListener("readystatechange", (event) => {})`](https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange_event) with [`document.readyState === "complete"`](https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState#readystatechange_as_an_alternative_to_load_event) yields similar results.
* jQuery's [`$(document).on("ajaxStop", function() {})`](https://api.jquery.com/ajaxStop/), [`$(document).on("ajaxComplete", function() {})`](https://api.jquery.com/ajaxComplete/), and [`$(document).on("ajaxSuccess", function() {})`](https://api.jquery.com/ajaxSuccess/) seem to never fire.

So, mutation observers are utilized in subsequent versions.
