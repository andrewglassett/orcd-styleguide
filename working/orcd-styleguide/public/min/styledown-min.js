!function(){function e(e){document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e()})}function a(e,a){a.className+=" sg-hidden";var n=document.createElement("button");n.className="sg-expando sg-expando-reveal",e.appendChild(n),n.addEventListener("click",function(){~a.className.indexOf("sg-hidden")?(a.className=a.className.replace("sg-hidden","sg-visible"),n.className=n.className.replace("sg-expando-reveal","sg-expando-contract")):(a.className=a.className.replace("sg-visible","sg-hidden"),n.className=n.className.replace("sg-expando-contract","sg-expando-reveal"))})}e(function(){for(var e=document.querySelectorAll(".sg-example .sg-code"),n=e.length-1;n>=0;n--){var s=e[n],t=s.parentNode;a(t,s)}})}();