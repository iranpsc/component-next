
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const isSidebarOpen = sidebar.classList.contains('lg:w-[82px]');

    if (isSidebarOpen) {
        sidebar.classList.remove('lg:w-[82px]');
        sidebar.classList.add('lg:w-[322px]');

    } else {
        sidebar.classList.remove('lg:w-[322px]');
        sidebar.classList.add('lg:w-[82px]');
     

    }

}





document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copy-button');
    const inviteLink = document.getElementById('invite-link');
    const iconbutton = document.getElementById('iconbutton');
    const copyToClipboard = () => {
        // انتخاب متن موجود در فیلد ورودی
        inviteLink.select();
        // اجرای دستور کپی
        document.execCommand('copy');
        // پیام موفقیت آمیز
        copyButton.innerHTML="کپی شد";
    };

    // اتصال تابع کپی به دکمه "کپی لینک دعوت"
    copyButton.addEventListener('click', copyToClipboard);
    iconbutton.addEventListener('click', copyToClipboard);

    // اتصال تابع کپی به خود لینک برای کپی کردن متن در صورت کلیک روی آن
    inviteLink.addEventListener('click', copyToClipboard);
});







const moments = document.querySelectorAll('.moment');

// اضافه کردن event listener به هر روز
moments.forEach(moment => {
    moment.addEventListener('click', function() {
        // حذف کلاس زرد از همه روزها
        moments.forEach(d => {
            d.classList.remove('border-[#FFFFFF]');
            d.classList.remove('text-[#FFFFFF]');
        });

        // اضافه کردن کلاس زرد به روزی که کلیک شده
        this.classList.add('border-[#FFFFFF]');
        this.classList.add('text-[#FFFFFF]');
    });
});


































document.addEventListener('DOMContentLoaded', function() {
    const telegramLink = document.getElementById('telegram-share');
    const whatsAppLink = document.getElementById('whatsApp-share');
    const faceBookLink = document.getElementById('faceBook-share');
    const linkedinLink = document.getElementById('linkedin-share');
    const xLink = document.getElementById('x-share');


    const inviteLink = document.getElementById('invite-link');


    telegramLink.addEventListener('click', function(e) {
        e.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
        const link = inviteLink.value; // دریافت لینک دعوت
        const telegramURL = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
        window.open(telegramURL, '_blank'); // باز کردن لینک تلگرام در یک تب جدید
    });
    whatsAppLink.addEventListener('click', function(e) {
        e.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
        const link = inviteLink.value; // دریافت لینک دعوت
        const whatsAppURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
        window.open(whatsAppURL, '_blank'); // باز کردن لینک تلگرام در یک تب جدید
    });
    faceBookLink.addEventListener('click', function(e) {
        e.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
        const link = inviteLink.value; // دریافت لینک دعوت
        const faceBookLinkURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
        window.open(faceBookLinkURL, '_blank'); // باز کردن لینک تلگرام در یک تب جدید
    });
    linkedinLink.addEventListener('click', function(e) {
        e.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
        const link = inviteLink.value; // دریافت لینک دعوت
        const linkedinLinkURL = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`;
        window.open(linkedinLinkURL, '_blank'); // باز کردن لینک تلگرام در یک تب جدید
    });
    xLink.addEventListener('click', function(e) {
        e.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
        const link = inviteLink.value; // دریافت لینک دعوت
        const xURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}`;
        window.open(xURL, '_blank'); // باز کردن لینک تلگرام در یک تب جدید
    });








});
















document.getElementById('load-more').addEventListener('click', function() {
    const hiddenCards = document.querySelectorAll('#card-container .hidden');
    hiddenCards.forEach(function(card, index) {
        if (index < 10) { // تعداد کارت‌هایی که می‌خواهید در هر بار کلیک نمایش دهید
            card.classList.remove('hidden');
        }
    });

    // اگر دیگر کارت مخفی وجود ندارد، دکمه را مخفی کنید
    if (document.querySelectorAll('#card-container .hidden').length === 0) {
        document.getElementById('load-more').style.display = 'none';
    }
});





// دریافت کانتکست 2D از عنصر canvas با شناسه 'myChart'
const ctx = document.getElementById('myChart').getContext('2d');

// محاسبه مجموع امتیازهای هر مجموعه داده
function calculateSum(data) {
    return data.reduce((acc, curr) => acc + curr, 0);
}

