/**
 * Created by jyi on 10/1/2016.
 */
(function iife() {
    "use strict";
    var context = null;
    try {
        context = new AudioContext();
    }
    catch (e) {
        // Not supported
        alert("Web Audio API is not supported in this browser.");
    }
}());