**Version 1.0** uses a polling loop (`setTimeout`) with `querySelector` to check for the existence of elements to click them. Although this approach likely works on all types of websites, it sometimes causes **performance issues** and **infinite loops**. 

To fix this, I've tried **event listeners**, which all fail because MySchoolApp uses jQuery and **dynamically** modifies elements.
- [`addEventListener("DOMContentLoaded", (event) => {})`](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event) fires way too early, likely even before the UserScript runs.
- [`addEventListener("load", (event) => {})`](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event) also fires too early, before the buttons are loaded.
- [`addEventListener("readystatechange", (event) => {})`](https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange_event) with [`document.readyState === "interactive"`](https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState#readystatechange_as_an_alternative_to_domcontentloaded_event) yields similar results as [`addEventListener("DOMContentLoaded", (event) => {})`](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event); [`document.readyState === "complete"`](https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState#readystatechange_as_an_alternative_to_load_event) yields similar results as [`addEventListener("load", (event) => {})`](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event).
- jQuery's [`$( document ).ready()`](https://learn.jquery.com/using-jquery-core/document-ready/) and [`$( window ).on( "load", function() {})`](https://learn.jquery.com/using-jquery-core/document-ready/) yield similar results as [`addEventListener("load", (event) => {})`](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event).

***

Some other methods that might give even better performance: 
- Intersection observers
- Event delegation
- Promises, ajaxComplete, or other featuers of jQuery
