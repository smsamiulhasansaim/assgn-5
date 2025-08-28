1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans: getElementById selects a single element by its ID. getElementsByClassName selects all elements with a specific class and returns an HTMLCollection. querySelector returns the first element that matches a CSS selector, while querySelectorAll returns all matching elements as a NodeList. The key difference is that getElementById targets one element, getElementsByClassName can target multiple elements, and querySelector/querySelectorAll allow flexible selection using any CSS selector.

2. How do you **create and insert a new element into the DOM**?
Ans: To create and insert a new element into the DOM, first use document.createElement("tagName") to create the element. Then, you can set its properties, such as textContent, id, or className. Finally, insert it into the DOM using methods like appendChild(parentElement) to add it as the last child, or insertBefore(newElement, referenceElement) to place it before a specific element. This process allows you to dynamically add elements to the web page.

3. What is **Event Bubbling** and how does it work?
Ans: Event bubbling is a way that events propagate in the DOM from the innermost element to the outer elements. When an event occurs on an element, it first runs the event handler on that element, then moves up to its parent, then to the grandparent, and so on, until it reaches the root of the document. This allows parent elements to react to events triggered by their child elements. Event bubbling can be controlled or stopped using methods like event.stopPropagation().

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans: Event delegation is a technique in JavaScript where a single event listener is added to a parent element to handle events on its child elements. Instead of adding separate event listeners to each child, the parent listens for events that bubble up from the children and determines which child triggered the event using properties like event.target. This approach is useful because it reduces memory usage, simplifies code, and allows handling events on dynamically added elements without attaching new listeners.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans:The preventDefault() method in JavaScript stops the browser’s default behavior for an event, such as preventing a form from submitting or a link from navigating. On the other hand, stopPropagation() stops the event from bubbling up or capturing down the DOM tree, preventing parent or ancestor elements from receiving the event. While preventDefault() affects the action associated with the event, stopPropagation() controls the event flow in the DOM.

<!-- 
১. getElementById, getElementsByClassName, এবং querySelector / querySelectorAll এর মধ্যে পার্থক্য:
getElementById একটি element রিটার্ন করে যার নির্দিষ্ট ID আছে। getElementsByClassName সব element রিটার্ন করে যাদের নির্দিষ্ট class আছে এবং এটি একটি HTMLCollection দেয়। querySelector CSS selector ব্যবহার করে প্রথম matching element রিটার্ন করে, আর querySelectorAll সব matching element রিটার্ন করে যা একটি NodeList হয়। মূল পার্থক্য হলো, ID দিয়ে একটি element পাওয়া যায়, class দিয়ে একাধিক element পাওয়া যায়, এবং querySelector / querySelectorAll দিয়ে CSS selector অনুযায়ী element খুঁজে পাওয়া যায়।

২. কীভাবে DOM এ নতুন element তৈরি ও insert করা যায়:
DOM এ নতুন element তৈরি করতে প্রথমে document.createElement("tagName") ব্যবহার করা হয়। তারপর element এর properties যেমন textContent, id, বা className সেট করা যায়। শেষমেশ এটি DOM এ insert করতে appendChild(parentElement) ব্যবহার করে element কে parent এর শেষ child হিসেবে যোগ করা যায়, অথবা insertBefore(newElement, referenceElement) ব্যবহার করে নির্দিষ্ট element এর আগে রাখা যায়। এটি ওয়েবপেজে dynamicভাবে element যোগ করার জন্য ব্যবহৃত হয়।

৩. Event Bubbling কী এবং এটি কীভাবে কাজ করে:
Event bubbling হলো DOM এ event প্রপাগেশন বা বিস্তার করার একটি পদ্ধতি, যেখানে event innermost element থেকে শুরু করে outer elements পর্যন্ত পৌঁছে। যখন কোনো element এ event ঘটে, এটি প্রথম সেই element এ handler চালায়, তারপর parent element, grandparent element এবং অবশেষে document root পর্যন্ত চলে যায়। এটি parent elements কে child elements দ্বারা trigger করা events handle করার সুযোগ দেয়। Event bubbling event.stopPropagation() দিয়ে নিয়ন্ত্রণ বা বন্ধ করা যায়।

৪. Event Delegation কী এবং এটি কেন গুরুত্বপূর্ণ:
Event delegation হলো JavaScript এর একটি পদ্ধতি যেখানে parent element এ একটি single event listener বসানো হয়, যা তার child elements এর events handle করে। Child element গুলিতে আলাদা listener বসানোর পরিবর্তে parent element bubbling হওয়া events দেখবে এবং event.target ব্যবহার করে কোন child element থেকে event এসেছে তা নির্ধারণ করবে। এটি memory কমায়, কোডকে সহজ করে এবং dynamically যোগ হওয়া elements এর events handle করতে সাহায্য করে।

৫. preventDefault() এবং stopPropagation() এর মধ্যে পার্থক্য:
preventDefault() method browser এর default behavior বন্ধ করে, যেমন form submit বা link navigation। অন্যদিকে, stopPropagation() method event এর bubbling বা capturing বন্ধ করে দেয়, যাতে parent বা ancestor elements event পায় না। সহজভাবে বলতে গেলে, preventDefault() event এর action বন্ধ করে, আর stopPropagation() event এর DOM এ flow নিয়ন্ত্রণ করে।
 -->