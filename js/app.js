(function () {
  const STORAGE_LANG = "eg-lang";
  const STORAGE_THEME = "eg-theme";

  const dict = {
    fa: {
      "meta.title.home": "گروه اعتمادی | Etemadi Group",
      "meta.title.about": "درباره ما | گروه اعتمادی",
      "meta.title.contact": "تماس با ما | گروه اعتمادی",
      "meta.desc.home": "گروه تخصصی سلامت دام و طیور — دارو، واکسن، مکمل و خوراک دام و طیور",
      "nav.home": "خانه",
      "nav.about": "درباره ما",
      "nav.contact": "تماس با ما",
      "nav.menu": "منو",
      "brand.name": "ETEMADI GROUP",
      "home.tagline": "گروه تخصصی سلامت دام و طیور",
      "home.subtitle": "Animal Health — Pharmaceuticals — Vaccines — Nutrition",
      "home.sections": "بخش‌های مجموعه",
      "card.feed.title": "تولید خوراک دام و طیور",
      "card.feed.desc": "تولید خوراک تخصصی با فرمولاسیون علمی",
      "card.pharma.title": "دارو",
      "card.pharma.desc": "تحقیق، تولید و تامین داروهای دامپزشکی",
      "card.vaccine.title": "واکسن",
      "card.vaccine.desc": "توسعه و تولید واکسن‌های پیشگیرانه",
      "card.supp.title": "مکمل",
      "card.supp.desc": "مکمل‌های تغذیه‌ای برای رشد و ایمنی",
      "card.link": "ورود به سایت",
      "about.title": "درباره ما",
      "about.lead": "گروه تخصصی سلامت دام و طیور",
      "about.who.title": "گروه اعتمادی",
      "about.who.body":
        "گروه اعتمادی مجموعه‌ای تخصصی در حوزه سلامت دام و طیور است که با تمرکز بر تحقیق، تولید و تامین، زنجیره‌ای کامل از دارو، واکسن، مکمل‌های تغذیه‌ای و خوراک دام و طیور را پوشش می‌دهد. هدف ما ارتقای کیفیت سلامت دام و طیور و حمایت از تولیدکنندگان این حوزه است.",
      "about.areas.title": "حوزه‌های فعالیت",
      "about.areas.1": "تحقیق، تولید و تامین داروهای دامپزشکی",
      "about.areas.2": "توسعه و تولید واکسن‌های پیشگیرانه",
      "about.areas.3": "مکمل‌های تغذیه‌ای برای رشد و ایمنی",
      "about.areas.4": "تولید خوراک تخصصی دام و طیور با فرمولاسیون علمی",
      "about.vision.title": "چشم‌انداز",
      "about.vision.body":
        "تبدیل شدن به مرجع قابل اعتماد در سلامت دام و طیور، با تکیه بر دانش علمی، کیفیت محصول و همراهی مستمر با دامداران و تولیدکنندگان صنعت دام و طیور.",
      "contact.title": "تماس با ما",
      "contact.lead": "برای ارتباط با گروه اعتمادی از راه‌های زیر استفاده کنید",
      "contact.info": "اطلاعات تماس",
      "contact.phone": "تلفن",
      "contact.email": "ایمیل",
      "contact.address": "آدرس",
      "contact.address.value": "تهران، ایران",
      "contact.hours": "ساعات کاری",
      "contact.hours.value": "شنبه تا چهارشنبه — ۹ تا ۱۷",
      "contact.form": "ارسال پیام",
      "contact.name": "نام و نام خانوادگی",
      "contact.email.field": "ایمیل",
      "contact.phone.field": "شماره تماس",
      "contact.message": "پیام",
      "contact.submit": "ارسال پیام",
      "contact.note": "شماره و ایمیل را با اطلاعات واقعی خود جایگزین کنید.",
      "contact.success": "پیام شما ثبت شد. به‌زودی با شما تماس می‌گیریم.",
      "footer.copy": "© ۱۴۰۵ گروه اعتمادی — تمامی حقوق محفوظ است",
      "theme.toLight": "تم روشن",
      "theme.toDark": "تم تیره",
      "lang.switch": "EN",
    },
    en: {
      "meta.title.home": "Etemadi Group | Specialized Animal Health",
      "meta.title.about": "About Us | Etemadi Group",
      "meta.title.contact": "Contact Us | Etemadi Group",
      "meta.desc.home":
        "Specialized group in animal & poultry health — pharmaceuticals, vaccines, supplements and feed",
      "nav.home": "Home",
      "nav.about": "About Us",
      "nav.contact": "Contact Us",
      "nav.menu": "Menu",
      "brand.name": "ETEMADI GROUP",
      "home.tagline": "Specialized Group in Animal & Poultry Health",
      "home.subtitle": "Animal Health — Pharmaceuticals — Vaccines — Nutrition",
      "home.sections": "Our Divisions",
      "card.feed.title": "Animal & Poultry Feed",
      "card.feed.desc": "Specialized feed with scientific formulation",
      "card.pharma.title": "Pharmaceuticals",
      "card.pharma.desc": "Research, production and supply of veterinary medicines",
      "card.vaccine.title": "Vaccines",
      "card.vaccine.desc": "Development and production of preventive vaccines",
      "card.supp.title": "Supplements",
      "card.supp.desc": "Nutritional supplements for growth and immunity",
      "card.link": "Visit site",
      "about.title": "About Us",
      "about.lead": "Specialized Group in Animal & Poultry Health",
      "about.who.title": "Etemadi Group",
      "about.who.body":
        "Etemadi Group is a specialized organization in animal and poultry health. Focused on research, production and supply, we cover a complete chain of pharmaceuticals, vaccines, nutritional supplements and animal & poultry feed. Our goal is to raise health standards and support producers in this field.",
      "about.areas.title": "Areas of Activity",
      "about.areas.1": "Research, production and supply of veterinary medicines",
      "about.areas.2": "Development and production of preventive vaccines",
      "about.areas.3": "Nutritional supplements for growth and immunity",
      "about.areas.4": "Specialized animal & poultry feed with scientific formulation",
      "about.vision.title": "Vision",
      "about.vision.body":
        "To become a trusted reference in animal and poultry health, grounded in scientific knowledge, product quality and lasting partnership with farmers and producers.",
      "contact.title": "Contact Us",
      "contact.lead": "Reach Etemadi Group through the channels below",
      "contact.info": "Contact Info",
      "contact.phone": "Phone",
      "contact.email": "Email",
      "contact.address": "Address",
      "contact.address.value": "Tehran, Iran",
      "contact.hours": "Working Hours",
      "contact.hours.value": "Sat–Wed — 9:00 to 17:00",
      "contact.form": "Send a Message",
      "contact.name": "Full name",
      "contact.email.field": "Email",
      "contact.phone.field": "Phone",
      "contact.message": "Message",
      "contact.submit": "Send message",
      "contact.note": "Replace phone and email with your real contact details.",
      "contact.success": "Your message was received. We will contact you soon.",
      "footer.copy": "© 2026 Etemadi Group — All rights reserved",
      "theme.toLight": "Light",
      "theme.toDark": "Dark",
      "lang.switch": "FA",
    },
  };

  function getLang() {
    return localStorage.getItem(STORAGE_LANG) === "en" ? "en" : "fa";
  }

  function getTheme() {
    return localStorage.getItem(STORAGE_THEME) === "light" ? "light" : "dark";
  }

  function t(key) {
    const lang = getLang();
    return (dict[lang] && dict[lang][key]) || dict.fa[key] || key;
  }

  function applyLang(lang) {
    localStorage.setItem(STORAGE_LANG, lang);
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "fa" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") return;
      el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });

    const page = document.body.dataset.page || "home";
    const titleKey = "meta.title." + page;
    if (dict[lang][titleKey]) document.title = dict[lang][titleKey];

    const meta = document.querySelector('meta[name="description"]');
    if (meta && page === "home") meta.setAttribute("content", t("meta.desc.home"));

    const langBtn = document.getElementById("langToggle");
    if (langBtn) langBtn.textContent = t("lang.switch");

    updateThemeButton();
  }

  function applyTheme(theme) {
    localStorage.setItem(STORAGE_THEME, theme);
    document.documentElement.setAttribute("data-theme", theme);
    updateThemeButton();
  }

  function updateThemeButton() {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;
    const theme = getTheme();
    const nextLabel = theme === "dark" ? t("theme.toLight") : t("theme.toDark");
    btn.setAttribute("aria-label", nextLabel);
    btn.title = nextLabel;
    const icon = btn.querySelector("[data-theme-icon]");
    if (icon) {
      icon.innerHTML =
        theme === "dark"
          ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>'
          : '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>';
    }
  }

  function init() {
    applyTheme(getTheme());
    applyLang(getLang());

    const langBtn = document.getElementById("langToggle");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        applyLang(getLang() === "fa" ? "en" : "fa");
      });
    }

    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        applyTheme(getTheme() === "dark" ? "light" : "dark");
      });
    }

    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    if (toggle && links) {
      toggle.addEventListener("click", () => links.classList.toggle("open"));
    }

    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const note = document.getElementById("formNote");
        if (note) {
          note.textContent = t("contact.success");
          note.classList.add("ok");
        }
        form.reset();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
