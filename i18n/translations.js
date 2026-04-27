window.InviteI18n = (() => {
  const translations = {
    es: {
      meta_title: "Adriana & Daniel - 15 de Agosto",
      hero_script: "Nos casamos!",
      hero_quote: "Cultivada por la gracia de Dios,<br>la semilla de nuestro amor ha florecido.",
      hero_blessing: "Con la bendicion de Dios y de nuestros padres",
      hero_invitation: "Tienen el honor de invitarlos a su enlace matrimonial",
      scroll_hint: "Desplaza",
      date_label: "La fecha",
      date_month: "Agosto",
      date_dow: "Sabado",
      date_hour: "14:30 Hrs.",
      date_ceremony: "Ceremonia Religiosa - Iglesia",
      date_address: "Av. Juan de la Rosa casi Beijing - Cochabamba",
      program_label: "El dia",
      program_title: "Programa",
      timeline: [
        "Ceremonia Religiosa",
        "Ceremonia Civil",
        "Acto Principal",
        "Brindis",
        "Cena",
        "Corte del Pastel",
        "Ramo de la Novia",
        "Despedida"
      ],
      locations_label: "Donde nos encontramos",
      locations_title: "Ubicaciones",
      location_types: ["Ceremonia Religiosa", "Ceremonia Civil y Recepcion"],
      map_button: "Ver en mapa",
      details_label: "Informacion para nuestros invitados",
      details_title: "Detalles",
      info_titles: ["Transporte", "Regalos", "Codigo de Vestimenta"],
      info_texts: [
        "Habra transporte disponible desde el Templo de La Merced hasta la recepcion en La Casona D'Isale.<br><br>Tambien habra estacionamiento disponible en el lugar de la recepcion.",
        "Tu presencia es nuestro mejor regalo. Pero si deseas tener un detalle con nosotros tendremos:<br><br>- Lluvia de sobres<br>- Mesa de Regalos",
        "<strong>Formal / Elegante</strong><br><br>Para ellas:<br>Vestido largo o midi<br><br>Para ellos:<br>Traje oscuro"
      ],
      rsvp_label: "Nos encantaria contar contigo",
      rsvp_title: "Confirma tu Asistencia",
      rsvp_deadline: "Por favor confirma antes del <strong>5 de agosto</strong>",
      rsvp_alt: "Puedes escribirnos por WhatsApp o completar el formulario de confirmacion.",
      rsvp_adriana_label: "Confirmar con Adriana",
      rsvp_daniel_label: "Confirmar con Daniel",
      rsvp_form_label: "Confirmar por formulario",
      rsvp_note: "Al hacer clic se abrira WhatsApp o el formulario de confirmacion en tu dispositivo.",
      rsvp_adriana_href: "https://wa.me/59175847671?text=Hola%20Adriana!%20Confirmo%20mi%20asistencia%20a%20tu%20boda%20el%2015%20de%20agosto",
      rsvp_daniel_href: "https://wa.me/59176446293?text=Hola%20Daniel!%20Confirmo%20mi%20asistencia%20a%20tu%20boda%20el%2015%20de%20agosto",
      photo_title: "Un recuerdo nuestro",
      photo_alt: "Acuarela de Adriana y Daniel",
      footer_date: "Sabado - 15 de Agosto - Cochabamba, Bolivia"
    },
    en: {
      meta_title: "Adriana & Daniel - August 15",
      hero_script: "We are getting married!",
      hero_quote: "By the grace of God,<br>the seed of our love has blossomed.",
      hero_blessing: "With the blessing of God and our parents",
      hero_invitation: "Request the honor of your presence at their wedding celebration",
      scroll_hint: "Scroll",
      date_label: "The date",
      date_month: "August",
      date_dow: "Saturday",
      date_hour: "2:30 PM",
      date_ceremony: "Religious Ceremony - Church",
      date_address: "Juan de la Rosa Ave. near Beijing - Cochabamba",
      program_label: "The day",
      program_title: "Schedule",
      timeline: [
        "Religious Ceremony",
        "Civil Ceremony",
        "Main Celebration",
        "Toast",
        "Dinner",
        "Cake Cutting",
        "Bouquet Toss",
        "Farewell"
      ],
      locations_label: "Where to find us",
      locations_title: "Locations",
      location_types: ["Religious Ceremony", "Civil Ceremony and Reception"],
      map_button: "Open map",
      details_label: "Guest information",
      details_title: "Details",
      info_titles: ["Transportation", "Gifts", "Dress Code"],
      info_texts: [
        "Transportation will be available from La Merced Church to the reception at La Casona D'Isale.<br><br>Parking will also be available at the reception venue.",
        "Your presence is the best gift we could ask for. If you would still like to give us something, we will have:<br><br>- Card box<br>- Gift table",
        "<strong>Formal / Elegant</strong><br><br>For ladies:<br>Long or midi dress<br><br>For gentlemen:<br>Dark suit"
      ],
      rsvp_label: "We would love to celebrate with you",
      rsvp_title: "Confirm Your Attendance",
      rsvp_deadline: "Please confirm by <strong>August 5</strong>",
      rsvp_alt: "You can message us on WhatsApp or complete the RSVP form.",
      rsvp_adriana_label: "RSVP with Adriana",
      rsvp_daniel_label: "RSVP with Daniel",
      rsvp_form_label: "RSVP by form",
      rsvp_note: "Clicking a button will open WhatsApp or the RSVP form on your device.",
      rsvp_adriana_href: "https://wa.me/59175847671?text=Hi%20Adriana!%20I%20would%20love%20to%20confirm%20my%20attendance%20for%20your%20wedding%20on%20August%2015",
      rsvp_daniel_href: "https://wa.me/59176446293?text=Hi%20Daniel!%20I%20would%20love%20to%20confirm%20my%20attendance%20for%20your%20wedding%20on%20August%2015",
      photo_title: "A memory of us",
      photo_alt: "Watercolor portrait of Adriana and Daniel",
      footer_date: "Saturday - August 15"
    }
  };

  const supportedLanguages = ["es", "en"];

  function setText(selector, value, index = 0) {
    const nodes = document.querySelectorAll(selector);
    const node = nodes[index];
    if (node && typeof value === "string") node.textContent = value;
  }

  function setHtml(selector, value, index = 0) {
    const nodes = document.querySelectorAll(selector);
    const node = nodes[index];
    if (node && typeof value === "string") node.innerHTML = value;
  }

  function setButtonLabel(selector, value, index = 0) {
    const nodes = document.querySelectorAll(selector);
    const node = nodes[index];
    if (!node || typeof value !== "string") return;
    const textNode = [...node.childNodes].reverse().find(
      current => current.nodeType === Node.TEXT_NODE && current.textContent.trim()
    );
    if (textNode) textNode.textContent = ` ${value}`;
  }

  function setHref(selector, value, index = 0) {
    const nodes = document.querySelectorAll(selector);
    const node = nodes[index];
    if (node && typeof value === "string") node.href = value;
  }

  function resolveLanguage() {
    const params = new URLSearchParams(window.location.search);
    const forced = (params.get("lang") || "").toLowerCase();
    if (supportedLanguages.includes(forced)) return forced;

    const browser = (navigator.language || navigator.userLanguage || "es").slice(0, 2).toLowerCase();
    return supportedLanguages.includes(browser) ? browser : "es";
  }

  function apply(language) {
    const lang = supportedLanguages.includes(language) ? language : "es";
    const t = translations[lang];

    document.documentElement.lang = lang;
    document.title = t.meta_title;

    setText(".hero-script", t.hero_script);
    setHtml(".hero-quote", t.hero_quote);
    setText(".hero-blessing", t.hero_blessing, 0);
    setText(".hero-blessing", t.hero_invitation, 1);
    setButtonLabel(".scroll-hint", t.scroll_hint);

    setText(".date-label", t.date_label);
    setText(".date-month", t.date_month);
    setText(".date-dow", t.date_dow);
    setText(".date-hr", t.date_hour);
    setText(".date-ceremony", t.date_ceremony);
    setText(".date-address", t.date_address);

    setText(".section-label", t.program_label, 0);
    setText(".section-title", t.program_title, 0);

    t.timeline.forEach((label, index) => setText(".timeline .tl-event", label, index));

    setText(".section-label", t.locations_label, 1);
    setText(".section-title", t.locations_title, 1);
    t.location_types.forEach((label, index) => setText(".loc-type", label, index));
    setButtonLabel(".btn-map", t.map_button, 0);
    setButtonLabel(".btn-map", t.map_button, 1);

    setText(".section-label", t.details_label, 2);
    setText(".section-title", t.details_title, 2);
    t.info_titles.forEach((label, index) => setText(".info-card-title", label, index));
    t.info_texts.forEach((label, index) => setHtml(".info-card-text", label, index));

    setText(".rsvp-section .section-label", t.rsvp_label);
    setText(".rsvp-section .section-title", t.rsvp_title);
    setHtml(".rsvp-deadline", t.rsvp_deadline);
    setText(".rsvp-alt", t.rsvp_alt);
    setButtonLabel(".btn-wa", t.rsvp_adriana_label, 0);
    setButtonLabel(".btn-wa", t.rsvp_daniel_label, 1);
    setButtonLabel(".btn-form", t.rsvp_form_label);
    setText(".rsvp-note", t.rsvp_note);
    setHref(".btn-wa", t.rsvp_adriana_href, 0);
    setHref(".btn-wa", t.rsvp_daniel_href, 1);

    setText(".photo-section .section-title", t.photo_title);
    const photo = document.querySelector(".photo-frame img");
    if (photo) photo.alt = t.photo_alt;

    setText(".footer-date", t.footer_date);
  }

  return {
    resolveLanguage,
    apply
  };
})();
