function storeEvent(hour, event) {
    localStorage.getItem(hour);
    localStorage.setItem(hour, event);
};

// 0900
var event0900 = document.querySelector("#event0900");
var lockButton0900 = document.querySelector("#lockButton0900");
var clearButton0900 = document.querySelector("#clearButton0900");
var time0900 = document.querySelector("#time0900");

lockButton0900.addEventListener('click', function(event){
    event.preventDefault;
    storeEvent(time0900.textContent, event0900.value);
});

clearButton0900.addEventListener('click', function(event){
    event.preventDefault(event);
    event0900.value = null;
})

event0900.value = localStorage.getItem(time0900.textContent);

// 1000
var event1000 = document.querySelector("#event1000");
var lockButton1000 = document.querySelector("#lockButton1000");
var clearButton1000 = document.querySelector("#clearButton1000");
var time1000 = document.querySelector("#time1000");

lockButton1000.addEventListener('click', function(event){
    event.preventDefault;
    storeEvent(time1000.textContent, event1000.value);
});

clearButton1000.addEventListener('click', function(event){
    event.preventDefault(event);
    event1000.value = null;
})

event1000.value = localStorage.getItem(time1000.textContent);

// 1100
var event1100 = document.querySelector("#event1100");
var lockButton1100 = document.querySelector("#lockButton1100");
var clearButton1100 = document.querySelector("#clearButton1100");
var time1100 = document.querySelector("#time1100");

lockButton1100.addEventListener('click', function(event){
    event.preventDefault;
    storeEvent(time1100.textContent, event1100.value);
});

clearButton1100.addEventListener('click', function(event){
    event.preventDefault(event);
    event1100.value = null;
})

event1100.value = localStorage.getItem(time1100.textContent);

// 1200
var event1200 = document.querySelector("#event1200");
var lockButton1200 = document.querySelector("#lockButton1200");
var clearButton1200 = document.querySelector("#clearButton1200");
var time1200 = document.querySelector("#time1200");

lockButton1200.addEventListener('click', function(event){
    event.preventDefault;
    storeEvent(time1200.textContent, event1200.value);
});

clearButton1200.addEventListener('click', function(event){
    event.preventDefault(event);
    event1200.value = null;
})

event1200.value = localStorage.getItem(time1200.textContent);

// 1300
var event1300 = document.querySelector("#event1300");
var lockButton1300 = document.querySelector("#lockButton1300");
var clearButton1300 = document.querySelector("#clearButton1300");
var time1300 = document.querySelector("#time1300");

lockButton1300.addEventListener('click', function(event){
    event.preventDefault;
    storeEvent(time1300.textContent, event1300.value);
});

clearButton1300.addEventListener('click', function(event){
    event.preventDefault(event);
    event1300.value = null;
})

event1300.value = localStorage.getItem(time1300.textContent);

// 1400
var event1400 = document.querySelector("#event1400");
var lockButton1400 = document.querySelector("#lockButton1400");
var clearButton1400 = document.querySelector("#clearButton1400");
var time1400 = document.querySelector("#time1400");

lockButton1400.addEventListener('click', function(event){
    event.preventDefault;
    storeEvent(time1400.textContent, event1400.value);
});

clearButton1400.addEventListener('click', function(event){
    event.preventDefault(event);
    event1400.value = null;
})

event1400.value = localStorage.getItem(time1400.textContent);

// 1500
var event1500 = document.querySelector("#event1500");
var lockButton1500 = document.querySelector("#lockButton1500");
var clearButton1500 = document.querySelector("#clearButton1500");
var time1500 = document.querySelector("#time1500");

lockButton1500.addEventListener('click', function(event){
    event.preventDefault;
    storeEvent(time1500.textContent, event1500.value);
});

clearButton1500.addEventListener('click', function(event){
    event.preventDefault(event);
    event1500.value = null;
})

event1500.value = localStorage.getItem(time1500.textContent);

// 1600
var event1600 = document.querySelector("#event1600");
var lockButton1600 = document.querySelector("#lockButton1600");
var clearButton1600 = document.querySelector("#clearButton1600");
var time1600 = document.querySelector("#time1600");

lockButton1600.addEventListener('click', function(event){
    event.preventDefault;
    storeEvent(time1600.textContent, event1600.value);
});

clearButton1600.addEventListener('click', function(event){
    event.preventDefault(event);
    event1600.value = null;
})

event1600.value = localStorage.getItem(time1600.textContent);

// 1700
var event1700 = document.querySelector("#event1700");
var lockButton1700 = document.querySelector("#lockButton1700");
var clearButton1700 = document.querySelector("#clearButton1700");
var time1700 = document.querySelector("#time1700");

lockButton1700.addEventListener('click', function(event){
    event.preventDefault;
    storeEvent(time1700.textContent, event1700.value);
});

clearButton1700.addEventListener('click', function(event){
    event.preventDefault(event);
    event1700.value = null;
})

event1700.value = localStorage.getItem(time1700.textContent);

