/* Sayfadaki .target sınıfına sahip tüm öğeleri seçer. Targets değişkeni bir liste gibi döner. */
const targets = document.querySelectorAll(".target");

targets.forEach((target) => {
  console.log(target);
});

/* Bu ayar bir öğenin en az %30’u görünür olduğunda callback fonksiyonunun çalışmasını sağlar. */
const options = { threshold: 0.3 };

/* IntersectionObserver çalıştığında çağrılır. Entries, gözlemlenen öğelerle ilgili bilgileri içeren bir listedir.Her bir entry, hangi öğenin görüntüde olduğunu, ne kadarının göründüğünü vb. bilgiler içerir.console.log(entry) ile bu bilgiler konsola yazdırılır. */
const callBack = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
};

/* Gözlemciyi tanımlar.
callBack: gözlemlenen öğe belirtilen oranla görüntüye girdiğinde çalışacak fonksiyon.
options: gözlem kriterleri (örneğin threshold değeri). */
const observer = new IntersectionObserver(callBack, options);

/* Tüm .target öğeleri gözlemciye kaydedilir.Yani her biri için IntersectionObserver izlemeye başlar. */
targets.forEach((target) => {
  observer.observe(target);
});
