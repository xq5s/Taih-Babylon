// الانتظار حتى يتم تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {

    // اختيار النموذج والقائمة من الصفحة
    const form = document.getElementById('lostPersonForm');
    const lostPersonsList = document.getElementById('lostPersonsList');

    // الاستماع إلى حدث إرسال النموذج (عند الضغط على الزر)
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // منع الصفحة من التحديث التلقائي

        // جمع البيانات من كل الحقول
        const id = document.getElementById('id').value;
        const name = document.getElementById('name').value;
        const governorate = document.getElementById('governorate').value;
        const age = document.getElementById('age').value;
        const phone = document.getElementById('phone').value;
        const status = document.getElementById('status').value;
        const notes = document.getElementById('notes').value;

        // التحقق من أن الحقول المطلوبة ليست فارغة
        if (id === '' || name === '') {
            alert('الرجاء تعبئة حقل الترقيم والاسم!');
            return;
        }

        // إنشاء عنصر جديد لعرض البيانات
        const newLostPerson = document.createElement('div');
        newLostPerson.classList.add('lost-person-item');
        newLostPerson.innerHTML = `
            <h3>${name}</h3>
            <p><strong>ت الترقيم:</strong> ${id}</p>
            <p><strong>المحافظة:</strong> ${governorate}</p>
            <p><strong>العمر:</strong> ${age}</p>
            <p><strong>رقم الهاتف:</strong> ${phone}</p>
            <p><strong>موقف التائه:</strong> ${status}</p>
            <p><strong>الملاحظات:</strong> ${notes}</p>
        `;

        // إضافة العنصر الجديد إلى قائمة العرض
        lostPersonsList.appendChild(newLostPerson);

        // مسح الحقول بعد الإضافة
        form.reset();
    });
});
