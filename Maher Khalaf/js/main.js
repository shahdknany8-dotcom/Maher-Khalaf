// فتح المودال
document.querySelectorAll(".open-modal").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const modal = document.getElementById(targetId);
    if (modal) modal.style.display = "flex";
  });
});

// إغلاق المودال عند الضغط على ×
document.querySelectorAll(".modal .close").forEach(span => {
  span.addEventListener("click", () => {
    const modal = span.closest(".modal");
    modal.style.display = "none";
  });
});

// إغلاق المودال عند الضغط خارج المحتوى
document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
});

// إرسال فورم حلم
const dreamForm = document.getElementById("dreamForm");
if(dreamForm){
  dreamForm.addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("formMessage").textContent =
      "شكرًا! وصلك إيميل تأكيد. سنراجع الطلبات ونرد فقط على الحالات المختارة — خليك مؤمن بحلمك.";
    dreamForm.reset();
  });
}

// إرسال فورم الشركاء
const partnerForm = document.getElementById("partnerForm");
if(partnerForm){
  partnerForm.addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("partnerMessage").textContent =
      "تم استلام رسالتك، سنتواصل معك عند الحاجة. شكرًا لدعمك!";
    partnerForm.reset();
  });
}