// ایجاد چارت جدید با استفاده از Chart.js
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'].map(date => {
            return date.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
        }),
        datasets: [
            {
                label: '',
                data: [0, 1, 2, 3, 5, 10, 12, 13, 14, 15],
                borderColor: '#0066FF',
                backgroundColor: '#52545C',
                fill: false,
                borderWidth: 0.5,
                
                pointRadius: 12,
                pointBackgroundColor: 'rgba(0, 102, 255, 0.2)',
                pointBorderColor: '#0066FF',
                pointBorderWidth: 1
            },
            
            {
                label: '',
                data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
                borderColor: '#FFC700',
                backgroundColor: '#52545C',
                fill: false,
                borderWidth: 0.5,
                pointRadius: 12,
                pointBackgroundColor: 'rgba(255, 199, 0, 0.2)',
                pointBorderColor: '#FFC700',
                pointBorderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: {
                    color: 'white',
                    font: {
                        size: 14,
                        family: 'AzarMehrFD'
                    }
                },
                grid: {
                    color: '#484850',
                    drawOnChartArea: true,
                    drawTicks: false,
                    drawBorder: false,
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    display: false,
                    color: 'white',
                    font: {
                        size: 14,
                        family: 'AzarMehrFD'
                    }
                },
                grid: {
                    color: '#484850',
                    drawBorder: false,
                    drawOnChartArea: true,
                    drawTicks: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10
            }
        }
    }
});

// توابع برای تغییر داده‌های چارت و برچسب‌های محور x
function updateChart(labels, data) {
    myChart.data.labels = labels;
    myChart.data.datasets[0].data = data[0];
    myChart.data.datasets[1].data = data[1];
    myChart.update();

    // محاسبه مجموع جدید و به‌روزرسانی نمایش
    let totalDataset1 = calculateSum(data[0]);
    let totalDataset2 = calculateSum(data[1]);

    document.getElementById('invite').innerHTML = totalDataset1;
    document.getElementById('reward').innerHTML = totalDataset2;
    
}

// داده‌ها و برچسب‌های مختلف برای هر بازه زمانی
const dailyData = {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'].map(date => date.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])),
    data: [
        [10, 15, 20, 25, 30, 35, 40, 55, 88, 99],
        [5, 10, 15, 20, 25, 30, 35, 35, 35, 35]
    ]
};

const weeklyData = {
    labels: ['', 'شنبه ', '', 'یکشنبه', '', 'دوشنبه', '', 'سه شنبه', '', 'چهارشنبه', '', 'پنجشنبه', '', 'جمعه', ''].map(date => date.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])),
    data: [
        [50, 100, 150, 200, 250, 144, 220, 151, 311, 180],
        [25, 50, 75, 100, 150, 100, 70, 50, 170, 125]
    ]
};

const monthlyData = {
    labels: ['','فروردین', '','اردیبهشت', '','خرداد','', 'تیر', '','مرداد', '','شهریور','', 'مهر', '','ابان','', 'اذر', '','دی', '','بهمن','', 'اسفند',''].map(date => date.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])),
    data: [
        [50, 100, 150, 200, 250, 144, 220, 151, 311, 130],
        [100, 200, 300, 400, 410, 420, 430, 440, 450, 460]
    ]
};

const yearlyData = {
    labels: ['','1401','', '1402','', '1403','',].map(date => date.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])),
    data: [
        [50, 100, 150, 200, 250, 144, 220, 151, 311, 130],
        [500, 1000, 1500, 2000, 2100, 2300, 2500, 2500, 3000, 3100]
    ]
};

// مقداردهی اولیه
updateChart(dailyData.labels, dailyData.data);

// اتصال دکمه‌ها به تغییرات چارت و برچسب‌های محور x
document.getElementById('daily').addEventListener('click', () => updateChart(dailyData.labels, dailyData.data));
document.getElementById('weekly').addEventListener('click', () => updateChart(weeklyData.labels, weeklyData.data));
document.getElementById('monthly').addEventListener('click', () => updateChart(monthlyData.labels, monthlyData.data));
document.getElementById('yearly').addEventListener('click', () => updateChart(yearlyData.labels, yearlyData.data));


// تابع برای تنظیم pointRadius
function updatePointRadius() {
    const isSmallScreen = window.matchMedia("(max-width: 640px)").matches;
    const isMediumScreen = window.matchMedia("(max-width: 768px)").matches;
    const isLargeScreen = window.matchMedia("(max-width: 1024px)").matches;

    // تنظیم pointRadius بر اساس عرض صفحه
    myChart.data.datasets.forEach((dataset, index) => {
        if (isSmallScreen) {
            dataset.pointRadius = 4;
        } else if (isMediumScreen) {
            dataset.pointRadius = 7;
        } else if (isLargeScreen) {
            dataset.pointRadius = 10;
        } else {
            dataset.pointRadius = 12; // حالت پیش‌فرض برای عرض‌های بزرگتر از 1024px
        }
    });

    // به‌روزرسانی چارت
    myChart.update();
}

// فراخوانی تابع هنگام بارگذاری صفحه
updatePointRadius();

// اضافه کردن listener برای به‌روزرسانی pointRadius هنگام تغییر اندازه صفحه
window.addEventListener('resize', updatePointRadius);



