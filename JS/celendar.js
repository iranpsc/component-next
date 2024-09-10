// انتخاب همه عناصر با کلاس "day"
const days = document.querySelectorAll('.day');

// اضافه کردن event listener به هر روز
days.forEach(day => {
    day.addEventListener('click', () => {
        // حذف کلاس زرد از همه روزها
        days.forEach(d => d.classList.remove('bg-[#FFC70033]'));
        days.forEach(d => d.classList.remove('text-[#FFC700]'));

        // اضافه کردن کلاس زرد به روزی که کلیک شده
        day.classList.add('bg-[#FFC70033]');
        day.classList.add('text-[#FFC700]');

    });
});

// اسکریپت برای تقویم اول
const showMonth = document.getElementById("showMonth");
const calendarMonth = document.getElementById("calendarMonth");

const showYears = document.getElementById("showYears");
const calendarYears = document.getElementById("calendarYears");

const calendarMonthSecond = document.getElementById("calendarMonthSecond");

// نمایش تقویم ماه اول با کلیک بر روی دکمه
showMonth.addEventListener("click", function (event) {
    event.stopPropagation();
    // بستن تقویم دوم ماه در صورت باز بودن
    if (!calendarMonthSecond.classList.contains("hidden")) {
        calendarMonthSecond.classList.add("opacity-0");
        calendarMonthSecond.classList.remove("opacity-100");
        setTimeout(() => {
            calendarMonthSecond.classList.add("hidden");
        }, 200); 
    }
    if (!calendarYears.classList.contains("hidden")) {
        calendarYears.classList.add("opacity-0");
        calendarYears.classList.remove("opacity-100");
        setTimeout(() => {
            calendarYears.classList.add("hidden");
        }, 200); 
    }
    calendarMonth.classList.toggle("hidden");
    setTimeout(() => {
        calendarMonth.classList.toggle("opacity-0");
        calendarMonth.classList.toggle("opacity-100");
    }, 50); // تاخیر اندکی اضافه کنید
});

// نمایش تقویم سال‌ها اول با کلیک بر روی دکمه
showYears.addEventListener("click", function (event) {
    event.stopPropagation();
    if (!calendarMonth.classList.contains("hidden")) {
        calendarMonth.classList.add("opacity-0");
        calendarMonth.classList.remove("opacity-100");
        setTimeout(() => {
            calendarMonth.classList.add("hidden");
        }, 200); 
    }
    calendarYears.classList.toggle("hidden");
    setTimeout(() => {
        calendarYears.classList.toggle("opacity-0");
        calendarYears.classList.toggle("opacity-100");
    }, 50); // تاخیر اندکی اضافه کنید
});

// بستن تقویم‌ها با کلیک در خارج از تقویم
document.addEventListener("click", function (e) {
    if (!calendarMonth.contains(e.target) && !showMonth.contains(e.target)) {
        if (!calendarMonth.classList.contains("hidden")) {
            calendarMonth.classList.add("opacity-0");
            calendarMonth.classList.remove("opacity-100");
            setTimeout(() => {
                calendarMonth.classList.add("hidden");
            }, 200); 
        }
    }
    if (!calendarYears.contains(e.target) && !showYears.contains(e.target)) {
        if (!calendarYears.classList.contains("hidden")) {
            calendarYears.classList.add("opacity-0");
            calendarYears.classList.remove("opacity-100");
            setTimeout(() => {
                calendarYears.classList.add("hidden");
            }, 200); 
        }
    }
    if (!calendarMonthSecond.contains(e.target)) {
        if (!calendarMonthSecond.classList.contains("hidden")) {
            calendarMonthSecond.classList.add("opacity-0");
            calendarMonthSecond.classList.remove("opacity-100");
            setTimeout(() => {
                calendarMonthSecond.classList.add("hidden");
            }, 200); 
        }
    }
});

// بستن تقویم‌ها با کلیک بر روی هر ماه یا سال
const months = document.querySelectorAll(".month");
months.forEach(month => {
    month.addEventListener("click", function () {
        calendarMonth.classList.add("opacity-0");
        calendarMonth.classList.remove("opacity-100");
        setTimeout(() => {
            calendarMonth.classList.add("hidden");
        }, 200); 
    });
});

const monthsSecond = document.querySelectorAll(".monthSecond");
monthsSecond.forEach(month => {
    month.addEventListener("click", function () {
        calendarMonthSecond.classList.add("opacity-0");
        calendarMonthSecond.classList.remove("opacity-100");
        setTimeout(() => {
            calendarMonthSecond.classList.add("hidden");
        }, 200); 
    });
});

const years = document.querySelectorAll(".years");
years.forEach(year => {
    year.addEventListener("click", function () {
        calendarYears.classList.add("opacity-0");
        calendarYears.classList.remove("opacity-100");
        setTimeout(() => {
            calendarYears.classList.add("hidden");
            // نمایش تقویم دوم بعد از کلیک بر روی سال
            setTimeout(() => {
                calendarMonthSecond.classList.remove("hidden");
                setTimeout(() => {
                    calendarMonthSecond.classList.remove("opacity-0");
                    calendarMonthSecond.classList.add("opacity-100");
                }, 50); // تاخیر اندکی اضافه کنید
            }, 50); // تاخیر اندکی اضافه کنید تا از لگ جلوگیری شود
        }, 200); 
    });
});



























