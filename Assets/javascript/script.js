//dislay the day at the top of the page (moment and changing the DOM) 

//function to color timeblock
    //checks current hour vs time displayed in timblocks and colors accoringly

//function to save entered content into local storage
    //probably will be on form submit

//function get local storage items and display them in proper timeblocks (called in init())

//init ()
    //loads items from local storage
    //diplays them on page
    
//

var dayDisplayEl = document.querySelector('#currentDay');
var currentDay = moment().format('MMM DD, YYYY');
var calenderInputEl = document.querySelector('.calenderInput');
var submitListenerEl = document.querySelector('#calenderBlock');
var activityStorage;
var test = "test";
localStorage.setItem("activity", test);

function timeCheck(){
    var currentTime = moment();
    console.log(currentTime);
    if(currentTime.isBetween(9,10, 'HH')){
        console.log(currentTime);
        var nineEl = document.querySelector('#nineam');
        var nineBlockEl = document.querySelector('#nineBlock');
        nineEl.style.backgroundColor = 'red';
        nineBlockEl.style.backgroundColor = 'red';  
     }else if(currentTime.isBetween(10,11, 'HH')){
        var tenEl = document.querySelector('#tenam');
        var tenBlockEl = document.querySelector('#tenBlock');
        tenEl.style.backgroundColor = 'red';
        tenBlockEl.style.backgroundColor = 'red';  
    }else if(currentTime.isBetween(11,12, 'HH')){
        var elevenEl = document.querySelector('#elevenam');
        var elevenBlockEl = document.querySelector('#elevenBlock');
        elevenEl.style.backgroundColor = 'red';
        elevenBlockEl.style.backgroundColor = 'red';  
    }
}


function displayTime(){
    dayDisplayEl.textContent = currentDay;
}

function getLocalStorageItems(){
    activityStorage = localStorage.getItem("activity");
}

function displayItems(){
    calenderInputEl.textContent = activityStorage;
}

function init() {
    displayTime();
    getLocalStorageItems();
    displayItems();
    timeCheck();
}

init();
setInterval(timeCheck, 60000);

submitListenerEl.addEventListener('submit', function(event){
    event.preventDefault();

    var timeSlotSubmitted = event.target.getAttribute('data-button');
    var inputData;
    if(timeSlotSubmitted === '9am'){
        inputData = document.getElementById('#nineam');
        localStorage.setItem('activity9', timeSlotSubmitted);
    }else if(timeSlotSubmitted === '10am'){
        inputData = document.querySelector('#tenam');
        localStorage.setItem('activity10', timeSlotSubmitted);
    }else if(timeSlotSubmitted === '11am'){
        inputData = document.querySelector('#elevenam');
        localStorage.setItem('activity11', timeSlotSubmitted);
    }else if(timeSlotSubmitted === '12pm'){
        inputData = document.querySelector('#twelvepm');
        localStorage.setItem('activity12', timeSlotSubmitted);
    }else if(timeSlotSubmitted === '1pm'){
        inputData = document.querySelector('#onepm');
        localStorage.setItem('activity1', timeSlotSubmitted);
    }else if(timeSlotSubmitted === '2pm'){
        inputData = document.querySelector('#twopm');
        localStorage.setItem('activity2', timeSlotSubmitted);
    }else if(timeSlotSubmitted === '3pm'){
        inputData = document.querySelector('#threeam');
        localStorage.setItem('activity3', timeSlotSubmitted);
    }else if(timeSlotSubmitted === '4pm'){
        inputData = document.querySelector('#fouram');
        localStorage.setItem('activity4', timeSlotSubmitted);;
    }else if(timeSlotSubmitted === '5pm'){
        inputData = document.querySelector('#fivepm');
        localStorage.setItem('activity5', timeSlotSubmitted);
    }
    
})