document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.addEventListener('click', () => {
            // Reset background color for all items
            items.forEach(i => i.style.backgroundColor = '');

            // Set background color for the clicked item
            item.style.backgroundColor = '#000000';
        });
    });
});





document.getElementById("show-more").addEventListener("click", function () {
    // متن جدیدی که به متن فعلی اضافه می‌شود
    const additionalText = " این یک  نمونه است.";

    // اضافه کردن متن جدید به محتوای فعلی
    const textContent = document.getElementById("text-content");
    textContent.innerHTML = textContent.innerHTML.replace(this.outerHTML, '') + additionalText;

    // حذف دکمه مشاهده بیشتر بعد از کلیک
    this.remove();
});








document.getElementById("show-more").addEventListener("click", function () {
    // متن جدیدی که به متن فعلی اضافه می‌شود
    const additionalText = " این یک  نمونه است.";

    // اضافه کردن متن جدید به محتوای فعلی
    const textContent = document.getElementById("text-content");
    textContent.innerHTML = textContent.innerHTML.replace(this.outerHTML, '') + additionalText;

    // حذف دکمه مشاهده بیشتر بعد از کلیک
    this.remove();
});





document.getElementById("show-more2").addEventListener("click", function () {
    // متن جدیدی که به متن فعلی اضافه می‌شود
    const additionalText = " ایند در متخصصان شرایط موجود شرایط تمام و آینده که، با هدف متنوع تکنولوژی سخت تکنولوژی ایپسوم و زمان ایپسوم ابزاروم است.";

    // اضافه کردن متن جدید به محتوای فعلی
    const textContent = document.getElementById("text-content2");
    textContent.innerHTML = textContent.innerHTML.replace(this.outerHTML, '') + additionalText;

    // حذف دکمه مشاهده بیشتر بعد از کلیک
    this.remove();
});










// شروع تایمر اول

// Set the dates we're counting down to
const startDate = new Date("sep 20, 2024 12:00:00").getTime();
const endDate = new Date("sep 30, 2024 12:00:00").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();

    // Calculate distances for start and end
    const startDistance = startDate - now;
    const endDistance = endDate - now;

    // Start countdown calculations
    const startDays = Math.floor(startDistance / (1000 * 60 * 60 * 24));
    const startHours = Math.floor((startDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const startMinutes = Math.floor((startDistance % (1000 * 60 * 60)) / (1000 * 60));
    const startSeconds = Math.floor((startDistance % (1000 * 60)) / 1000);

    // End countdown calculations
    const endDays = Math.floor(endDistance / (1000 * 60 * 60 * 24));
    const endHours = Math.floor((endDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const endMinutes = Math.floor((endDistance % (1000 * 60 * 60)) / (1000 * 60));
    const endSeconds = Math.floor((endDistance % (1000 * 60)) / 1000);

    // Update start countdown display
    document.getElementById("start-days").innerHTML = startDays < 10 ? '0' + startDays : startDays;
    document.getElementById("start-hours").innerHTML = startHours < 10 ? '0' + startHours : startHours;
    document.getElementById("start-minutes").innerHTML = startMinutes < 10 ? '0' + startMinutes : startMinutes;
    document.getElementById("start-seconds").innerHTML = startSeconds < 10 ? '0' + startSeconds : startSeconds;

    // Update end countdown display
    document.getElementById("end-days").innerHTML = endDays < 10 ? '0' + endDays : endDays;
    document.getElementById("end-hours").innerHTML = endHours < 10 ? '0' + endHours : endHours;
    document.getElementById("end-minutes").innerHTML = endMinutes < 10 ? '0' + endMinutes : endMinutes;
    document.getElementById("end-seconds").innerHTML = endSeconds < 10 ? '0' + endSeconds : endSeconds;

    // Check if the start countdown is over
    if (startDistance < 0) {
        document.getElementById("start-days").innerHTML = "00";
        document.getElementById("start-hours").innerHTML = "00";
        document.getElementById("start-minutes").innerHTML = "00";
        document.getElementById("start-seconds").innerHTML = "00";
    }

    // Check if the end countdown is over
    if (endDistance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("end-days").innerHTML = "00";
        document.getElementById("end-hours").innerHTML = "00";
        document.getElementById("end-minutes").innerHTML = "00";
        document.getElementById("end-seconds").innerHTML = "00";
    }
}, 1000);


// پایان تایمر اول



// شروع تایمر دوم
function initializeTimer(startDate, endDate, startDaysId, startHoursId, startMinutesId, startSecondsId, endDaysId, endHoursId, endMinutesId, endSecondsId) {
    // Update the countdown every 1 second
    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();

        // Calculate distances for start and end
        const startDistance = new Date(startDate).getTime() - now;
        const endDistance = new Date(endDate).getTime() - now;

        // Start countdown calculations
        const startDays = Math.floor(startDistance / (1000 * 60 * 60 * 24));
        const startHours = Math.floor((startDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const startMinutes = Math.floor((startDistance % (1000 * 60 * 60)) / (1000 * 60));
        const startSeconds = Math.floor((startDistance % (1000 * 60)) / 1000);

        // End countdown calculations
        const endDays = Math.floor(endDistance / (1000 * 60 * 60 * 24));
        const endHours = Math.floor((endDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const endMinutes = Math.floor((endDistance % (1000 * 60 * 60)) / (1000 * 60));
        const endSeconds = Math.floor((endDistance % (1000 * 60)) / 1000);

        // Update start countdown display
        document.getElementById(startDaysId).innerHTML = startDays < 10 ? '0' + startDays : startDays;
        document.getElementById(startHoursId).innerHTML = startHours < 10 ? '0' + startHours : startHours;
        document.getElementById(startMinutesId).innerHTML = startMinutes < 10 ? '0' + startMinutes : startMinutes;
        document.getElementById(startSecondsId).innerHTML = startSeconds < 10 ? '0' + startSeconds : startSeconds;

        // Update end countdown display
        document.getElementById(endDaysId).innerHTML = endDays < 10 ? '0' + endDays : endDays;
        document.getElementById(endHoursId).innerHTML = endHours < 10 ? '0' + endHours : endHours;
        document.getElementById(endMinutesId).innerHTML = endMinutes < 10 ? '0' + endMinutes : endMinutes;
        document.getElementById(endSecondsId).innerHTML = endSeconds < 10 ? '0' + endSeconds : endSeconds;

        // Check if the start countdown is over
        if (startDistance < 0) {
            document.getElementById(startDaysId).innerHTML = "00";
            document.getElementById(startHoursId).innerHTML = "00";
            document.getElementById(startMinutesId).innerHTML = "00";
            document.getElementById(startSecondsId).innerHTML = "00";
        }

        // Check if the end countdown is over
        if (endDistance < 0) {
            clearInterval(countdownInterval);
            document.getElementById(endDaysId).innerHTML = "00";
            document.getElementById(endHoursId).innerHTML = "00";
            document.getElementById(endMinutesId).innerHTML = "00";
            document.getElementById(endSecondsId).innerHTML = "00";
        }
    }, 1000);
}

// Initialize the timer with specific IDs for the second timer
initializeTimer("sep 20, 2024 15:00:00", "sep 22, 2024 15:00:00", "start-days-2", "start-hours-2", "start-minutes-2", "start-seconds-2", "end-days-2", "end-hours-2", "end-minutes-2", "end-seconds-2");









// پایان تایمر دوم

document.addEventListener('DOMContentLoaded', function () {
    // پیدا کردن تمام لایک‌ها و دیسلایک‌ها
    const likeButtons = document.querySelectorAll('.like');
    const dislikeButtons = document.querySelectorAll('.dislike');

    likeButtons.forEach((likeButton, index) => {
        const dislikeButton = dislikeButtons[index];
        const likeCountElement = likeButton.nextElementSibling;
        const dislikeCountElement = dislikeButton.nextElementSibling;

        let likeCount = parseInt(likeCountElement.textContent);
        let dislikeCount = parseInt(dislikeCountElement.textContent);

        likeButton.addEventListener('click', function () {
            if (likeButton.classList.contains('active')) {
                // اگر کاربر قبلاً لایک کرده و دوباره کلیک می‌کند، لایک خود را حذف می‌کند
                likeCount -= 1;
                likeButton.classList.remove('active');
            } else {
                // اگر قبلاً دیسلایک کرده و حالا لایک می‌کند، دیسلایک را حذف و لایک اضافه می‌کند
                if (dislikeButton.classList.contains('active')) {
                    dislikeCount -= 1;
                    dislikeButton.classList.remove('active');
                }
                likeCount += 1;
                likeButton.classList.add('active');
            }
            likeCountElement.textContent = likeCount;
            dislikeCountElement.textContent = dislikeCount;
        });

        dislikeButton.addEventListener('click', function () {
            if (dislikeButton.classList.contains('active')) {
                // اگر کاربر قبلاً دیسلایک کرده و دوباره کلیک می‌کند، دیسلایک خود را حذف می‌کند
                dislikeCount -= 1;
                dislikeButton.classList.remove('active');
            } else {
                // اگر قبلاً لایک کرده و حالا دیسلایک می‌کند، لایک را حذف و دیسلایک اضافه می‌کند
                if (likeButton.classList.contains('active')) {
                    likeCount -= 1;
                    likeButton.classList.remove('active');
                }
                dislikeCount += 1;
                dislikeButton.classList.add('active');
            }
            likeCountElement.textContent = likeCount;
            dislikeCountElement.textContent = dislikeCount;
        });
    });
});






function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const isSidebarOpen = sidebar.classList.contains('lg:w-[82px]');
  
    if (isSidebarOpen) {
        // حالت باز شدن
        sidebar.classList.remove('lg:w-[82px]');
        sidebar.classList.add('lg:w-[322px]');
    } else {
        // حالت بسته شدن
        sidebar.classList.remove('lg:w-[322px]');
        sidebar.classList.add('lg:w-[82px]');
    }
}
